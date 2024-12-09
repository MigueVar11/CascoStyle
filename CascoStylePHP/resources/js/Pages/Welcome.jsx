import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "tailwindcss/tailwind.css";

const WelcomePage = () => {
    const [cart, setCart] = useState([]);
    const [products] = useState([
        {
            id: 1,
            name: "Agv K1",
            price: 100,
            image: "https://www.cascoscertificados.com.co/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-13-at-6.39.40-PM.jpeg",
        },
        {
            id: 2,
            name: "Fox V1",
            price: 200,
            image: "https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2022/06/Casco-jet-eltop-tucano-urbano-7-scaled.jpg",
        },
        {
            id: 3,
            name: "Shaft Mx302",
            price: 300,
            image: "https://upload.wikimedia.org/wikipedia/commons/9/95/MotoX_racing03_edit.jpg",
        },
    ]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    const handleRemoveFromCart = (product) => {
        setCart(cart.filter((item) => item.id !== product.id));
    };

    return (
        <div className="bg-gray-900 text-white h-screen overflow-y-scroll">
            <header className="flex justify-between items-center p-4 bg-gray-800">
                <div className="flex items-center">
                    <img
                        src="https://img.freepik.com/vector-premium/diseno-logo-cascos-motocross_102026-128.jpg"
                        alt="Logo"
                        className="w-12 h-12 rounded-full"
                    />
                    <h1 className="text-5xl font-bold ml-4 text-orange-500">
                        CascoStyle
                    </h1>
                </div>
                <nav className="flex items-center">
                    <ul className="flex space-x-4 ml">
                        <li>
                            {" "}
                            <a
                                href="http://127.0.0.1:8000/categories"
                                className="text-2xl font-bold ml-4 text-orange-500 hover:text-gray-300 flex items-center"
                            >
                                {" "}
                                <i className="fas fa-list-alt mr-2"></i>{" "}
                                Categorias{" "}
                            </a>{" "}
                        </li>{" "}
                        <li>
                            {" "}
                            <a
                                href="http://127.0.0.1:8000/products"
                                className="text-2xl font-bold ml-4 text-orange-500 hover:text-gray-300 flex items-center"
                            >
                                {" "}
                                <i className="fas fa-box mr-2"></i>{" "}
                                Productos{" "}
                            </a>{" "}
                        </li>{" "}
                        <li>
                            <a
                                href="#"
                                className="text-2xl font-bold ml-4 text-orange-500 hover:text-gray-300"
                            >
                                Contacto
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                href="http://127.0.0.1:8000/login"
                                className="text-2xl font-bold ml-4 text-orange-500 hover:text-gray-300 flex items-center"
                            >
                                {" "}
                                <i className="fas fa-sign-in-alt mr-2"></i>{" "}
                                Login{" "}
                            </a>{" "}
                        </li>{" "}
                        <li>
                            {" "}
                            <a
                                href="http://127.0.0.1:8000/register"
                                className="text-2xl font-bold ml-4 text-orange-500 hover:text-gray-300 flex items-center"
                            >
                                {" "}
                                <i className="fas fa-user-plus mr-2"></i>{" "}
                                Registro{" "}
                            </a>{" "}
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <section
                    className="bg-cover bg-center h-screen"
                    style={{
                        backgroundImage:
                            "url(https://s7g10.scene7.com/is/image/ktm/566378_Team%20Shoot%20RB%20KTM%20SX_MX%202024_Header:Medium?wid=1838&hei=1379&dpr=off)",
                    }}
                >
                    <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20">
                        <h1 className="text-7xl font-bold mb-4 text-black">
                            Bienvenidos a CascoStyle{" "}
                        </h1>
                        <p className="text-3xl font-bold mb-4 text-black">
                            La mejor tienda de cascos de motocicleta{" "}
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => window.location.href = 'http://127.0.0.1:8000/categories'} > Explorar categorías </button>
                    </div>
                </section>
                <section className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20">
                    <h2 className="text-3xl font-bold mb-4">Destacados</h2>
                    <div className="flex flex-wrap -mx-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="w-full md:w-1/2 xl:w-1/3 p-4"
                            >
                                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                                <h3 className="text-2xl font-bold mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-xl mb-4">{product.price}</p>
                                <button
                                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20">
                    <h2 className="text-3xl font-bold mb-4">Testimonios</h2>
                    <div className="flex flex-wrap -mx-4">
                        {[1, 2, 3].map((index) => (
                            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                                <p className="text-xl mb-4">
                                    Fue genial la experiencia de compra
                                </p>
                                <h3 className="text-2xl font-bold mb-2">
                                    Cliente {index}
                                </h3>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <footer className="bg-gray-700 text-white p-4 text-bg-dark">
                <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20">
                    <h2 className="text-3xl font-bold mb-4">Contacto</h2>
                    <p className="text-xl mb-4">
                        Casco Style
                        <br />
                        Tel : 312322125 - 314556789
                        <br />
                        Email : CascoStyleManizales@gmail.com
                        <br />
                        Manizales,Caldas
                    </p>
                    <ul className="flex flex-wrap -mx-4">
                        <li className="w-full md:w-1/2 xl:w-1/3 p-4">
                            <a
                                href="#"
                                className="text-white hover:text-gray-300"
                            >
                                Política de privacidad
                            </a>
                        </li>
                        <li className="w-full md:w-1/2 xl:w-1/3 p-4">
                            <a
                                href="#"
                                className="text-white hover:text-gray-300"
                            >
                                Términos y condiciones
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
            <div className="fixed bottom-0 right-0 p-4">
                <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => console.log(cart)}
                >
                    Ver carrito ({cart.length})
                </button>
            </div>
        </div>
    );
};

export default WelcomePage;
