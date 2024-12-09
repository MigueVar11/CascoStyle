<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    // Definir los campos que se pueden asignar de manera masiva
    protected $fillable = [
        'nombre',
        'slug',
        'descripcion',
        'prioridad',
        'imagen_url',
        'activo',
    ];

    // Relación con productos (1 a muchos)
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
