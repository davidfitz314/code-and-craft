<script setup>
// Hero Section Component
</script>

<template>
  <section class="py-12 sm:py-16 border-b border-[var(--color-surface-border)]">
    <div class="max-w-4xl">
      <!-- Track Badges -->
      <div class="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface-card)] border border-[var(--color-surface-border)] text-xs font-mono mb-6 text-slate-300">
        <span class="flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-[var(--color-sky-accent)]"></span>
          Distributed Systems &amp; Mobile Architecture
        </span>
        <span class="text-slate-600">|</span>
        <span class="flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-[var(--color-amber-accent)]"></span>
          Hardwood &amp; Epoxy Joinery
        </span>
      </div>

      <!-- Main Headline -->
      <h1 class="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 leading-tight">
        Architecting robust digital systems.<br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-sky-400">
          Crafting precision physical builds.
        </span>
      </h1>

      <!-- Bio Summary -->
      <p class="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
        Senior software engineer specializing in full-stack, mobile, and distributed cloud applications—paired with hands-on studio woodworking spanning solid wood furniture, shop utility builds, and custom resin inlays.
      </p>

      <!-- Key Focus Specs -->
      <div class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
        <div class="flex items-center gap-1.5">
          <span class="text-amber-500">◈</span> Tech: Vue 3, Python, Swift, Kotlin, Docker, PostgreSQL
        </div>
        <div class="flex items-center gap-1.5">
          <span class="text-sky-500">◈</span> Shop: Precision Joinery, Metallic Epoxy, Router Jigs
        </div>
      </div>
    </div>
  </section>
</template>