<script setup lang="ts">
import AppBackground from "./components/AppBackground.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="min-h-screen text-white">
    <AppBackground />
    <Navbar />

    <main class="mx-auto max-w-6xl px-6 py-16">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>
