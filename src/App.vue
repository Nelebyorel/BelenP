<script setup>
import { ref } from "vue";

// Diaporama : images à changer selon ton besoin
const images = [
  "/assets/image1.jpg",
  "/assets/image2.jpg",
  "/assets/image3.jpg"
];

const currentIndex = ref(0);
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};
</script>

<template>
  <div class="container">
    <!-- Titre et slogan -->
    <header>
      <h1>Licence Sciences pour la Santé</h1>
      <p class="slogan">Une formation pluridisciplinaire pour comprendre et accompagner la santé humaine.</p>
    </header>

    <!-- Diaporama -->
    <div class="slideshow">
      <img :src="images[currentIndex]" alt="Illustration de la licence" class="slide" />
      <button @click="nextImage" class="next-btn">▶</button>
    </div>

    <!-- Brève description -->
    <section class="description">
      <h2>Pourquoi choisir cette licence ?</h2>
      <p>
        Une formation scientifique et interdisciplinaire alliant biologie, physiologie, informatique et sciences humaines,
        pour une meilleure compréhension des enjeux de la santé.
      </p>
    </section>

    <!-- Boutons de navigation -->
    <nav class="nav-links">
      <button @click="navigate('presentation')">Présentation de la licence</button>
      <button @click="navigate('programme')">Programme et matières</button>
      <button @click="navigate('equipe')">Équipe pédagogique</button>
      <button @click="navigate('ressources')">Annales et ressources</button>
    </nav>

    <!-- Footer -->
    <footer>
      <div class="social-links">
        <a href="https://twitter.com" target="_blank">Twitter</a>
        <a href="https://facebook.com" target="_blank">Facebook</a>
        <a href="https://instagram.com" target="_blank">Instagram</a>
      </div>
      <div class="contact-info">
        <p>Université XYZ - 123 Rue de la Science, 75000 Paris</p>
        <p>📞 01 23 45 67 89 | ✉ contact@universite-xyz.fr</p>
      </div>
      <p class="mentions">© 2025 Université XYZ - Mentions légales</p>
    </footer>
  </div>
</template>

<style scoped>
/* Style global */
.container {
  font-family: Arial, sans-serif;
  text-align: center;
  max-width: 900px;
  margin: auto;
}

/* Header */
header h1 {
  font-size: 2em;
  color: #2c3e50;
}
.slogan {
  font-style: italic;
  color: #555;
}

/* Diaporama */
.slideshow {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
}
.slide {
  width: 100%;
  border-radius: 10px;
}
.next-btn {
  position: absolute;
  top: 50%;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
}

/* Description */
.description {
  margin: 20px 0;
}
.description h2 {
  color: #3498db;
}

/* Navigation */
.nav-links {
  margin: 20px 0;
}
.nav-links button {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
}
.nav-links button:hover {
  background: #2980b9;
}

/* Footer */
footer {
  background: #2c3e50;
  color: white;
  padding: 15px;
  margin-top: 30px;
  border-radius: 10px;
}
.social-links a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
.mentions {
  font-size: 0.8em;
  margin-top: 10px;
}
</style>
