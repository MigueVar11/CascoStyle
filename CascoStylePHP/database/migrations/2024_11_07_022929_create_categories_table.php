<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id(); // ID de la categoría
            $table->string('nombre', 100); // Nombre de la categoría
            $table->string('slug', 100)->unique(); // Slug para URL amigable
            $table->text('descripcion')->nullable(); // Descripción de la categoría
            $table->integer('prioridad')->default(1); // Prioridad para el orden de las categorías
            $table->string('imagen_url')->nullable(); // URL de una imagen representativa de la categoría
            $table->boolean('activo')->default(true); // Estado de la categoría (activa o inactiva)
            $table->timestamps(); // Timestamps para created_at y updated_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('categories');
    }
};
