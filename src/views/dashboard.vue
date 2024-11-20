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
            class="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-50"
          >
            <ul>
              <li v-if="unreadNotifications > 0" class="p-4 text-gray-700">
                You have {{ unreadNotifications }} unread notification(s).
              </li>
              <li v-else class="p-4 text-gray-500">No new notifications.</li>
            </ul>
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
</template>

<script>
export default {
  data() {
    return {
      unreadNotifications: 5, // Example unread notifications count
      showNotifications: false, // Toggle notification visibility
      recentCourses: [
        // Example courses data
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
        // Add more courses as needed
      ]
    };
  },
  methods: {
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
    }
  }
};
</script>
