<script setup>
import LandingPage from './components/LandingPage.vue'
</script>

<template>
  <LandingPage />
</template>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom selection color */
::selection {
  background-color: #ec4899;
  color: white;
}

::-moz-selection {
  background-color: #ec4899;
  color: white;
}

/* Focus styles for accessibility */
button:focus,
a:focus,
input:focus,
select:focus,
textarea:focus {
  outline: 2px solid #ec4899;
  outline-offset: 2px;
}

/* Disable focus outline for mouse users */
.js-focus-visible :focus:not(.focus-visible) {
  outline: none;
}

/* Loading states */
.loading {
  opacity: 0.7;
  pointer-events: none;
}

/* Animation utilities */
.fade-in {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-up {
  animation: slideUp 0.6s ease-out;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive typography */
@media (max-width: 640px) {
  body {
    font-size: 14px;
  }
}

/* Print styles */
@media print {
  .no-print {
    display: none !important;
  }
}
</style>
