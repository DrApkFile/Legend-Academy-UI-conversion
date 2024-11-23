<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <!-- Fixed Search Bar and Notification Section -->
    <div class="sticky top-0 z-50 mb-6">
      <div class="flex items-center justify-between rounded-lg bg-white/70 px-6 py-3 shadow-lg backdrop-blur-lg">
        <!-- Search Bar -->
        <div class="flex-1 max-w-lg">
          <input
            type="text"
            placeholder="Search resources here..."
            class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200 transition-all"
          />
        </div>

        <!-- Notification Bell (Optional) -->
        <div class="relative ml-4">
          <button
            @click="toggleNotifications"
            class="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
            :class="{ 'bg-gray-100': showNotifications }"
          >
            <!-- Bell Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6 text-gray-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"
              />
            </svg>

            <!-- Unread Notifications Badge -->
            <span
              v-if="unreadNotifications > 0"
              class="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full"
            >
              {{ unreadNotifications }}
            </span>
          </button>

          <!-- Notifications Dropdown (Optional) -->
          <transition name="fade">
            <div
              v-if="showNotifications"
              class="absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-lg overflow-hidden z-50 transition-transform duration-300"
            >
              <div class="flex border-b">
                <div class="flex-1 p-4 font-semibold text-gray-700">Notifications</div>
                <button @click="markAllAsRead" class="flex-1 p-4 text-blue-600 hover:bg-gray-50 transition-colors">
                  Mark all as read
                </button>
              </div>
              <div v-if="notifications.length > 0">
                <ul class="max-h-64 overflow-y-auto">
                  <li v-for="notification in notifications" :key="notification.id" class="p-4 border-b last:border-b-0">
                    <div class="flex items-start">
                      <div class="flex-shrink-0 mr-3">
                        <component :is="notification.icon" class="w-6 h-6 text-gray-500" />
                      </div>
                      <div>
                        <p class="text-sm text-gray-700">{{ notification.message }}</p>
                        <p class="text-xs text-gray-500 mt-1">{{ formatTime(notification.timestamp) }}</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="p-4 text-center">
                  <!-- Updated "Show all notifications" button with Vue Router navigation -->
                  <router-link to="/notifications" class="text-blue-600 hover:underline">
                    Show all notifications
                  </router-link>
                </div>
              </div>
              <div v-else class="p-4 text-center text-gray-500">
                No recent notifications here
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Header -->
    <div class="mb-6">
      <h1 class="text-xl font-semibold text-gray-900">Resources</h1>
      <p class="text-sm text-gray-500">View and download your resources</p>
    </div>

    <!-- Course Grid -->
    <!-- Your existing course grid content -->
  </div>
</template>

<script>
import { ref } from 'vue';
import { ArrowDownToLine } from 'heroicons-vue/solid';

export default {
  components: {
    ArrowDownToLine,
  },
  data() {
    return {
      showNotifications: false,
      notifications: [
        {
          id: 1,
          message: "New free course available",
          timestamp: new Date().getTime(),
          icon: 'bell',
        },
        {
          id: 2,
          message: "Webinar on UI/UX Design tomorrow",
          timestamp: new Date().getTime(),
          icon: 'bell',
        },
      ],
      unreadNotifications: 2,
    };
  },
  methods: {
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
    },
    markAllAsRead() {
      this.unreadNotifications = 0;
    },
    formatTime(timestamp) {
      return new Date(timestamp).toLocaleString();
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
