import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/tailwind.css'; // Added the Tailwind CSS import

const app = createApp(App); // Declared the app variable
app.use(router); // Used the router plugin
app.mount('#app'); // Mounted the app
