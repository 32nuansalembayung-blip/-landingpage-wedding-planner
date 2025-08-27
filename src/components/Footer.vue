<template>
  <footer class="bg-gray-900 text-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" :style="{ backgroundImage: 'url(data:image/svg+xml,%3Csvg width=40 height=40 viewBox=0 0 40 40 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=%23ffffff fill-opacity=0.1%3E%3Cpath d=M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z/%3E%3C/g%3E%3C/svg%3E)' }"></div>
    </div>

    <div class="relative z-10">
      <!-- Main Footer Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Brand Section -->
          <div class="lg:col-span-2">
            <div class="mb-6">
              <h3 class="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                WeddingPlanner
              </h3>
              <p class="text-gray-400 mt-2 max-w-md">
                Platform terpercaya untuk merencanakan pernikahan impian Anda. Mudah, praktis, dan gratis selamanya.
              </p>
            </div>

            <!-- Newsletter Signup -->
            <div class="mb-8">
              <h4 class="text-lg font-semibold mb-4">Dapatkan Tips Pernikahan Gratis</h4>
              <div class="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Masukkan email Anda"
                  class="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500 text-white placeholder-gray-400"
                >
                <button class="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p class="text-xs text-gray-500 mt-2">
                Dapatkan tips, inspirasi, dan panduan pernikahan langsung ke inbox Anda.
              </p>
            </div>

            <!-- Social Media -->
            <div>
              <h4 class="text-lg font-semibold mb-4">Ikuti Kami</h4>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Navigation Links -->
          <div>
            <h4 class="text-lg font-semibold mb-6">Navigasi</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-400 hover:text-pink-400 transition-colors duration-300">Beranda</a></li>
              <li><a href="#" class="text-gray-400 hover:text-pink-400 transition-colors duration-300">Fitur</a></li>
              <li><a href="#" class="text-gray-400 hover:text-pink-400 transition-colors duration-300">Tentang Kami</a></li>
              <li><a href="#" class="text-gray-400 hover:text-pink-400 transition-colors duration-300">Testimoni</a></li>
              <li><a href="#" class="text-gray-400 hover:text-pink-400 transition-colors duration-300">Blog</a></li>
              <li><a href="#" class="text-gray-400 hover:text-pink-400 transition-colors duration-300">Hubungi Kami</a></li>
            </ul>
          </div>

          <!-- Support & Legal -->
          <div>
            <h4 class="text-lg font-semibold mb-6">Bantuan & Legal</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-400 hover:text-pink-400 transition-colors duration-300">Pusat Bantuan</a></li>
              <li><a href="#" class="text-gray-400 hover:text-pink-400 transition-colors duration-300">FAQ</a></li>
              <li><a href="#" class="text-gray-400 hover:text-pink-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" class="text-gray-400 hover:text-pink-400 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" class="text-gray-400 hover:text-pink-400 transition-colors duration-300">Kebijakan Cookie</a></li>
              <li><a href="#" class="text-gray-400 hover:text-pink-400 transition-colors duration-300">Sitemap</a></li>
            </ul>

            <!-- Contact Info -->
            <div class="mt-8">
              <h5 class="font-semibold mb-3">Kontak</h5>
              <div class="space-y-2 text-sm text-gray-400">
                <div class="flex items-center">
                  <EnvelopeIcon class="w-4 h-4 mr-2" />
                  <span>hello@weddingplanner.id</span>
                </div>
                <div class="flex items-center">
                  <PhoneIcon class="w-4 h-4 mr-2" />
                  <span>+62 812-3456-7890</span>
                </div>
                <div class="flex items-start">
                  <MapPinIcon class="w-4 h-4 mr-2 mt-0.5" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 WeddingPlanner. All rights reserved. Made with ❤️ for happy couples.
            </div>
            
            <!-- Language Selector -->
            <div class="flex items-center space-x-4">
              <select class="bg-gray-800 border border-gray-700 text-gray-400 text-sm rounded-lg px-3 py-1 focus:outline-none focus:border-pink-500">
                <option>🇮🇩 Bahasa Indonesia</option>
                <option>🇺🇸 English</option>
              </select>
              
              <!-- Back to Top -->
              <button 
                @click="scrollToTop"
                class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
              >
                <ChevronUpIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ChevronUpIcon 
} from '@heroicons/vue/24/outline'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
/* Custom scrollbar for select */
select::-webkit-scrollbar {
  width: 8px;
}

select::-webkit-scrollbar-track {
  background: #374151;
}

select::-webkit-scrollbar-thumb {
  background: #6b7280;
  border-radius: 4px;
}

select::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
</style>