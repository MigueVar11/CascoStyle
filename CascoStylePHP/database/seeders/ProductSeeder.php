<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;
use Faker\Factory as Faker;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        // Crear 20 productos aleatorios
        foreach (range(1, 20) as $index) {
            Product::create([
                'category_id' => Category::inRandomOrder()->first()->id, // Selecciona una categoría aleatoria
                'nombre' => $faker->word, // Nombre aleatorio
                'slug' => $faker->slug, // Slug aleatorio
                'descripcion' => $faker->paragraph, // Descripción aleatoria
                'precio' => $faker->randomFloat(2, 50, 500), // Precio aleatorio entre 50 y 500
                'stock' => $faker->numberBetween(0, 100), // Stock aleatorio entre 0 y 100
                'imagen_url' => $faker->imageUrl, // URL de una imagen aleatoria
                'marca' => $faker->word, // Marca aleatoria
                'modelo' => $faker->word, // Modelo aleatorio
                'peso' => $faker->randomFloat(2, 0.5, 5), // Peso aleatorio entre 0.5 y 5 kg
                'color' => $faker->colorName, // Color aleatorio
                'disponible' => $faker->boolean, // Estado de disponibilidad aleatorio
            ]);
        }
    }
}
