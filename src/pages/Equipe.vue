<template>
  <div class="equipe-container">
    <h1>Équipe pédagogique</h1>

    <div class="equipe-grid">
      <div class="enseignant" v-for="enseignant in enseignants" :key="enseignant.nom">
        <img :src="enseignant.photo" :alt="'Photo de ' + enseignant.nom" class="photo" />
        <h2>{{ enseignant.nom }}</h2>
        <h3>{{ enseignant.role }}</h3>
        <p>{{ enseignant.bio }}</p>
        <Bouton v-if="enseignant.lien" :lien="enseignant.lien">
          📄 En savoir plus
        </Bouton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "/src/supabase";
import Bouton from "/src/components/Bouton.vue"; // Correction ici

const enseignants = ref([]);

const fetchEnseignants = async () => {
  const { data, error } = await supabase.from("enseignants").select("*");
  if (error) {
    console.error("Erreur de chargement des enseignants:", error);
  } else {
    enseignants.value = data;
  }
};


onMounted(() => {
  fetchEnseignants();
});
</script>

<style scoped>
.equipe-container {
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.equipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
}

.enseignant {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.enseignant:hover {
  transform: translateY(-5px);
}

.photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

h2 {
  color: #2980b9;
  font-size: 1.2em;
  margin-bottom: 5px;
}

h3 {
  font-size: 1em;
  color: #555;
  margin-bottom: 10px;
}

p {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 10px;
}

.lien-profil {
  display: inline-block;
  padding: 8px 12px;
  background: #2980b9;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
}

.lien-profil:hover {
  background: #1a66a3;
}
</style>
