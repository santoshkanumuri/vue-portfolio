<template>
  <div class="project-card group">
    <div class="bg-gradient-to-br from-background to-background/50 dark:from-background-dark dark:to-background-dark/50 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <!-- Project image -->
      <div class="relative overflow-hidden h-48 bg-gray-100 dark:bg-gray-800">
        <img
          v-if="!imageFailed"
          :src="project.image"
          :alt="project.title"
          class="absolute top-1/2 left-1/2 max-w-full max-h-full object-contain -translate-x-1/2 -translate-y-1/2"
          @error="imageFailed = true"
        >
        <div
          v-else
          class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/15 to-accent/15 dark:from-primary/25 dark:to-accent/25"
        >
          <span class="text-5xl font-bold text-primary dark:text-primary-light">
            {{ projectInitial }}
          </span>
        </div>
        <!-- Featured badge -->
        <div v-if="project.featured" class="absolute top-0 right-0 bg-primary text-text dark:text-text-dark text-xs font-bold px-2 py-1">
          Featured
        </div>
        <!-- Category badge -->
        <div class="absolute bottom-0 left-0 bg-primary text-text dark:text-text-dark text-xs px-2 py-0.5 leading-tight rounded-tr rounded-br">
          {{ project.category }}
        </div>
      </div>

      <!-- Project content -->
      <div class="p-4 flex-grow flex flex-col">
        <h3 class="text-lg font-semibold mb-2 text-text dark:text-text-dark">{{ project.title }}</h3>
        <p class="text-text/80 dark:text-text-dark/80 text-sm mb-4 line-clamp-3 flex-grow">{{ project.description }}</p>

        <!-- Technologies -->
        <div class="mb-4">
          <div class="flex flex-wrap gap-1">
            <span
              v-for="(tech, index) in limitedTechnologies"
              :key="index"
              class="bg-light text-text/90 dark:text-text-dark/90 text-xs px-2 py-1 rounded-full"
            >
              {{ tech }}
            </span>
            <span v-if="project.technologies.length > 3" class="text-text/70 dark:text-text-dark/70 text-xs px-2 py-1">
              +{{ project.technologies.length - 3 }} more
            </span>
          </div>
        </div>

        <!-- Action buttons -->
        <div class="flex justify-between items-center mt-auto">
          <button
            @click="$emit('click', project)"
            class="text-primary hover:text-accent font-medium text-sm transition-colors"
          >
            View Details
          </button>
          <div class="flex space-x-2">
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-text/80 dark:text-text-dark/80 hover:text-primary transition-colors"
              @click.stop
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-text/80 dark:text-text-dark/80 hover:text-primary transition-colors"
              @click.stop
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits, ref, watch } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

defineEmits(['click']);

const imageFailed = ref(false);

watch(
  () => props.project.image,
  () => {
    imageFailed.value = false;
  }
);

// Limit technologies to first 3 for display
const limitedTechnologies = computed(() => {
  return props.project.technologies.slice(0, 3);
});

const projectInitial = computed(() => {
  return props.project.title?.trim().charAt(0).toUpperCase() || '?';
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
