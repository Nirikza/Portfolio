<script setup lang="ts">
import type { Project } from "../types/project";

defineProps<{
  project: Project;
}>();
</script>

<template>
  <article
    class="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-500/[0.04]"
  >
    <div class="aspect-video overflow-hidden bg-neutral-900">
      <img
        :src="project.image"
        :alt="project.title"
        class="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
      />
    </div>

    <div class="space-y-5 p-6">
      <div class="flex items-start justify-between gap-4">
        <div>
          <h2 class="text-2xl font-bold">
            {{ project.title }}
          </h2>

          <p class="mt-2 text-sm text-purple-300">
            {{ project.status }}
          </p>
        </div>
      </div>

      <p class="leading-7 text-white/60">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
        >
          {{ tech }}
        </span>
      </div>

      <div class="flex gap-4 pt-2 text-sm">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          class="text-white/70 transition hover:text-purple-300"
        >
          GitHub
        </a>

        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          class="text-white/70 transition hover:text-purple-300"
        >
          Live Demo
        </a>
      </div>
    </div>
  </article>
</template>
