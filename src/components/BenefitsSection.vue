<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
    <!-- Background Decorative Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-10 right-10 w-40 h-40 bg-pink-200 rounded-full opacity-10 animate-pulse"></div>
      <div class="absolute bottom-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Mengapa Memilih 
          <span class="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Platform Kami?
          </span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Kami memahami tantangan dalam merencanakan pernikahan. Mari selesaikan bersama!
        </p>
      </div>

      <!-- Benefits Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Benefit 1: Save Time -->
        <div class="group relative">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
            <!-- Icon Container -->
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ClockIcon class="w-8 h-8 text-white" />
              </div>
              <!-- Floating Badge -->
              <div class="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckIcon class="w-4 h-4 text-white" />
              </div>
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-4">Hemat Waktu</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Tidak perlu lagi menghabiskan waktu berjam-jam untuk mencatat budget di Excel atau membuat undangan manual. Semua otomatis dan terintegrasi.
            </p>

            <!-- Stats -->
            <div class="bg-blue-50 rounded-lg p-4">
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-600">Waktu yang dihemat</span>
                <span class="text-lg font-bold text-blue-600">80%</span>
              </div>
              <div class="w-full bg-blue-200 rounded-full h-2 mt-2">
                <div class="bg-blue-500 h-2 rounded-full" style="width: 80%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Benefit 2: Avoid Overbudget -->
        <div class="group relative">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
            <!-- Icon Container -->
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CurrencyDollarIcon class="w-8 h-8 text-white" />
              </div>
              <!-- Floating Badge -->
              <div class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <XMarkIcon class="w-4 h-4 text-white" />
              </div>
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-4">Terhindar dari Overbudget</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Kalkulator budget yang akurat membantu Anda mengontrol pengeluaran dan memberikan alert ketika mendekati batas budget.
            </p>

            <!-- Budget Alert Demo -->
            <div class="bg-green-50 rounded-lg p-4 border border-green-200">
              <div class="flex items-center space-x-2 mb-2">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-sm font-medium text-green-700">Budget Terkontrol</span>
              </div>
              <div class="text-xs text-green-600">
                Sisa budget: Rp 12.000.000 (24%)
              </div>
            </div>
          </div>
        </div>

        <!-- Benefit 3: All Organized -->
        <div class="group relative md:col-span-2 lg:col-span-1">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
            <!-- Icon Container -->
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FolderIcon class="w-8 h-8 text-white" />
              </div>
              <!-- Floating Badge -->
              <div class="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <SparklesIcon class="w-4 h-4 text-white" />
              </div>
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-4">Semua Terorganisir di Satu Tempat</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Dashboard terpusat untuk mengelola budget, undangan, daftar tamu, timeline, dan semua aspek pernikahan Anda.
            </p>

            <!-- Organization Demo -->
            <div class="space-y-2">
              <div class="flex items-center space-x-3 p-2 bg-purple-50 rounded-lg">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-sm text-gray-700">Budget Planning ✓</span>
              </div>
              <div class="flex items-center space-x-3 p-2 bg-purple-50 rounded-lg">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-sm text-gray-700">Guest Management ✓</span>
              </div>
              <div class="flex items-center space-x-3 p-2 bg-purple-50 rounded-lg">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-sm text-gray-700">Timeline Tracking ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Benefits -->
      <div class="mt-16 bg-white rounded-2xl p-8 shadow-lg">
        <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Keuntungan Tambahan</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <DevicePhoneMobileIcon class="w-6 h-6 text-pink-600" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Mobile Friendly</h4>
            <p class="text-sm text-gray-600">Akses dari mana saja, kapan saja</p>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CloudIcon class="w-6 h-6 text-blue-600" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Cloud Storage</h4>
            <p class="text-sm text-gray-600">Data aman tersimpan di cloud</p>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <ChatBubbleLeftRightIcon class="w-6 h-6 text-green-600" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">24/7 Support</h4>
            <p class="text-sm text-gray-600">Tim support siap membantu</p>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <GiftIcon class="w-6 h-6 text-purple-600" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Template Gratis</h4>
            <p class="text-sm text-gray-600">Berbagai template siap pakai</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  ClockIcon, 
  CurrencyDollarIcon, 
  FolderIcon, 
  CheckIcon, 
  XMarkIcon, 
  SparklesIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  ChatBubbleLeftRightIcon,
  GiftIcon
} from '@heroicons/vue/24/outline'
</script>

<style scoped>
/* Additional animations */
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}
</style>