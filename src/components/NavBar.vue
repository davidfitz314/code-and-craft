<script setup>
defineProps({
  activeFilter: {
    type: String,
    default: 'all'
  }
})

defineEmits(['set-filter'])
</script>

<template>
  <header class="sticky top-0 z-40 bg-[var(--color-surface-bg)]/80 backdrop-blur-md border-b border-[var(--color-surface-border)]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <!-- Brand Logo / Title -->
      <a href="#" class="flex items-center gap-2.5 text-slate-100 hover:text-amber-400 transition-colors">
        <span class="font-mono text-lg font-bold text-amber-500">&lt;C&amp;C/&gt;</span>
        <span class="font-bold text-sm tracking-wide hidden sm:inline">Code &amp; Craft</span>
      </a>

      <!-- Track Switcher Pills -->
      <nav class="flex items-center gap-1 sm:gap-2 bg-[var(--color-surface-card)] p-1 rounded-xl border border-[var(--color-surface-border)]">
        <button
          v-for="filter in ['all', 'software', 'woodworking']"
          :key="filter"
          @click="$emit('set-filter', filter)"
          :class="[
            'px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer capitalize',
            activeFilter === filter
              ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          ]"
        >
          {{ filter === 'all' ? 'All Builds' : filter }}
        </button>
      </nav>

      <!-- External Quick Links -->
      <div class="flex items-center gap-3 text-xs font-mono text-slate-400">
        <a 
          href="#about" 
          class="hover:text-slate-200 transition-colors hidden md:inline"
        >
          About
        </a>
        <a 
          href="#contact" 
          class="hover:text-slate-200 transition-colors hidden md:inline"
        >
          Contact
        </a>
      </div>
    </div>
  </header>
</template>