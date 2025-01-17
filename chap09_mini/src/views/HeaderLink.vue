<template>
  <nav class="nav" id="nav">
    <RouterLink to="/" class="nav-link">HOME</RouterLink>
    <RouterLink to="/about" class="nav-link">ABOUT</RouterLink>
    <RouterLink to="/list" class="nav-link">LIST</RouterLink>
    <RouterLink to="/add" class="nav-link">ADD</RouterLink>
  </nav>
</template>

<style>
a.router-link-active {
  color: orange;
}
</style>