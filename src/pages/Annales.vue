<!--
<script setup>
import { onMounted } from "vue";
import { useDocumentsStore } from "/src/stores/useDocumentsStore";

const store = useDocumentsStore();

onMounted(() => {
  store.fetchDocuments();
});
</script>


<template>
  <div>
    <h2>Liste des documents</h2>
    <p v-if="store.loading">Chargement...</p>
    <p v-if="store.error" class="error">{{ store.error }}</p>
    
    <ul v-if="!store.loading && !store.error">
      <li v-for="doc in store.documents" :key="doc.id">
        <a :href="doc.url" target="_blank">{{ doc.title }}</a>
      </li>
    </ul>
  </div>
  <div class="annales-container">
    <h1>Annales et Ressources</h1>

    <section v-for="semestre in annales" :key="semestre.nom" class="semestre">
      <h2>{{ semestre.nom }}</h2>
      <table>
        <thead>
          <tr>
            <th>Matière</th>
            <th>Annales</th>
            <th>Fiches</th>
            <th>Exercices</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="matiere in semestre.matieres" :key="matiere.nom">
            <td>{{ matiere.nom }}</td>
            <td>
              <a v-if="matiere.annale" :href="matiere.annale" target="_blank" class="btn">📄 Télécharger</a>
              <span v-else>⛔ Non dispo</span>
            </td>
            <td>
              <a v-if="matiere.fiche" :href="matiere.fiche" target="_blank" class="btn">📖 Voir</a>
              <span v-else>⛔ Non dispo</span>
            </td>
            <td>
              <a v-if="matiere.exercice" :href="matiere.exercice" target="_blank" class="btn">📝 Quiz</a>
              <span v-else>⛔ Non dispo</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="ressources">
      <h2>Ressources Complémentaires</h2>
      <ul>
        <li><a href="https://www.sciencedirect.com/" target="_blank">📚 Science Direct</a></li>
        <li><a href="https://www.ncbi.nlm.nih.gov/pubmed/" target="_blank">🧬 PubMed</a></li>
        <li><a href="https://www.fun-mooc.fr/" target="_blank">🎓 MOOC Santé</a></li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
</style>

<script>
export default {
  data() {
    return {
      annales: [
        {
          nom: "Semestre 1",
          matieres: [
            { nom: "Physiologie", annale: "/annales/physio_S1.pdf", fiche: "/fiches/physio_S1.pdf", exercice: "/quiz/physio_S1.html" },
            { nom: "Biochimie", annale: "/annales/biochimie_S1.pdf", fiche: null, exercice: null },
            { nom: "Méthodologie scientifique", annale: null, fiche: "/fiches/methodo_S1.pdf", exercice: "/quiz/methodo_S1.html" }
          ]
        },
        {
          nom: "Semestre 2",
          matieres: [
            { nom: "Anatomie", annale: "/annales/anatomie_S2.pdf", fiche: "/fiches/anatomie_S2.pdf", exercice: null },
            { nom: "Neurosciences", annale: "/annales/neuro_S2.pdf", fiche: null, exercice: "/quiz/neuro_S2.html" }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.annales-container {
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  text-align: center;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h1, h2 {
  color: #2c3e50;
}

h2 {
  color: #2980b9;
  margin-top: 20px;
}

.semestre {
  background: white;
  padding: 15px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
}

th, td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: center;
}

th {
  background: #3498db;
  color: white;
}

.btn {
  padding: 8px 12px;
  background: #2980b9;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
}

.btn:hover {
  background: #1a66a3;
}

.ressources ul {
  list-style: none;
  padding: 0;
}

.ressources li {
  margin: 10px 0;
}

.ressources a {
  color: #2980b9;
  text-decoration: none;
  font-weight: bold;
}

.ressources a:hover {
  text-decoration: underline;
}
</style>
-->
<!--
<script setup>
import { onMounted } from "vue";
import { useDocumentsStore } from "/src/stores/useDocumentsStore";

const documentsStore = useDocumentsStore();

onMounted(() => {
  documentsStore.fetchDocuments();
});
</script>

<template>
  <div class="container">
    <h1>Annales</h1>
    <div v-if="documentsStore.documents.length === 0">Aucun document trouvé.</div>
    <ul>
      <li v-for="doc in documentsStore.documents" :key="doc.id">
        <a :href="doc.url" target="_blank">
          <button class="btn">📄 {{ doc.title }}</button>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}

.btn {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
-->
<script setup>
import { onMounted } from "vue";
import { useDocumentsStore } from "/src/stores/useDocumentsStore";

const documentsStore = useDocumentsStore();

onMounted(() => {
  documentsStore.fetchDocuments();
});
</script>

<template>
  <div class="container">
    <h1>Annales</h1>

    <div v-if="documentsStore.documents.length === 0">Aucun document trouvé.</div>

    <table v-else>
      <thead>
        <tr>
          <th>Année</th>
          <th>Matière</th>
          <th>Document</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doc in documentsStore.documents" :key="doc.id">
          <td>{{ doc.année }}</td>
          <td>{{ doc.matière }}</td>
          <td>
            <a :href="doc.url" target="_blank">
              <button class="btn">📄 Télécharger</button>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #007bff;
  color: white;
}

.btn {
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #218838;
}
</style>
