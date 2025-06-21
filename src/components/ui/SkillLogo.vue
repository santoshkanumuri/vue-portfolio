<template>
  <div class="skill-logo-container group">
    <div class="skill-logo relative">
      <!-- Logo image or icon -->
      <div class="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-white dark:bg-background-dark rounded-lg sm:rounded-xl shadow-soft dark:shadow-soft-dark p-2 sm:p-3 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:bg-primary/5 dark:group-hover:bg-primary/10 border border-gray-100 dark:border-gray-800">
        <img
          v-if="getLogoUrl()"
          :src="getLogoUrl()"
          :alt="name"
          class="max-w-[80%] max-h-[80%] transition-transform duration-300 group-hover:scale-105 filter dark:brightness-90"
        />
        <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-lg">
          <span class="text-primary dark:text-primary-light text-base sm:text-lg md:text-xl font-bold">{{ getInitials() }}</span>
        </div>
      </div>

      <!-- Skill name -->
      <p class="text-center text-xs sm:text-sm font-medium text-text dark:text-text-dark group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300">
        {{ name }}
      </p>

      <!-- Skill level indicator -->
      <div class="mt-1.5 sm:mt-2 mb-2 sm:mb-4 flex justify-center">
        <div class="h-1 w-10 sm:w-12 md:w-16 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-primary to-accent dark:from-primary-light dark:to-accent-light transition-all duration-300"
            :style="{ width: getLevelWidth() }"
          ></div>
        </div>
      </div>

      <!-- Hover tooltip with skill level -->
      <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
        <div class="bg-gray-900/90 dark:bg-background-dark/90 backdrop-blur-sm text-white text-xs sm:text-sm py-1.5 px-3 rounded-lg shadow-xl transform -translate-y-20 group-hover:-translate-y-24 transition-transform duration-300">
          {{ level }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  level: {
    type: String,
    default: 'Intermediate'
  }
});

// Function to get logo URL based on icon name
const getLogoUrl = () => {
  // This would be replaced with actual logo paths in a production environment
  // For now, we'll use placeholder logic
  const logoMap = {
    'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    'java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'c': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
    'html': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    'django': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg',
    'fastapi': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    'spring': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'nextjs': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    'vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    'mongodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    'dynamodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg',
    'aws': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    'git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    'heroku': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg',
    'linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
    'ollama': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScI5DBASAqsVpOAcTIJLMkBPH-K7UH7WQLOA&s',
    'pydanticai': 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/nu/7fe17add-aca5-4c84-98cd-65405996e286.png',
    'pytorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
    'selenium': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg',
    'pinecone' : 'https://pbs.twimg.com/profile_images/1676450951874453505/y5_T5OWH_400x400.png',
    'langchain' : 'https://agile-systems.de/wp-content/uploads/2024/03/LangChain-Logo-300x300.png'
  };

  return logoMap[props.icon.toLowerCase()] || null;
};

// Function to get initials if no logo is available
const getInitials = () => {
  return props.name.substring(0, 2).toUpperCase();
};

// Function to get width percentage based on skill level
const getLevelWidth = () => {
  const levelMap = {
    'Expert': '100%',
    'Advanced': '80%',
    'Intermediate': '60%',
    'Beginner': '40%'
  };
  return levelMap[props.level] || '50%';
};
</script>

<style scoped>
.skill-logo-container {
  margin-bottom: 1.5rem; /* Default bottom margin */
}
@media (max-width: 640px) {
  .skill-logo-container {
    margin-bottom: 2.5rem; /* More space on mobile */
  }
}
.skill-logo-container:hover .skill-logo {
  z-index: 10;
}

/* Add a subtle glow effect on hover */
.skill-logo-container:hover .skill-logo::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, var(--primary), var(--accent));
  border-radius: 1rem;
  z-index: -1;
  opacity: 0.5;
  filter: blur(8px);
  transition: opacity 0.3s ease;
}
</style>
