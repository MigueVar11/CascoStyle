<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // Definir los campos que se pueden asignar de manera masiva
    protected $fillable = [
        'category_id', // Asegúrate de que category_id está en el fillable
        'nombre',
        'slug',
        'descripcion',
        'precio' => 'float',
        'stock',
        'imagen_url',
        'marca',
        'modelo',
        'peso',
        'color',
        'disponible',
    ];
    // Relación con categorías (1 a muchos)
    public function category()
{
    return $this->belongsTo(Category::class);
}

}
