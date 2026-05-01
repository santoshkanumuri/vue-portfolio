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
            period="May 2025 - Present"
            location="Lubbock, TX"
            :responsibilities="[
              'Serve as technical lead and primary contributor for full-stack enterprise AI applications, owning design, implementation, testing, production deployment, QA, and documentation.',
              'Engineered ASK_RAIDER, a university-wide conversational AI platform using RAG and MCP-based data integrations across policies, regulations, dining services, and IT knowledge bases.',
              'Built real-time operational monitoring and visualization tools integrating ServiceNow ITSM data for classroom AV systems, signage, printers, and dining facilities.',
              'Architected WCAG 2.1 accessibility and VPAT compliance platforms with automated audits, centralized dashboards, LLM-assisted report generation, and secure in-house model inference.',
              'Delivered PDF remediation and syllabus compliance pipelines using LLMs, OCR, batch processing, audit logging, and workflow automation, reducing remediation costs by 90%.'
              ]"
            :technologies="['Python', 'FastAPI', 'NextJS', 'LangChain', 'RAG', 'MCP', 'OpenAI', 'Llama', 'Ollama', 'OCR', 'Docker', 'Kubernetes', 'Helm', 'ServiceNow API', 'AWS', 'PostgreSQL', 'WCAG 2.1', 'AI Agents', 'REST APIs']"
          />
          <TimelineItem
            position="right"
            company="Texas Tech University"
            title="Graduate Assistant (Full Stack Developer)"
            period="Sep 2023 - May 2025"
            location="Lubbock, TX"
            :responsibilities="[
              'Engineered a computer vision art similarity search engine processing 35,000+ artworks with Pinecone vector embeddings, reaching 92% price-trend prediction accuracy and 70% faster retrieval.',
              'Built ETL pipelines ingesting 1,000+ artworks monthly from 3 auction houses with cloud scheduling and failure alerting.',
              'Developed multi-source AI search agents, local LLM innovation classifiers, LinkedIn profile analytics, and financial data warehouse workflows for high-throughput research and business intelligence.'
            ]"
            :technologies="['Python', 'FastAPI', 'Flask', 'MongoDB', 'DynamoDB', 'AWS S3', 'AWS EC2', 'AWS ECS', 'AWS Lambda', 'AWS Step Functions', 'Docker', 'PyTorch', 'NLP', 'Computer Vision', 'Pinecone', 'OpenAI', 'Gemini API', 'ETL']"
          />

          <TimelineItem
            position="left"
            company="PricewaterhouseCoopers"
            title="Full Stack Developer"
            period="Jul 2022 - Jul 2023"
            location="Chennai, India"
            :responsibilities="[
              'Led full-stack development of CitiBank internal loan document tracking system with Django and React, improving loan processing by 40% and uptime to 99.8%.',
              'Designed microservices with PostgreSQL (Aurora), handling 3K+ daily requests; built role-based UI components reducing training time by 3 weeks.',
              'Containerized deployments with Docker across dev/staging/prod, reducing errors by 85%; integrated task tracking for better team coordination.',
              'Created a centralized feedback and assignment platform for streamlined project and client management.'
            ]"
            :technologies="['Python', 'Django', 'ReactJS', 'REST API', 'PostgreSQL', 'Docker', 'AWS (EC2, S3, Lambda, Aurora)', 'Git', 'Postman']"
          />

          <TimelineItem
            position="right"
            company="Systema Automation"
            title="Python Developer Intern"
            period="Jul 2021 - Jun 2022"
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
