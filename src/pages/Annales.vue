<script setup>
import { computed, onMounted } from "vue";
import { useDocumentsStore } from "/src/stores/useDocumentsStore";
import Bouton from "/src/components/Bouton.vue";

const documentsStore = useDocumentsStore();

onMounted(() => {
  documentsStore.fetchDocuments();
});

// 🏷️ Regrouper les documents par âge
const documentsParAnnee = computed(() => {
  const grouped = {};
  documentsStore.documents.forEach((doc) => {
    if (!grouped[doc.annee]) {
      grouped[doc.annee] = [];
    }
    grouped[doc.annee].push(doc);
  });
  return grouped;
});
</script>

<template>
  <div class="container">
    <h1>Annales</h1>
    
    <div v-if="documentsStore.documents.length === 0">
      Aucun document trouvé.
    </div>

    <div v-for="(documents, annee) in documentsParAnnee" :key="annee">
      <h2>Année {{ annee }} </h2>
      <table>
        <thead>
          <tr>
            <th>Matière</th>
            <th>Titre</th>
            <th>Document</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="doc in documents" :key="doc.id">
            <td>{{ doc.matiere }}</td>
            <td>{{ doc.title }}</td>
            <td>
              <a :href="doc.url" target="_blank">
                <Bouton :texte="`📄 Ouvrir ${doc.title} `" :lien="doc.url" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
  text-align: center;
}

h2 {
  margin-top: 30px;
  color: #333;
  border-bottom: 2px solid #4b97e8;
  display: inline-block;
  padding-bottom: 5px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

th, td {
  padding: 12px;
  text-align: left;
}

th {
  background-color: #4b97e8;
  color: white;
  font-weight: bold;
}

td {
  border-bottom: 1px solid #ddd;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

tbody tr:hover {
  background-color: #f1f1f1;
}

</style>

<!--
<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  text-align: center;
}

h2 {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #4b97e8;
  color: white;
}

.btn {
  background-color: #3b7fc6;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #4b97e8;
}
</style>
-->