<template>
  <header
    class="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <RouterLink to="/" class="group flex items-center gap-3">
        <span
          class="h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_18px_rgba(192,132,252,0.9)]"
        ></span>

        <span class="font-bold tracking-tight text-white">
          Kirina Beatriz
        </span>
      </RouterLink>

      <div class="flex gap-6 text-sm text-white/60">
        <RouterLink
          to="/"
          class="transition hover:text-white"
          active-class="text-purple-300"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/projects"
          class="transition hover:text-white"
          active-class="text-purple-300"
        >
          Projects
        </RouterLink>

        <RouterLink
          to="/about"
          class="transition hover:text-white"
          active-class="text-purple-300"
        >
          About
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
