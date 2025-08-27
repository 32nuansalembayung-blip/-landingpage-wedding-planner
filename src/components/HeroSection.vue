<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-blue-50">
    <!-- Background Decorative Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-500"></div>
    </div>

    <!-- Wave Divider -->
    <div class="absolute bottom-0 left-0 w-full">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block w-full h-16 fill-white">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
      </svg>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="space-y-8">
        <!-- Main Headline -->
        <div class="space-y-4">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span class="block">Plan Your Dream Wedding,</span>
            <span class="block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Stress-Free
            </span>
          </h1>
          
          <!-- Sub-headline -->
          <p class="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Atur budget, undangan online, dan semua persiapan hanya dari satu aplikasi.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button class="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out">
            <span class="relative z-10">Mulai Gratis</span>
            <div class="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button class="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-pink-400 hover:text-pink-600 transform hover:scale-105 transition-all duration-300 ease-out">
            Coba Kalkulator Budget
          </button>
        </div>

        <!-- Trust Indicators -->
        <div class="pt-12 space-y-4">
          <p class="text-sm text-gray-500 uppercase tracking-wide font-medium">
            Dipercaya oleh 1000+ pasangan
          </p>
          <div class="flex justify-center items-center space-x-8 opacity-60">
            <div class="flex items-center space-x-1">
              <HeartIcon class="w-5 h-5 text-pink-400" />
              <span class="text-sm text-gray-600">Mudah digunakan</span>
            </div>
            <div class="flex items-center space-x-1">
              <ShieldCheckIcon class="w-5 h-5 text-green-400" />
              <span class="text-sm text-gray-600">100% Gratis</span>
            </div>
            <div class="flex items-center space-x-1">
              <SparklesIcon class="w-5 h-5 text-purple-400" />
              <span class="text-sm text-gray-600">Hasil Profesional</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Illustration -->
      <div class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 hidden lg:block">
        <div class="relative">
          <div class="w-64 h-64 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-30 animate-pulse"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <HeartIcon class="w-32 h-32 text-pink-300 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { HeartIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>