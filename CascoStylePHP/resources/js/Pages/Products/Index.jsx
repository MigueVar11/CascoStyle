import React from "react";
import { usePage } from "@inertiajs/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css"; // Importa el CSS personalizado

const ProductsPage = () => {
    const { products } = usePage().props;

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Listado de Productos</h1>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card h-100 product-card">
                            {product.imagen_url ? (
                                <img
                                    src={product.imagen_url}
                                    className="card-img-top product-img"
                                    alt={`Imagen de ${product.nombre}`}
                                />
                            ) : (
                                <div
                                    className="card-img-top d-flex justify-content-center align-items-center bg-light"
                                    style={{
                                        height: "150px",
                                        backgroundColor: "#555",
                                        color: "#fff",
                                    }}
                                >
                                    <span className="text-muted">
                                        Sin imagen
                                    </span>
                                </div>
                            )}
                            <div className="card-body">
                                <h5 className="card-title">{product.nombre}</h5>
                                <p className="card-text">
                                    <strong>Categoría:</strong>{" "}
                                    {product.category
                                        ? product.category.nombre
                                        : "Sin categoría"}
                                </p>
                                <p className="card-text">
                                    <strong>Precio:</strong>{" "}
                                    {typeof product.precio === "number"
                                        ? `$${product.precio.toFixed(2)}`
                                        : "No disponible"}
                                </p>
                                <p className="card-text">
                                    <strong>Stock:</strong> {product.stock}
                                    <strong>  - Id:</strong> {product.id}
                                </p>
                                <p className="card-text">
                                    <strong>Descripción:</strong>{" "}
                                    {product.descripcion || "No disponible"}
                                </p>
                                <p className="card-text">
                                    <strong>Marca: </strong>{" "}
                                    {product.marca || "No disponible"}
                                    <strong> - Color </strong>{" "}
                                    {product.color || "No disponible"}
                                    <strong> - Peso </strong>{" "}
                                    {product.peso || "No disponible"}
                                </p>
                            </div>
                            <div className="card-footer text-center">
                                {" "}
                                {product.disponible ? (
                                    <a
                                        href="http://127.0.0.1:8000/contacto"
                                        className="btn btn-primary"
                                        style={{
                                            backgroundColor: "#FF6F00",
                                            borderColor: "#FF6F00",
                                        }}
                                    >
                                        {" "}
                                        Comprar{" "}
                                    </a>
                                ) : (
                                    <span className="text-muted">
                                        No disponible
                                    </span>
                                )}{" "}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
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

export default ProductsPage;
