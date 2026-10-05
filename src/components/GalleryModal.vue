<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])
const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.project.gallery.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.project.gallery.length) % props.project.gallery.length
}

const handleKeydown = (e) => {
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight' && props.project.gallery?.length > 1) next()
  if (e.key === 'ArrowLeft' && props.project.gallery?.length > 1) prev()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <div class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
    <!-- Overlay Click Close -->
    <div class="absolute inset-0" @click="$emit('close')"></div>

    <!-- Modal Box -->
    <div class="relative w-full max-w-4xl bg-[var(--color-surface-card)] border border-[var(--color-surface-border)] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] z-10">
      <!-- Header Bar -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-[var(--color-surface-border)]">
        <div>
          <h3 class="text-base sm:text-lg font-bold text-slate-100">
            {{ project.title }}
          </h3>
          <p class="text-xs font-mono text-slate-400">
            Photo {{ currentIndex + 1 }} of {{ project.gallery.length }}
          </p>
        </div>
        <button 
          @click="$emit('close')" 
          class="p-2 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer text-sm font-mono"
        >
          ✕ [ESC]
        </button>
      </div>

      <!-- Main Image Display -->
      <div class="relative flex-1 bg-black/60 flex items-center justify-center min-h-[300px] sm:min-h-[450px] overflow-hidden select-none">
        <img 
          :src="project.gallery[currentIndex].url" 
          :alt="project.gallery[currentIndex].caption"
          class="max-h-[60vh] w-auto object-contain transition-all duration-300"
        />

        <!-- Controls -->
        <button 
          v-if="project.gallery.length > 1"
          @click="prev" 
          class="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/80 hover:bg-slate-800 text-slate-200 rounded-full border border-slate-700 transition-colors cursor-pointer shadow-lg"
          aria-label="Previous photo"
        >
          ‹
        </button>
        <button 
          v-if="project.gallery.length > 1"
          @click="next" 
          class="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/80 hover:bg-slate-800 text-slate-200 rounded-full border border-slate-700 transition-colors cursor-pointer shadow-lg"
          aria-label="Next photo"
        >
          ›
        </button>
      </div>

      <!-- Caption & Details -->
      <div class="p-4 sm:p-6 bg-[var(--color-surface-card)] border-t border-[var(--color-surface-border)]">
        <p class="text-sm text-slate-300 leading-relaxed">
          {{ project.gallery[currentIndex].caption }}
        </p>
      </div>
    </div>
  </div>
</template>