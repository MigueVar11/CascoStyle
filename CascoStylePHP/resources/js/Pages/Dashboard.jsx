import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("ventas");

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
                                <h3 className="text-3xl font-bold">
                                    Bienvenido a tu panel de control Casco Style
                                </h3>
                                <p className="mt-2 text-lg text-gray-600">
                                    Gestiona todos los aspectos de tu tienda
                                    desde aquí
                                </p>
                            </div>
                            <div className="flex justify-around space-x-4 mb-8">
                                <button
                                    className={`bg-orange-500 text-white p-4 rounded-lg shadow-md w-1/4 ${
                                        activeTab === "ventas"
                                            ? "ring-2 ring-orange-700"
                                            : ""
                                    }`}
                                    onClick={() => setActiveTab("ventas")}
                                >
                                    <h4 className="text-xl font-bold mb-2">
                                        Ventas
                                    </h4>
                                    <p className="text-lg">
                                        Información de ventas
                                    </p>
                                </button>
                                <button
                                    className={`bg-blue-500 text-white p-4 rounded-lg shadow-md w-1/4 ${
                                        activeTab === "productos"
                                            ? "ring-2 ring-blue-700"
                                            : ""
                                    }`}
                                    onClick={() => setActiveTab("productos")}
                                >
                                    <h4 className="text-xl font-bold mb-2">
                                        Productos
                                    </h4>
                                    <p className="text-lg">
                                        Gestión de productos
                                    </p>
                                </button>
                                <button
                                    className={`bg-green-500 text-white p-4 rounded-lg shadow-md w-1/4 ${
                                        activeTab === "clientes"
                                            ? "ring-2 ring-green-700"
                                            : ""
                                    }`}
                                    onClick={() => setActiveTab("clientes")}
                                >
                                    <h4 className="text-xl font-bold mb-2">
                                        Clientes
                                    </h4>
                                    <p className="text-lg">
                                        Información de clientes
                                    </p>
                                </button>
                            </div>
                            <div className="flex justify-around space-x-4 mb-8">
                                <button
                                    className={`bg-red-500 text-white p-4 rounded-lg shadow-md w-1/4 ${
                                        activeTab === "estadisticas"
                                            ? "ring-2 ring-red-700"
                                            : ""
                                    }`}
                                    onClick={() => setActiveTab("estadisticas")}
                                >
                                    <h4 className="text-xl font-bold mb-2">
                                        Estadísticas
                                    </h4>
                                    <p className="text-lg">Datos y gráficos</p>
                                </button>
                                <button
                                    className={`bg-purple-500 text-white p-4 rounded-lg shadow-md w-1/4 ${
                                        activeTab === "configuraciones"
                                            ? "ring-2 ring-purple-700"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setActiveTab("configuraciones")
                                    }
                                >
                                    <h4 className="text-xl font-bold mb-2">
                                        Configuraciones
                                    </h4>
                                    <p className="text-lg">Ajustes de cuenta</p>
                                </button>
                            </div>
                            {activeTab === "ventas" && (
                                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                                    <h4 className="text-xl font-bold mb-2">
                                        Información de Ventas
                                    </h4>
                                    <p className="text-lg">
                                        Aquí puedes ver la información de tus
                                        ventas
                                    </p>
                                </div>
                            )}
                            {activeTab === "productos" && (
                                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                                    {" "}
                                    <h4 className="text-xl font-bold mb-2">
                                        Gestión de Productos
                                    </h4>{" "}
                                    <p className="text-lg">
                                        Aquí puedes gestionar tus productos
                                    </p>{" "}
                                    <a
                                        href="http://127.0.0.1:8000/products"
                                        className="text-blue-500 hover:text-blue-700 underline"
                                    >
                                        {" "}
                                        http://127.0.0.1:8000/products{" "}
                                    </a>{" "}
                                </div>
                            )}
                            {activeTab === "clientes" && (
                                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                                    <h4 className="text-xl font-bold mb-2">
                                        Información de Clientes
                                    </h4>
                                    <p className="text-lg">
                                        Aquí puedes ver la información de tus
                                        clientes
                                    </p>
                                </div>
                            )}
                            {activeTab === "estadisticas" && (
                                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                                    <h4 className="text-xl font-bold mb-2">
                                        Estadísticas
                                    </h4>
                                    <p className="text-lg">
                                        Aquí puedes ver las estadísticas de tu
                                        tienda
                                    </p>
                                </div>
                            )}
                            {activeTab === "configuraciones" && (
                                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                                    <h4 className="text-xl font-bold mb-2">
                                        Configuraciones
                                    </h4>
                                    <p className="text-lg">
                                        Aquí puedes configurar tu cuenta
                                    </p>
                                    <a
                                        href="http://127.0.0.1:8000/profile"
                                        className="text-blue-500 hover:text-blue-700 underline"
                                    >
                                        {" "}
                                        http://127.0.0.1:8000/profile{" "}
                                    </a>{" "}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
