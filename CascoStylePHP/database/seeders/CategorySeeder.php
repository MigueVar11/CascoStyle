<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use Faker\Factory as Faker;

class CategorySeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        // Crear 10 categorías aleatorias
        foreach (range(1, 10) as $index) {
            Category::create([
                'nombre' => $faker->word, // Nombre aleatorio
                'slug' => $faker->slug, // Slug aleatorio
                'descripcion' => $faker->paragraph, // Descripción aleatoria
                'prioridad' => $faker->numberBetween(1, 5), // Prioridad aleatoria entre 1 y 5
                'imagen_url' => $faker->imageUrl, // URL de una imagen aleatoria
                'activo' => $faker->boolean, // Estado aleatorio (activo o inactivo)
            ]);
        }
    }
}
