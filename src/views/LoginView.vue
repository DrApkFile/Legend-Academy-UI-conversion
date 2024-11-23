<template>
  <div class="min-h-screen flex">
    <!-- Left Side - Login Form -->
    <div class="w-1/2 bg-white p-8 flex flex-col justify-between">
      <div class="max-w-md mx-auto w-full pt-16">
        <!-- Logo -->
        <div class="mb-12 text-center">
          <h1 class="text-3xl font-bold text-gray-800">
            <span class="text-orange-500">L</span>
            <span class="text-orange-500">E</span>
            <span class="text-gray-800">GEND</span>
            <div class="text-sm font-normal mt-2 text-gray-600">Academy</div>
          </h1>
        </div>

        <!-- Login Form -->
        <div>
          <h2 class="text-lg mb-8 text-gray-700 font-semibold">Enter your credentials below</h2>
          
          <form @submit.prevent="handleLogin" class="space-y-4">
            <div class="space-y-2">
              <label class="block text-sm text-gray-600">Email</label>
              <input 
                type="email" 
                v-model="email"
                placeholder="name@domain.com"
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div class="space-y-2">
              <label class="block text-sm text-gray-600">Password</label>
              <div class="relative">
                <input 
                  :type="showPassword ? 'text' : 'password'"
                  v-model="password"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button 
                  @click="showPassword = !showPassword"
                  type="button"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <Eye v-if="!showPassword" class="w-4 h-4" />
                  <EyeOff v-else class="w-4 h-4" />
                </button>
              </div>
            </div>

            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                v-model="rememberMe"
                class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <label for="remember" class="ml-2 text-sm text-gray-600">Remember me</label>
            </div>

            <button 
              type="submit"
              class="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center text-sm text-gray-500 mt-12">
        © 2024 Legend PLC. All rights reserved
      </div>
    </div>

    <!-- Right Side - Welcome Banner -->
    <div class="w-1/2 bg-orange-500 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10"></div>
      <img
        src="https://placehold.co/80"
        alt="Student"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="relative z-20 p-12 text-white h-full flex flex-col justify-center">
        <h2 class="text-4xl font-bold mb-4">Welcome to Legend Academy</h2>
        <p class="mb-6 text-lg">
          Lorem ipsum is a dummy text used as a place holder before the actual information is inputted. Don't bother reading this. Why are you still reading?
        </p>
        <button class="text-white border border-white px-6 py-2 rounded-md inline-flex items-center hover:bg-white/10 transition-colors w-fit">
          Read more
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Eye, EyeOff } from 'lucide-vue-next'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

const handleLogin = () => {
  // Handle login logic here
  console.log({
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value
  })
}
</script>

<style scoped>
/* Additional Styling for Responsive Design */
@media (max-width: 768px) {
  .min-h-screen {
    flex-direction: column;
  }
  
  .w-1/2 {
    width: 100%;
  }
}
</style>
