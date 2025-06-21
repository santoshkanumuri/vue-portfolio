<template>
  <main>
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- About Section -->
    <AboutSection id="about" />
    
    <!-- Skills Section -->
    <SkillsSection id="skills" />
    
    <!-- Projects Section -->
    <ProjectsSection id="projects" />
    
    <!-- Experience Section -->
    <ExperienceSection id="experience" />
    
    <!-- Certifications Section -->
    <CertificationsSection id="certifications" />
    
    <!-- Contact Section -->
    <ContactSection id="contact" />
  </main>
</template>

<script setup>
import HeroSection from '../components/sections/HeroSection.vue';
import AboutSection from '../components/sections/AboutSection.vue';
import SkillsSection from '../components/sections/SkillsSection.vue';
import ProjectsSection from '../components/sections/ProjectsSection.vue';
import ExperienceSection from '../components/sections/ExperienceSection.vue';
import CertificationsSection from '../components/sections/CertificationsSection.vue';
import ContactSection from '../components/sections/ContactSection.vue';
</script>
