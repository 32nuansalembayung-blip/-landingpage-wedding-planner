<template>
  <section class="py-16 bg-white" id="features">
    <div class="max-w-6xl mx-auto px-5">
      <header class="text-center mb-12 animate-on-scroll">
        <h2 class="font-playfair text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">Fitur Utama</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">Atur semua persiapan pernikahan tanpa ribet – dari budget sampai undangan digital.</p>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article class="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 animate-on-scroll">
          <div class="w-12 h-12 grid place-items-center rounded-xl bg-gradient-to-br from-pink-100 to-blue-100 mb-4">
            <BanknotesIcon class="w-6 h-6 text-gray-500"/>
          </div>
          <h3 class="font-bold text-xl text-gray-900 mb-3">{{ getCardTitle(0) }}</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">{{ getCardText(0) }}</p>
          <div class="border border-dashed border-gray-200 rounded-xl p-4 bg-gray-50">
            <div class="flex justify-between py-2 text-gray-700"><span>Venue</span><span class="font-medium">Rp 20.000.000</span></div>
            <div class="flex justify-between py-2 text-gray-700"><span>Dekorasi</span><span class="font-medium">Rp 8.000.000</span></div>
            <div class="flex justify-between py-2 font-bold text-gray-900 border-t border-gray-200 pt-2"><span>Total</span><span>Rp 28.000.000</span></div>
          </div>
        </article>
        
        <article class="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 animate-on-scroll">
          <div class="w-12 h-12 grid place-items-center rounded-xl bg-gradient-to-br from-pink-100 to-blue-100 mb-4">
            <EnvelopeIcon class="w-6 h-6 text-gray-500"/>
          </div>
          <h3 class="font-bold text-xl text-gray-900 mb-3">{{ getCardTitle(1) }}</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">{{ getCardText(1) }}</p>
          <div class="flex justify-center">
            <div class="w-48 aspect-[3/4] border border-gray-200 rounded-2xl p-5 text-center bg-gradient-to-b from-white to-blue-50 shadow-lg">
              <div class="font-playfair text-3xl text-gray-900 mb-2">A & B</div>
              <div class="text-gray-500 mb-4">Sabtu, 12 Okt 2025</div>
              <div class="inline-block px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium">Lihat Undangan</div>
            </div>
          </div>
        </article>
        
        <article class="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 animate-on-scroll md:col-span-2 lg:col-span-1">
          <div class="w-12 h-12 grid place-items-center rounded-xl bg-gradient-to-br from-pink-100 to-blue-100 mb-4">
            <CheckCircleIcon class="w-6 h-6 text-gray-500"/>
          </div>
          <h3 class="font-bold text-xl text-gray-900 mb-3">{{ getCardTitle(2) }}</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">{{ getCardText(2) }}</p>
          <div class="flex gap-3 flex-wrap">
            <div class="px-4 py-2 rounded-full text-sm bg-green-100 text-green-800 font-medium">Hadir 120</div>
            <div class="px-4 py-2 rounded-full text-sm bg-orange-100 text-orange-800 font-medium">Belum 45</div>
            <div class="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 font-medium">Tidak 10</div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { BanknotesIcon, EnvelopeIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'

const getCardTitle = (index) => {
  const titles = ['Budget Planner', 'Online Invitation', 'RSVP Tracking']
  return titles[index]
}

const getCardText = (index) => {
  const texts = [
    'Kalkulator interaktif sederhana untuk merencanakan dan memonitor pengeluaran.',
    'Contoh undangan digital elegan, siap dibagikan ke tamu secara instan.',
    'Mudah memantau konfirmasi kehadiran tamu dan kebutuhan kursi.'
  ]
  return texts[index]
}
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
