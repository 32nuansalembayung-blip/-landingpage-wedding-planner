<template>
  <section class="relative overflow-hidden bg-gradient-to-r from-pink-100 via-white to-blue-100 py-24 md:py-32" id="home">
    <div class="absolute inset-0" aria-hidden="true">
      <div class="absolute top-0 left-0 w-96 h-96 bg-pink-200/25 rounded-full blur-3xl"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-200/25 rounded-full blur-3xl"></div>
    </div>
    
    <div class="max-w-6xl mx-auto px-5 animate-on-scroll">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <div class="lg:col-span-3">
          <h1 class="font-playfair text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-800 mb-4">
            Plan Your Dream Wedding, Stress-Free
          </h1>
          <p class="text-lg text-gray-600 mb-6">
            Atur budget, undangan online, dan semua persiapan hanya dari satu aplikasi.
          </p>
          <div class="flex gap-3 flex-wrap mb-4">
            <a href="#signup" class="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:scale-105">
              Mulai Gratis
            </a>
            <a href="#calculator" class="inline-block px-6 py-3 rounded-full bg-white/80 border border-gray-200 text-gray-700 font-semibold backdrop-blur-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
              Coba Kalkulator Budget
            </a>
          </div>
          <div class="flex items-center gap-2 text-gray-500">
            <span class="px-3 py-1 rounded-full bg-white border border-gray-100 text-sm">Elegan</span>
            <span class="w-1 h-1 rounded-full bg-gray-300"></span>
            <span class="px-3 py-1 rounded-full bg-white border border-gray-100 text-sm">Mudah</span>
            <span class="w-1 h-1 rounded-full bg-gray-300"></span>
            <span class="px-3 py-1 rounded-full bg-white border border-gray-100 text-sm">Terorganisir</span>
          </div>
        </div>
        
        <div class="lg:col-span-2">
          <div class="w-full max-w-sm aspect-square bg-white/70 border border-gray-200 rounded-3xl flex items-center justify-center shadow-2xl mx-auto">
            <!-- Minimal outline illustration using SVG -->
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-3/4 h-auto">
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#f9a8d4"/>
                  <stop offset="100%" stop-color="#bfdbfe"/>
                </linearGradient>
              </defs>
              <circle cx="80" cy="100" r="40" fill="none" stroke="url(#grad)" stroke-width="6"/>
              <circle cx="120" cy="100" r="40" fill="none" stroke="url(#grad)" stroke-width="6"/>
              <path d="M95 55 l12 -18 l12 18" fill="none" stroke="#f5a" stroke-linecap="round" stroke-width="4"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <div class="absolute left-0 right-0 -bottom-px" aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" class="w-full h-auto">
        <path d="M0,64L80,58.7C160,53,320,43,480,64C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" fill="url(#waveGrad)" fill-opacity="0.5"></path>
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#ffe4e6"></stop>
            <stop offset="50%" stop-color="#ffffff"></stop>
            <stop offset="100%" stop-color="#e0f2fe"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </section>
</template>

<script setup>
// No external dependencies needed
</script>

<style scoped>
/* Animation classes */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.animate-on-scroll.animate {
  opacity: 1;
  transform: translateY(0);
}

/* Custom font family */
.font-playfair {
  font-family: 'Playfair Display', serif;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .lg\:col-span-2 {
    order: -1;
  }
}
</style>
