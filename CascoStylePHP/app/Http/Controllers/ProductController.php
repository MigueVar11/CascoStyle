<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Routing\Controller;

class ProductController extends Controller
{
    // Renderiza la vista con Inertia para los productos
    public function index()
    {
        // Obtener todos los productos con su categoría relacionada
        $products = Product::with('category')->get();

        // Respuesta para solicitudes JSON (Postman)
        if (request()->wantsJson()) {
            return response()->json($products);
        }

        // Respuesta para Inertia.js
        return inertia('Products/Index', [
            'products' => $products,
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        return view('products.create', compact('categories'));
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:150',
            'slug' => 'required|string|max:150|unique:products',
            'descripcion' => 'nullable|string',
            'precio' => 'required|numeric',
            'stock' => 'integer',
            'imagen_url' => 'nullable|url',
            'marca' => 'nullable|string|max:100',
            'modelo' => 'nullable|string|max:100',
            'peso' => 'nullable|numeric',
            'color' => 'nullable|string|max:50',
            'disponible' => 'boolean',
            'category_id' => 'required|exists:categories,id'
        ]);

        Product::create($validatedData);
        return redirect()->route('products.index')->with('success', 'Producto creado exitosamente.');
    }

    public function show($slug)
    {
       // Buscar el producto por su slug
    $product = Product::where('slug', $slug)->firstOrFail();

    // Responder con Inertia
    return inertia('Products/Show', [
        'product' => $product,
    ]);
}

    public function edit(Product $product)
    {
        $categories = Category::all();
        return view('products.edit', compact('product', 'categories'));
    }

    public function update(Request $request, Product $product)
    {
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:150',
            'slug' => 'required|string|max:150|unique:products,slug,' . $product->id,
            'descripcion' => 'nullable|string',
            'precio' => 'required|numeric',
            'stock' => 'integer',
            'imagen_url' => 'nullable|url',
            'marca' => 'nullable|string|max:100',
            'modelo' => 'nullable|string|max:100',
            'peso' => 'nullable|numeric',
            'color' => 'nullable|string|max:50',
            'disponible' => 'boolean',
            'category_id' => 'required|exists:categories,id'
        ]);

        $product->update($validatedData);
        return redirect()->route('products.index')->with('success', 'Producto actualizado exitosamente.');
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('products.index')->with('success', 'Producto eliminado exitosamente.');
    }
}
