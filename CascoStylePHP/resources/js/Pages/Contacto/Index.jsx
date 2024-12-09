import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        message: "",
        product_id: "",
    });
    const [responseMessage, setResponseMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content");

            const response = await axios.post(
                "http://127.0.0.1:8000/send-email",
                formData,
                {
                    headers: {
                        "X-CSRF-TOKEN": csrfToken, // Token CSRF
                    },
                }
            );
            setResponseMessage(response.data.message);
        } catch (error) {
            setErrorMessage(
                error.response?.data?.error ||
                    "Ocurrió un error al enviar el correo"
            );
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
            <h1 className="text-3xl text-casestyle-blue font-bold mb-4">
                Contacto de compra
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-casestyle-blue focus:border-casestyle-blue sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Mensaje:
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-casestyle-blue focus:border-casestyle-blue sm:text-sm"
                    ></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Producto ID:
                    </label>
                    <input
                        type="text"
                        name="product_id"
                        value={formData.product_id}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-casestyle-blue focus:border-casestyle-blue sm:text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white"
                    style={{
                        backgroundColor: "#007bff",
                        borderColor: "#007bff",
                    }} // Asegura que el botón tenga un color sólido
                >
                    Enviar
                </button>
            </form>
            {responseMessage && (
                <p className="text-sm text-green-600 mt-4">{responseMessage}</p>
            )}
            {errorMessage && (
                <p className="text-sm text-red-600 mt-4">{errorMessage}</p>
            )}
            <br />
            <div
                className="banner d-flex justify-content-around align-items-center mt-4 p-3"
                style={{ backgroundColor: "#fef0e1", borderRadius: "0.5rem" }}
            >
                <a
                    href="http://127.0.0.1:8000/dashboard"
                    className="btn btn-primary text-black"
                    style={{
                        backgroundColor: "#ff8700",
                        borderColor: "#FF6F00",
                    }}
                >
                    Dashboard
                </a>
                <a
                    href="http://127.0.0.1:8000/"
                    className="btn btn-secondary text-black"
                    style={{
                        backgroundColor: "#ff8700",
                        borderColor: "#6c757d",
                    }}
                >
                    Inicio
                </a>
            </div>
        </div>
    );
};

export default ContactForm;
