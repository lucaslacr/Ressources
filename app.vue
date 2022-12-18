<template>
  <div class="ma-vue">
    <div class="m-menu">
      <Menu />
    </div>
    <div class="m-contenu">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
html {
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  height: 100%;
}

::selection {
  color: #0d1120;
  background: #b0daf0;
}

* {
  box-sizing: border-box;
  font-weight: normal;
}

h1 {
  font-size: 55px;
  margin-bottom: 10px;
  position: relative;
}

h1,
h2,
h3 {
  font-family: "DM Sans bold";
}

h1::after {
  content: "";
  background-image: url('assets/sous-ligne.svg');
  width: 237px;
  height: 15px;
  display: inline-block;
  background-position: center;
  background-size: cover;
  position: absolute;
  bottom: -8px;
  left: 0px;
}

h4 {
  font-family: "Playfair";
  font-weight: normal;
  margin: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-bottom: -44px;
  margin-top: 25px;
  font-size: large;
}

@font-face {
  font-family: "Playfair";
  src: url("assets/PlayfairDisplay-Italic.woff2") format("woff2");
}

@font-face {
  font-family: 'DM Sans';
  src: url("assets/DMSans-Regular.woff2") format("woff2");
}

@font-face {
  font-family: "DM Sans bold";
  src: url("assets/DMSans-Bold.woff2") format("woff2");
}

.ma-vue {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

.m-menu {
  flex: 1;
  height: initial;
  background-color: #0d1120;
}

.m-contenu {
  flex: 3;
}

.contenu {
  padding: 30px 45px;
  max-width: 1200px;
  margin: 0px auto;
}

p {
  color: #383838;
  line-height: 175%;
  max-width: 650px;
}

.groupe-element {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.element {
  max-width: 478px;
  padding: 15px;
  margin: 15px 45px 15px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  border-radius: 3px;
}

.element:hover h3 {
  color: #0046fd;

}

.element:hover {
  background-color: #0048fd08;

}

.element h3 {
  transition: 0.3s;
  margin-bottom: 0px;
  color: #0d1120;
  line-height: 125%;
}

.element p {
  margin-top: 5px;
  line-height: 125%;
}

.element p.info {
  margin-top: -10px;
  line-height: 125%;
  font-size: 14px;
  color: #b0afb5;
}

.sommaire a {
  background: #0048fd0e;
  color: #0046fd;
  text-decoration: none;
  padding: 7px 14px;
  border-radius: 50px;
  margin-right: 4px;
  margin-bottom: 7px;
  font-size: 14px;
  display: inline-block;
}

.sommaire {
  max-width: 620px;
}

h2 {
  font-size: 33px;
  margin: 77px 0px 5px 0px;
}

.vignette {
  display: flex;
  flex-direction: row;
}

.vignette h3 {
  margin-top: 0;
}

.vignette img {
  max-width: 70px;
  border-radius: 5px;
  margin-right: 15px;
  height: fit-content;
}

.bloc {
  border-radius: 5px;
  padding: 5px 22px;
  flex: 1;
  margin-right: 32px;
}

/* Adaptabilité */
@media (max-width: 1020px) {
  .ma-vue {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 1268px) {
  .element {
    max-width: 100%;
  }
}

@media (max-width: 800px) {
  .contenu {
    padding: 30px 25px;
  }

  .element {
    margin: 0px;

  }

  h1 {
    font-size: 45px;
  }

  .vignette {
    display: flex;
    flex-direction: column;
  }

  .vignette img {
    max-width: 110px;
    margin-bottom: 8px;
  }
}
</style>
