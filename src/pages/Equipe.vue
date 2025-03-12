<template>
  <div class="equipe-container">
    <h1>Équipe pédagogique</h1>

    <div class="equipe-grid">
      <div class="enseignant" v-for="enseignant in enseignants" :key="enseignant.nom">
        <img :src="enseignant.photo" :alt="'Photo de ' + enseignant.nom" class="photo" />
        <h2>{{ enseignant.nom }}</h2>
        <h3>{{ enseignant.role }}</h3>
        <p>{{ enseignant.bio }}</p>
        <a v-if="enseignant.lien" :href="enseignant.lien" target="_blank" class="lien-profil">📄 En savoir plus</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enseignants: [
        {
          nom: "Pr. Fabien Van Coppenolle",
          role: "Responsable pédagogique L2",
          bio: "Spécialiste en physiologie",
          photo: "/images/marie-dupont.jpg",
          lien: "https://www.universite-exemple.fr/mdupont"
        },
        {
          nom: "Pr. Claire Gaillard",
          role: "Professeur de Dispositifs médicaux",
          bio: "Expert cadre légal des dispositifs médicaux.",
          photo: "/images/jean-martin.jpg",
          lien: "https://www.universite-exemple.fr/jmartin"
        },
        {
          nom: "Dr. Clement Viricel",
          role: "Enseignante en Data Science",
          bio: "Travaille en programation et gestion de data science",
          photo: "/images/claire-bernard.jpg"
        },
        {
          nom: "Dr. Claire Perrin",
          role: "Responsable pédagogique L3",
          bio: "Santé publique et politiques publiques",
          photo: "/images/pierre-lefevre.jpg"
        }
      ]
    };
  }
};
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
