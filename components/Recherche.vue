<template>
<section class="bloc">
<h3>Besoin d'une ressource particulière ?</h3>
  <form action="https://avec.lucaslacroix.com/recherche/"  method="POST">
  <textarea id="besoin" name="besoin" rows="5" cols="33" placeholder="Quelle est votre besoin en terme de ressource" minlength="25" maxlength="800" required></textarea>
  <div class="ensemble">
    <label for="contact">Votre courriel</label><br>
  <input type="email" id="email" name="email" maxlength="140" required>
  </div>
  <button type="submit">Envoyer le message</button>
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
    font-family: sans-serif;
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
