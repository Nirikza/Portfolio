<script setup lang="ts">
import ProjectCard from "../components/ProjectCard.vue";
import { projects } from "../data/projects";
</script>

<template>
  <div class="space-y-12">
    <section class="space-y-5">
      <p class="text-sm uppercase tracking-[0.35em] text-purple-400">
        Projects
      </p>

      <h1 class="text-5xl font-bold leading-tight md:text-6xl">
        Things I have built.
      </h1>

      <p class="max-w-2xl text-lg leading-8 text-white/60">
        A collection of personal and professional projects focused on clean
        interfaces, practical features and maintainable code.
      </p>
    </section>

    <section class="grid gap-6 md:grid-cols-2">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </section>
  </div>
</template>
