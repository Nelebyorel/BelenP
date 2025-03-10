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
          nom: "Dr. Marie Dupont",
          role: "Responsable pédagogique",
          bio: "Spécialiste en physiologie et enseignante-chercheuse en biologie médicale.",
          photo: "/images/marie-dupont.jpg",
          lien: "https://www.universite-exemple.fr/mdupont"
        },
        {
          nom: "Pr. Jean Martin",
          role: "Professeur de neurosciences",
          bio: "Expert en neurosciences et en cognition humaine.",
          photo: "/images/jean-martin.jpg",
          lien: "https://www.universite-exemple.fr/jmartin"
        },
        {
          nom: "Dr. Claire Bernard",
          role: "Enseignante en santé publique",
          bio: "Travaille sur les politiques de santé et l'épidémiologie.",
          photo: "/images/claire-bernard.jpg"
        },
        {
          nom: "Dr. Pierre Lefevre",
          role: "Intervenant en biochimie",
          bio: "Chercheur en biochimie appliquée à la médecine.",
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
