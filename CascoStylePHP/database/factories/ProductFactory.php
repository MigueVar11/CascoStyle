<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition()
    {
        return [
            'category_id' => Category::factory(),
            'nombre' => $this->faker->word,
            'slug' => $this->faker->slug,
            'descripcion' => $this->faker->text,
            'precio' => $this->faker->randomFloat(2, 50, 500),
            'stock' => $this->faker->numberBetween(0, 100),
            'imagen_url' => $this->faker->imageUrl(),
            'marca' => $this->faker->word,
            'modelo' => $this->faker->word,
            'peso' => $this->faker->randomFloat(2, 0.5, 5),
            'color' => $this->faker->safeColorName,
            'disponible' => true,
        ];
    }
}
