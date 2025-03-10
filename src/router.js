import { createRouter, createWebHistory } from 'vue-router';
import Accueil from './pages/Accueil.vue';
import Presentation from './pages/Presentation.vue';
import Programme from './pages/Programme.vue';
import Equipe from './pages/Equipe.vue';
import Annales from './pages/Annales.vue';
import ContactFAQ from './pages/ContactFAQ.vue';

const routes = [
    { path: '/', component: Accueil },
    { path: '/presentation', component: Presentation },
    { path: '/programme', component: Programme },
    { path: '/equipe', component: Equipe },
    { path: '/annales', component: Annales },
    { path: '/contact', component: ContactFAQ },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;