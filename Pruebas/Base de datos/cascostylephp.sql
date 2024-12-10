-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-12-2024 a las 04:13:19
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cascostylephp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `prioridad` int(11) NOT NULL DEFAULT 1,
  `imagen_url` varchar(255) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `nombre`, `slug`, `descripcion`, `prioridad`, `imagen_url`, `activo`, `created_at`, `updated_at`) VALUES
(1, 'Cascos Jet', 'casco-para-jet', 'Cascos de alta calidad para motociclistas jet.', 1, 'https://ls2helmets.com/images/lifestyle/airflow-ii/394F5D-F5CFD9-1710959212.webp', 1, '2024-11-12 04:00:05', '2024-11-12 04:00:05'),
(2, 'Cascos abatibles', 'casco-para-moto-abatibles', 'Cascos abatibles', 2, 'https://bxrepsol.s3.eu-west-1.amazonaws.com/static/2022/08/09133858/Shoei-Neotec2-mood3-1.jpg', 1, '2024-11-12 04:02:40', '2024-11-12 04:02:40'),
(13, 'Cascos integrales', 'casco-para-moto-integrales', 'Cascos Integrales', 3, 'https://soymotero.net/wp-content/uploads/2023/07/NDP_KAPPA_KV56_25.jpg', 1, '2024-11-12 04:28:27', '2024-11-12 04:28:27'),
(14, 'Multiproposito', 'casco-para-moto-multiproposito', 'Cascos multiproposito', 4, 'https://motorising.cl/wp-content/uploads/2024/05/X_fogcity-easy-1oxs9476.jpg', 1, '2024-12-08 09:15:34', '2024-12-08 09:15:34'),
(15, 'Casco Motocross', 'Casco-Motrocross', 'Casco para motocross al extremo', 5, 'https://i.pinimg.com/originals/f4/d1/98/f4d198dfd392839e2ab10c931020729d.jpg', 1, '2024-12-08 05:04:19', '2024-12-08 05:04:19'),
(16, 'Cascos Abiertos', 'Casco-Abierto', 'Casco abierto para mejorar tu estilo', 6, 'https://m.media-amazon.com/images/I/71VVbUhgczL._AC_UF894,1000_QL80_.jpg', 1, '2024-12-08 05:08:41', '2024-12-08 05:08:41'),
(17, 'Casco Clasicos', 'cascos_clasicos', 'Cascos antiguos, de coleccion', 7, 'https://hondamaquina.com/imagenes/cascos-clasicos.jpg.webp', 1, '2024-12-10 05:39:50', '2024-12-10 06:41:43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(7, '0001_01_01_000000_create_users_table', 1),
(8, '0001_01_01_000001_create_cache_table', 1),
(9, '0001_01_01_000002_create_jobs_table', 1),
(10, '2024_11_07_022929_create_categories_table', 1),
(11, '2024_11_07_022943_create_products_table', 1),
(12, '2024_11_14_024019_create_personal_access_tokens_table', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 5, 'token-name', '7eb18978245da2b50f3ea0d2cc48a73475ae333e18f0b84d0e1c10d5a89d3f53', '[\"*\"]', NULL, NULL, '2024-12-10 04:17:18', '2024-12-10 04:17:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `slug` varchar(150) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` float(10,2) NOT NULL,
  `stock` int(11) NOT NULL DEFAULT 0,
  `imagen_url` varchar(255) DEFAULT NULL,
  `marca` varchar(100) DEFAULT NULL,
  `modelo` varchar(100) DEFAULT NULL,
  `peso` decimal(5,2) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `disponible` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `category_id`, `nombre`, `slug`, `descripcion`, `precio`, `stock`, `imagen_url`, `marca`, `modelo`, `peso`, `color`, `disponible`, `created_at`, `updated_at`) VALUES
(1, 13, 'Casco Moto X1', 'casco-moto-x1', 'Casco de moto de alta seguridad y comodidad.', 199.99, 50, 'https://auteco.vtexassets.com/arquivos/ids/334079/casco_integral_axxes_negro_mate_foto1.jpg?v=638606467129200000', 'Agb', 'X1', 1.50, 'Negro', 1, '2024-11-12 04:05:28', '2024-11-12 04:05:28'),
(3, 15, 'Casco Motocroos F1X', 'casco-de-motocross', 'Casco de motocross de alta seguridad y diseño aerodinámico.', 249.99, 30, 'https://www.americanmotos.com/cdn/shop/files/V1ToxsykROJO_2.jpg?v=1699505574', 'MotoX', 'MX2024', 1.30, 'Rojo', 1, '2024-11-12 04:09:52', '2024-11-12 04:09:52'),
(24, 2, 'Casco abatibles', 'casco-de-abatibles', 'Casco abatibles de alta seguridad y diseño aerodinámico.', 230.00, 10, 'https://adrianstore.com.co/wp-content/uploads/2023/08/atom1.jpg', 'Agv', 'Mxs11', 2.30, 'Azul', 1, '2024-11-12 04:31:21', '2024-11-12 04:31:21'),
(25, 14, 'casco multiprpoposito', 'casco-de-multiprosito', 'Casco multipropósito de alta seguridad,flexible', 100.00, 20, 'https://cascoscpb.com/wp-content/uploads/2024/02/0003_SHAFTPRO-MX.370-DV.OG-LINE.N.M.VR_.LATERAL.jpg', 'Shaft', 'Rff11', 2.50, 'Gris', 1, NULL, NULL),
(26, 2, 'Casco Abatible Shaft', '\'casco-de-abatible-2\'', 'Casco de larga durabilidad, iso 10202', 2000.00, 2, 'https://direlimotos.com/wp-content/uploads/2021/04/FF325-SOLID-STROBE-BRILLO.png', 'Ls2', 'Ls1212', 12.00, 'Negro', 1, NULL, NULL),
(27, 15, 'Casco Motocross VM23', 'Casco-Motocross-2', 'Casco de motocroos, fibra de carbono con alto relieve', 32999.00, 2, 'https://www.americanmotos.com/cdn/shop/files/CASCOFOXV1LUXNARANJANEGRO_2.jpg?v=1721771460', 'FOX', 'FV121', 2.00, 'Negro Mate - Naranja', 1, '2024-12-08 05:14:22', '2024-12-08 05:14:22'),
(28, 13, 'Casco Integral Mp12', 'Casco-Integral2', 'Casco con alta tecnologia de proteccion, incluye visor', 1002.00, 12, 'https://casconline.com.co/wp-content/uploads/2023/10/CASCO-INTEGRAL-AGV-K-1S-SOLELUNA-2018-AM-M-1.png', 'AGV', 'K-1S', 2.00, 'Azul-Rey', 1, '2024-12-08 05:22:06', '2024-12-08 05:22:06'),
(29, 14, 'Casco Multiproposito MX-300', 'Casco-Multriproposito2', 'Casco aerodinámico, con un estilo unico y innovador', 2001.00, 4, 'https://http2.mlstatic.com/D_NQ_NP_816507-MCO74579794724_022024-O.webp', 'Shaft', 'MX-300', 3.00, 'Blanco-Negro', 1, '2024-12-08 05:26:26', '2024-12-08 05:26:26'),
(30, 1, 'Casco Jet MH232', 'Casco-Jet2', 'Casco liviano, de alta proteccion y durabilidad', 2000.00, 3, 'https://www.fullmoto.com/media/catalog/product/cache/f0cefe00465e6f1a4a7d2471e6c0f678/c/a-14126-7320-14126-7320/casco-hjc-fg-jet-balin-blanco-negro-brillante-rojo.jpg', 'HJC', 'Hc122', 2.40, 'Blanco-Negro', 1, '2024-12-08 05:31:19', '2024-12-08 05:31:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('R9iOl6KaDTicBbPuBcJB7nU4Vr37lycpDJAHfnsw', 4, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiS1ZjRjltcVBhMU94cWdjQzZnSUhlY0l5U2dnaG4wN25XSzg4b2dNdiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXNoYm9hcmQiO31zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aTo0O30=', 1733800287),
('X2ryWGZ55zxpnIQKrboq8Lq88zBDKwvFjDZSDZhT', NULL, '127.0.0.1', 'PostmanRuntime/7.43.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZk44VzNxR25ydFZNaGU2SmU5WkoxdTM5UEhZVThGMFA1VEdpY1ljZCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvY2F0ZWdvcmllcyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1733795509);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Test User', 'test@example.com', '2024-11-12 03:36:00', '$2y$12$tWdTr56yO9a0O.nIvfzPyeGDZF5YwLKGUd5SZnH1IEqi0turH7CFa', 'g46iMzepR0', '2024-11-12 03:36:02', '2024-11-12 03:36:02'),
(3, 'Miguel', 'miguelvamo11@gmail.com', NULL, '$2y$12$ljdujOq3WcoelosMxQ9L.ua/5niuKJqlPdpqcZUBqVvZTDsAXZV9i', NULL, '2024-11-19 07:58:52', '2024-11-19 07:58:52'),
(4, 'Juliana', 'julia12121@hotmail.com', NULL, '$2y$12$N2iFxgOFaXDwPuZo1m6oseC94i8xFA5sb2ZahWRdpt9ZEtBRqp9FG', 'FRCy19jq7A5SMDmaF8Kiz0EnokHGvyAyFMMbhQlWcCKEUtOGeZDrTxi1p7CD', '2024-11-19 08:00:59', '2024-11-19 08:00:59'),
(5, 'Miguel Prueba', 'miguelprueba@gmail.com', NULL, '$2y$12$76D914ynslzbBUA3RQUEiOJQyeu5uBvy43.BWfhyM23ZvUDoJAEwq', NULL, '2024-12-10 04:17:04', '2024-12-10 04:17:04');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indices de la tabla `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `products_slug_unique` (`slug`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
