<template>
  <section id="about" class="py-20 bg-gray-50 dark:bg-background-dark relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1 space-y-8">
          <div class="space-y-4">
            <h3 class="text-2xl font-semibold text-primary dark:text-primary-light">Full Stack Developer & Data Enthusiast</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a full-stack developer with a strong foundation in backend development, cloud technologies,
              and GenAI applications.
              I specialize in building scalable, high-performance applications using Python, FastAPI, and Django,
              and have hands-on experience with AWS, SQL, and MongoDB to streamline cloud deployments and support data-driven decision-making.
            </p>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              I also build AI-powered applications using tools like LangChain, OpenAI APIs, and vector databases,
              focusing on real-world use cases such as retrieval-augmented generation (RAG), document Q&A systems, and intelligent assistants.
            </p>

          </div>

          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Education</h4>
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <img src="/images/ttu.jpg" alt="Texas Tech University" class="w-full h-full object-cover">
                </div>
                <div>
                  <h5 class="font-medium text-gray-900 dark:text-white">Texas Tech University</h5>
                  <p class="text-gray-600 dark:text-gray-300">Master of Science in Computer Science</p>
                  <p class="text-gray-500 dark:text-gray-400 text-sm">July 2023 - May 2025</p>
                  <p class="text-gray-500 dark:text-gray-400 text-sm">CGPA: 3.85/4.00</p>

                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Beyond Coding</h4>
            <p class="text-gray-600 dark:text-gray-300">When I'm not coding, I enjoy:</p>
            <div class="grid grid-cols-3 gap-4 sm:gap-6">
              <div class="group flex flex-col items-center w-full">
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform group-hover:scale-105 transition-all duration-300 flex flex-col items-center">
                  <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <span class="text-gray-700 dark:text-gray-300 text-center block">Movies</span>
                </div>
              </div>
              <div class="group flex flex-col items-center w-full">
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform group-hover:scale-105 transition-all duration-300 flex flex-col items-center">
                  <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span class="text-gray-700 dark:text-gray-300 text-center block">Travelling</span>
                </div>
              </div>
              <div class="group flex flex-col items-center w-full">
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform group-hover:scale-105 transition-all duration-300 flex flex-col items-center">
                  <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-primary" viewBox="0 0 128 128">
                      <path d="M65.47 23.81a5.41 5.41 0 0 0-4.39-1.15 5.7 5.7 0 0 0-3.86 2.4 5.8 5.8 0 0 0-.89 2l10.6-1.6a5.59 5.59 0 0 0-1.46-1.65zM12.38 62.85a2.91 2.91 0 1 0 0 5.82h9.4l-.58-5.82zM103.38 21.22a2.51 2.51 0 1 0-1.8-1.81 2.51 2.51 0 0 0 1.8 1.81z" fill="currentColor"/>
                      <circle cx="113.41" cy="47.82" r="1.84" fill="currentColor"/>
                      <path d="M31.18 49.77 98.12 39.7a1 1 0 0 0 .79-1.33A16.75 16.75 0 0 0 83.2 27.28a16.25 16.25 0 0 0-2.49.19L44.23 33A16.72 16.72 0 0 0 30 48.71a1 1 0 0 0 1.18 1.06zM115.62 62.85h-8.82l-.58 5.82h9.4a2.91 2.91 0 0 0 0-5.82zM100.29 54.84H27.71a3 3 0 0 0-2.25 1 3.2 3.2 0 0 0-.7 2.42l4.66 46.26a7.93 7.93 0 0 0 7.92 7.17h53.32a7.93 7.93 0 0 0 7.92-7.17l4.66-46.26a3.2 3.2 0 0 0-.7-2.42 3 3 0 0 0-2.25-1zM117.71 32.91a4.42 4.42 0 0 1-3.09 3.09 4.48 4.48 0 0 1-5.51-5.51 4.41 4.41 0 0 1 3.09-3.08 4.47 4.47 0 0 1 5.51 5.5z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span class="text-gray-700 dark:text-gray-300 text-center block">Cooking</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl transform -rotate-6"></div>
            <div class="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <div class="space-y-6">
                <h3 class="text-2xl font-semibold text-primary dark:text-primary-light">Ask Anything About Me</h3>
                <div class="h-[400px] flex flex-col">
                  <!-- Chat Messages -->
                  <div class="flex-1 overflow-y-auto mb-4 space-y-4 p-2" ref="chatContainer">
                    <div v-for="(message, index) in chatMessages" :key="index"
                         :class="['flex', message.isUser ? 'justify-end' : 'justify-start']">
                      <div :class="[
                        'max-w-[80%] rounded-2xl px-4 py-2 shadow-sm',
                        message.isUser
                          ? 'bg-primary text-white rounded-br-none'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                      ]">
                        <span v-if="!message.isHtml">{{ message.text }}</span>
                        <span v-else v-html="message.text"></span>
                      </div>
                    </div>
                  </div>

                  <!-- Input Area -->
                  <div class="relative mt-auto">
                    <div class="flex gap-2">
                      <input
                        v-model="userInput"
                        type="text"
                        placeholder="Ask anything about me... (Press Enter to send)"
                        class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600
                               bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200
                               focus:outline-none focus:ring-2 focus:ring-primary/50"
                        @keyup.enter="handleSend"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
            <div class="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const chatMessages = ref([
  { text: "Hi! This is Sarah, the AI assistant for my portfolio. Ask anything!", isUser: false }
]);
const userInput = ref('');
const chatContainer = ref(null);
const isLoading = ref(false);

const scrollToBottom = async () => {
  await nextTick();
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

const mapHistoryForAPI = () => {
  return chatMessages.value
    .slice(1)
    .map(msg => ({
      role: msg.isUser ? 'human' : 'ai',
      content: msg.text
    }));
};

// Fireworks function (vanilla, no dependency)
function launchFireworks() {
  // If already exists, remove old canvas
  const old = document.getElementById('fireworks-canvas');
  if (old) old.remove();
  const canvas = document.createElement('canvas');
  canvas.id = 'fireworks-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9998';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const fireworks = [];
  const particles = [];
  const colors = ['#FFD700', '#FFA500', '#FFF8DC', '#F0E68C', '#FFEFD5', '#FAFAD2', '#FFFFE0', '#FFFACD'];

  class Firework {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height;
      this.targetY = Math.random() * canvas.height * 0.6;
      this.speed = 2 + Math.random() * 3;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.exploded = false;
    }

    update() {
      if (!this.exploded) {
        this.y -= this.speed;
        if (this.y <= this.targetY) {
          this.explode();
        }
      }
    }

    draw() {
      if (!this.exploded) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    explode() {
      this.exploded = true;
      const particleCount = 100 + Math.floor(Math.random() * 70);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(this.x, this.y, this.color));
      }
    }
  }

  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.vx = (Math.random() - 0.5) * 8;
      this.vy = (Math.random() - 0.5) * 8;
      this.life = 1;
      this.decay = 0.02 + Math.random() * 0.02;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 0.1; // gravity
      this.life -= this.decay;
    }

    draw() {
      if (this.life > 0) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color === '#FFD700' ? '255, 215, 0' :
                               this.color === '#FFA500' ? '255, 165, 0' :
                               this.color === '#FFF8DC' ? '255, 248, 220' :
                               this.color === '#F0E68C' ? '240, 230, 140' :
                               this.color === '#FFEFD5' ? '255, 239, 213' :
                               this.color === '#FAFAD2' ? '250, 250, 210' :
                               this.color === '#FFFFE0' ? '255, 255, 224' :
                               '255, 250, 205'}, ${this.life})`;
        ctx.fill();
      }
    }
  }

  let animationFrame;
  let frameCount = 0;

  function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Launch new fireworks
    if (frameCount % 15 === 0) {
      fireworks.push(new Firework());
    }

    // Update and draw fireworks
    for (let i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].draw();
      if (fireworks[i].exploded) {
        fireworks.splice(i, 1);
      }
    }

    // Update and draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].draw();
      if (particles[i].life <= 0) {
        particles.splice(i, 1);
      }
    }

    frameCount++;
    animationFrame = requestAnimationFrame(animate);
  }

  animate();

  // Remove after 6 seconds
  setTimeout(() => {
    cancelAnimationFrame(animationFrame);
    canvas.remove();
  }, 6000);
}

// Celebration function (fireworks only)
function launchCelebration() {
  launchFireworks();
}

const handleSend = async () => {
  const messageText = userInput.value.trim();
  if (!messageText || isLoading.value) return;

  // Add user message to UI
  chatMessages.value.push({
    text: messageText,
    isUser: true
  });

  userInput.value = '';
  await scrollToBottom();

  // Check for 'contact' keyword
  if (/contact/i.test(messageText)) {
    chatMessages.value.push({
      isUser: false,
      isHtml: true,
      text: `
        <div style="display: flex; flex-direction: row; gap: 1.5rem; align-items: center; justify-content: flex-start; min-width: 220px;">
          <a href="tel:8067021121" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: #f3f4f6; box-shadow: 0 2px 8px rgba(0,0,0,0.06); transition: box-shadow 0.2s;">
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' style='width: 28px; height: 28px; color: #ff6b00;'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'/></svg>
          </a>
          <a href="mailto:santosh.kanumuri@hotmail.com" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: #f3f4f6; box-shadow: 0 2px 8px rgba(0,0,0,0.06); transition: box-shadow 0.2s;">
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' style='width: 28px; height: 28px; color: #ff6b00;'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'/></svg>
          </a>
          <a href="https://linkedin.com/in/santoshkanumuri" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: #f3f4f6; box-shadow: 0 2px 8px rgba(0,0,0,0.06); transition: box-shadow 0.2s;">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style="width: 28px; height: 28px;" />
          </a>
          <a href="https://github.com/santoshkanumuri" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: #f3f4f6; box-shadow: 0 2px 8px rgba(0,0,0,0.06); transition: box-shadow 0.2s;">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style="width: 28px; height: 28px;" />
          </a>
        </div>
      `
    });
    await scrollToBottom();
    return;
  }

  // Check for 'I beat Santosh at Guess the Number!'
  if (messageText.trim().toLowerCase() === 'i beat santosh at guess the number!') {
    chatMessages.value.push({
      text: 'Wow, surprise incoming!',
      isUser: false
    });
    await scrollToBottom();
    setTimeout(() => {
      launchCelebration();
    }, 1000);
    return;
  }

  const historyForAPI = mapHistoryForAPI();
  isLoading.value = true;

  try {
    const response = await fetch('https://portfolio-backend-2910-ce3d42b2fc2f.herokuapp.com/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: messageText,
        history: historyForAPI
      })
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.detail || `An HTTP error occurred: ${response.status}`;
      throw new Error(errorMessage);
    }

    chatMessages.value.push({
      text: data.answer,
      isUser: false
    });

  } catch (error) {
    console.error('An error was caught by the frontend:', error);
    // If it's a 500 error or network error, show contact block
    const msg = error.message ? error.message.toLowerCase() : '';
    const isServerError = msg.includes('500') || msg.includes('failed to fetch') || msg.includes('networkerror') || msg.includes('network error');
    if (isServerError) {
      chatMessages.value.push({
        isUser: false,
        isHtml: true,
        text: `
          <div style='margin-bottom: 0.5rem;'>Sorry, server issue. Feel free to contact directly:</div>
          <div style="display: flex; flex-direction: row; gap: 1.5rem; align-items: center; justify-content: flex-start; min-width: 220px;">
            <a href="tel:8067021121" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: #f3f4f6; box-shadow: 0 2px 8px rgba(0,0,0,0.06); transition: box-shadow 0.2s;">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' style='width: 28px; height: 28px; color: #ff6b00;'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'/></svg>
            </a>
            <a href="mailto:santosh.kanumuri@hotmail.com" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: #f3f4f6; box-shadow: 0 2px 8px rgba(0,0,0,0.06); transition: box-shadow 0.2s;">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' style='width: 28px; height: 28px; color: #ff6b00;'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'/></svg>
            </a>
            <a href="https://linkedin.com/in/santoshkanumuri" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: #f3f4f6; box-shadow: 0 2px 8px rgba(0,0,0,0.06); transition: box-shadow 0.2s;">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style="width: 28px; height: 28px;" />
            </a>
            <a href="https://github.com/santoshkanumuri" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: #f3f4f6; box-shadow: 0 2px 8px rgba(0,0,0,0.06); transition: box-shadow 0.2s;">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style="width: 28px; height: 28px;" />
            </a>
          </div>
        `
      });
    } else {
      chatMessages.value.push({
        text: error.message,
        isUser: false
      });
    }
  } finally {
    isLoading.value = false;
    await scrollToBottom();
  }
};

onMounted(() => {
  // Listen for trigger-chat event from contact section
  window.addEventListener('trigger-chat', (event) => {
    const message = event.detail.message;
    if (message) {
      userInput.value = message;
      // Trigger the send function after a short delay
      setTimeout(() => {
        handleSend();
      }, 500);
    }
  });

  // Your GSAP animation code remains unchanged.
  const tl = gsap.timeline({ scrollTrigger: { trigger: '#about', start: 'top 70%' } });
  tl.from('#about h2', { opacity: 0, y: 50, duration: 0.8, ease: 'power3.out' })
    .from('#about .order-2', { opacity: 0, x: 50, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    .from('#about .order-1', { opacity: 0, x: -50, duration: 0.8, ease: 'power3.out' }, '-=0.6')
    .from('#about .group', { opacity: 0, y: 20, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '-=0.4')
});
</script>