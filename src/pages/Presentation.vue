 

<template>
  <div class="presentation-container">
    <h1>Présentation de la Licence</h1>

    <section class="objectifs">
      <h2>Objectifs de la Licence</h2>
      <p>
        Cette licence propose une approche pluridisciplinaire combinant sciences biologiques, médicales et sociales afin
        de former des étudiants capables de comprendre et d’accompagner la santé humaine dans toute sa complexité.
      </p>
      <ul>
        <li>Favoriser une vision intégrative de la médecine centrée sur le patient.</li>
        <li>Développer des compétences en analyse scientifique et en communication en santé.</li>
        <li>Acquérir une solide formation en biologie, les sciences humaines et l'informatique.</li>
      </ul>
    </section>

    <section class="public-cible">
      <h2>À qui s'adresse cette Licence ?</h2>
      <p>
        Cette formation s’adresse aux étudiants passionnés par la santé et la recherche, notamment ceux intéressés par :
      </p>
      <ul>
        <li>La biologie et la physiologie humaine.</li>
        <li>Les sciences médicales et cliniques.</li>
        <li>Les sciences sociales appliquées à la santé.</li>
        <li>Les sciences brutes tel que les mathématiques, l'informatique ou la Data science.</li>
      </ul>
    </section>

    <section class="debouches">
      <h2>Débouchés Professionnels</h2>
      <p>À l’issue de la licence, plusieurs voies sont possibles :</p>
      <ul>
        <li>Poursuite en Master (sciences biomédicales, santé publique, ingénierie en santé...).</li>
        <li>Concours pour intégrer des écoles de santé (médecine, kinésithérapie, pharmacie...).</li>
        <li>Écoles d'ingénieurs.</li>
        <li>Métiers dans la recherche, la biotechnologie ou la médiation scientifique.</li>
      </ul>
    </section>

    <section class="temoignages">
      <h2>Témoignages d'Étudiants</h2>
      <div class="temoignage">
        <p>« Grâce à cette licence, j'ai découvert la recherche en santé et j'ai intégré un master en neurosciences ! »</p>
        <span>- Léa, promo 2023</span>
      </div>
      <div class="temoignage">
        <p>« La formation m'a permis d'avoir une approche globale de la médecine et de préparer mon entrée en école de kiné. »</p>
        <span>- Thomas, promo 2022</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.presentation-container {
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

.temoignage {
  background: #f4f4f4;
  padding: 15px;
  margin: 10px 0;
  border-left: 5px solid #2980b9;
}

.temoignage span {
  display: block;
  font-size: 0.9rem;
  color: #777;
  text-align: right;
}
</style>
