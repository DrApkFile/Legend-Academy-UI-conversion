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
            class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
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
          <div
            v-if="showNotifications"
            class="absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-lg overflow-hidden z-50"
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
                <button 
  @click="$router.push({ name: 'Notification' })" 
  class="text-blue-600 hover:underline">
  Show all notifications
</button>

              </div>
            </div>
            <div v-else class="p-4 text-center text-gray-500">
              No recent notifications here
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Header -->
    <div class="mb-6">
      <h1 class="text-xl font-semibold text-gray-900">Resources</h1>
      <p class="text-sm text-gray-500">View and download your resources</p>
    </div>

    <!-- Course Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Course Card 1 -->
      <div class="bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="relative">
          <img src="https://picsum.photos/400/200?random=1" alt="UX/UI Course" class="w-full h-[160px] object-cover" />
          <div class="absolute top-3 left-3 bg-purple-600 text-white text-xs px-2 py-1 rounded">
            NEW & FREE
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-medium text-gray-900 mb-1">
            NEW & FREE User Experience and User Interface Course
          </h3>
          <div class="flex items-center space-x-2 mb-4">
            <img src="https://i.pravatar.cc/100?img=1" alt="Joseph Brendon" class="w-6 h-6 rounded-full" />
            <span class="text-sm text-gray-600">Joseph Brendon</span>
            <span class="text-xs text-gray-400">Senior UI/UX Designer</span>
          </div>
          <button class="flex items-center justify-between w-full text-orange-500 hover:text-orange-600">
            <span>Download</span>
            <ArrowDownToLine class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Course Card 2 -->
      <div class="bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="relative">
          <img src="https://picsum.photos/400/200?random=2" alt="UI/UX Course" class="w-full h-[160px] object-cover" />
          <div class="absolute top-3 left-3 bg-purple-600 text-white text-xs px-2 py-1 rounded">
            FREE
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-medium text-gray-900 mb-1">
            Beginner's Guide to becoming a Professional UI/UX Designer
          </h3>
          <div class="flex items-center space-x-2 mb-4">
            <img src="https://i.pravatar.cc/100?img=2" alt="Joseph Brendon" class="w-6 h-6 rounded-full" />
            <span class="text-sm text-gray-600">Joseph Brendon</span>
            <span class="text-xs text-gray-400">Senior UI/UX Designer</span>
          </div>
          <button class="flex items-center justify-between w-full text-orange-500 hover:text-orange-600">
            <span>Download</span>
            <ArrowDownToLine class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Course Card 3 -->
      <div class="bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="relative">
          <img src="https://picsum.photos/400/200?random=3" alt="Front End Certificate" class="w-full h-[160px] object-cover" />
          <div class="absolute top-3 left-3 bg-purple-600 text-white text-xs px-2 py-1 rounded">
            FREE
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-medium text-gray-900 mb-1">
            Front-End Web Developer Certificate Course
          </h3>
          <div class="flex items-center space-x-2 mb-4">
            <img src="https://i.pravatar.cc/100?img=3" alt="Joseph Brendon" class="w-6 h-6 rounded-full" />
            <span class="text-sm text-gray-600">Joseph Brendon</span>
            <span class="text-xs text-gray-400">Senior UI/UX Designer</span>
          </div>
          <button class="flex items-center justify-between w-full text-orange-500 hover:text-orange-600">
            <span>Download</span>
            <ArrowDownToLine class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Course Card 4 -->
      <div class="bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="relative">
          <img src="https://picsum.photos/400/200?random=4" alt="UI/UX Course Review" class="w-full h-[160px] object-cover" />
          <div class="absolute top-3 left-3 bg-purple-600 text-white text-xs px-2 py-1 rounded">
            FREE
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-medium text-gray-900 mb-1">
            Beginner's Guide to becoming a professional UI/UX Designer
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowDownToLine } from 'lucide-vue-next';

export default {
  components: {
    ArrowDownToLine,
  },
  data() {
    return {
      notifications: [
        { id: 1, message: 'Your course has been updated!', icon: 'BellIcon', timestamp: new Date() },
        { id: 2, message: 'A new lesson is available!', icon: 'BellIcon', timestamp: new Date() },
        { id: 3, message: 'Your download is ready.', icon: 'BellIcon', timestamp: new Date() },
      ],
      unreadNotifications: 3,
      showNotifications: false,
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
      return timestamp.toLocaleTimeString();
    },
  },
};
</script>

<style scoped>
/* You can add custom styles here */
</style>
