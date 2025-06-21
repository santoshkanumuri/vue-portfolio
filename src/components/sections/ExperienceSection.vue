<template>
  <section id="experience" class="section bg-light">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>

      <!-- Experience Timeline -->
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform md:translate-x-[-50%]"></div>

        <!-- Timeline items -->
        <div class="space-y-12">
          <TimelineItem
            position="left"
            company="Texas Tech University"
            title="Programmer Analyst III (AI Engineer)"
            period="June 2025 - Present"
            location="Lubbock, TX"
            :responsibilities="[
              'Collaborated with the AI team to build an AI-powered applications to support internal and external users.',
              ]"
            :technologies="['Python', 'FastAPI', 'NextJS', 'PostgreSQL', 'Azure AI', 'Podman', 'Azure DevOps', 'CI/CD', 'Langchain', 'PydanticAI', 'Ollama', 'PyTorch']"
          />
          <TimelineItem
            position="right"
            company="Texas Tech University"
            title="Graduate Assistant (Full Stack Developer)"
            period="Aug 2023 - May 2025"
            location="Lubbock, TX"
            :responsibilities="[
              'Developed an AI-powered art analytics platform with image similarity search (35K+ artworks) using FastAPI, Pinecone, and AWS.',
              'Built intelligent agents for brand analysis (250K+ tweets), LinkedIn talent insights (Gemini API), and web search summarization (GPT).',
              'Automated ETL pipelines from 3 auction houses and built an innovation detector using local LLMs for 1K+ company websites.'
            ]"
            :technologies="['Python', 'FastAPI', 'React', 'MongoDB', 'AWS', 'Docker', 'Git', 'CI/CD', 'Linux', 'Selenium', 'Langchain', 'PydanticAI', 'Ollama', 'PyTorch']"
          />

          <TimelineItem
            position="left"
            company="PricewaterhouseCoopers"
            title="Full Stack Developer"
            period="Jul 2022 - Jul 2023"
            location="Chennai, India"
            :responsibilities="[
              'Developed CitiBank’s internal document tracking system with Django & React, improving loan processing by 40% and uptime to 99.8%.',
              'Designed microservices with PostgreSQL (Aurora), handling 3K+ daily requests; built role-based UI components reducing training time by 3 weeks.',
              'Containerized deployments with Docker across dev/staging/prod, reducing errors by 85%; integrated task tracking for better team coordination.',
              'Created a centralized feedback and assignment platform for streamlined project and client management.'
            ]"
            :technologies="['Python', 'Django', 'ReactJS', 'REST API', 'PostgreSQL', 'Docker', 'AWS (EC2, S3, Lambda, Aurora)', 'Git', 'Postman']"
          />

          <TimelineItem
            position="right"
            company="Systema Automation, Inc."
            title="Web Developer"
            period="Jan 2022 - Jun 2022"
            location="Bangalore, India"
            :responsibilities="[
              'Built a responsive performance dashboard using Django and Chart.js, processing 5K+ daily data points and cutting analysis time by 65%.',
              'Led a 3-member team to complete 12 Agile sprints on time with 94% test coverage and improved delivery velocity.',
              'Integrated 5+ third-party APIs for real-time data, optimized latency by 70%, and reduced server load by 45%.',
              'Developed mobile-first UI and automated data validation processes, increasing engagement and catching 98% input errors before DB insertion.'
            ]"
            :technologies="['Python', 'Django', 'REST API', 'JavaScript', 'HTML5', 'CSS3', 'Chart.js', 'Git', 'PostgreSQL']"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TimelineItem from '../ui/TimelineItem.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Animate section elements when scrolled into view
  gsap.from('#experience h2', {
    scrollTrigger: {
      trigger: '#experience',
      start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out'
  });

  // Animate timeline items with stagger effect
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    const direction = item.classList.contains('timeline-right') ? 50 : -50;

    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
      },
      opacity: 0,
      x: direction,
      duration: 0.8,
      delay: 0.1 * index,
      ease: 'power3.out'
    });
  });
});
</script>
