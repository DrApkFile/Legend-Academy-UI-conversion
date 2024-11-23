<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <!-- Fixed Search Bar and Notification Section -->
    <div class="sticky top-0 z-50 mb-6">
      <div class="flex items-center justify-between rounded-lg bg-white/70 px-6 py-3 shadow-lg backdrop-blur-lg">
        <!-- Search Bar -->
        <div class="flex-1 max-w-lg">
          <input
            type="text"
            placeholder="Search your courses here..."
            class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <!-- Notification Bell -->
        <div class="relative ml-4">
          <button
            @click="toggleNotifications"
            class="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
            :class="{ 'bg-gray-100': showNotifications }"
          >
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
            <span
              v-if="unreadNotifications > 0"
              class="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full"
            >
              {{ unreadNotifications }}
            </span>
          </button>

          <!-- Notifications Dropdown -->
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
            <ul v-if="notifications.length > 0" class="max-h-64 overflow-y-auto">
              <li v-for="notification in notifications" :key="notification.id" class="p-4 border-b last:border-b-0">
                <div class="flex items-start">
                  <component :is="notification.icon" class="w-6 h-6 text-gray-500 mr-3" />
                  <div>
                    <p class="text-sm text-gray-700">{{ notification.message }}</p>
                    <p class="text-xs text-gray-500 mt-1">{{ formatTime(notification.timestamp) }}</p>
                  </div>
                </div>
              </li>
            </ul>
            <div v-else class="p-4 text-center text-gray-500">
              No recent notifications here
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Welcome Section -->
    <div class="mb-8">
      <div class="bg-orange-500 text-white rounded-xl p-6 relative">
        <h1 class="text-2xl font-bold mb-2">Welcome Back Favour!</h1>
        <p class="mb-4">Congratulations! You’ve learned 80% of your course this month.</p>
        <button class="bg-white text-orange-500 px-4 py-2 rounded-lg">Continue Learning</button>
      </div>
    </div>

    <!-- Course Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="course in recentCourses"
        :key="course.id"
        class="bg-white rounded-xl shadow hover:shadow-md transition"
      >
        <img :src="course.thumbnail" :alt="course.title" class="w-full h-40 object-cover" />
        <div class="p-4">
          <span class="text-xs font-medium text-blue-600 mb-2 block">{{ course.tag }}</span>
          <h3 class="font-semibold mb-2">{{ course.title }}</h3>
          <div class="flex items-center">
            <img :src="course.instructorImage" class="w-6 h-6 rounded-full mr-2" />
            <span class="text-sm text-gray-600">{{ course.instructor }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bell, MessageCircle, BookOpen } from 'lucide-vue-next'

export default {
  data() {
    return {
      unreadNotifications: 3,
      showNotifications: false,
      notifications: [
        { id: 1, message: 'New message from your instructor', icon: MessageCircle },
        { id: 2, message: 'Your course "Web Development" has been updated', icon: BookOpen }
      ],
      recentCourses: [
        { id: 1, title: 'Web Dev', instructor: 'Jane', thumbnail: '/web.jpg', tag: 'Frontend' }
      ]
    }
  },
  methods: {
    toggleNotifications() { this.showNotifications = !this.showNotifications; }
  }
};
</script>
