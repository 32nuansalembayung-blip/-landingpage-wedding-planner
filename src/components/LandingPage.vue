<template>
  <main>
    <HeroSection />
    <FeaturesSection />
    <BenefitsSection />
    <DemoPreview />
    <TestimonialsSection />
    <PricingSection />
    <Footer />
  </main>
</template>

<script setup>
import HeroSection from './HeroSection.vue'
import FeaturesSection from './FeaturesSection.vue'
import BenefitsSection from './BenefitsSection.vue'
import DemoPreview from './DemoPreview.vue'
import TestimonialsSection from './TestimonialsSection.vue'
import PricingSection from './PricingSection.vue'
import Footer from './Footer.vue'
</script>

<style scoped>
main { scroll-behavior: smooth; }
</style>
