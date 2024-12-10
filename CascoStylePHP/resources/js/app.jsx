import "../css/app.css";
import "./bootstrap";
import React from "react";
import CategoriesIndex from "./Pages/Categories/Index";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});

function App() {
    return (
        <div className="App">
            <CategoriesIndex />
        </div>


    );

    createRoot(document.getElementById('app')).render(
        <React.StrictMode>
            <InertiaApp
                initialPage={JSON.parse(document.getElementById('page').dataset.page)}
                resolveComponent={(name) => import(`./Pages/${name}.jsx`).then((module) => module.default)}
            />
        </React.StrictMode>
    );
}

export default App;
