<template>
  <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
    <!-- Background Decorative Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-20 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-40 h-40 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse delay-500"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Mulai 
          <span class="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Gratis Sekarang!
          </span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Tidak ada biaya tersembunyi. Mulai merencanakan pernikahan impian Anda hari ini juga!
        </p>
      </div>

      <!-- Pricing Card -->
      <div class="max-w-lg mx-auto">
        <div class="relative">
          <!-- Popular Badge -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              🎉 Paling Populer
            </div>
          </div>

          <!-- Main Pricing Card -->
          <div class="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <!-- Header -->
            <div class="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-8 text-center text-white">
              <h3 class="text-2xl font-bold mb-2">Wedding Planner</h3>
              <p class="text-pink-100 mb-6">Semua fitur untuk pernikahan sempurna</p>
              
              <!-- Price -->
              <div class="mb-6">
                <div class="flex items-center justify-center">
                  <span class="text-5xl font-bold">GRATIS</span>
                </div>
                <p class="text-pink-100 mt-2">Selamanya • Tanpa batas</p>
              </div>

              <!-- CTA Button -->
              <button class="w-full bg-white text-purple-600 font-bold py-4 px-8 rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Daftar Gratis Sekarang
              </button>
            </div>

            <!-- Features List -->
            <div class="px-8 py-8">
              <h4 class="font-bold text-gray-900 mb-6 text-center">Yang Anda Dapatkan:</h4>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <CheckCircleIcon class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span class="text-gray-700">Budget Planner dengan kalkulator otomatis</span>
                </li>
                <li class="flex items-center">
                  <CheckCircleIcon class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span class="text-gray-700">Undangan digital unlimited</span>
                </li>
                <li class="flex items-center">
                  <CheckCircleIcon class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span class="text-gray-700">RSVP tracking real-time</span>
                </li>
                <li class="flex items-center">
                  <CheckCircleIcon class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span class="text-gray-700">Guest list management</span>
                </li>
                <li class="flex items-center">
                  <CheckCircleIcon class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span class="text-gray-700">Timeline pernikahan</span>
                </li>
                <li class="flex items-center">
                  <CheckCircleIcon class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span class="text-gray-700">Template undangan premium</span>
                </li>
                <li class="flex items-center">
                  <CheckCircleIcon class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span class="text-gray-700">Cloud storage untuk foto & dokumen</span>
                </li>
                <li class="flex items-center">
                  <CheckCircleIcon class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span class="text-gray-700">24/7 customer support</span>
                </li>
              </ul>
            </div>

            <!-- Bonus Section -->
            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 px-8 py-6 border-t border-gray-100">
              <div class="text-center">
                <h5 class="font-bold text-gray-900 mb-2">🎁 Bonus Eksklusif</h5>
                <p class="text-sm text-gray-600 mb-3">Daftar sekarang dan dapatkan:</p>
                <div class="space-y-1 text-sm text-gray-700">
                  <p>✨ E-book "Panduan Lengkap Pernikahan"</p>
                  <p>📋 Checklist pernikahan 6 bulan</p>
                  <p>💡 Konsultasi gratis dengan wedding expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="mt-16 text-center">
        <p class="text-gray-600 mb-8">Dipercaya oleh ribuan pasangan di seluruh Indonesia</p>
        
        <!-- Trust Badges -->
        <div class="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div class="flex items-center space-x-2">
            <ShieldCheckIcon class="w-6 h-6 text-green-500" />
            <span class="text-sm text-gray-600">100% Aman</span>
          </div>
          <div class="flex items-center space-x-2">
            <LockClosedIcon class="w-6 h-6 text-blue-500" />
            <span class="text-sm text-gray-600">Data Terlindungi</span>
          </div>
          <div class="flex items-center space-x-2">
            <HeartIcon class="w-6 h-6 text-pink-500" />
            <span class="text-sm text-gray-600">Tanpa Komitmen</span>
          </div>
          <div class="flex items-center space-x-2">
            <ClockIcon class="w-6 h-6 text-purple-500" />
            <span class="text-sm text-gray-600">Setup 5 Menit</span>
          </div>
        </div>
      </div>

      <!-- FAQ Preview -->
      <div class="mt-16 max-w-3xl mx-auto">
        <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Pertanyaan yang Sering Diajukan</h3>
        <div class="space-y-4">
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h4 class="font-semibold text-gray-900 mb-2">Apakah benar-benar gratis selamanya?</h4>
            <p class="text-gray-600 text-sm">Ya! Semua fitur utama tersedia gratis tanpa batas waktu. Tidak ada biaya tersembunyi.</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h4 class="font-semibold text-gray-900 mb-2">Bagaimana cara memulai?</h4>
            <p class="text-gray-600 text-sm">Cukup klik "Daftar Gratis" dan ikuti panduan setup yang mudah. Dalam 5 menit Anda sudah bisa mulai merencanakan!</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h4 class="font-semibold text-gray-900 mb-2">Apakah data saya aman?</h4>
            <p class="text-gray-600 text-sm">Tentu! Kami menggunakan enkripsi tingkat bank untuk melindungi semua data pribadi Anda.</p>
          </div>
        </div>
      </div>

      <!-- Final CTA -->
      <div class="mt-16 text-center">
        <div class="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Siap Memulai Pernikahan Impian?</h3>
          <p class="text-gray-600 mb-6">Bergabunglah dengan ribuan pasangan yang telah merasakan kemudahan merencanakan pernikahan bersama kami.</p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Mulai Gratis Sekarang
            </button>
            <button class="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-pink-400 hover:text-pink-600 transition-all duration-300">
              Lihat Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  CheckCircleIcon, 
  ShieldCheckIcon, 
  LockClosedIcon, 
  HeartIcon, 
  ClockIcon 
} from '@heroicons/vue/24/outline'
</script>

<style scoped>
/* Custom animations */
@keyframes shimmer {
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
}

.animate-shimmer {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  background-size: 200px 100%;
  animation: shimmer 2s infinite;
}
</style>