<template>
  <div class="timeline-item" :class="[position === 'right' ? 'timeline-right' : 'timeline-left']">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 relative">
      <!-- Timeline dot -->
      <div class="absolute left-0 md:left-1/2 top-0 w-4 h-4 sm:w-5 sm:h-5 bg-primary rounded-full transform translate-x-[-50%] z-10"></div>

      <!-- Left side (for right position) -->
      <div :class="[position === 'right' ? 'md:text-right' : 'md:col-start-2']">
        <div class="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <!-- Header -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 sm:mb-4">
            <h3 class="text-lg sm:text-xl font-bold text-primary dark:text-primary-light">{{ company }}</h3>
            <span class="text-xs sm:text-sm font-medium bg-gray-100 dark:bg-gray-700 px-2 sm:px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">{{ period }}</span>
          </div>

          <!-- Title and Location -->
          <div class="mb-3 sm:mb-4">
            <h4 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">{{ title }}</h4>
            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">{{ location }}</p>
          </div>

          <!-- Responsibilities -->
          <div class="mb-4 sm:mb-6">
            <ul class="space-y-1.5 sm:space-y-2">
              <li v-for="(item, index) in responsibilities" :key="index"
                  class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex items-start">
                <span class="text-primary dark:text-primary-light mr-1.5 sm:mr-2 flex-shrink-0 mt-1">&bull;</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-1.5 sm:gap-2">
            <span
              v-for="(tech, index) in technologies"
              :key="index"
              class="bg-gray-100 dark:bg-gray-700 text-[10px] sm:text-xs text-gray-700 dark:text-gray-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- Empty column for layout -->
      <div :class="[position === 'right' ? 'md:col-start-2' : '']"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  position: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right'].includes(value)
  },
  company: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  period: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  responsibilities: {
    type: Array,
    default: () => []
  },
  technologies: {
    type: Array,
    default: () => []
  }
});
</script>

<style scoped>
.timeline-item {
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #e5e7eb;
  transform: translateX(-50%);
}

@media (min-width: 768px) {
  .timeline-item::before {
    left: 50%;
  }
}

@media (max-width: 767px) {
  .timeline-item::before {
    left: 8px;
  }

  .timeline-item .absolute.left-0 {
    left: 8px;
  }
}

.dark .timeline-item::before {
  background-color: #374151;
}
</style>
