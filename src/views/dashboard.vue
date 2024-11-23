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

    <!-- Main Content -->
    <div>
      <!-- Welcome Section -->
      <div class="mb-8">
        <div class="bg-orange-500 text-white rounded-xl p-6 relative overflow-hidden">
          <div class="relative z-10">
            <h1 class="text-2xl font-bold mb-2">Welcome Back Favour!</h1>
            <p class="mb-4">
              Congratulations! You have learned 80% of your course this month. Keep it up, you're almost there.
            </p>
            <button
              class="bg-white text-orange-500 px-4 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors"
            >
              Continue Learning
            </button>
          </div>
          <!-- Decorative Elements -->
          <div class="absolute right-0 bottom-0 opacity-10">
            <div class="w-32 h-32 bg-white rounded-full -mb-16 -mr-16"></div>
          </div>
        </div>
      </div>

      <!-- Course Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div
          v-for="course in recentCourses"
          :key="course.id"
          class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
        >
          <img :src="course.thumbnail" :alt="course.title" class="w-full h-40 object-cover" />
          <div class="p-4">
            <span class="text-xs font-medium text-blue-600 mb-2 block">{{ course.tag }}</span>
            <h3 class="font-semibold mb-2">{{ course.title }}</h3>
            <div class="flex items-center mb-3">
              <img :src="course.instructorImage" :alt="course.instructor" class="w-6 h-6 rounded-full mr-2" />
              <span class="text-sm text-gray-600">{{ course.instructor }}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">{{ course.duration }}</span>
              <button class="text-blue-600 hover:text-blue-700">Continue →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white rounded-xl p-6 shadow-sm">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-lg font-semibold">Recent enrolled classes</h2>
        <div class="flex items-center space-x-4">
          <button class="text-sm text-gray-600 hover:text-gray-900">All</button>
          <button class="p-2 hover:bg-gray-100 rounded-full">
            <Search class="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Enrolled Classes -->
        <div class="space-y-4">
          <!-- UX Design Class -->
          <div class="bg-gray-50 rounded-xl p-4">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Pen class="w-6 h-6 text-purple-600" />
              </div>
              <div class="flex-1">
                <h3 class="font-medium">User Experience (UX) Design</h3>
                <div class="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <div class="flex items-center gap-1">
                    <Clock class="w-4 h-4" />
                    <span>5.5 hrs</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Users class="w-4 h-4" />
                    <span>10 students</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <FileText class="w-4 h-4" />
                    <span>Assignments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Visual Design Class -->
          <div class="bg-gray-50 rounded-xl p-4">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Palette class="w-6 h-6 text-blue-600" />
              </div>
              <div class="flex-1">
                <h3 class="font-medium">Visual Design and Branding</h3>
                <div class="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <div class="flex items-center gap-1">
                    <Clock class="w-4 h-4" />
                    <span>4.5 hrs</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Users class="w-4 h-4" />
                    <span>15 students</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <FileText class="w-4 h-4" />
                    <span>Assignments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Upcoming Lessons -->
        <div class="bg-gray-50 rounded-xl p-6">
          <h3 class="font-medium mb-4">Upcoming Lesson</h3>
          <div class="space-y-4">
            <!-- UX Design Fundamentals -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Monitor class="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 class="font-medium">UX Design Fundamentals</h4>
                  <p class="text-sm text-gray-500">5:30pm</p>
                </div>
              </div>
              <button class="bg-orange-500 text-white px-4 py-1 rounded-full text-sm hover:bg-orange-600 transition-colors">
                Join
              </button>
            </div>

            <!-- Interaction Design -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <MousePointer class="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 class="font-medium">Interaction Design</h4>
                  <p class="text-sm text-gray-500">6:00pm</p>
                </div>
              </div>
              <button class="bg-orange-500 text-white px-4 py-1 rounded-full text-sm hover:bg-orange-600 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  Bell, 
  MessageCircle, 
  BookOpen, 
  Search, 
  Clock, 
  Users, 
  FileText, 
  Pen, 
  Palette, 
  Monitor, 
  MousePointer 
} from 'lucide-vue-next'

export default {
  data() {
    return {
      unreadNotifications: 3,
      showNotifications: false,
      notifications: [
        {
          id: 1,
          message: 'New message from your instructor',
          timestamp: new Date(Date.now() - 1000 * 60 * 5),
          icon: MessageCircle
        },
        {
          id: 2,
          message: 'Your course "Web Development" has been updated',
          timestamp: new Date(Date.now() - 1000 * 60 * 30),
          icon: BookOpen
        },
        {
          id: 3,
          message: 'Reminder: Complete your weekly quiz',
          timestamp: new Date(Date.now() - 1000 * 60 * 60),
          icon: Bell
        }
      ],
      recentCourses: [
        {
          id: 1,
          title: 'Web Development',
          instructor: 'John Doe',
          instructorImage: '/path/to/image.jpg',
          thumbnail: '/path/to/thumbnail.jpg',
          tag: 'Frontend',
          duration: '3 hours'
        },
        {
          id: 2,
          title: 'Backend Basics',
          instructor: 'Jane Smith',
          instructorImage: '/path/to/image.jpg',
          thumbnail: '/path/to/thumbnail.jpg',
          tag: 'Backend',
          duration: '2 hours'
        }
      ]
    };
  },
  methods: {
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
    },
    markAllAsRead() {
      this.notifications = [];
      this.unreadNotifications = 0;
    },
    formatTime(timestamp) {
      const now = new Date();
      const diff = now - timestamp;
      const minutes = Math.floor(diff / 60000);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
      if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
      if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
      return 'Just now';
    }
  }
};
</script>