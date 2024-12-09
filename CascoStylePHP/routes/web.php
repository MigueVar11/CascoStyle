<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ContactController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/contacto', [ContactController::class, 'showContactForm'])->name('contact.show');
Route::post('/send-email', [ContactController::class, 'sendEmail'])->name('send.email');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

//Las rutas para el frontend permitirán que los usuarios vean la lista de productos, la vista de un solo producto y las categorías sin necesidad de autenticación

//CRUD categorias

// Ruta para ver todas las categorías
Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');
// Ruta para ver una categoría específica
Route::get('/categories/{category}', [CategoryController::class, 'show'])->name('categories.show');

// Crear una nueva categoría
Route::post('/categories', [CategoryController::class, 'store'])->name('categories.store');

// Actualizar una categoría
Route::put('/categories/{category}', [CategoryController::class, 'update'])->name('categories.update');

// Eliminar una categoría
Route::delete('/categories/{category}', [CategoryController::class, 'destroy'])->name('categories.destroy');


//CRUD productos

// Ruta para ver todos los productos
Route::get('/products', [ProductController::class, 'index'])->name('products.index');

// Ruta para ver un producto específico
Route::get('/products/{product}', [ProductController::class, 'show'])->name('products.show');

// Crear un nuevo producto
Route::post('/products', [ProductController::class, 'store'])->name('products.store');

// Actualizar un producto
Route::put('/products/{product}', [ProductController::class, 'update'])->name('products.update');

// Eliminar un producto
Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('products.destroy');



Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');

