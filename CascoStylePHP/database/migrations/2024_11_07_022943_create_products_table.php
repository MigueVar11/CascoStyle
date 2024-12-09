<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id(); // ID del producto
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade'); // ID de la categoría relacionada
            $table->string('nombre', 150); // Nombre del producto
            $table->string('slug', 150)->unique(); // Slug para URL amigable
            $table->text('descripcion')->nullable(); // Descripción del producto
            $table->decimal('precio', 10, 2); // Precio del producto
            $table->integer('stock')->default(0); // Cantidad de unidades en stock
            $table->string('imagen_url')->nullable(); // URL de la imagen del producto
            $table->string('marca', 100)->nullable(); // Marca del producto
            $table->string('modelo', 100)->nullable(); // Modelo del producto
            $table->decimal('peso', 5, 2)->nullable(); // Peso del producto en kg
            $table->string('color', 50)->nullable(); // Color del producto
            $table->boolean('disponible')->default(true); // Estado de disponibilidad del producto
            $table->timestamps(); // Timestamps para created_at y updated_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('products');
    }
};
