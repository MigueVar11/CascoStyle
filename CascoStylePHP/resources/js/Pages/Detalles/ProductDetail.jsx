import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
    const { slug } = useParams(); // Obtiene el slug desde la URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Obtiene los detalles del producto por slug
        axios
            .get(`/api/products/${slug}`)
            .then((response) => setProduct(response.data))
            .catch((error) => console.error(error));
    }, [slug]);

    if (!product) return <div>Cargando...</div>; // Muestra un mensaje mientras carga

    return (
        <div className="container mt-5">
            <h1>{product.name}</h1>
            <img
                src={product.image_url}
                alt={product.name}
                className="img-fluid mb-3"
            />
            <p>{product.description}</p>
            <p>
                <strong>Precio:</strong> ${product.price}
            </p>
        </div>
    );
};

export default ProductDetail;
