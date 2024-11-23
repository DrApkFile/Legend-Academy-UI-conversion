<template>
  <div class="min-h-screen bg-gray-50 p-8">
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
          <div class="flex items-center space-x-2 mb-4">
            <img src="https://i.pravatar.cc/100?img=4" alt="Joseph Brendon" class="w-6 h-6 rounded-full" />
            <span class="text-sm text-gray-600">Joseph Brendon</span>
            <span class="text-xs text-gray-400">Senior UI/UX Designer</span>
          </div>
          <button class="flex items-center justify-between w-full text-orange-500 hover:text-orange-600">
            <span>Download</span>
            <ArrowDownToLine class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Course Card 5 -->
      <div class="bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="relative">
          <img src="https://picsum.photos/400/200?random=5" alt="UX/UI Design Course" class="w-full h-[160px] object-cover" />
          <div class="absolute top-3 left-3 bg-purple-600 text-white text-xs px-2 py-1 rounded">
            FREE
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-medium text-gray-900 mb-1">
            Advance your career, become a Senior UI/UX Designer
          </h3>
          <div class="flex items-center space-x-2 mb-4">
            <img src="https://i.pravatar.cc/100?img=5" alt="Joseph Brendon" class="w-6 h-6 rounded-full" />
            <span class="text-sm text-gray-600">Joseph Brendon</span>
            <span class="text-xs text-gray-400">Senior UI/UX Designer</span>
          </div>
          <button class="flex items-center justify-between w-full text-orange-500 hover:text-orange-600">
            <span>Download</span>
            <ArrowDownToLine class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Course Card 6 -->
      <div class="bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="relative">
          <img src="https://picsum.photos/400/200?random=6" alt="UI/UX Full Course" class="w-full h-[160px] object-cover" />
          <div class="absolute top-3 left-3 bg-purple-600 text-white text-xs px-2 py-1 rounded">
            FREE
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-medium text-gray-900 mb-1">
            Beginner's Guide to becoming a Professional UI/UX Designer
          </h3>
          <div class="flex items-center space-x-2 mb-4">
            <img src="https://i.pravatar.cc/100?img=6" alt="Joseph Brendon" class="w-6 h-6 rounded-full" />
            <span class="text-sm text-gray-600">Joseph Brendon</span>
            <span class="text-xs text-gray-400">Senior UI/UX Designer</span>
          </div>
          <button class="flex items-center justify-between w-full text-orange-500 hover:text-orange-600">
            <span>Download</span>
            <ArrowDownToLine class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowDownToLine } from 'lucide-vue-next'
</script>