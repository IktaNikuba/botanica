import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router';
import ProductsCatalog from '@/components/ProductsCatalog.vue';
import SingleProductArticle from '@/components//SingleProductArticle.vue';

const routes = [
    { path: '/', name: 'main', component: ProductsCatalog },
    { path: '/flower/:id', name: 'flower', component: SingleProductArticle, props: true }
];

const Router = createRouter({
    history: createWebHistory(),
    routes
});

export default Router;