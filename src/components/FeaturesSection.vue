<template>
  <section class="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,182,193,0.3) 1px, transparent 0); background-size: 20px 20px;"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Fitur Utama yang 
          <span class="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Memudahkan
          </span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Semua yang Anda butuhkan untuk merencanakan pernikahan impian dalam satu platform
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <!-- Budget Planner Feature -->
        <div class="group relative">
                      <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-4 sm:p-6 lg:p-8 h-full border border-pink-100 hover:border-pink-200 transition-all duration-300 hover:shadow-xl hover:scale-105">
            <!-- Icon -->
                          <div class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <CalculatorIcon class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
            
            <!-- Content -->
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Budget Planner</h3>
            <p class="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Kalkulator interaktif yang membantu Anda merencanakan budget pernikahan dengan detail dan akurat
            </p>
            
            <!-- Mock Screenshot -->
            <div class="bg-white rounded-lg p-4 shadow-inner border">
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">Venue</span>
                  <span class="text-sm font-semibold text-gray-900">Rp 25.000.000</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">Catering</span>
                  <span class="text-sm font-semibold text-gray-900">Rp 15.000.000</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">Dekorasi</span>
                  <span class="text-sm font-semibold text-gray-900">Rp 8.000.000</span>
                </div>
                <hr class="border-gray-200">
                <div class="flex justify-between items-center font-bold">
                  <span class="text-sm text-gray-900">Total</span>
                  <span class="text-sm text-pink-600">Rp 48.000.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Online Invitation Feature -->
        <div class="group relative">
                      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 lg:p-8 h-full border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:scale-105">
            <!-- Icon -->
                          <div class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <EnvelopeIcon class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
            
            <!-- Content -->
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Online Invitation</h3>
            <p class="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Buat undangan digital yang elegan dan personal dengan template yang dapat disesuaikan
            </p>
            
            <!-- Mock Invitation -->
            <div class="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-4 text-center border">
              <div class="space-y-2">
                <div class="w-8 h-8 bg-pink-300 rounded-full mx-auto mb-2"></div>
                <h4 class="text-sm font-bold text-gray-800">Sarah & Ahmad</h4>
                <p class="text-xs text-gray-600">Sabtu, 15 Juni 2024</p>
                <p class="text-xs text-gray-600">Gedung Serbaguna</p>
                <button class="mt-2 px-3 py-1 bg-pink-500 text-white text-xs rounded-full">
                  Konfirmasi Kehadiran
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- RSVP Tracking Feature -->
        <div class="group relative">
                      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-6 lg:p-8 h-full border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-xl hover:scale-105">
            <!-- Icon -->
                          <div class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <UserGroupIcon class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
            
            <!-- Content -->
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">RSVP Tracking</h3>
            <p class="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Pantau konfirmasi kehadiran tamu secara real-time dan kelola daftar tamu dengan mudah
            </p>
            
            <!-- Mock RSVP Stats -->
            <div class="bg-white rounded-lg p-4 shadow-inner border">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">Total Undangan</span>
                  <span class="text-sm font-semibold text-gray-900">150</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">Konfirmasi Hadir</span>
                  <span class="text-sm font-semibold text-green-600">120</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">Belum Konfirmasi</span>
                  <span class="text-sm font-semibold text-orange-600">30</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div class="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style="width: 80%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Features Preview -->
      <div class="mt-16 text-center">
        <p class="text-gray-600 mb-6">Dan masih banyak fitur lainnya...</p>
        <div class="flex flex-wrap justify-center gap-4">
          <span class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Timeline Pernikahan</span>
          <span class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Vendor Directory</span>
          <span class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Guest List Manager</span>
          <span class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Photo Gallery</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CalculatorIcon from '@heroicons/vue/24/outline/CalculatorIcon'
import EnvelopeIcon from '@heroicons/vue/24/outline/EnvelopeIcon'
import UserGroupIcon from '@heroicons/vue/24/outline/UserGroupIcon'
</script>

<style scoped>
/* Additional custom styles if needed */
</style>