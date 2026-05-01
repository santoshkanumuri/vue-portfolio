<template>
  <section id="projects" class="w-full py-12 sm:py-20 bg-gradient-to-br from-background to-background/50 dark:from-background-dark dark:to-background-dark/50 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 left-0 w-60 sm:w-96 h-60 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-0 w-60 sm:w-96 h-60 sm:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1.5s"></div>
    </div>

    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Section Header -->
      <div class="text-center mb-8 sm:mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-2">Projects</h2>
        <div class="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>

      <!-- Section Description -->
      <div class="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
        <h3 class="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-secondary dark:text-secondary-dark">
          Featured Projects
        </h3>
        <p class="text-sm sm:text-base text-text/80 dark:text-text-dark/80">
          A collection of my recent work and personal projects
        </p>
      </div>

      <!-- Project filters -->
      <div class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="activeFilter = filter"
          :class="[
            'px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-colors duration-300',
            activeFilter === filter
              ? 'bg-primary text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary/20 dark:hover:bg-primary/20'
          ]"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Projects grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          @click="openProjectDetails(project)"
        />
      </div>
    </div>

    <!-- Project details modal -->
    <div v-if="selectedProject" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto hide-scrollbar">
        <div class="p-4 sm:p-6">
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-3">
              <h3 class="text-xl sm:text-2xl font-bold text-primary dark:text-primary-light">{{ selectedProject.title }}</h3>
              <span class="bg-primary text-text dark:text-text-dark px-3 py-1 rounded-full text-sm">
                {{ selectedProject.category }}
              </span>
            </div>
            <button @click="selectedProject = null" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="mb-6">
            <!-- Image carousel -->
            <div class="relative h-64 sm:h-80 mb-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div class="relative h-full w-full">
                <img
                  v-if="!currentImageFailed"
                  :src="currentImage"
                  :alt="selectedProject.title"
                  class="absolute top-1/2 left-1/2 max-w-full max-h-full object-contain -translate-x-1/2 -translate-y-1/2"
                  @error="currentImageFailed = true"
                  @load="currentImageFailed = false"
                >
                <div
                  v-else
                  class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/15 to-accent/15 dark:from-primary/25 dark:to-accent/25"
                >
                  <span class="text-6xl font-bold text-primary dark:text-primary-light">
                    {{ selectedProject.title?.trim().charAt(0).toUpperCase() || '?' }}
                  </span>
                </div>
                <!-- Navigation arrows -->
                <div v-if="hasMultipleImages" class="absolute inset-0 flex items-center justify-between px-4">
                  <button
                    @click="previousImage"
                    class="bg-dark/50 hover:bg-dark/70 text-text dark:text-text-dark p-2 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    @click="nextImage"
                    class="bg-dark/50 hover:bg-dark/70 text-text dark:text-text-dark p-2 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <!-- Image indicators -->
                <div v-if="hasMultipleImages" class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div
                    v-for="(_, index) in selectedProject.images"
                    :key="index"
                    class="w-2 h-2 rounded-full cursor-pointer"
                    :class="currentImageIndex === index ? 'bg-primary' : 'bg-text/50 dark:text-text-dark/50'"
                    @click="currentImageIndex = index"
                  ></div>
                </div>
              </div>
            </div>
            <p class="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">{{ selectedProject.description }}</p>

            <div class="mb-4">
              <h4 class="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-white">Technologies Used:</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in selectedProject.technologies"
                  :key="tech"
                  class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="flex gap-4">
              <a
                v-if="selectedProject.testnowUrl"
                :href="selectedProject.testnowUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
              >
                Test Now
              </a>
              <a
                v-if="selectedProject.testnowUrl2"
                :href="selectedProject.testnowUrl2"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
              >
                Test Now (Old Version)
              </a>
              <a
                v-if="selectedProject.demoUrl"
                :href="selectedProject.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Live Demo
              </a>
              <a
                v-if="selectedProject.githubUrl"
                :href="selectedProject.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '../ui/ProjectCard.vue';

gsap.registerPlugin(ScrollTrigger);

// Project filters
const filters = ['All', 'Enterprise AI', 'Web Development', 'AI/ML', 'Data Science', 'Automation', 'Simple Frontend'];
const activeFilter = ref('All');

// Selected project for modal
const selectedProject = ref(null);
const currentImageIndex = ref(0);
const currentImageFailed = ref(false);

// Image carousel logic
const hasMultipleImages = computed(() => {
  return selectedProject.value?.images && selectedProject.value.images.length > 1;
});

const currentImage = computed(() => {
  if (selectedProject.value?.images && selectedProject.value.images.length > 0) {
    return selectedProject.value.images[currentImageIndex.value];
  }
  return selectedProject.value?.image || '/images/projects/project-placeholder.jpg';
});

const nextImage = () => {
  if (selectedProject.value?.images) {
    currentImageIndex.value = (currentImageIndex.value + 1) % selectedProject.value.images.length;
    currentImageFailed.value = false;
  }
};

const previousImage = () => {
  if (selectedProject.value?.images) {
    currentImageIndex.value = (currentImageIndex.value - 1 + selectedProject.value.images.length) % selectedProject.value.images.length;
    currentImageFailed.value = false;
  }
};

// Projects data
const projects = ref([
  {
    id: 101,
    title: 'ASK_RAIDER - Conversational AI Platform',
    description: 'University-wide conversational AI platform built on Retrieval-Augmented Generation with LLM inference and MCP-based data integrations across operating policies, system regulations, dining services, and IT knowledge bases. Designed to resolve Tier-1 support questions autonomously with escalation routing for complex requests.',
    image: '/images/projects/raiderchat.png',
    images: [
      '/images/projects/raiderchat.png',
      '/images/projects/raiderchat-1.png',
      '/images/projects/raiderchat-2.png'
    ],
    category: 'Enterprise AI',
    technologies: ['Python', 'FastAPI', 'NextJS', 'LangChain', 'RAG', 'MCP', 'LLMs', 'PostgreSQL'],
    featured: true
  },
  {
    id: 102,
    title: 'Campus Operational Monitoring',
    description: 'Real-time operational monitoring and visualization application integrating live ServiceNow ITSM feeds for classroom AV systems, digital signage, networked printers, and dining facilities. The map-driven workflow helps IT, facilities, and operations teams locate working resources quickly and reduce issue resolution time.',
    image: '/images/projects/service-connect.png',
    images: [
      '/images/projects/service-connect.png'
    ],
    category: 'Enterprise AI',
    technologies: ['ServiceNow API', 'FastAPI', 'NextJS', 'AWS', 'PostgreSQL', 'REST APIs'],
    featured: true
  },
  {
    id: 103,
    title: 'Accessibility & VPAT Compliance Platform',
    description: 'Full-suite accessibility compliance platform for automated WCAG 2.1 audits, centralized issue dashboards, standardized remediation workflows, and VPAT report generation using LLM agents with secure in-house model inference across 20+ university digital properties.',
    image: '/images/projects/youtube-analyzer.png',
    images: [
      '/images/projects/youtube-analyzer.png'
    ],
    category: 'Enterprise AI',
    technologies: ['WCAG 2.1', 'VPAT', 'LLM Agents', 'OCR', 'FastAPI', 'Docker', 'Kubernetes'],
    featured: true
  },
  {
    id: 104,
    title: 'PDF Remediation Pipeline',
    description: 'Production-grade PDF remediation service using large language models and OCR for native digital and scanned documents. Includes batch-processing pipelines, a self-service web portal, and full audit logging, replacing external vendor dependencies while reducing per-document remediation cost by 90%.',
    image: '/images/projects/coursesync.png',
    images: [
      '/images/projects/coursesync.png'
    ],
    category: 'Enterprise AI',
    technologies: ['LLMs', 'OCR', 'FastAPI', 'Batch Processing', 'Audit Logging', 'Docker'],
    featured: true
  },
  {
    id: 105,
    title: 'Syllabus Compliance Workflow Automation',
    description: 'LLM-powered syllabus compliance verification system that validates course syllabi against state legislative requirements and university academic policy, flags non-compliant content with actionable guidance, and routes documents through a structured approval pipeline.',
    image: '/images/projects/leetquotes.jpg',
    images: [
      '/images/projects/leetquotes.jpg'
    ],
    category: 'Enterprise AI',
    technologies: ['LLMs', 'AI Agents', 'Workflow Automation', 'Policy Validation', 'FastAPI'],
    featured: true
  },
  {
    id: 0,
    title: 'Token Visualizer',
    description: 'A web application that allows users to visualize the distribution of tokens in a given text. Displays tokens in the text and allows to estimate the cost of the text.',
    image: '/images/projects/token-visualizer.png',
    images: [
      '/images/projects/token-visualizer.png'
    ],
    category: 'Web Development',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React',],
    demoUrl: 'https://santoshkanumuri.github.io/token-visualizer/',
    githubUrl: 'https://github.com/santoshkanumuri/token-visualizer',
    featured: true
  },
  {
    id: 1,
    title: 'ASK_RAIDER - TTU Institutional AI Chatbot',
    description: 'Production RAG-based chatbot prototype using LangChain, Chroma, LLM inference, and MCP integrations to deliver semantic retrieval across Texas Tech institutional documents. It became the foundation for the enterprise ASK_RAIDER platform covering operating policies, IT knowledge base content, and student services.',
    image: '/images/projects/raiderchat.png',
    images: [
      '/images/projects/raiderchat.png',
      '/images/projects/raiderchat-1.png',
      '/images/projects/raiderchat-2.png'
    ],
    category: 'AI/ML',
    technologies: ['LangChain', 'Chroma', 'LLM Agents', 'RAG', 'MCP', 'Vector Database'],
    demoUrl: '',
    githubUrl: 'https://github.com/santoshkanumuri/rag-chatbot',
    featured: true
  },
  {
    id: 2,
    title: 'Alzheimer MRI Classification - Zero-Shot VLM',
    description: 'Vision-language model system using the ZLaP label propagation zero-shot technique to classify Alzheimer MRI stages including non-demented, very mild, mild, and moderate without task-specific labeled training data.',
    image: '/images/projects/raiderchat.png',
    images: [
      '/images/projects/raiderchat.png'
    ],
    category: 'AI/ML',
    technologies: ['Vision-Language Models', 'Zero-Shot Learning', 'ZLaP', 'Medical Imaging', 'PyTorch'],
    demoUrl: '',
    featured: true
  },
  {
    id: 13,
    title: 'YouTube Emotion Analyzer',
    description: 'Streamlit-based web application that searches YouTube for videos using keyword queries, extracts transcripts, and analyzes emotional trends within the content. Utilized the Gemini API for generating video summaries and extracting key insights.',
    image: '/images/projects/youtube-analyzer.png',
    images: [
      '/images/projects/youtube-analyzer.png',
      '/images/projects/youtube-analyzer-1.png',
      '/images/projects/youtube-analyzer-2.png',
      '/images/projects/youtube-analyzer-3.png',
      '/images/projects/youtube-analyzer-4.png'
    ],
    category: 'AI/ML',
    technologies: ['AWS', 'LLM', 'Gemini', 'Streamlit', 'Sentiment Analysis', 'YouTube Data API'],
    demoUrl: '',
    featured: true
  },
  {
    id: 3,
    title: 'CourseSync',
    description: 'The Course Tracker is a browser extension that automatically synchronizes course availability data from an educational institution\'s website. Upon installation, it uses web scraping and background scripts to fetch real-time course information, storing updates in a database that allows users to instantly check course availability without logging in, with minimal resource consumption.',
    image: '/images/projects/coursesync.png',
    images: [
      '/images/projects/coursesync.png'
    ],
    category: 'Web Development',
    technologies: ['React', 'Python', 'MongoDB', 'Web Development', 'Rest API', 'Heroku'],
    demoUrl: '',
    githubUrl: 'https://github.com/santoshkanumuri/course_tracker_extension',
    testnowUrl: 'https://home.ttucoursetracker.live/',
    featured: true
  },
  {
    id: 4,
    title: 'Rock Paper Scissors Game',
    description: 'Rock Paper Scissors Game: A web-based interactive game implemented using HTML, CSS, and JavaScript, featuring real-time player vs. computer gameplay with dynamic UI interactions and result tracking.',
    image: '/images/projects/rock-paper-scissors.png',
    images: [
      '/images/projects/rock-paper-scissors.png',
      '/images/projects/rock-paper-scissors-1.png',
      '/images/projects/rock-paper-scissors-2.png'
    ],
    category: 'Simple Frontend',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    demoUrl: '',
    githubUrl: 'https://github.com/santoshkanumuri/Rock-Paper-Scissors-Game',
    testnowUrl: 'https://santoshkanumuri.github.io/Rock-Paper-Scissors-Game/rps.html'
  },
  {
    id: 5,
    title: 'Currency Converter',
    description: 'Currency Converter: A simple responsive web application utilizing HTML, CSS, and JavaScript with FreeCurrencyApi integration, enabling real-time multi-currency conversion.',
    image: '/images/projects/currency-converter.png',
    images: [
      '/images/projects/currency-converter.png'
    ],
    category: 'Simple Frontend',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    demoUrl: '',
    githubUrl: 'https://github.com/santoshkanumuri/Currency-Converter'
  },
  {
    id: 6,
    title: 'Interest Calculator',
    description: 'Simple Interest Calculator: A responsive web application developed using HTML, CSS, and JavaScript, enabling users to calculate loan or investment interest dynamically.',
    image: '/images/projects/interest-calculator.png',
    images: [
      '/images/projects/interest-calculator.png',
      '/images/projects/interest-calculator-1.png'
    ],
    category: 'Simple Frontend',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI Design'],
    demoUrl: '',
    githubUrl: 'https://github.com/santoshkanumuri/Interest-Calculator',
    testnowUrl: 'https://santoshkanumuri.github.io/Interest-Calculator/index.html',
    testnowUrl2: 'https://santoshkanumuri.github.io/Interest-Calculator/interest.html'
  },
  {
    id: 7,
    title: 'PausePlay',
    description: 'YouTube Pauser: A browser extension that intelligently manages YouTube video playback, automatically pausing videos when switching tabs while preserving playback for music, podcasts, and audio content.',
    image: '/images/projects/pauseplay.png',
    images: [
      '/images/projects/pauseplay.png'
    ],
    category: 'Web Development',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Cross-Browser Compatibility'],
    demoUrl: '',
    githubUrl: 'https://github.com/santoshkanumuri/YoutubePauser'
  },
  {
    id: 8,
    title: 'LeetQuotes',
    description: 'LeetQuotes is a browser extension designed to enhance the LeetCode problem-solving experience by providing AI-generated hints and motivational quotes. When a user opens a LeetCode problem, the extension extracts the problem identifier from the URL and queries a backend API.',
    image: '/images/projects/leetquotes.jpg',
    images: [
      '/images/projects/leetquotes.jpg',
      '/images/projects/leetquotes-1.jpg',
      '/images/projects/leetquotes-2.jpg'
    ],
    category: 'AI/ML',
    technologies: ['Python', 'Gemini API', 'JavaScript', 'Rest API'],
    demoUrl: '',
    githubUrl: 'https://github.com/santoshkanumuri/LeetQuotes'
  },
  {
    id: 9,
    title: 'Service Connect Application',
    description: 'Connect with verified service providers easily. GPS matching, secure payments, and real-time updates.',
    image: '/images/projects/service-connect.png',
    images: [
      '/images/projects/service-connect.png',
      '/images/projects/service-connect-1.png',
      '/images/projects/service-connect-2.png',
      '/images/projects/service-connect-3.png',
      '/images/projects/service-connect-4.png',
      '/images/projects/service-connect-5.png',
      '/images/projects/service-connect-6.png',
      '/images/projects/service-connect-7.png',
      '/images/projects/service-connect-8.png',
      '/images/projects/service-connect-9.png'
    ],
    category: 'Web Development',
    technologies: ['Python', 'Streamlit', 'FastAPI', 'Role Based Access Control', 'Postgres', 'Pydantic'],
    githubUrl: 'https://github.com/santoshkanumuri/service-connect',
    featured: true
  },
  {
    id: 12,
    title: 'ChronoShift',
    description: 'A timeclock application that enables users to convert between timezones, check business hour overlaps, manage profiles for fixed zones, view multiple timezones at once, and access other productivity-focused features.',
    image: '/images/projects/chronoshift.png',
    images: [
      '/images/projects/chronoshift.png',
      '/images/projects/chronoshift-1.jpg',
      '/images/projects/chronoshift-2.png'
    ],
    category: 'Simple Frontend',
    technologies: ['React', 'TypeScript', 'Tailwind CSS' ],
    testnowUrl: 'https://clock.santoshkanumuri.tech/',
    githubUrl: 'https://github.com/santoshkanumuri/chronoshift'
  },

  {
    id: 10,
    title: 'ResultsRover - Telegram bot',
    description: 'A Python-powered Telegram bot hosted on Heroku that automates grade extraction from Veltech University\'s results website using Selenium, calculates semester and cumulative GPAs, and sends detailed results to students via email with seamless Telegram integration.',
    image: '/images/projects/resultsrover.png',
    images: [
      '/images/projects/resultsrover.png',
      '/images/projects/resultsrover-1.jpg',
      '/images/projects/resultsrover-2.png'
    ],
    category: 'Automation',
    technologies: ['Selenium', 'Python', 'Telegram API', 'Email Automation', 'HTML Emails', 'Automation'],
    demoUrl: '',
    githubUrl: 'https://github.com/santoshkanumuri/Email-cgpa'
  },
  {
    id: 11,
    title: 'Sudoku Solver',
    description: 'A CNN-powered Sudoku solver using Python and Selenium that tackles puzzles through multiple modes - manual, image, website, and video - by recognizing and solving patterns with high-accuracy real-time prediction.',
    image: '/images/projects/sudoku-solver.png',
    images: [
      '/images/projects/sudoku-solver.png',
      '/images/projects/sudoku-solver.jpg',
    ],
    category: 'AI/ML',
    technologies: ['Python', 'Selenium', 'Tensorflow', 'Tkinter', 'CNN'],
    demoUrl: '',
    githubUrl: 'https://github.com/santoshkanumuri/sudoku-solver'
  },

]);

// Filtered projects based on active filter
const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects.value;
  }
  return projects.value.filter(project => project.category === activeFilter.value);
});

// Open project details modal
const openProjectDetails = (project) => {
  selectedProject.value = project;
  currentImageIndex.value = 0; // Reset image index when opening modal
  currentImageFailed.value = false;
};

onMounted(() => {
  // Animate section elements when scrolled into view
  gsap.from('#projects h2', {
    scrollTrigger: {
      trigger: '#projects',
      start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out'
  });

  gsap.from('#projects .flex.flex-wrap', {
    scrollTrigger: {
      trigger: '#projects .flex.flex-wrap',
      start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out'
  });

  // Animate project cards with stagger effect
  gsap.from('#projects .grid > *', {
    scrollTrigger: {
      trigger: '#projects .grid',
      start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.4,
    ease: 'power3.out'
  });
});
</script>

<style>
.hide-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
