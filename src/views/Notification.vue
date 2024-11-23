<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <!-- Header -->
    <div class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-xl font-semibold text-gray-900">Notifications</h1>
        <p class="text-sm text-gray-500">View and manage your notifications and stay up-to-date</p>
      </div>
      <button class="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors">
        Mark all as read
      </button>
    </div>

    <!-- Notifications List -->
    <div class="space-y-8">
      <!-- Today's Notifications -->
      <div class="space-y-4">
        <h2 class="text-sm font-medium text-gray-500">Today</h2>
        
        <div class="space-y-3">
          <!-- Certificate Notification -->
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

          <!-- Assignment Notification -->
          <div class="bg-white rounded-xl p-4 flex items-start justify-between">
            <div class="flex gap-3">
              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen class="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p class="text-gray-900">A new assignment has been assigned to you: Introduction to UI/UX Fundamentals</p>
                <button class="text-orange-500 text-sm mt-2 hover:text-orange-600">View assignment</button>
                <p class="text-sm text-gray-500 mt-1">35m ago</p>
              </div>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
              <MoreVertical class="w-5 h-5" />
            </button>
          </div>

          <!-- Points Notification -->
          <div class="bg-white rounded-xl p-4 flex items-start justify-between">
            <div class="flex gap-3">
              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Star class="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p class="text-gray-900">Congratulations! You've earned 100 points.</p>
                <p class="text-sm text-gray-500 mt-1">1h ago</p>
              </div>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
              <MoreVertical class="w-5 h-5" />
            </button>
          </div>

          <!-- Comment Notification -->
          <div class="bg-white rounded-xl p-4 flex items-start justify-between">
            <div class="flex gap-3">
              <img src="https://i.pravatar.cc/100?img=3" alt="Ilenna Ologwe" class="w-10 h-10 rounded-full" />
              <div>
                <p class="text-gray-900">
                  Ilenna Ologwe replied to your comment in the UI/UX Design post
                  <span class="text-orange-500">"Yes, you are right. A UI/UX Designer is not a Graphics Designer"</span>
                </p>
                <p class="text-sm text-gray-500 mt-1">2h ago</p>
              </div>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
              <MoreVertical class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Yesterday's Notifications -->
      <div class="space-y-4">
        <h2 class="text-sm font-medium text-gray-500">Yesterday</h2>
        
        <div class="space-y-3">
          <!-- Certificate Notification -->
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

          <!-- Assignment Notification -->
          <div class="bg-white rounded-xl p-4 flex items-start justify-between">
            <div class="flex gap-3">
              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen class="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p class="text-gray-900">A new assignment has been assigned to you: Introduction to UI/UX Fundamentals</p>
                <button class="text-orange-500 text-sm mt-2 hover:text-orange-600">View assignment</button>
                <p class="text-sm text-gray-500 mt-1">16h ago</p>
              </div>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
              <MoreVertical class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Last Week's Notifications -->
      <div class="space-y-4">
        <h2 class="text-sm font-medium text-gray-500">Last week</h2>
        
        <div class="space-y-3">
          <!-- Comment Notification -->
          <div class="bg-white rounded-xl p-4 flex items-start justify-between">
            <div class="flex gap-3">
              <img src="https://i.pravatar.cc/100?img=3" alt="Ilenna Ologwe" class="w-10 h-10 rounded-full" />
              <div>
                <p class="text-gray-900">
                  Ilenna Ologwe replied to your comment in the UI/UX Design post
                  <span class="text-orange-500">"Yes, you are right. A UI/UX Designer is not a Graphics Designer"</span>
                </p>
                <p class="text-sm text-gray-500 mt-1">5d ago</p>
              </div>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
              <MoreVertical class="w-5 h-5" />
            </button>
          </div>

          <!-- Points Notification -->
          <div class="bg-white rounded-xl p-4 flex items-start justify-between">
            <div class="flex gap-3">
              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Star class="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p class="text-gray-900">Congratulations! You've earned 100 points.</p>
                <p class="text-sm text-gray-500 mt-1">6d ago</p>
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
</template>

<script setup>
import { MoreVertical, Award, BookOpen, Star } from 'lucide-vue-next'
</script>