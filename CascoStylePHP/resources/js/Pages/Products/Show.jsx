import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Show = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Product Details</h2>
            <p><strong>Name:</strong> {product.nombre}</p>
            <p><strong>Description:</strong> {product.descripcion}</p>
            <p><strong>Price:</strong> ${product.precio}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <p><strong>Category:</strong> {product.category.name}</p>
            <p><strong>Brand:</strong> {product.marca}</p>
        </div>
    );
};

export default Show;
