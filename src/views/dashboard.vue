<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <!-- Fixed Header Section -->
    <div class="fixed top-0 left-0 w-full bg-white z-50 shadow p-4 flex justify-between items-center">
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
          <BellIcon class="w-6 h-6" />
          <span v-if="unreadNotifications > 0" 
                class="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
            {{ unreadNotifications }}
          </span>
        </button>

        <!-- Notification Dropdown -->
        <div
          v-if="showNotifications"
          class="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
        >
          <div class="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 class="font-semibold">Notifications</h3>
            <button @click="markAllAsRead" class="text-sm text-blue-600 hover:text-blue-700">
              Mark all as read
            </button>
          </div>

          <div class="max-h-96 overflow-y-auto">
            <div v-if="notifications.length === 0" class="p-4 text-center text-gray-500">
              <BellOffIcon class="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>No Recent Notifications</p>
              <p class="text-sm">You'll be notified when there's something new</p>
            </div>

            <div
              v-else
              v-for="notification in notifications"
              :key="notification.id"
              class="p-4 border-b border-gray-100 hover:bg-gray-50"
              :class="{ 'bg-blue-50': !notification.read }"
            >
              <div class="flex gap-3">
                <div class="flex-shrink-0">
                  <component
                    :is="getNotificationIcon(notification.type)"
                    class="w-5 h-5"
                    :class="getNotificationIconColor(notification.type)"
                  />
                </div>
                <div>
                  <p class="text-sm">{{ notification.message }}</p>
                  <p class="text-xs text-gray-500 mt-1">{{ formatTime(notification.timestamp) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="mt-20">
      <!-- Welcome Section -->
      <div class="mb-8">
        <div class="bg-orange-500 text-white rounded-xl p-6 relative overflow-hidden">
          <div class="relative z-10">
            <h1 class="text-2xl font-bold mb-2">Welcome Back Favour!</h1>
            <p class="mb-4">
              Congratulations! you have learned 80% of your course this month. Keep it up, you're almost there.
            </p>
            <button class="bg-white text-orange-500 px-4 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors">
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
