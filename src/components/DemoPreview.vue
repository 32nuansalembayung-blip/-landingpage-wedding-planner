<template>
  <section class="py-16 bg-gray-50" id="calculator">
    <div class="max-w-6xl mx-auto px-5">
      <header class="text-center mb-12 animate-on-scroll">
        <h2 class="font-playfair text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">Demo Singkat</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">Lihat bagaimana Budget Planner, Undangan, dan RSVP bekerja.</p>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg animate-on-scroll">
          <h3 class="font-bold text-xl text-gray-900 mb-4">Budget Planner</h3>
          <div class="space-y-3">
            <div class="grid grid-cols-12 gap-2 items-center" v-for="(item,i) in items" :key="i">
              <input v-model="item.name" placeholder="Item" class="col-span-5 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
              <input v-model.number="item.cost" type="number" min="0" placeholder="0" class="col-span-5 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
              <button class="col-span-2 px-2 py-2 rounded-lg border border-red-300 bg-red-100 text-red-800 hover:bg-red-200 transition-colors duration-200 text-sm font-bold" @click="remove(i)">×</button>
            </div>
            <button class="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 hover:bg-gray-200 transition-colors duration-200" @click="add">+ Tambah</button>
            <div class="font-bold text-gray-900 mt-3 text-center">Total: Rp {{ total.toLocaleString('id-ID') }}</div>
          </div>
        </div>
        
        <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg animate-on-scroll">
          <h3 class="font-bold text-xl text-gray-900 mb-4">Online Invitation</h3>
          <div class="w-full max-w-60 aspect-[3/4] mx-auto border border-gray-200 rounded-2xl p-5 text-center bg-gradient-to-b from-white to-blue-50 shadow-lg">
            <div class="font-playfair text-4xl text-gray-900 mb-2">A & B</div>
            <div class="text-gray-500 mb-4">Sabtu, 12 Okt 2025</div>
            <a class="inline-block px-4 py-2 rounded-full bg-gray-900 text-white text-decoration-none hover:bg-gray-800 transition-colors duration-200" href="#">Buka Undangan</a>
          </div>
        </div>
        
        <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg animate-on-scroll md:col-span-2 lg:col-span-1">
          <h3 class="font-bold text-xl text-gray-900 mb-4">RSVP</h3>
          <div class="flex gap-3 flex-wrap justify-center">
            <button @click="yes++" class="px-4 py-2 rounded-full text-sm bg-green-100 text-green-800 border border-green-300 hover:bg-green-200 transition-colors duration-200">
              Hadir {{ yes }}
            </button>
            <button @click="pending++" class="px-4 py-2 rounded-full text-sm bg-orange-100 text-orange-800 border border-orange-300 hover:bg-orange-200 transition-colors duration-200">
              Belum {{ pending }}
            </button>
            <button @click="no++" class="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 transition-colors duration-200">
              Tidak {{ no }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { name: 'Venue', cost: 20000000 },
  { name: 'Dekorasi', cost: 8000000 },
])

const add = () => items.value.push({ name: '', cost: 0 })
const remove = (i) => items.value.splice(i,1)
const total = computed(() => items.value.reduce((s, x) => s + (Number(x.cost)||0), 0))

const yes = ref(120)
const pending = ref(45)
const no = ref(10)
</script>

<style scoped>
/* Animation classes */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animate-on-scroll.animate {
  opacity: 1;
  transform: translateY(0);
}

/* Custom font family */
.font-playfair {
  font-family: 'Playfair Display', serif;
}

/* Ensure input fields don't overflow */
input[type="text"], input[type="number"] {
  min-width: 0;
  width: 100%;
}
</style>
