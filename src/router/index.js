import { createMemoryHistory, createRouter } from 'vue-router';
import ProductsCatalog from '@/components/ProductsCatalog.vue';
import SingleProductArticle from '@/components//SingleProductArticle.vue';

const routes = [
    { path: '/', name: 'main', component: ProductsCatalog },
    { path: '/flower/:name', name: 'flower', component: SingleProductArticle }
];

const Router = createRouter({
    history: createMemoryHistory(),
    mode: "history",
    routes
});

export default Router;