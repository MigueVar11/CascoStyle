import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState({
        nombre: '',
        slug: '',
        descripcion: '',
        precio: '',
        stock: 0,
        imagen_url: '',
        marca: '',
        modelo: '',
        peso: '',
        color: '',
        disponible: true,
        category_id: '',
    });
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/products/${id}`);
                setProductData(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get('/api/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchProduct();
        fetchCategories();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/products/${id}`, productData);
            navigate('/products');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                {/* Similar fields as Create.jsx */}
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Edit;
