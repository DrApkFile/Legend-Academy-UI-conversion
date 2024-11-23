<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <!-- Header with Search and Notification -->
    <div class="flex justify-between items-center mb-8 sticky top-0 bg-gray-50 z-10 py-4">
      <!-- Search Bar -->
      <div class="w-full sm:w-1/3">
        <input
          type="text"
          placeholder="Search..."
          class="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 text-sm shadow-md"
        />
      </div>

      <!-- Notifications Button -->
      <div class="relative">
        <button @click="toggleNotifications" class="relative">
          <span class="text-xl text-gray-700">
            <BellIcon class="w-6 h-6" />
          </span>
          <span v-if="unreadNotifications" class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
            {{ unreadNotifications }}
          </span>
        </button>

        <!-- Notifications Dropdown -->
        <div v-if="showNotifications" class="absolute right-0 w-64 bg-white shadow-lg rounded-xl mt-2 p-4">
          <div class="space-y-4">
            <div v-for="notification in notifications" :key="notification.id" class="flex items-start justify-between p-3 bg-gray-100 rounded-lg">
              <div class="flex gap-3">
                <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award class="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p class="text-gray-900">{{ notification.message }}</p>
                  <p class="text-sm text-gray-500 mt-1">{{ formatTime(notification.timestamp) }}</p>
                </div>
              </div>
              <button class="text-gray-400 hover:text-gray-600">
                <MoreVertical class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Notifications List -->
    <div class="space-y-8">
      <!-- Today's Notifications -->
      <div class="space-y-4">
        <h2 class="text-sm font-medium text-gray-500">Today</h2>
        
        <div class="space-y-3">
          <!-- Notification Example -->
          <div class="bg-white rounded-xl p-4 flex items-start justify-between">
            <div class="flex gap-3">
              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award class="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p class="text-gray-900">Congratulations! You have earned a new certificate</p>
                <p class="text-sm text-gray-500 mt-1">25m ago</p>
              </div>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
              <MoreVertical class="w-5 h-5" />
            </button>
          </div>

          <!-- More Notifications... -->
        </div>
      </div>

      <!-- Yesterday's Notifications -->
      <div class="space-y-4">
        <h2 class="text-sm font-medium text-gray-500">Yesterday</h2>
        
        <div class="space-y-3">
          <!-- Notification Example -->
          <div class="bg-white rounded-xl p-4 flex items-start justify-between">
            <div class="flex gap-3">
              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award class="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p class="text-gray-900">Congratulations! You have earned a new certificate</p>
                <p class="text-sm text-gray-500 mt-1">12h ago</p>
              </div>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
              <MoreVertical class="w-5 h-5" />
            </button>
          </div>

          <!-- More Notifications... -->
        </div>
      </div>

      <!-- Last Week's Notifications -->
      <div class="space-y-4">
        <h2 class="text-sm font-medium text-gray-500">Last week</h2>
        
        <div class="space-y-3">
          <!-- Notification Example -->
          <div class="bg-white rounded-xl p-4 flex items-start justify-between">
            <div class="flex gap-3">
              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award class="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p class="text-gray-900">Congratulations! You have earned a new certificate</p>
                <p class="text-sm text-gray-500 mt-1">5d ago</p>
              </div>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
              <MoreVertical class="w-5 h-5" />
            </button>
          </div>

          <!-- More Notifications... -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Award, BookOpen, Star, MoreVertical, BellIcon } from 'lucide-vue-next'
import { ref } from 'vue';

const notifications = [
  { id: 1, message: 'Congratulations! You have earned a new certificate', icon: 'Award', timestamp: new Date() },
  { id: 2, message: 'A new assignment has been assigned to you: Introduction to UI/UX Fundamentals', icon: 'BookOpen', timestamp: new Date() },
  { id: 3, message: 'Congratulations! You\'ve earned 100 points.', icon: 'Star', timestamp: new Date() },
];

const unreadNotifications = ref(3);
const showNotifications = ref(false);

function toggleNotifications() {
  showNotifications.value = !showNotifications.value;
}

function formatTime(timestamp) {
  return timestamp.toLocaleTimeString();
}
</script>


