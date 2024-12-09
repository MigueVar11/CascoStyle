<!DOCTYPE html>
<html>
<head>
    <title>Detalles de su compra</title>
</head>
<body>
    <h1>¡Gracias por tu compra, {{ $name }}!</h1>
    <p>Aquí están los detalles del producto que adquiriste:</p>
    <ul>
        <li><strong>Nombre:</strong> {{ $product->nombre }}</li>
        <li><strong>Descripción:</strong> {{ $product->descripcion }}</li>
        <li><strong>Precio:</strong> ${{ $product->precio }}</li>
        <li><strong>Marca:</strong> {{ $product->marca }}</li>
        <li><strong>Modelo:</strong> {{ $product->modelo }}</li>
    </ul>
    <p>Imagen del producto:</p>
    <img src="{{ $image_url }}" alt="{{ $product->nombre }}" style="max-width: 300px;">
    <p>Gracias por elegirnos.</p>
    <p>CascoStyle</p>

</body>
</html>
