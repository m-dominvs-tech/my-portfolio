<template>
  <div id="app-wrapper">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/layout/Navbar.vue'
</script>

<style>
#app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>