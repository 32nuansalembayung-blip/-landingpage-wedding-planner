<template>
  <section class="py-16 bg-gradient-to-b from-gray-50 to-white" id="benefits">
    <div class="max-w-6xl mx-auto px-5">
      <header class="text-center mb-12 animate-on-scroll">
        <h2 class="font-playfair text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">Kenapa Calon Mempelai Suka</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">Fokus pada hal penting, biar aplikasi kami yang merapikan detailnya.</p>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article class="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 animate-on-scroll">
          <h3 class="font-bold text-xl text-gray-900 mb-3">Hemat waktu</h3>
          <p class="text-gray-600 leading-relaxed">Semua alat disatukan, dari perencanaan hingga monitoring.</p>
        </article>
        <article class="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 animate-on-scroll">
          <h3 class="font-bold text-xl text-gray-900 mb-3">Terhindar dari overbudget</h3>
          <p class="text-gray-600 leading-relaxed">Anggaran terkendali dengan kalkulator dan tracking realtime.</p>
        </article>
        <article class="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 animate-on-scroll md:col-span-2 lg:col-span-1">
          <h3 class="font-bold text-xl text-gray-900 mb-3">Terorganisir</h3>
          <p class="text-gray-600 leading-relaxed">Checklist, undangan, dan RSVP dalam satu tempat rapi.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
// No external dependencies needed
</script>

<style scoped>
/* Animation classes - keeping only essential custom styles */
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
