<template>
  <div class="contenu">
    <h4>Explorer les</h4>
    <h1>Ressources</h1>
    <p>
      Bienvenue sur le site des ressources en design graphique et d'interaction.
    </p>
    <h2>Derniers ajouts</h2>
    <div class="groupe-element">
      <a href="https://datavizproject.com/" target="_blank" rel="nofollow" class="element">
        <h3>Dataviz Project</h3>
        <p>Dictionnaire de la data viz</p>
        <p class="info"> UI Design · Design Graphique</p>
      </a>
      <a href="https://www.shortcogs.com/" target="_blank" rel="nofollow" class="element">
        <h3>Short Cogs</h3>
        <p>Guide pratique des bias cognitifs</p>
        <p class="info"> UX Design</p>
      </a>
      <a href="https://www.ecoindex.fr/" target="_blank" rel="nofollow"   class="element">
        <h3>Eco Index</h3>
        <p>Générateur d'audit d'éco-conception de site</p>
      </a>
      <a href="https://tarekraafat.github.io/autoComplete.js/" target="_blank" rel="nofollow"   class="element">
        <h3>autoComplete.js</h3>
        <p>Librairie js pour auto complétion des champs text</p>
        <p class="info">Web · Expérience Utilisateur</p>
      </a>
    </div>
    <h2>Contribuer</h2>
    <div class="colonnes">
      <Nouvelleressource />
      <Recherche />
    </div>
  </div>
</template>
<script setup>
const title = ref("Ressources en Design graphique, d'interfaces et d’expériences")
const description = ref("Documentation, outil en ligne, logiciel, méthodes")

// This will be reactive even you change title/description above
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>
<style>
.element {
  position: relative;
}

.nouveau {
  color: #b5b5b5;
  border-radius: 3px;
  font-size: small;
  margin-top: -7px;
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
