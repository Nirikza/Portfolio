<script setup lang="ts">
import { interests, technologies } from "../data/about";
</script>

<template>
  <div class="space-y-28">
    <section class="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div class="relative">
        <div
          class="absolute -inset-6 rounded-[2rem] bg-purple-500/20 blur-3xl"
        ></div>

        <div
          class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6"
        >
          <img
            src="/images/avatar.png"
            alt="Kirina Beatriz"
            class="h-full w-full rounded-2xl border border-white/10 object-cover"
          />
        </div>
      </div>

      <div class="space-y-8">
        <div class="space-y-4">
          <p class="text-sm uppercase tracking-[0.35em] text-purple-400">
            About Me
          </p>

          <h1 class="text-5xl font-bold leading-tight md:text-6xl">
            Building modern and thoughtful digital experiences.
          </h1>
        </div>

        <div class="space-y-6 text-lg leading-8 text-white/60">
          <p>
            My name is Kirina Beatriz, also known online as
            <span class="text-purple-300">@nirizka</span>.
          </p>

          <p>
            I am a full stack developer focused on creating clean, maintainable
            and modern applications with strong attention to user experience and
            interface design.
          </p>

          <p>
            I currently work at
            <span class="text-white">The Coding Machine Lisbon</span>, where I
            contribute to business applications and internal systems using
            modern frontend and backend technologies.
          </p>

          <p>
            Outside of work, I enjoy experimenting with self-hosting, Docker,
            Linux environments, UI concepts and personal creative projects.
          </p>
        </div>
      </div>
    </section>

    <section class="grid gap-8 lg:grid-cols-2">
      <div class="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <div class="space-y-4">
          <p class="text-sm uppercase tracking-[0.3em] text-purple-400">
            Tech Stack
          </p>

          <h2 class="text-3xl font-bold">Technologies & Tools</h2>

          <p class="text-white/60">
            These are the technologies and environments I currently work with.
          </p>
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          <div
            v-for="tech in technologies"
            :key="tech"
            class="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 transition hover:border-purple-400/30 hover:bg-purple-500/[0.06]"
          >
            {{ tech }}
          </div>
        </div>
      </div>

      <div class="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <div class="space-y-4">
          <p class="text-sm uppercase tracking-[0.3em] text-purple-400">
            Interests
          </p>

          <h2 class="text-3xl font-bold">Beyond development</h2>

          <p class="text-white/60">
            Some of the areas and hobbies I enjoy outside of coding.
          </p>
        </div>

        <div class="mt-8 space-y-3">
          <div
            v-for="interest in interests"
            :key="interest"
            class="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white/75 transition hover:border-purple-400/30 hover:bg-purple-500/[0.05]"
          >
            {{ interest }}
          </div>
        </div>
      </div>
    </section>

    <section
      class="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent p-10"
    >
      <div class="max-w-3xl space-y-5">
        <p class="text-sm uppercase tracking-[0.3em] text-purple-400">
          Current Goal
        </p>

        <h2 class="text-4xl font-bold leading-tight">
          Continuing to grow as a developer while building projects that feel
          clean, useful and memorable.
        </h2>

        <p class="text-lg leading-8 text-white/60">
          I want to keep improving my frontend and backend skills, explore more
          advanced application architecture and eventually create polished apps
          and tools of my own.
        </p>
      </div>
    </section>
  </div>
</template>
