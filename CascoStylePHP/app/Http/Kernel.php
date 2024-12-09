<?php

class Kernel extends \Illuminate\Foundation\Http\Kernel
{
    protected $middlewareGroups = [
        'api' => [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
        'web' => [
            // Otros middlewares
            \App\Http\Middleware\HandleInertiaRequests::class,
            \App\Http\Middleware\CorsMiddleware::class,
        ],
    ];
}

