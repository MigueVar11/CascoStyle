<?php

return [

    'paths' => ['api/*'], // Habilita CORS solo para rutas API

    'allowed_methods' => ['*'], // Permitir todos los métodos HTTP (GET, POST, PUT, DELETE)

    'allowed_origins' => ['http://127.0.0.1:5173'], // Agrega el origen de tu frontend (Vite)

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // Permitir todos los encabezados

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];
