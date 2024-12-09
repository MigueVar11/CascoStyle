<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        // Obtener productos con su categoría relacionada
        $products = Product::with('category')->get();

        // Enviar los datos a través de Inertia
        return Inertia::render('Products/Index', [
            'products' => $products
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

    public function show(Product $product) //Model Binding implementado
    {
        return view('products.show', compact('product'));
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
