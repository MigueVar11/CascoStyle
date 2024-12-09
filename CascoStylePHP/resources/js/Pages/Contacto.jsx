import React, { useState } from 'react';

const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviado(true);
        setNombre('');
        setEmail('');
        setMensaje('');
    };

    return (
        <div className="max-w-3xl mx-auto p-4 md:p-6 lg:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Contacto</h1>
            <p className="text-gray-600 mb-8">¿Tienes alguna pregunta o comentario? ¡No dudes en contactarnos!</p>
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                    <label className="block text-gray-600" htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="block w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-gray-600" htmlFor="email">Correo electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-gray-600" htmlFor="mensaje">Mensaje:</label>
                    <textarea
                        id="mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        className="block w-full p-2 border border-gray-300 rounded-lg h-32"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Enviar
                </button>
                {enviado && (
                    <p className="text-green-600 mt-4">Mensaje enviado con éxito. ¡Gracias por contactarnos!</p>
                )}
            </form>
        </div>
    );
};

export default Contacto;
