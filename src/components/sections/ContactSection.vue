<template>
  <section id="contact" class="section bg-light py-12 sm:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-white">Contact Me</h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        <!-- Contact form replaced with a simple game -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center min-h-[340px] border border-primary/10 dark:border-primary/20 transition-all duration-300">
          <h3 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary dark:text-primary-light text-center drop-shadow">Tired of reading too much? Play a game!</h3>
          <div class="w-full max-w-xs flex flex-col items-center gap-2 sm:gap-3">
            <p class="mb-1 text-gray-700 dark:text-gray-200 text-center text-base sm:text-lg">I'm thinking of a number between <span class="font-semibold text-primary">1</span> and <span class="font-semibold text-primary">100</span>. Can you guess it?</p>
            <div class="flex items-center justify-center gap-2 mb-2">
              <p class="text-primary text-center text-sm sm:text-base font-medium">My best was <span class="font-bold">5 tries</span>. Can you beat it?</p>
              <button @click="toggleHint" class="flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 cursor-pointer group relative"
                :class="showHint ? 'bg-orange-400 shadow-lg shadow-orange-400/50' : 'bg-orange-500 hover:bg-orange-600'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-all duration-300"
                  :class="showHint ? 'text-white drop-shadow-sm' : 'text-white'"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                </svg>
                <div v-if="showHint" class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-orange-500 text-white text-xs rounded-lg shadow-lg whitespace-nowrap z-10 animate-fade-in">
                  use binary search 😉
                  <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-orange-500"></div>
                </div>
              </button>
            </div>
            <input v-model.number="guess" type="number" min="1" max="100"
              class="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/50 text-center text-lg font-semibold shadow-sm transition-all duration-200 mb-2"
              placeholder="Enter your guess..." @keyup.enter="checkGuess" />
            <button @click="checkGuess" class="btn btn-primary w-full mb-2 text-base sm:text-lg font-semibold shadow-md">Guess</button>
            <div v-if="gameMessage" class="text-center mt-2 text-base sm:text-lg font-semibold px-3 py-2 rounded-lg transition-all duration-200"
              :class="gameStatus === 'win' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 shadow' : (gameStatus === 'lose' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 shadow' : 'bg-primary/5 text-primary dark:bg-primary/10 dark:text-primary-light')">
              {{ gameMessage }}
            </div>
            <div v-if="showBeatSantosh && gameStatus === 'win'" @click="copyBeatSantosh"
              class="mt-3 px-4 py-2 rounded-lg bg-primary/90 text-white font-bold text-center cursor-pointer shadow-lg hover:bg-accent transition-all duration-200 select-none animate-bounce">
              You beat Santosh! (Click to copy)
            </div>
            <div v-if="showPopup" class="fixed left-1/2 bottom-10 z-50 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg text-lg font-semibold animate-fade-in">
              Tell this to Sarah to see a surprise!(Ctrl + V in the chat)
            </div>
            <button v-if="gameStatus === 'win' || gameStatus === 'lose'" @click="resetGame" class="btn btn-outline w-full mt-2 text-base font-semibold">Play Again</button>
          </div>
        </div>

        <!-- Contact information -->
        <div class="flex flex-col justify-center text-gray-900 dark:text-white">
          <div class="mb-6 sm:mb-8">
            <h3 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">Contact Information</h3>

            <div class="space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 sm:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-base sm:text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                  <a href="mailto:santoshkanumuri@gmail.com" class="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">santoshkanumuri@gmail.com</a>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 sm:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-base sm:text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                  <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300">806-702-1121</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 sm:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-base sm:text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                  <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300">Dallas, TX</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-semibold mb-6">Connect With Me</h3>

            <div class="flex space-x-4">
              <a href="https://github.com/santoshkanumuri" target="_blank" rel="noopener noreferrer" class="h-12 w-12 rounded-full bg-dark flex items-center justify-center bg-black hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/santoshkanumuri" target="_blank" rel="noopener noreferrer" class="h-12 w-12 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:santoshkanumuri@gmail.com" class="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
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

// --- Guess the Number Game State ---
const secretNumber = ref(Math.floor(Math.random() * 100) + 1);
console.log(secretNumber.value);
const guess = ref(null);
const gameMessage = ref('');
const gameStatus = ref('playing'); // 'playing', 'win', 'lose'
const attempts = ref(0);
const showBeatSantosh = ref(false);
const showPopup = ref(false);
const showHint = ref(false);

function checkGuess() {
  if (gameStatus.value !== 'playing') return;
  if (!guess.value || guess.value < 1 || guess.value > 100) {
    gameMessage.value = 'Please enter a number between 1 and 100.';
    return;
  }
  attempts.value++;
  if (guess.value === secretNumber.value) {
    gameMessage.value = `🎉 Correct! The number was ${secretNumber.value}. You guessed it in ${attempts.value} tries.`;
    gameStatus.value = 'win';
    showBeatSantosh.value = attempts.value < 5;

    // Auto-scroll to about section and trigger chat
    if (attempts.value < 5) {
      // Close mobile keyboard by blurring the input
      const gameInput = document.querySelector('#contact input[type="number"]');
      if (gameInput) {
        gameInput.blur();
      }

      setTimeout(() => {
        // Scroll to about section
        document.getElementById('about').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Wait for scroll to complete, then trigger chat
        setTimeout(() => {
          // Dispatch custom event to trigger chat
          window.dispatchEvent(new CustomEvent('trigger-chat', {
            detail: { message: 'I beat Santosh at Guess the Number!' }
          }));
        }, 1000); // Wait 1 second after scroll
      }, 1500); // Wait 1.5 seconds after win message
    }
  } else if (attempts.value >= 10) {
    gameMessage.value = `❌ Out of tries! The number was ${secretNumber.value}.`;
    gameStatus.value = 'lose';
    showBeatSantosh.value = false;
  } else if (guess.value < secretNumber.value) {
    gameMessage.value = 'Too low! Try a higher number.';
  } else {
    gameMessage.value = 'Too high! Try a lower number.';
  }
  guess.value = null;
}

function resetGame() {
  secretNumber.value = Math.floor(Math.random() * 100) + 1;
  guess.value = null;
  gameMessage.value = '';
  gameStatus.value = 'playing';
  attempts.value = 0;
  showBeatSantosh.value = false;
}

function copyBeatSantosh() {
  navigator.clipboard.writeText('I beat Santosh at Guess the Number!');
  showPopup.value = true;
  setTimeout(() => { showPopup.value = false; }, 2500);
}

function toggleHint() {
  showHint.value = !showHint.value;
}

onMounted(() => {
  // Animate section elements when scrolled into view
  gsap.from('#contact h2', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out'
  });

  gsap.from('#contact .grid > div:first-child', {
    scrollTrigger: {
      trigger: '#contact .grid',
      start: 'top 70%',
    },
    opacity: 0,
    x: -50,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out'
  });

  gsap.from('#contact .grid > div:last-child', {
    scrollTrigger: {
      trigger: '#contact .grid',
      start: 'top 70%',
    },
    opacity: 0,
    x: 50,
    duration: 0.8,
    delay: 0.4,
    ease: 'power3.out'
  });
});
</script>
