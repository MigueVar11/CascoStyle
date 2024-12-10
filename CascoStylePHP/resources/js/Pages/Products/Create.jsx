import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
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
        const fetchCategories = async () => {
            try {
                const response = await axios.get('/api/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/products', productData);
            navigate('/products');
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <div>
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={productData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Slug:</label>
                    <input
                        type="text"
                        name="slug"
                        value={productData.slug}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="descripcion"
                        value={productData.descripcion}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="precio"
                        value={productData.precio}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Stock:</label>
                    <input
                        type="number"
                        name="stock"
                        value={productData.stock}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <select
                        name="category_id"
                        value={productData.category_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default Create;
