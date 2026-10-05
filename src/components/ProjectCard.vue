<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})

defineEmits(['open-modal'])
</script>

<template>
  <div class="group bg-[var(--color-surface-card)] rounded-xl border border-[var(--color-surface-border)] overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between">
    <div>
      <!-- Thumbnail Image Container -->
      <div class="relative h-52 overflow-hidden bg-slate-950">
        <img 
          :src="project.heroImage" 
          :alt="project.title" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        
        <!-- Track Badge -->
        <span 
          :class="[
            'absolute top-3 right-3 px-2.5 py-1 text-[10px] font-mono font-bold rounded-md border backdrop-blur-md uppercase tracking-wider',
            project.track === 'software' 
              ? 'bg-sky-950/80 border-sky-600/50 text-sky-300' 
              : 'bg-amber-950/80 border-amber-600/50 text-amber-300'
          ]"
        >
          {{ project.track }}
        </span>
      </div>

      <!-- Content Area -->
      <div class="p-6">
        <h3 class="text-xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
          {{ project.title }}
        </h3>
        <p class="text-xs font-mono text-slate-400 mt-1 line-clamp-1">
          {{ project.subtitle }}
        </p>

        <p class="text-sm text-slate-300 mt-3 line-clamp-3 leading-relaxed">
          {{ project.summary }}
        </p>

        <!-- Technical & Material Tags -->
        <div class="flex flex-wrap gap-1.5 mt-4">
          <span 
            v-for="tag in project.tags" 
            :key="tag"
            class="px-2 py-0.5 text-xs font-mono bg-slate-800/80 text-slate-300 rounded border border-slate-700/60"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- Action Footer -->
    <div class="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-mono border-t border-slate-800/40">
      <template v-if="project.track === 'software'">
        <div class="flex items-center gap-4">
          <a 
            v-if="project.links?.github" 
            :href="project.links.github" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-slate-400 hover:text-amber-400 font-semibold inline-flex items-center gap-1 transition-colors"
          >
            GitHub &rarr;
          </a>
          <a 
            v-if="project.links?.live" 
            :href="project.links.live" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1 transition-colors"
          >
            Live Demo &rarr;
          </a>
        </div>
      </template>

      <template v-else>
        <button 
          v-if="project.gallery?.length"
          @click="$emit('open-modal', project)"
          class="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
        >
          View Photos ({{ project.gallery.length }}) &rarr;
        </button>
      </template>
    </div>
  </div>
</template>