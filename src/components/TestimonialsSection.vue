<template>
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-5">
      <header class="text-center mb-12 animate-on-scroll">
        <h2 class="font-playfair text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">Kata Mereka</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">Testimoni singkat yang membangun kepercayaan.</p>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <figure class="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg animate-on-scroll" v-for="(t, i) in data" :key="i">
          <img :src="t.photo" alt="" class="w-16 h-16 rounded-full object-cover mx-auto mb-4" />
          <blockquote class="text-gray-900 mb-3 text-lg leading-relaxed">"{{ t.quote }}"</blockquote>
          <figcaption class="text-gray-600 font-medium">— {{ t.name }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
const data = [
  { name: 'Rani & Dion', quote: 'Semuanya lebih terkontrol dan hemat waktu!', photo: 'https://i.pravatar.cc/80?img=5' },
  { name: 'Ayu & Fajar', quote: 'Undangannya elegan, RSVP juga gampang.', photo: 'https://i.pravatar.cc/80?img=15' },
  { name: 'Nadia & Rio', quote: 'Budgetingnya bantu banget biar nggak over.', photo: 'https://i.pravatar.cc/80?img=25' },
]
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

/* Stagger animation for cards */
.animate-on-scroll:nth-child(1) { transition-delay: 0.1s; }
.animate-on-scroll:nth-child(2) { transition-delay: 0.2s; }
.animate-on-scroll:nth-child(3) { transition-delay: 0.3s; }

/* Custom font family */
.font-playfair {
  font-family: 'Playfair Display', serif;
}
</style>
