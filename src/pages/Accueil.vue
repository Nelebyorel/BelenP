<template>
    <div class="accueil-container">
      <header>
        <h1>Licence Sciences pour la Santé</h1>
        <p class="slogan">Une formation pluridisciplinaire pour comprendre et accompagner la santé humaine</p>
      </header>
      
      <!-- Diaporama d'images -->
      <div class="slideshow">
        <img :src="images[currentImage]" alt="Illustration" />
      </div>
  
      <!-- Brève description -->
      <section class="description">
        <p>Une formation alliant sciences biologiques, médicales et sociales pour préparer aux métiers de la santé et de la recherche.</p>
        <p>Approche interdisciplinaire, enseignements innovants et ouverture vers divers parcours académiques.</p>
      </section>
  
      <!-- Boutons vers les autres sections -->
      <nav class="navigation">
        <router-link to="/presentation" class="nav-button">Présentation de la licence</router-link>
        <router-link to="/programme" class="nav-button">Programme et matières</router-link>
        <router-link to="/equipe" class="nav-button">Équipe pédagogique</router-link>
        <router-link to="/annales" class="nav-button">Annales et ressources</router-link>
      </nav>
    </div>
  </template>
 
 
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const images = ref([
    '/7d1fb808-4b25-4187-b561-2ca193f4a339.JPG',
    '/IMG_2101.jpg',
    '/IMG_6955.HEIC',
    ]);
  
  const currentImage = ref(0);
  
  onMounted(() => {
    setInterval(() => {
      currentImage.value = (currentImage.value + 1) % images.value.length;
    }, 3000); // Changer d'image toutes les 3 secondes
  });
  </script>
  
  <style scoped>
  .accueil-container {
    text-align: center;
    padding: 2rem;
  }
  
  header h1 {
    font-size: 2.5rem;
    color: #2c3e50;
  }
  
  .slogan {
    font-size: 1.2rem;
    color: #34495e;
  }
  
  .slideshow {
    margin: 20px auto;
    width: 80%;
    max-width: 600px;
  }
  .slideshow img {
    width: 100%;
    border-radius: 10px;
  }
  
  .description {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 20px;
  }
  
  .navigation {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }
  
  .nav-button {
    background-color: #3498db;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
  }
  
  .nav-button:hover {
    background-color: #2980b9;
  }
  </style>
  