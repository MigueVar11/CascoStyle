<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    protected $model = Category::class;

    public function definition()
    {
        return [
            'nombre' => $this->faker->word,
            'slug' => $this->faker->slug,
            'descripcion' => $this->faker->text,
            'prioridad' => $this->faker->numberBetween(1, 5),
            'imagen_url' => $this->faker->imageUrl(),
            'activo' => true,
        ];
    }
}

