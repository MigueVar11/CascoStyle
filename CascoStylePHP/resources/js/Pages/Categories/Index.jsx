import React from "react";
import { Head, usePage } from "@inertiajs/react";
import "bootstrap/dist/css/bootstrap.min.css";

const CategoriesPage = () => {
    const { categories } = usePage().props;

    return (
        <div className="container mt-5">
            <Head title="Categorías - Casco Style" />
            <h1 className="text-center mb-4" style={{ color: '#FF6F00', fontFamily: 'Poppins, sans-serif' }}>
                Categorías
            </h1>
            <div className="row">
                {categories.map((category) => (
                    <div className="col-md-4 col-sm-6 mb-4" key={category.id}>
                        <div className="card h-100" style={{ borderColor: '#FF6F00', borderRadius: '0.5rem', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                            {category.imagen_url ? (
                                <img
                                    src={category.imagen_url}
                                    className="card-img-top"
                                    alt={`Imagen de ${category.nombre}`}
                                    style={{ maxHeight: "150px", objectFit: "cover", borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}
                                />
                            ) : (
                                <div
                                    className="card-img-top d-flex justify-content-center align-items-center bg-light"
                                    style={{ height: "150px", backgroundColor: '#555', color: '#fff', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}
                                >
                                    <span className="text-muted">Sin imagen</span>
                                </div>
                            )}
                            <div className="card-body" style={{ backgroundColor: '#f8f9fa', color: '#333' }}>
                                <h5 className="card-title" style={{ color: '#FF6F00' }}>{category.nombre}</h5>
                                <p className="card-text">
                                    <strong>Descripción:</strong> {category.descripcion || "No disponible"}
                                </p>
                                <p className="card-text">
                                    <strong>Prioridad:</strong> {category.prioridad}
                                </p>
                                <p className="card-text">
                                    <strong>Estado:</strong> {category.activo ? "Activo" : "Inactivo"}
                                </p>
                            </div>
                            <div className="card-footer text-center" style={{ backgroundColor: '#f8f9fa' }}>
                                <a
                                    href={`/products/${category.id}`}
                                    className="text-center btn btn-primary mt-2"
                                    style={{ backgroundColor: '#FF6F00', borderColor: '#FF6F00' }}
                                >
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="banner d-flex justify-content-around align-items-center mt-4 p-3" style={{ backgroundColor: '#fef0e1', borderRadius: '0.5rem' }}>
                <a
                    href="http://127.0.0.1:8000/dashboard"
                    className="btn btn-primary text-black"
                    style={{ backgroundColor: '#ff8700', borderColor: '#FF6F00', margin: '0 10px' }}
                >
                    Dashboard
                </a>
                <a
                    href="http://127.0.0.1:8000/"
                    className="btn btn-secondary text-black"
                    style={{ backgroundColor: '#ff8700', borderColor: '#6c757d', margin: '0 10px' }}
                >
                    Inicio
                </a>
            </div>
        </div>
    );
};

export default CategoriesPage;
