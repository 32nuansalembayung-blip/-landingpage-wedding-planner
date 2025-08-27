<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation Bar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <h1 class="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                WeddingPlanner
              </h1>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a href="#home" class="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Beranda
              </a>
              <a href="#features" class="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Fitur
              </a>
              <a href="#benefits" class="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Keuntungan
              </a>
              <a href="#testimonials" class="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Testimoni
              </a>
              <a href="#pricing" class="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Harga
              </a>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="hidden md:block">
            <button class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Mulai Gratis
            </button>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button 
              @click="toggleMobileMenu"
              class="text-gray-700 hover:text-pink-600 focus:outline-none focus:text-pink-600 transition-colors duration-300"
            >
              <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6" />
              <XMarkIcon v-else class="h-6 w-6" />
            </button>
          </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div v-show="mobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <a href="#home" class="text-gray-700 hover:text-pink-600 block px-3 py-2 text-base font-medium transition-colors duration-300">
              Beranda
            </a>
            <a href="#features" class="text-gray-700 hover:text-pink-600 block px-3 py-2 text-base font-medium transition-colors duration-300">
              Fitur
            </a>
            <a href="#benefits" class="text-gray-700 hover:text-pink-600 block px-3 py-2 text-base font-medium transition-colors duration-300">
              Keuntungan
            </a>
            <a href="#testimonials" class="text-gray-700 hover:text-pink-600 block px-3 py-2 text-base font-medium transition-colors duration-300">
              Testimoni
            </a>
            <a href="#pricing" class="text-gray-700 hover:text-pink-600 block px-3 py-2 text-base font-medium transition-colors duration-300">
              Harga
            </a>
            <div class="pt-4">
              <button class="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300">
                Mulai Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section id="home">
        <HeroSection />
      </section>

      <!-- Features Section -->
      <section id="features">
        <FeaturesSection />
      </section>

      <!-- Benefits Section -->
      <section id="benefits">
        <BenefitsSection />
      </section>

      <!-- Testimonials Section -->
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <!-- Pricing Section -->
      <section id="pricing">
        <PricingSection />
      </section>
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Floating Action Button -->
    <div class="fixed bottom-6 right-6 z-40">
      <button 
        @click="scrollToTop"
        v-show="showScrollTop"
        class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        <ChevronUpIcon class="w-6 h-6" />
      </button>
    </div>

    <!-- Floating CTA Button -->
    <div class="fixed bottom-6 left-6 z-40 hidden lg:block">
      <div class="bg-white rounded-full shadow-lg border border-gray-200 p-1">
        <button class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
          <HeartIcon class="w-5 h-5" />
          <span>Mulai Gratis</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronUpIcon, 
  HeartIcon 
} from '@heroicons/vue/outline'

// Import components
import HeroSection from './HeroSection.vue'
import FeaturesSection from './FeaturesSection.vue'
import BenefitsSection from './BenefitsSection.vue'
import TestimonialsSection from './TestimonialsSection.vue'
import PricingSection from './PricingSection.vue'
import Footer from './Footer.vue'

// Reactive data
const mobileMenuOpen = ref(false)
const showScrollTop = ref(false)

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

// Smooth scroll for navigation links
const handleNavClick = (event) => {
  const href = event.target.getAttribute('href')
  if (href && href.startsWith('#')) {
    event.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    // Close mobile menu if open
    mobileMenuOpen.value = false
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Add click listeners to navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  
  // Remove click listeners
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach(link => {
    link.removeEventListener('click', handleNavClick)
  })
})
</script>

<style scoped>
/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #ec4899, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #db2777, #7c3aed);
}

/* Navigation animations */
nav {
  transition: all 0.3s ease;
}

/* Mobile menu animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Floating button animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Section spacing */
section {
  scroll-margin-top: 80px; /* Account for fixed navbar */
}

/* Loading animation for images */
@keyframes shimmer {
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
}

.loading-shimmer {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: shimmer 1.5s infinite;
}
</style>