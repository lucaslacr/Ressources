<template>
  <div class="contenu">
    <h4>Explorer les</h4>
    <h1>Ressources</h1>
    <p>
      Bienvenue sur le site des ressources en design graphique et d'interaction.
    </p>
    <h2>Derniers ajouts</h2>
    <div class="groupe-element">
      <a href="https://m3.material.io/" target="_blank" rel="nofollow"   class="element">
        <h3>Material Design 3</h3>
        <p>Documentation pour la 3ème version du design système de Google (Material You)</p>
        <p class="info">Design système · Par Marianne</p>
      </a>
      <a href="https://checklists.opquast.com/fr/assurance-qualite-web/" target="_blank" rel="nofollow"   class="element">
          <h3>Checklists assurance qualité web</h3>
          <p>Liste des heurisitiques pour améliorer l'expérience utilisateur sur un site web</p>
          <p class="info">Checklists UX · Par Marianne</p>
      </a>
      <a href="https://accessibilite.numerique.gouv.fr/" target="_blank" rel="nofollow"   class="element">
        <h3>Référentiel d'accessibilité (RGAA)</h3>
        <p>Lignes directives pour l'accessibilité élaboré par Design.gouv</p>
        <p class="info"> Documentation · Par Marianne</p>
      </a>
      <a href="https://designvault.io/" target="_blank" rel="nofollow"   class="element">
        <h3>Design Vault</h3>
        <p>Collection de composant pour s'inspirer</p>
        <p class="info">Inspiration de composant · Par Lucas</p>

      </a>
      
    </div>
    <h2>Contribuer</h2>
    <div class="colonnes">
    <Nouvelleressource />
    <Recherche /></div>
  </div>
</template>

<script>
import Recherche from "../components/Recherche.vue";
export default { components: { Recherche },
  scrollToTop: true };
</script>

<style>
.element {
  position: relative;
}
.nouveau {
  color: #b5b5b5;
  border-radius: 3px;
  font-size: small;
  margin-top:-7px;
}
.colonnes {
  display: flex;
  flex-direction: row;
}


@media (max-width: 1020px) {
    .colonnes {
  display: flex;
  flex-direction: column;
}
  }
</style>
