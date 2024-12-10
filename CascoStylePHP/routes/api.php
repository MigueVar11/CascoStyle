<?php
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

//ruta para obtener todas las categorías y productos sin autenticación
Route::get('/categories', [CategoryController::class, 'index'])->name('api.categories.index');
Route::get('/products', [ProductController::class, 'index'])->name('api.products.index');
Route::get('/categories/{category}', [CategoryController::class, 'show'])->name('api.categories.show');
Route::get('/products/{product}', [ProductController::class, 'show'])->name('api.products.show');

// Rutas de API para CRUD de categorías
Route::middleware('auth:sanctum')->group(function () {
// Rutas de API para CRUD de categorías
    Route::post('/categories', [CategoryController::class, 'store'])->name('api.categories.store');
    Route::put('/categories/{category}', [CategoryController::class, 'update'])->name('api.categories.update');
    Route::delete('/categories/{category}', [CategoryController::class, 'destroy'])->name('api.categories.destroy');

    // Rutas de API para CRUD de productos
    Route::post('/products', [ProductController::class, 'store'])->name('api.products.store');
    Route::put('/products/{product}', [ProductController::class, 'update'])->name('api.products.update');
    Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('api.products.destroy');

    // Ruta adicional para obtener productos de una categoría específica
    Route::get('/categories/{category}/products', [CategoryController::class, 'getProductsByCategory']);
});

// Ruta de autenticación generada por Sanctum
Route::post('login', [AuthController::class, 'login']);





