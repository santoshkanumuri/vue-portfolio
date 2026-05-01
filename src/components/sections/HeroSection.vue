<template>
  <section class="min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-background-dark dark:to-background-dark relative overflow-hidden pt-16 sm:pt-20">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-accent/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16 relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div class="order-2 lg:order-1">
          <div class="space-y-4 sm:space-y-6">
            <div class="inline-block">
              <span class="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20">
                Programmer Analyst | Full Stack & AI Engineer
              </span>
            </div>

            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm <span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Santosh Kanumuri</span>
            </h1>

            <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              Building enterprise-grade AI applications, RAG platforms, and full-stack systems with Python,
              FastAPI, NextJS, LangChain, MCP integrations, and AWS.
            </p>

            <div class="flex flex-wrap gap-6">
              <!-- GitHub -->
              <a href="https://github.com/santoshkanumuri" target="_blank" rel="noopener noreferrer"
                class="transform hover:scale-110 transition duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub" class="h-8 w-8 dark:invert" />
              </a>

              <!-- LinkedIn -->
              <a href="https://www.linkedin.com/in/santoshkanumuri" target="_blank" rel="noopener noreferrer"
                class="transform hover:scale-110 transition duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn" class="h-8 w-8" />
              </a>

              <!-- LeetCode -->
              <a href="https://leetcode.com/u/SantoshKanumuri/" target="_blank" rel="noopener noreferrer"
                class="transform hover:scale-110 transition duration-300">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/leetcode.svg"
                    alt="LeetCode" class="h-8 w-8 dark:invert dark:brightness-200" />
              </a>

              <!-- Medium -->
              <a href="https://santoshkanumuri.medium.com" target="_blank" rel="noopener noreferrer"
                class="transform hover:scale-110 transition duration-300">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/medium.svg"
                    alt="Medium" class="h-8 w-8 dark:invert" />
              </a>
            </div>

            <!-- Resume Section -->
            <div class="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                <!-- Resume Info -->
                <div class="flex-1">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Professional Resume</h3>
                      <p class="text-gray-600 dark:text-gray-400">Last updated: May 2026</p>
                    </div>
                  </div>
                </div>

                <!-- Download Button -->
                <div class="flex flex-col items-center gap-4">
                  <a
                    href="/upload/santosh_kanumuri_resume.pdf"
                    download
                    class="group relative inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full bg-primary border-2 border-primary group-hover:bg-primary-dark"></span>
                    <span class="relative flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Resume
                    </span>
                  </a>
                  <p class="text-sm text-gray-600 dark:text-gray-400">PDF Format - 2 Pages</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2 flex justify-center">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div class="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img src="/images/profile.jpg" alt="Profile" class="w-full h-full object-cover">
              <div class="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl font-bold">
                SK
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.rounded-full', {
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    ease: 'elastic.out(1, 0.5)'
  })
  .from('h1', {
    opacity: 0,
    y: 50,
    duration: 1
  }, '-=0.8')
  .from('p', {
    opacity: 0,
    y: 50,
    duration: 1
  }, '-=0.6')
  .from('.btn', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
  }, '-=0.4')
  .from('.social-links a', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.1
  }, '-=0.4');
});
</script>
