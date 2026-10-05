<script setup>
// Contact Section Component
</script>

<template>
  <footer id="contact" class="mt-20 border-t border-[var(--color-surface-border)] pt-16 pb-12">
    <div class="max-w-4xl">
      <!-- Section Tag -->
      <span class="text-xs font-mono text-amber-500 uppercase tracking-widest">
        03 // Connect &amp; Collaborate
      </span>

      <h2 class="text-2xl sm:text-3xl font-bold text-slate-100 mt-2">
        Let's build something precise.
      </h2>

      <p class="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
        Whether you want to discuss distributed systems, mobile app architecture, or custom woodworking builds, feel free to reach out.
      </p>

      <!-- External Links Grid -->
      <div class="mt-8 flex flex-wrap gap-4 text-xs font-mono">
        <a 
          href="https://github.com/davidfitz314" 
          target="_blank" 
          rel="noopener noreferrer"
          class="px-4 py-2.5 bg-[var(--color-surface-card)] border border-[var(--color-surface-border)] rounded-xl text-slate-200 hover:text-amber-400 hover:border-slate-700 transition-all flex items-center gap-2"
        >
          <span> GitHub</span> &rarr;
        </a>
        <a 
          href="https://linkedin.com/in/david-chenfitzgerald" 
          target="_blank" 
          rel="noopener noreferrer"
          class="px-4 py-2.5 bg-[var(--color-surface-card)] border border-[var(--color-surface-border)] rounded-xl text-slate-200 hover:text-sky-400 hover:border-slate-700 transition-all flex items-center gap-2"
        >
          <span> LinkedIn</span> &rarr;
        </a>
        <a 
          href="mailto:admin@kawikatools.com" 
          class="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-amber-500/10"
        >
          <span> Direct Email</span> &rarr;
        </a>
      </div>

      <!-- Footer Bottom Note -->
      <div class="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
        <div>
          Precision software architecture to fine woodworking joinery.
        </div>
        <div>
          © {{ new Date().getFullYear() }} Code &amp; Craft
        </div>
      </div>
    </div>
  </footer>
</template>