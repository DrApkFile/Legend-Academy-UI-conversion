<template>
  <div class="bg-white rounded-xl shadow-sm p-6 w-[300px]">
    <div class="flex flex-col items-center space-y-4">
      <div class="text-right w-full">
        <span class="text-sm text-gray-500">Your Profile</span>
      </div>
      
      <div class="w-20 h-20 rounded-full border-4 border-orange-500 overflow-hidden">
        <img src="https://placehold.co/80" alt="Profile picture" class="w-full h-full object-cover" />
      </div>
      
      <div class="text-center">
        <h3 class="font-semibold text-lg">Chioma Favour</h3>
        <p class="text-sm text-gray-500">Student</p>
      </div>

      <div class="flex justify-center gap-8 w-full">
        <div class="text-center">
          <MessageCircleIcon class="w-5 h-5 mx-auto mb-1 text-orange-500" />
          <p class="font-semibold">64.50</p>
          <p class="text-xs text-gray-500">Hours Spent</p>
        </div>
        <div class="text-center">
          <CheckCircle2Icon class="w-5 h-5 mx-auto mb-1 text-orange-500" />
          <p class="font-semibold">10</p>
          <p class="text-xs text-gray-500">Courses</p>
        </div>
      </div>

      <div class="w-full space-y-2">
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Task Progress</span>
          <span class="text-orange-500 font-medium">See All</span>
        </div>
        <div class="space-y-2">
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full w-3/4 bg-orange-500 rounded-full" />
          </div>
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full w-1/2 bg-orange-500 rounded-full" />
          </div>
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full w-1/4 bg-blue-500 rounded-full" />
          </div>
        </div>
      </div>

      <div class="w-full">
        <h4 class="font-medium mb-2">To do list</h4>
        <div class="space-y-2 text-sm text-gray-500">
          <p>• HTML and Interactive Design</p>
          <p>• Introduction to Figma</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageCircle, CheckCircle2 } from 'lucide-vue-next'

export default {
  name: 'ProfileSection',
  components: {
    MessageCircleIcon: MessageCircle,
    CheckCircle2Icon: CheckCircle2
  }
}
</script>