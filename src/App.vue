<script setup>
import { ref, computed } from 'vue'
import projectsData from './data/projects.json'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectCard from './components/ProjectCard.vue'
import GalleryModal from './components/GalleryModal.vue'
import ContactSection from './components/ContactSection.vue'

const activeFilter = ref('all')
const selectedModalProject = ref(null)

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projectsData
  return projectsData.filter(p => p.track === activeFilter.value)
})

const openModal = (project) => {
  selectedModalProject.value = project
}

const closeModal = () => {
  selectedModalProject.value = null
}
</script>

<template>
  <div class="min-h-screen bg-[var(--color-surface-bg)] text-slate-100 font-sans antialiased selection:bg-amber-500/20 selection:text-amber-300">
    <!-- Navbar -->
    <Navbar :active-filter="activeFilter" @set-filter="activeFilter = $event" />

    <!-- Main Content Container -->
    <main class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Hero Header -->
      <HeroSection />

      <!-- Projects Grid Section -->
      <section class="py-12">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-xs font-mono text-slate-400 uppercase tracking-widest">
            Featured Projects ({{ filteredProjects.length }})
          </h2>
        </div>

        <!-- Project Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <ProjectCard 
            v-for="project in filteredProjects" 
            :key="project.id" 
            :project="project" 
            @open-modal="openModal"
          />
        </div>
      </section>

      <!-- Bio / Contact Footer -->
      <ContactSection />
    </main>

    <!-- Lightbox Modal -->
    <GalleryModal 
      v-if="selectedModalProject" 
      :project="selectedModalProject" 
      @close="closeModal"
    />
  </div>
</template>