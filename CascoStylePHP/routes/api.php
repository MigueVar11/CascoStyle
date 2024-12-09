<?php
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

// Rutas de API para CRUD de categorías (protegidas por autenticación)
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('products', ProductController::class,);
});

// Ejemplo de ruta adicional para obtener productos de una categoría específica
Route::middleware('auth:sanctum')->get('/categories/{category}/products', [CategoryController::class, 'getProductsByCategory']);

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{category}', [CategoryController::class, 'show']);

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{product}', [ProductController::class, 'show']);




