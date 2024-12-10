<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    // API para devolver las categorías
    public function index()
    {
        $categories = Category::all();

        // Respuesta para Postman
        if (request()->wantsJson()) {
            return response()->json($categories);
        }

        // Respuesta para Inertia.js
        return inertia('Categories/Index', [
            'categories' => $categories,
        ]);
    }
    public function create()
    {
        return view('categories.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:100',
            'slug' => 'required|string|max:100|unique:categories',
            'descripcion' => 'nullable|string',
            'prioridad' => 'integer',
            'imagen_url' => 'nullable|url',
            'activo' => 'boolean'
        ]);

        Category::create($validatedData);
        return redirect()->route('categories.index')->with('success', 'Categoría creada exitosamente.');
    }

    public function show(Category $category) //Model Binding implementado
    {
        return view('categories.show', compact('category'));
    }

    public function edit(Category $category)
    {
        return view('categories.edit', compact('category'));
    }

    public function update(Request $request, Category $category)
    {
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:100',
            'slug' => 'required|string|max:100|unique:categories,slug,' . $category->id,
            'descripcion' => 'nullable|string',
            'prioridad' => 'integer',
            'imagen_url' => 'nullable|url',
            'activo' => 'boolean'
        ]);

        $category->update($validatedData);
        return redirect()->route('categories.index')->with('success', 'Categoría actualizada exitosamente.');
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return redirect()->route('categories.index')->with('success', 'Categoría eliminada exitosamente.');
    }
}
