import './bootstrap';
import '../css/app.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({

    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),

    setup({ el, App, props }) {

        const root = createRoot(el);

        root.render(<App{...props} />);

    },

})

