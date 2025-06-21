<template>
  <div class="min-h-screen bg-gradient-to-br from-background to-background/50 dark:from-background-dark dark:to-background-dark/50 text-text dark:text-text-dark">
    <TheHeader />
    <main class="w-full">
      <router-view v-slot="{ Component }">
        <transition
          name="page"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
</script>

<style>
/* Base styles */
:root {
  --primary: #ff6b00;
  --primary-dark: #ff8533;
  --secondary: #ff8533;
  --accent: #ff8533;
  --background: #ffffff;
  --text: #1a1a1a;
}

/* Dark mode colors */
.dark {
  --primary: #ff8533;
  --primary-dark: #ff6b00;
  --secondary: #ff6b00;
  --accent: #ff6b00;
  --background: #121212;
  --text: #ffffff;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--background);
}

::-webkit-scrollbar-thumb {
  background: var(--secondary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary);
}

/* Base animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out;
}
</style>
