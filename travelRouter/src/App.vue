<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav id="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/brazil">Brazil</RouterLink>
      <RouterLink to="/panama">Panama</RouterLink>
      <RouterLink to="/hawaii">Hawaii</RouterLink>
      <RouterLink to="/jamaica">Jamaica</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
      <RouterLink to="/itb">ITB</RouterLink>
    </nav>
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>