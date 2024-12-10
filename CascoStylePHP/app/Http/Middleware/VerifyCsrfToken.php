<?php
namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * Las URIs que deben excluirse de la verificación CSRF.
     *
     * @var array<int, string>
     */
    protected $except = [
        '/send-email',
        'api/*' // Excluir todas las rutas que comiencen con 'api/'
         // Excluye esta ruta de la validación CSRF
    ];


}
