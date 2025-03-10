/*
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
*/

/*
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
*/

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./style.css";

const app = createApp(App);
const pinia = createPinia(); // Création de l'instance Pinia

app.use(pinia); // On installe Pinia
app.use(router); // On garde le router

app.mount("#app")

import supabase from "/src/supabase";

async function testConnection() {
  const { data, error } = await supabase.from("documents").select("*");
  if (error) {
    console.error("Erreur de connexion à Supabase :", error);
  } else {
    console.log("Connexion réussie 🎉 Données récupérées :", data);
  }
}

testConnection();
