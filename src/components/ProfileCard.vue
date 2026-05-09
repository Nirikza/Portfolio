<template>
  <div class="relative">
    <div
      class="absolute -inset-6 rounded-[2rem] bg-purple-500/20 blur-3xl"
    ></div>

    <div
      class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl"
    >
      <div class="flex items-center gap-5">
        <img
          src="/images/avatar.png"
          alt="Kirina Beatriz avatar"
          class="h-24 w-24 rounded-2xl border border-white/10 object-cover"
        />

        <div>
          <p class="text-sm text-white/40">Developer profile</p>
          <h2 class="mt-1 text-2xl font-bold">Kirina Beatriz</h2>
          <p class="text-purple-300">@nirizka</p>
        </div>
      </div>

      <div class="mt-6 rounded-2xl bg-neutral-950/70 p-5">
        <p class="text-sm uppercase tracking-[0.25em] text-white/40">
          Currently focused on
        </p>

        <div class="mt-5 space-y-3">
          <div class="rounded-xl bg-white/5 p-4">
            <p class="font-medium">Vue & TypeScript</p>
            <p class="text-sm text-white/50">Frontend architecture</p>
          </div>

          <div class="rounded-xl bg-white/5 p-4">
            <p class="font-medium">Laravel</p>
            <p class="text-sm text-white/50">Backend APIs and business logic</p>
          </div>

          <div class="rounded-xl bg-white/5 p-4">
            <p class="font-medium">Docker & Self-hosting</p>
            <p class="text-sm text-white/50">
              Local tools and deployment workflows
            </p>
          </div>
        </div>
      </div>

      <div class="mt-5 grid grid-cols-3 gap-3 text-center">
        <div class="rounded-xl bg-white/5 p-3">
          <p class="text-lg font-bold">Vue</p>
          <p class="text-xs text-white/40">Frontend</p>
        </div>

        <div class="rounded-xl bg-white/5 p-3">
          <p class="text-lg font-bold">Laravel</p>
          <p class="text-xs text-white/40">Backend</p>
        </div>

        <div class="rounded-xl bg-white/5 p-3">
          <p class="text-lg font-bold">Docker</p>
          <p class="text-xs text-white/40">Tools</p>
        </div>
      </div>
    </div>
  </div>
</template>
