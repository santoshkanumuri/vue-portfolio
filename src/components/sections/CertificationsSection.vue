<template>
  <section id="certifications" class="w-full py-12 sm:py-20 bg-gradient-to-br from-background to-background/50 dark:from-background-dark dark:to-background-dark/50 relative z-10">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-8 sm:mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-2">Certifications</h2>
        <div class="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>

      <!-- Section Description -->
      <div class="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
        <h3 class="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-text dark:text-text-dark">
          Professional Certifications
        </h3>
        <p class="text-sm sm:text-base text-text/80 dark:text-text-dark/80">
          Industry-recognized certifications that validate my expertise
        </p>
      </div>

      <!-- Certifications grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-20">
        <div v-for="(cert, index) in certifications" :key="index"
             class="certification-card bg-gradient-to-br from-background to-background/50 dark:from-background-dark dark:to-background-dark/50 relative rounded-lg p-6 border border-gray-800 shadow-md hover:shadow-lg transition-all duration-300 relative z-20">
          <div class="mb-4 flex justify-center">
            <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 border-primary">
              <img :src="cert.companylogo" alt="Certificate Badge" class="w-10 h-10" />
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2 text-center text-text dark:text-text-dark">{{ cert.name }}</h3>
          <p class="text-text/90 dark:text-text-dark/90 mb-2 text-center font-medium">{{ cert.issuer }}</p>
          <p class="text-text/80 dark:text-text-dark/80 text-sm text-center mb-4">{{ cert.date }}</p>
          <a v-if="cert.url" :href="cert.url" target="_blank" rel="noopener noreferrer"
             class="block w-full text-center py-2 bg-primary text-white dark:text-text-dark rounded-lg hover:bg-primary-dark hover:text-white transition-colors">
            View Certificate
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Certifications data
const certifications = ref([

  {
    name: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google',
    date: 'April 2025',
    url: 'https://www.credly.com/badges/1531d9de-a0ff-46be-be8e-53ef58ae5b40',
    badgeimage: 'https://images.credly.com/size/340x340/images/0bf0f2da-a699-4c82-82e2-56dcf1f2e1c7/image.png',
    companylogo: 'https://pngimg.com/uploads/google/google_PNG19635.png'
    },
  {
    name: 'AWS Certified Cloud Architect',
    issuer: 'Amazon Web Services',
    date: 'December 2021',
    url: 'https://www.credly.com/badges/c1d41a52-4fa9-4c50-a0a1-1042b9f2d8f7/',
    badgeimage: 'https://images.credly.com/size/340x340/images/2f7b0627-48a0-4894-8d46-3245bdfe0463/image.png',
    companylogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
  },
  {
    name: 'MongoDB Certified Associate Developer',
    issuer: 'MongoDB',
    date: 'October 2024',
    url: 'https://www.credly.com/badges/6e513dad-e9f0-4ed9-a6ec-4d82a243d439/',
    badgeimage: 'https://images.credly.com/size/340x340/images/ff52a038-c61e-4088-b434-2e98ef546896/image.png',
    companylogo: 'https://www.mongodb.com/assets/images/global/favicon.ico'
  },
  {
    name: 'GitHub Foundations',
    issuer: 'Github',
    date: 'May 2025',
    url: 'https://www.credly.com/badges/46692504-8c84-4ff2-96e3-1337a188e910/',
    badgeimage: 'https://images.credly.com/size/340x340/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png',
    companylogo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
  },
]);

onMounted(() => {
  // Set initial state
  gsap.set('#certifications .certification-card', {
    opacity: 1,
    y: 0
  });

  // Animate section elements when scrolled into view
  gsap.from('#certifications h2', {
    scrollTrigger: {
      trigger: '#certifications',
      start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out'
  });

  // Animate certification cards with stagger effect
  gsap.from('#certifications .certification-card', {
    scrollTrigger: {
      trigger: '#certifications .grid',
      start: 'top 85%',
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out'
  });
});
</script>

<style scoped>
#certifications {
  position: relative;
  z-index: 10;
}

#certifications .grid {
  position: relative;
  z-index: 20;
}

#certifications .grid > * {
  position: relative;
  z-index: 30;
}

.certification-card {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>
