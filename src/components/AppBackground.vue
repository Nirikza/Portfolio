<template>
  <div
    class="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-neutral-950"
  >
    <div
      class="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]"
    ></div>

    <div
      class="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-[120px]"
    ></div>

    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
    ></div>
  </div>
</template>
