<template>
  <section class="py-16 bg-gradient-to-r from-pink-100 via-white to-blue-100" id="signup">
    <div class="max-w-6xl mx-auto px-5 text-center">
      <header class="mb-12 animate-on-scroll">
        <h2 class="font-playfair text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">Mulai Gratis</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">Semua fitur dasar tanpa biaya. Upgrade nanti saat dibutuhkan.</p>
      </header>
      <div class="inline-block bg-white border border-gray-200 rounded-2xl p-8 shadow-lg animate-on-scroll">
        <div class="font-playfair text-6xl mb-4 text-gray-900">Rp 0</div>
        <ul class="list-none p-0 m-0 mb-6 text-gray-700 space-y-2 text-lg">
          <li>Budget Planner</li>
          <li>Undangan Digital</li>
          <li>RSVP Tracking</li>
        </ul>
        <a href="#" class="inline-block px-8 py-4 rounded-full bg-gray-900 text-white font-semibold text-lg hover:bg-gray-800 transition-colors duration-200">
          Daftar Gratis
        </a>
      </div>
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
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animate-on-scroll.animate {
  opacity: 1;
  transform: translateY(0);
}

/* Custom font family */
.font-playfair {
  font-family: 'Playfair Display', serif;
}
</style>
