<template>
  <div class="contact-container">
    <h1>Contact & FAQ</h1>

    <!-- Formulaire de contact -->
    <section class="contact-form">
      <h2>Nous contacter</h2>
      <form @submit.prevent="sendMessage">
        <label for="name">Nom :</label>
        <input type="text" id="name" v-model="form.name" required>
        
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="form.email" required>
        
        <label for="message">Message :</label>
        <textarea id="message" v-model="form.message" required></textarea>
        
        <button type="submit">Envoyer</button>
      </form>
    </section>

    <!-- Section FAQ -->
    <section class="faq">
      <h2>FAQ</h2>
      <div v-for="(item, index) in faqs" :key="index" class="faq-item">
        <h3 @click="toggleFAQ(index)">{{ item.question }}</h3>
        <p v-if="item.open">{{ item.answer }}</p>
      </div>
    </section>

    <!-- Liens utiles -->
    <section class="useful-links">
      <h2>Liens utiles</h2>
      <ul>
        <li><a href="#">Inscriptions</a></li>
        <li><a href="#">Aides aux étudiants</a></li>
        <li><a href="#">Services universitaires</a></li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({ name: '', email: '', message: '' });

const sendMessage = () => {
  alert('Message envoyé ! Nous vous répondrons bientôt.');
  form.value = { name: '', email: '', message: '' };
};

const faqs = ref([
  { question: "Comment s'inscrire à la licence ?", answer: "Vous pouvez vous inscrire via la plateforme Parcoursup ou le site de l'université.", open: false },
  { question: "Quels sont les prérequis ?", answer: "Un bon niveau en sciences et un intérêt pour la santé sont recommandés.", open: false },
  { question: "Quels sont les débouchés après cette licence ?", answer: "Poursuites en master, concours de santé, métiers de la recherche et de l'enseignement.", open: false }
]);

const toggleFAQ = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<style scoped>
.contact-container {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  text-align: center;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

input, textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background: #646cff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background: #535bf2;
}

.faq-item {
  background: #eee;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
}

.faq-item h3 {
  cursor: pointer;
  color: #646cff;
}

.useful-links ul {
  list-style-type: none;
  padding: 0;
}

.useful-links li a {
  color: #646cff;
  text-decoration: none;
}
</style>
