<template>
  <section class="py-20 bg-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" :style="{ backgroundImage: 'url(data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ff69b4 fill-opacity=0.1%3E%3Ccircle cx=30 cy=30 r=4/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)' }"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Apa Kata 
          <span class="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Pasangan Bahagia?
          </span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Ribuan pasangan telah mempercayai platform kami untuk merencanakan hari bahagia mereka
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Testimonial 1 -->
        <div class="group relative">
          <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-pink-100">
            <!-- Quote Icon -->
            <div class="absolute top-4 right-4 opacity-20">
              <svg class="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <!-- Testimonial Content -->
            <div class="mb-6">
              <p class="text-gray-700 leading-relaxed italic">
                "Platform ini benar-benar menyelamatkan pernikahan kami! Budget planner-nya sangat membantu mengontrol pengeluaran, dan undangan digitalnya elegan banget."
              </p>
            </div>

            <!-- Rating -->
            <div class="flex items-center mb-4">
              <div class="flex space-x-1">
                <StarIcon class="w-5 h-5 text-yellow-400 fill-current" />
                <StarIcon class="w-5 h-5 text-yellow-400 fill-current" />
                <StarIcon class="w-5 h-5 text-yellow-400 fill-current" />
                <StarIcon class="w-5 h-5 text-yellow-400 fill-current" />
                <StarIcon class="w-5 h-5 text-yellow-400 fill-current" />
              </div>
              <span class="ml-2 text-sm text-gray-600">5.0</span>
            </div>

            <!-- User Info -->
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                S&A
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-gray-900">Sarah & Ahmad</h4>
                <p class="text-sm text-gray-600">Menikah Juni 2024</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="group relative">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100">
            <!-- Quote Icon -->
            <div class="absolute top-4 right-4 opacity-20">
              <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <!-- Testimonial Content -->
            <div class="mb-6">
              <p class="text-gray-700 leading-relaxed italic">
                "RSVP tracking-nya luar biasa! Kami bisa pantau konfirmasi tamu secara real-time. Tidak ada lagi kebingungan soal jumlah tamu yang datang."
              </p>
            </div>

            <!-- Rating -->
            <div class="flex items-center mb-4">
              <div class="flex space-x-1">
                <StarIcon class="w-5 h-5 text-yellow-400 fill-current" />
                <StarIcon class="w-5 h-5 text-yellow-400 fill-current" />
                <StarIcon class="w-5 h-5 text-yellow-400 fill-current" />
                <StarIcon class="w-5 h-5 text-yellow-400 fill-current" />
                <StarIcon class="w-5 h-5 text-yellow-400 fill-current" />
              </div>
              <span class="ml-2 text-sm text-gray-600">5.0</span>
            </div>

            <!-- User Info -->
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                D&R
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-gray-900">Dina & Rizki</h4>
                <p class="text-sm text-gray-600">Menikah Agustus 2024</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="group relative">
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-green-100">
            <!-- Quote Icon -->
            <div class="absolute top-4 right-4 opacity-20">
              <svg class="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <!-- Testimonial Content -->
            <div class="mb-6">
              <p class="text-gray-700 leading-relaxed italic">
                "Semua fiturnya lengkap dan mudah digunakan. Timeline pernikahan kami jadi lebih terorganisir. Highly recommended untuk calon pengantin!"
              </p>
            </div>

            <!-- Rating -->
            <div class="flex items-center mb-4">
              <div class="flex space-x-1">
                <StarIcon class="w-5 h-5 text-yellow-400 fill-current" />
                <StarIcon class="w-5 h-5 text-yellow-400 fill-current" />
                <StarIcon class="w-5 h-5 text-yellow-400 fill-current" />
                <StarIcon class="w-5 h-5 text-yellow-400 fill-current" />
                <StarIcon class="w-5 h-5 text-yellow-400 fill-current" />
              </div>
              <span class="ml-2 text-sm text-gray-600">5.0</span>
            </div>

            <!-- User Info -->
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                M&F
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-gray-900">Maya & Fajar</h4>
                <p class="text-sm text-gray-600">Menikah September 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mt-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl font-bold mb-2">1000+</div>
            <div class="text-pink-100">Pasangan Bahagia</div>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">4.9/5</div>
            <div class="text-pink-100">Rating Kepuasan</div>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">50M+</div>
            <div class="text-pink-100">Budget Terkelola</div>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">24/7</div>
            <div class="text-pink-100">Customer Support</div>
          </div>
        </div>
      </div>

      <!-- Additional Testimonials Carousel Hint -->
      <div class="mt-12 text-center">
        <p class="text-gray-600 mb-4">Lihat lebih banyak testimoni dari pasangan bahagia lainnya</p>
        <div class="flex justify-center space-x-2">
          <div class="w-2 h-2 bg-pink-400 rounded-full"></div>
          <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/solid'
</script>

<style scoped>
/* Custom animations for testimonials */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group:hover .animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}
</style>