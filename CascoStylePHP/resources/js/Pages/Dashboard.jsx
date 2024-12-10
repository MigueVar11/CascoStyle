import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import axios from "axios";

//INICIO DE CRUD EN LA PÁGINA DE DASHBOARD

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("ventas");
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [newCategory, setNewCategory] = useState({ nombre: "", slug: "", descripcion: "", prioridad: 0, imagen_url: "", activo: false });
    const [newProduct, setNewProduct] = useState({ nombre: "", slug: "", descripcion: "", precio: 0, categoria_id: "", imagen_url: "", activo: false });
    const [editingCategory, setEditingCategory] = useState(null);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, []);

    const fetchCategories = async () => {
        const response = await axios.get("/api/categories");
        setCategories(response.data);
    };

    const fetchProducts = async () => {
        const response = await axios.get("/api/products");
        setProducts(response.data);
    };

    const handleCategoryChange = (e) => {
        setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
    };

    const handleProductChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const createCategory = async () => {
        await axios.post("/api/categories", newCategory);
        fetchCategories();
        setNewCategory({ nombre: "", slug: "", descripcion: "", prioridad: 0, imagen_url: "", activo: false });
    };

    const createProduct = async () => {
        await axios.post("/api/products", newProduct);
        fetchProducts();
        setNewProduct({ nombre: "", slug: "", descripcion: "", precio: 0, categoria_id:null, imagen_url: "", activo: false });
    };

    const updateCategory = async () => {
        await axios.put(`/api/categories/${editingCategory.id}`, editingCategory);
        fetchCategories();
        setEditingCategory(null);
    };

    const updateProduct = async () => {
        await axios.put(`/api/products/${editingProduct.id}`, editingProduct);
        fetchProducts();
        setEditingProduct(null);
    };

    const deleteCategory = async (id) => {
        await axios.delete(`/api/categories/${id}`);
        fetchCategories();
    };

    const deleteProduct = async (id) => {
        await axios.delete(`/api/products/${id}`);
        fetchProducts();
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-3xl font-bold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-gray-100">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg">
                        <div className="p-6 text-gray-900 space-y-6">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold mb-4">Categorías</h3>
                                <div className="space-y-4">
                                    <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="nombre" placeholder="Nombre" value={newCategory.nombre} onChange={handleCategoryChange} />
                                    <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="slug" placeholder="Slug" value={newCategory.slug} onChange={handleCategoryChange} />
                                    <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="descripcion" placeholder="Descripción" value={newCategory.descripcion} onChange={handleCategoryChange} />
                                    <input className="w-full p-2 border border-gray-300 rounded-md" type="number" name="prioridad" placeholder="Prioridad" value={newCategory.prioridad} onChange={handleCategoryChange} />
                                    <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="imagen_url" placeholder="URL de la imagen" value={newCategory.imagen_url} onChange={handleCategoryChange} />
                                    <div className="flex items-center">
                                        <input className="mr-2" type="checkbox" name="activo" checked={newCategory.activo} onChange={(e) => setNewCategory({ ...newCategory, activo: e.target.checked })} />
                                        <label>Activo</label>
                                    </div>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={createCategory}>Crear Categoría</button>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {categories.map(category => (
                                        <li key={category.id} className="flex justify-between items-center p-2 border border-gray-300 rounded-md">
                                            <span>{category.nombre}</span>
                                            <div>
                                                <button className="px-2 py-1 bg-yellow-500 text-white rounded-md mr-2" onClick={() => setEditingCategory(category)}>Editar</button>
                                                <button className="px-2 py-1 bg-red-500 text-white rounded-md" onClick={() => deleteCategory(category.id)}>Eliminar</button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                {editingCategory && (
                                    <div className="mt-4 space-y-4">
                                        <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="nombre" placeholder="Nombre" value={editingCategory.nombre} onChange={(e) => setEditingCategory({ ...editingCategory, [e.target.name]: e.target.value })} />
                                        <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="slug" placeholder="Slug" value={editingCategory.slug} onChange={(e) => setEditingCategory({ ...editingCategory, [e.target.name]: e.target.value })} />
                                        <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="descripcion" placeholder="Descripción" value={editingCategory.descripcion} onChange={(e) => setEditingCategory({ ...editingCategory, [e.target.name]: e.target.value })} />
                                        <input className="w-full p-2 border border-gray-300 rounded-md" type="number" name="prioridad" placeholder="Prioridad" value={editingCategory.prioridad} onChange={(e) => setEditingCategory({ ...editingCategory, [e.target.name]: e.target.value })} />
                                        <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="imagen_url" placeholder="URL de la imagen" value={editingCategory.imagen_url} onChange={(e) => setEditingCategory({ ...editingCategory, [e.target.name]: e.target.value })} />
                                        <div className="flex items-center">
                                            <input className="mr-2" type="checkbox" name="activo" checked={editingCategory.activo} onChange={(e) => setEditingCategory({ ...editingCategory, activo: e.target.checked })} />
                                            <label>Activo</label>
                                        </div>
                                        <button className="px-4 py-2 bg-green-500 text-white rounded-md" onClick={updateCategory}>Actualizar Categoría</button>
                                    </div>
                                )}
                            </div>
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold mb-4">Productos</h3>
                                <div className="space-y-4">
                                    <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="nombre" placeholder="Nombre" value={newProduct.nombre} onChange={handleProductChange} />
                                    <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="slug" placeholder="Slug" value={newProduct.slug} onChange={handleProductChange} />
                                    <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="descripcion" placeholder="Descripción" value={newProduct.descripcion} onChange={handleProductChange} />
                                    <input className="w-full p-2 border border-gray-300 rounded-md" type="number" name="precio" placeholder="Precio" value={newProduct.precio} onChange={handleProductChange} />
                                    <select className="w-full p-2 border border-gray-300 rounded-md" name="categoria_id" value={newProduct.categoria_id} onChange={handleProductChange}>
                                        <option value="">Selecciona una categoría</option>
                                        {categories.map(category => (
                                            <option key={category.id} value={category.id}>{category.nombre}</option>
                                        ))}
                                    </select>
                                    <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="imagen_url" placeholder="URL de la imagen" value={newProduct.imagen_url} onChange={handleProductChange} />
                                    <div className="flex items-center">
                                        <input className="mr-2" type="checkbox" name="activo" checked={newProduct.activo} onChange={(e) => setNewProduct({ ...newProduct, activo: e.target.checked })} />
                                        <label>Activo</label>
                                    </div>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={createProduct}>Crear Producto</button>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {products.map((product) => (
                                        <li key={product.id} className="flex justify-between items-center p-2 border border-gray-300 rounded-md">
                                            <span>{product.nombre}</span>
                                            <div>
                                                <button className="px-2 py-1 bg-yellow-500 text-white rounded-md mr-2" onClick={() => setEditingProduct(product)}>Editar</button>
                                                <button className="px-2 py-1 bg-red-500 text-white rounded-md" onClick={() => deleteProduct(product.id)}>Eliminar</button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                {editingProduct && (
                                    <div className="mt-4 space-y-4">
                                        <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="nombre" placeholder="Nombre" value={editingProduct.nombre} onChange={(e) => setEditingProduct({ ...editingProduct, [e.target.name]: e.target.value })} />
                                        <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="slug" placeholder="Slug" value={editingProduct.slug} onChange={(e) => setEditingProduct({ ...editingProduct, [e.target.name]: e.target.value })} />
                                        <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="descripcion" placeholder="Descripción" value={editingProduct.descripcion} onChange={(e) => setEditingProduct({ ...editingProduct, [e.target.name]: e.target.value })} />
                                        <input className="w-full p-2 border border-gray-300 rounded-md" type="number" name="precio" placeholder="Precio" value={editingProduct.precio} onChange={(e) => setEditingProduct({ ...editingProduct, [e.target.name]: e.target.value })} />
                                        <select className="w-full p-2 border border-gray-300 rounded-md" name="categoria_id" value={editingProduct.categoria_id} onChange={(e) => setEditingProduct({ ...editingProduct, [e.target.name]: e.target.value })}>
                                            <option value="">Selecciona una categoría</option>
                                            {categories.map(category => (
                                                <option key={category.id} value={category.id}>{category.nombre}</option>
                                            ))}
                                        </select>
                                        <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="imagen_url" placeholder="URL de la imagen" value={editingProduct.imagen_url} onChange={(e) => setEditingProduct({ ...editingProduct, [e.target.name]: e.target.value })} />
                                        <div className="flex items-center">
                                            <input className="mr-2" type="checkbox" name="activo" checked={editingProduct.activo} onChange={(e) => setEditingProduct({ ...editingProduct, activo: e.target.checked })} />
                                            <label>Activo</label>
                                        </div>
                                        <button className="px-4 py-2 bg-green-500 text-white rounded-md" onClick={updateProduct}>Actualizar Producto</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
