
<script setup>
import { ref } from "vue";

const activeTab = ref("L1"); // Onglet par défaut

// Définition des années d'étude disponibles
const years = ["L1", "L2", "L3"];
</script>

<template>
  <div class="programme-container">
    <h1>Programme et matières</h1>

    <div class="tabs">
  <button
    v-for="year in years"
    :key="year"
    @click="activeTab = year"
    :class="{ active: activeTab === year }"
  >
    {{ year }}
  </button>
</div>

    <section class="organisation">
      <h2>Organisation de la formation</h2>
      <p>
        La licence Sciences pour la Santé se déroule sur trois ans avec une progression pédagogique adaptée :
      </p>
      <ul>
        <li><strong>L1 :</strong> Acquisition des bases scientifiques fondamentales.</li>
        <li><strong>L2 :</strong> Spécialisation avec le choix d'un parcours.</li>
        <li><strong>L3 :</strong> Appronfondissement des connaissances spécifiques à son parcours et préparation à lapoursuite d'étude.</li>
      </ul>
      <p>
        De plus, les étudiants ont un stage chaque année de la formation leur permettant d'acquerir une experience professionnelle et une première insertion dans le monde du travail.
        Pour la L2 et la L3, les matières en <span class="texte-Objet-connecte"> bleu sont celles du parcours object connecté</span> et les matières en <span class="texte-E-Accompagnement"> vertes sont celles du parcours E-accompagnement.</span>
      </p>
    </section>

    <section class="matieres">

      <section v-if="activeTab === 'L1'" class="matieres">
  <h2>Matières en Licence 1</h2>
  <h3>Semestre 1</h3>
  <table> 
        <thead>
          <tr>
            <th>Matière</th>
            <th>Description</th>
            <th>Volume horaire</th>
            <th>Coefficient</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Base en science de la vie</td>
            <td>Biocell, Biochimie, Génétique, Histologie et Médicament.</td>
            <td>60h</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Physiologie générale</td>
            <td>Étude des fonctions des organes et leur régulation.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Math et Stat appliquées à la santé</td>
            <td>Mathématique et statistique un peu avancées, nécessite d'avoir choisi l'option math au lycée.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Introduction aux SHS</td>
            <td>Base en Sciences Humaines et Sociales.</td>
            <td>60h</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Connaissance du secteur sanitaire et social</td>
            <td>Encadrement et comprehension du secteur.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Exepression et communication</td>
            <td>Fondamentaux de la communication, apprentissage de la construction d'un CV, lettre de motivation, mail.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Transversales</td>
            <td>Anglais, Climat et transition, Pix, Sport, Python et Écrit+.</td>
            <td>60h</td>
            <td>6</td>
          </tr>
        </tbody>
  </table>

  <h3>Semestre 2</h3> 
    <h4>Semestre 2</h4>
      <table>
        <thead>
          <tr>
            <th>Matière</th>
            <th>Description</th>
            <th>Volume horaire</th>
            <th>Coefficient</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dispositifs médicaux (DM)</td>
            <td>Réglementation, matério et réacto-vigilance.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Informatique</td>
            <td>Algorythme et Python.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Data Science</td>
            <td>Gestion, manipulation et visualisation de base de données.</td>
            <td>60h</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Psychologie</td>
            <td>Domaine de la santé et du handicap.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Connaissance du secteur sanitaire et social</td>
            <td>Encadrement et comprehension du secteur.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Prévention et Promotion de la santé</td>
            <td>Base de la promotion d'institution sanitaire.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Stage</td>
            <td>Stage obligatoire d'un mois minimum avec un compte rendu de stage.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Transversales</td>
            <td>Anglais, Pix, Sport, Projet professionel.</td>
            <td>60h</td>
            <td>6</td>
          </tr>
        </tbody>
  </table>
</section>

<section v-if="activeTab === 'L2'" class="matieres">
  <h2>Matières en Licence 2</h2>
  <h3>Semestre 1</h3>
  <table> 
        <thead>
          <tr>
            <th>Matière</th>
            <th>Description</th>
            <th>Volume horaire</th>
            <th>Coefficient</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Physiologie</td>
            <td>Physio patho des grandes fonctions.</td>
            <td>60h</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Mathématique</td>
            <td>Math et Stat appliqués à la santé.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Informatique</td>
            <td>Info et Base de données.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Sociologie</td>
            <td>Sociologie et Anthropologie de la données.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td class="texte-Objet-connecte">Électricité</td>
            <td>Base en électricité.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td class="texte-Objet-connecte">Électronique</td>
            <td>Base en électronique.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td class="texte-Objet-connecte">Developpement et Maintenance</td>
            <td>Developpement et maintenance des matériaux médicaux.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td class="texte-E-Accompagnement">Changement des comportements</td>
            <td>Modèles et théories en SHS.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td class="texte-E-Accompagnement">Connaissance de dispositifs</td>
            <td>Dispositifs de soins, de protection des risques et de compensation du handicap.</td>
            <td>60h</td>
            <td>6</td>
          </tr>
        </tbody>
  </table>

  <h3>Semestre 2</h3> 
    <h4>Semestre 2</h4>
    <table> 
        <thead>
          <tr>
            <th>Matière</th>
            <th>Description</th>
            <th>Volume horaire</th>
            <th>Coefficient</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Base en matière de santé</td>
            <td>Base en hématologie, microbiologie, et immunologie.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Neuroscience</td>
            <td>Neuroscience et cognition.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Informatique 3</td>
            <td>Web et réseaux de données.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Data Science</td>
            <td>Base du machine learning.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Stage</td>
            <td>Stage de la L2 dans le milieu professionel en lien avec la santé.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td class="texte-Objet-connecte">Qualité</td>
            <td>Métrologie et qualité dans le milieux de santé.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td class="texte-Objet-connecte">Electrophysiologie</td>
            <td>Application de l'électricité à la physiologie.</td>
            <td>60h</td>
            <td>6</td>
          </tr>
          <tr>
            <td class="texte-E-Accompagnement">Parcours de vie</td>
            <td>Parcours de vie et déterminants de la santé.</td>
            <td>30h</td>
            <td>3</td>
          </tr>
          <tr>
            <td class="texte-E-Accompagnement">Parcours de soins et santé</td>
            <td>Travail des acteurs, articulation des secteurs et financement des dispositifs.</td>
            <td>60h</td>
            <td>6</td>
          </tr>
        </tbody>
  </table>
</section>

<section v-if="activeTab === 'L3'" class="matieres">
  <h2>Matières en Licence 3 (À venir)</h2>
  <table> 
    <thead>
          <tr>
            <th>Matière</th>
            <th>Description</th>
            <th>Volume horaire</th>
            <th>Coefficient</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
  </table>
</section>


    </section>

    <section class="options">
      <h2>Options et spécialisations</h2>
      <p>
        En L3, les étudiants peuvent choisir des options pour se spécialiser :
      </p>
      <ul>
        <li><strong>Object connecté :</strong> Focus sur des sciences "brut" tel que l'électronique, la physiologie ou l'informatique.</li>
        <li><strong>E-Accompagnement :</strong> Approche plus social de la santé, porté sur la santé publique ou l'accompagnement dans le parcours de soin.</li>
      </ul>
    </section>

    <section class="telechargement">
      <h2>Programme détaillé</h2>
      <p>Téléchargez le programme complet de la licence en PDF :</p>
      <a href="/documents/programme.pdf" class="download-btn" download>
        📄 Télécharger le programme
      </a>
    </section>
  </div>
</template>


<style scoped>
.programme-container {
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  text-align: left;
}

h1 {
  text-align: center;
  color: #2c3e50;
}

h2 {
  color: #2980b9;
  border-bottom: 2px solid #2980b9;
  padding-bottom: 5px;
  margin-bottom: 15px;
}

p {
  font-size: 1.1rem;
  color: #555;
}

ul {
  list-style: disc;
  padding-left: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #2980b9;
  color: white;
}

.download-btn {
  display: inline-block;
  padding: 10px 15px;
  background-color: #2980b9;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 10px;
}

.download-btn:hover {
  background-color: #1a66a3;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}

.tabs button {
  padding: 10px 15px;
  border: none;
  background: #eee;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  transition: 0.3s;
}

.tabs button.active {
  background: #3498db;
  color: white;
  font-weight: bold;
}

.matieres {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #f9f9f9;
}

.texte-Objet-connecte {
  color: #1949b9; /* Bleu */
  font-weight: bold;
}

.texte-E-Accompagnement {
  color: #28aa14; /* Vert */
  font-weight: bold;
}
</style>

