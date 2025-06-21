<template>
  <section id="skills" class="w-full min-h-screen py-12 sm:py-20 bg-gradient-to-br from-background to-background/50 dark:from-background-dark dark:to-background-dark/50 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 left-0 w-60 sm:w-96 h-60 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-0 w-60 sm:w-96 h-60 sm:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1.5s"></div>
    </div>

    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Section Header -->
      <div class="text-center mb-8 sm:mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-2">Skills</h2>
        <div class="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>

      <!-- Section Description -->
      <div class="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
        <h3 class="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-secondary dark:text-secondary-dark">
          My primary tools of choice include:
        </h3>
        <p class="text-sm sm:text-base text-text/80 dark:text-text-dark/80">
          A comprehensive collection of technologies and tools I've mastered throughout my journey
        </p>
      </div>

      <!-- Skills Grid Container -->
      <div class="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        <!-- Programming Languages -->
        <div class="skill-category">
          <h4 class="text-lg sm:text-xl font-semibold mb-8 text-center text-primary dark:text-primary-light">Programming Languages</h4>
          <div class="grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-y-10 sm:gap-x-6">
            <SkillLogo name="Python" icon="python" level="Expert" />
            <SkillLogo name="Java" icon="java" level="Advanced" />
            <SkillLogo name="JavaScript" icon="javascript" level="Advanced" />
            <SkillLogo name="TypeScript" icon="typescript" level="Intermediate" />
            <SkillLogo name="C" icon="c" level="Intermediate" />
            <SkillLogo name="HTML/CSS" icon="html" level="Advanced" />
          </div>
        </div>

        <!-- Frameworks & Libraries -->
        <div class="skill-category">
          <h4 class="text-lg sm:text-xl font-semibold mb-8 text-center text-primary dark:text-primary-light">Frameworks & Libraries</h4>
          <div class="grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-y-10 sm:gap-x-6">
            <SkillLogo name="Django" icon="django" level="Advanced" />
            <SkillLogo name="FastAPI" icon="fastapi" level="Advanced" />
            <SkillLogo name="Spring" icon="spring" level="Intermediate" />
            <SkillLogo name="React" icon="react" level="Advanced" />
            <SkillLogo name="NextJS" icon="nextjs" level="Intermediate" />
            <SkillLogo name="Vue.js" icon="vue" level="Intermediate" />
          </div>
        </div>

        <!-- Databases -->
        <div class="skill-category">
          <h4 class="text-lg sm:text-xl font-semibold mb-8 text-center text-primary dark:text-primary-light">Databases</h4>
          <div class="grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-y-10 sm:gap-x-6">
            <SkillLogo name="MongoDB" icon="mongodb" level="Advanced" />
            <SkillLogo name="PostgreSQL" icon="postgresql" level="Advanced" />
            <SkillLogo name="Pinecone" icon="pinecone" level="Intermediate" />
            <SkillLogo name="DynamoDB" icon="dynamodb" level="Intermediate" />
          </div>
        </div>

        <!-- Cloud & DevOps -->
        <div class="skill-category">
          <h4 class="text-lg sm:text-xl font-semibold mb-8 text-center text-primary dark:text-primary-light">Cloud & DevOps</h4>
          <div class="grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-y-10 sm:gap-x-6">
            <SkillLogo name="AWS" icon="aws" level="Advanced" />
            <SkillLogo name="Docker" icon="docker" level="Intermediate" />
            <SkillLogo name="Git" icon="git" level="Advanced" />
            <SkillLogo name="Heroku" icon="heroku" level="Intermediate" />
            <SkillLogo name="Linux" icon="linux" level="Intermediate" />
          </div>
        </div>

        <!-- AI & ML -->
        <div class="skill-category">
          <h4 class="text-lg sm:text-xl font-semibold mb-8 text-center text-primary dark:text-primary-light">AI & Machine Learning</h4>
          <div class="grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-y-10 sm:gap-x-6">
            <SkillLogo name="Langchain" icon="langchain" level="Advanced" />
            <SkillLogo name="PydanticAI" icon="pydanticai" level="Advanced" />
            <SkillLogo name="Ollama" icon="ollama" level="Advanced" />
            <SkillLogo name="PyTorch" icon="pytorch" level="Intermediate" />
            <SkillLogo name="Selenium" icon="selenium" level="Advanced" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SkillLogo from '../ui/SkillLogo.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#skills',
      start: 'top 70%',
    }
  });

  tl.from('#skills h2', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out'
  })
  .from('#skills h3', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
  .from('.skill-category', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  }, '-=0.4');
});
</script>

<style scoped>
.skill-category {
  @apply relative;
}

/* Removing the decorative line between logos */
/* .skill-category::after {
  content: '';
  @apply absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full;
} */
</style>
