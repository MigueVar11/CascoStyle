<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Product; // Importar el modelo Product

class ContactController extends Controller
{
    public function showContactForm()
    {
        return inertia('Contacto/Index');
    }

    public function sendEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'message' => 'required|string|max:500',
            'product_id' => 'required|exists:products,id', // Validar que el producto exista
        ]);

        // Consultar el producto desde la base de datos
        $product = Product::find($request->product_id);

        try {
            // Enviar el correo con los detalles del producto
            Mail::send('emails.product_purchase', [
                'name' => $request->email,
                'product' => $product,
                'image_url' => $product->imagen_url, // Pasar la URL de la imagen al correo
            ], function ($message) use ($request) {
                $message->to($request->email)
                        ->subject('Detalles de su compra');
            });

            return response()->json(['message' => 'Correo enviado correctamente.'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
