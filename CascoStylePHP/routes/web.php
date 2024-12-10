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



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

//Las rutas para el frontend permitirán que los usuarios vean la lista de productos, la vista de un solo producto y las categorías sin necesidad de autenticación

//CRUD categorias

// Ruta para Inertia.js y API JSON
Route::get('/api/categories', [CategoryController::class, 'index'])->name('categories.index');

// Ruta para ver una categoría específica
Route::get('/api/categories/{category}', [CategoryController::class, 'show'])->name('categories.show');

// Crear una nueva categoría
Route::post('/api/categories', [CategoryController::class, 'store'])->name('categories.store');

// Actualizar una categoría
Route::put('/api/categories/{category}', [CategoryController::class, 'update'])->name('categories.update');

// Eliminar una categoría
Route::delete('/api/categories/{category}', [CategoryController::class, 'destroy'])->name('categories.destroy');


//CRUD PRODUCTOS

// Ruta para ver todos los productos
Route::get('api/products', [ProductController::class, 'index'])->name('products.index');

// Ruta para ver un producto específico
Route::get('/api/products/{product}', [ProductController::class, 'show'])->name('products.show');

// Crear un nuevo producto
Route::post('/api/products', [ProductController::class, 'store'])->name('products.store');

// Actualizar un producto
Route::put('/api/products/{product}', [ProductController::class, 'update'])->name('products.update');

// Eliminar un producto
Route::delete('/api/products/{product}', [ProductController::class, 'destroy'])->name('products.destroy');

// productos slug
Route::get('/products/{slug}', [ProductController::class, 'show'])->name('products.show');

// Ruta para mostrar el formulario de contacto
Route::get('/contacto', [ContactController::class, 'showContactForm'])->name('contact.show');
Route::post('/send-email', [ContactController::class, 'sendEmail'])->name('send.email');

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');

