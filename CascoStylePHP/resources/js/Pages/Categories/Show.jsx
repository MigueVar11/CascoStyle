import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Show = () => {
    const { id } = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`/api/categories/${id}`);
                setCategory(response.data);
            } catch (error) {
                console.error('Error fetching category:', error);
            }
        };
        fetchCategory();
    }, [id]);

    if (!category) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Category Details</h2>
            <p><strong>Name:</strong> {category.name}</p>
            <p><strong>Description:</strong> {category.description}</p>
        </div>
    );
};

export default Show;
