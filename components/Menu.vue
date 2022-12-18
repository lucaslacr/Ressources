<template>
  <nav>
    <NuxtLink class="logo" to="/"> Ressources </NuxtLink>
    <NuxtLink to="/design-graphique" class="page"> Design graphique </NuxtLink>
    <NuxtLink to="/ux-ui-design" class="page"> UX UI design </NuxtLink>
    <NuxtLink to="/gestion-de-projet" class="page"> Gestion de projet </NuxtLink>
    <NuxtLink to="/multimedia" class="page"> Multimédia </NuxtLink>
    <NuxtLink to="/web" class="page"> Web </NuxtLink>
  </nav>
</template>

<style>
nav {
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed;
}
nav a {
  padding: 5px;
  padding-left: 28px;
  color: #ffffff;
  margin: 12px 0px;
  text-decoration: none;
  position: relative;
  width: 100%;
}
a.logo {
  font-size: x-large;
  font-weight: bold;
}
a.page.router-link-active::after {
  content: "";
  background-image: url('assets/point.svg');
  width: 7px;
  height: 7px;
  display: inline-block;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 12px;
  left: 10px;
}
@media (max-width: 1020px) {
      nav {
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: static;
}
}
</style>
