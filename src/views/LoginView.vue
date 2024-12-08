
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 relative">
    <!-- Backgrounds -->
    <div class="absolute inset-0 bg-white z-0 border-r-4 border-orange-500"></div>
    <div class="absolute inset-0 right-0 bg-orange-500 z-0 border-l-4 border-white"></div>

    <!-- Content -->
    <div class="relative z-10 flex w-11/12 max-w-5xl shadow-lg">
      <!-- Left Side - Login Form -->
      <div class="w-[45%] bg-white p-8 flex flex-col justify-between rounded-l-lg">
        <div class="max-w-md mx-auto w-full">
          <!-- Logo -->
          <div class="mb-12 text-center">
            <img src="/Frame 1618871038.png" alt="Legend Academy" class="h-20 mx-auto" />
          </div>

          <!-- Login Form -->
          <div>
            <h2 class="text-xl mb-8 text-gray-700 font-semibold">Enter your credentials below</h2>
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
                class="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 shadow-md transition-colors"
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
      <div class="w-[55%] bg-orange-500 relative overflow-hidden rounded-r-lg">
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10"></div>
        <img
          src="@/assets/background.jpg"
          alt="Student"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="relative z-20 p-12 text-white h-full flex flex-col justify-center">
          <h2 class="text-4xl font-bold mb-4 underline">Welcome to Legend Academy</h2>
          <p class="mb-6 text-lg">
            Lorem ipsum is a dummy text used as a placeholder before the actual information is inputted. Don't bother reading this. Why are you still reading?
          </p>
          <button class="text-white border border-white px-6 py-2 rounded-md inline-flex items-center hover:bg-white/10 transition-colors w-fit">
            Read more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Eye, EyeOff } from 'lucide-vue-next';

const router = useRouter();

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const showPassword = ref(false);

const handleLogin = () => {
  console.log({
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value,
  });

  // Navigate to the dashboard page
  router.push('/dashboard');
};
</script>

