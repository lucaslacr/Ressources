<template>
<section class="bloc">
<h3>Ajouter une nouvelle ressource</h3>
  <form action="https://avec.lucaslacroix.com/nouvelle-ressource/" method="POST">
  <div class="ensemble">
    <label for="lien">Lien de la ressource</label><br>
  <input type="url" id="lien" name="lien" maxlength="350" required>
  </div>
  <button type="submit">Envoyer la ressource</button>
</form> </section>
</template>

<style>
input,
textarea,
select {
    background-color: white;
    border: 2px solid #e7e5eb;
    font-family: sans-serif;
    font-size: medium;
    border-radius: 5px;
    margin: 0px 0px 8px 0px;
    padding: 15px 15px;
    display: block;
    width: 100%;
    max-width: 480px;

}
button {
    border: 0;
    font-family: "Karla", sans-serif;
    font-size: medium;
    padding: 8px 25px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #0d1120;
    color: white;
    margin: 15px 0px;
}
label {
    display: block;
    padding: 2px 5px;
    background-color: #fff;
    color: #6a6c76;
    position: absolute;
    font-size: small;
    top:11px;
    left: 12px;
}
.ensemble {
    position: relative;
}
</style>
