<script setup lang="ts">
import ProfileCard from "../components/ProfileCard.vue";
</script>

<template>
  <div class="space-y-32">
    <section
      class="grid min-h-[75vh] items-center gap-14 md:grid-cols-[1.1fr_0.9fr]"
    >
      <div class="space-y-8">
        <p class="text-sm uppercase tracking-[0.35em] text-purple-400">
          Portfolio
        </p>

        <div class="space-y-5">
          <h1 class="text-5xl font-bold leading-tight md:text-7xl">
            Kirina Beatriz
          </h1>

          <div class="flex flex-wrap items-center gap-3">
            <span
              class="rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200"
            >
              Nirikza
            </span>

            <span
              class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
            >
              Full Stack Developer
            </span>
          </div>
        </div>

        <p class="max-w-xl text-lg leading-8 text-white/60">
          I build clean, modern and organized web applications focused on user
          experience, maintainable code and thoughtful interfaces. My goal is to
          keep growing as a developer and build useful apps in the future.
        </p>

        <div class="flex flex-wrap gap-4">
          <RouterLink
            to="/projects"
            class="rounded-xl bg-purple-500 px-6 py-3 font-medium text-white shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5 hover:bg-purple-400"
          >
            View Projects
          </RouterLink>

          <RouterLink
            to="/about"
            class="rounded-xl border border-white/15 px-6 py-3 font-medium text-white/80 transition hover:-translate-y-0.5 hover:border-purple-400 hover:text-white"
          >
            About Me
          </RouterLink>
        </div>
      </div>

      <ProfileCard />
    </section>
  </div>
</template>
