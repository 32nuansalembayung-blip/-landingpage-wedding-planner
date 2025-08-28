<template>
  <footer class="relative bg-gray-900 text-gray-300 pt-8" id="contact">
    <div class="absolute left-0 right-0 -top-px" aria-hidden="true">
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
    <div class="max-w-6xl mx-auto px-5 py-12">
      <div class="grid gap-6 justify-items-center">
        <div class="font-playfair text-3xl text-white">Wedding Planner</div>
        <nav class="flex gap-6">
          <a href="#about" class="text-gray-300 hover:text-white transition-colors duration-200">Tentang</a>
          <a href="#features" class="text-gray-300 hover:text-white transition-colors duration-200">Fitur</a>
          <a href="#contact" class="text-gray-300 hover:text-white transition-colors duration-200">Hubungi</a>
          <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a>
        </nav>
        <div class="flex gap-4">
          <a href="#" aria-label="Instagram" class="text-gray-300 hover:text-white transition-colors duration-200">IG</a>
          <a href="#" aria-label="Twitter" class="text-gray-300 hover:text-white transition-colors duration-200">TW</a>
          <a href="#" aria-label="Tiktok" class="text-gray-300 hover:text-white transition-colors duration-200">TT</a>
        </div>
        <div class="text-sm text-gray-400">© {{ new Date().getFullYear() }} Wedding Planner</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No external dependencies needed
</script>

<style scoped>
/* Custom font family */
.font-playfair {
  font-family: 'Playfair Display', serif;
}
</style>
