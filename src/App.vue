<script setup>
</script>
<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar">
      <router-link to="/">Accueil</router-link>
      <router-link to="/presentation">Présentation</router-link>
      <router-link to="/programme">Programme</router-link>
      <router-link to="/equipe">Équipe pédagogique</router-link>
      <router-link to="/annales">Annales et ressources</router-link>
      <router-link to="/contact">Contact & FAQ</router-link>
    </nav>

    <!-- Contenu des pages -->
    <router-view></router-view>

    <!-- Footer -->
    <footer>
      <p>Université Claude Bernard Lyon 1 - 8 Av. Rockefeller, 69008 Lyon</p>
      <p>📞 04 78 78 56 26 | ✉ licence.sps@univ-lyon1.fr</p>
      <p class="mentions">© 2025 Université XYZ - Mentions légales</p>
    </footer>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  gap: 15px;
  background: #3498db;
  padding: 10px;
}
.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.navbar a:hover {
  text-decoration: underline;
}
footer {
  margin-top: 30px;
  background: #2c3e50;
  color: white;
  padding: 15px;
  text-align: center;
}
</style>