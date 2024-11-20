<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Left Sidebar -->
    <!-- <div class="w-64 bg-white border-r border-gray-200 p-4">
      <div class="mb-8">
        <img src="https://placehold.co/120x40" alt="Logo" class="h-10" />
      </div>
      
      <nav class="space-y-1">
        <a v-for="item in navigationItems" 
           :key="item.name"
           :href="item.href"
           :class="[
             item.current ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-gray-50',
             'group flex items-center px-3 py-2 text-sm font-medium rounded-lg'
           ]"
        >
          <component 
            :is="item.icon" 
            class="mr-3 h-5 w-5"
            :class="item.current ? 'text-white' : 'text-gray-400 group-hover:text-gray-500'"
          />
          {{ item.name }}
        </a>
      </nav>
    </div> -->

    <!-- Main Content -->
    <div class="flex-1 flex">
      <div class="flex-1 flex flex-col">
        <!-- Search Header -->
        <div class="p-4 border-b border-gray-200 bg-white">
          <div class="relative">
            <SearchIcon class="absolute left-3 top-1/2 -mt-2.5 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search your course here..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        <!-- Discussion Area -->
        <div class="flex-1 flex">
          <!-- Messages/Threads List -->
          <div class="w-full max-w-md border-r border-gray-200 bg-white">
            <div class="p-4 border-b border-gray-200">
              <h2 class="text-lg font-medium">Discussions</h2>
              <p class="text-sm text-gray-500">Discuss with other students to stay updated</p>
            </div>

            <!-- Tabs -->
            <div class="border-b border-gray-200">
              <nav class="flex px-4">
                <button
                  v-for="tab in tabs"
                  :key="tab.name"
                  @click="currentTab = tab.name"
                  :class="[
                    currentTab === tab.name
                      ? 'border-orange-500 text-orange-500'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'px-3 py-2 text-sm font-medium border-b-2'
                  ]"
                >
                  {{ tab.name }}
                </button>
              </nav>
            </div>

            <!-- Search Messages -->
            <div class="p-4">
              <div class="relative">
                <SearchIcon class="absolute left-3 top-1/2 -mt-2.5 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search or start a new chat"
                  class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <!-- Messages List -->
            <div class="overflow-y-auto h-[calc(100vh-280px)]">
              <div v-if="currentTab === 'Messages'" class="space-y-1">
                <div
                  v-for="message in messages"
                  :key="message.id"
                  class="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                >
                  <div class="flex items-start space-x-3">
                    <img :src="message.avatar" :alt="message.name" class="w-10 h-10 rounded-full" />
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">{{ message.name }}</p>
                        <p class="text-xs text-gray-500">{{ message.time }}</p>
                      </div>
                      <p class="text-sm text-gray-500 truncate">{{ message.text }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Discussions List -->
              <div v-else class="space-y-1">
                <div
                  v-for="thread in threads"
                  :key="thread.id"
                  class="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                >
                  <div class="flex items-center justify-between mb-1">
                    <h3 class="text-sm font-medium">{{ thread.title }}</h3>
                    <span class="text-xs text-gray-500">{{ thread.time }}</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="flex -space-x-2">
                      <img
                        v-for="participant in thread.participants.slice(0, 3)"
                        :key="participant.id"
                        :src="participant.avatar"
                        :alt="participant.name"
                        class="w-6 h-6 rounded-full border-2 border-white"
                      />
                    </div>
                    <span class="text-xs text-gray-500">
                      {{ thread.participants.length }} participants
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Chat/Thread View -->
          <div class="flex-1 flex flex-col bg-gray-50">
            <div class="p-4 bg-white border-b border-gray-200 flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <img src="https://placehold.co/40" alt="" class="w-10 h-10 rounded-full" />
                <div>
                  <h2 class="text-sm font-medium">Judith Amakuliba</h2>
                  <p class="text-xs text-gray-500">Online</p>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <button class="p-2 hover:bg-gray-100 rounded-full">
                  <StarIcon class="w-5 h-5 text-gray-400" />
                </button>
                <button class="p-2 hover:bg-gray-100 rounded-full">
                  <SearchIcon class="w-5 h-5 text-gray-400" />
                </button>
                <button class="p-2 hover:bg-gray-100 rounded-full">
                  <MoreVerticalIcon class="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            <!-- Messages Area -->
            <div class="flex-1 overflow-y-auto p-4 space-y-4">
              <div v-for="chat in chatMessages" :key="chat.id" 
                   :class="[
                     'flex',
                     chat.isSender ? 'justify-end' : 'justify-start'
                   ]">
                <div :class="[
                  'max-w-[70%] rounded-lg p-3',
                  chat.isSender ? 'bg-orange-500 text-white' : 'bg-white'
                ]">
                  <p class="text-sm">{{ chat.message }}</p>
                  <p :class="[
                    'text-xs mt-1',
                    chat.isSender ? 'text-orange-100' : 'text-gray-500'
                  ]">{{ chat.time }}</p>
                </div>
              </div>
            </div>

            <!-- Message Input -->
            <div class="p-4 bg-white border-t border-gray-200">
              <div class="flex items-center space-x-2">
                <button class="p-2 hover:bg-gray-100 rounded-full">
                  <PaperclipIcon class="w-5 h-5 text-gray-400" />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  class="flex-1 border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <button class="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">
                  <SendIcon class="w-5 h-5" />
                </button>
              </div>
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
  Search as SearchIcon,
  Star as StarIcon,
  MoreVertical as MoreVerticalIcon,
  Paperclip as PaperclipIcon,
  Send as SendIcon,
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  Calendar,
  MessageSquare,
  Folder,
  Award,
  HelpCircle,
  Settings,
  Bell
} from 'lucide-vue-next'

const currentTab = ref('Messages')
const tabs = [
  { name: 'Messages' },
  { name: 'Discussions' }
]

const navigationItems = [
  { name: 'Dashboard', href: '#', icon: LayoutDashboard, current: false },
  { name: 'Courses', href: '#', icon: BookOpen, current: false },
  { name: 'Assignments', href: '#', icon: ClipboardList, current: false },
  { name: 'Calendar', href: '#', icon: Calendar, current: false },
  { name: 'Discussions', href: '#', icon: MessageSquare, current: true },
  { name: 'Resources', href: '#', icon: Folder, current: false },
  { name: 'Achievements', href: '#', icon: Award, current: false },
  { name: 'Support', href: '#', icon: HelpCircle, current: false },
  { name: 'Settings', href: '#', icon: Settings, current: false },
  { name: 'Notification', href: '#', icon: Bell, current: false }
]

const messages = [
  {
    id: 1,
    name: 'Jennifer Amega',
    avatar: 'https://placehold.co/40',
    text: 'Hey! Did you check the UI/UX WordPress For Flora App Design?',
    time: '09:30 PM'
  },
  {
    id: 2,
    name: 'Judith Amakuliba',
    avatar: 'https://placehold.co/40',
    text: 'Hey! Did you check the UI/UX WordPress For Flora App Design?',
    time: '09:30 PM'
  }
]

const threads = [
  {
    id: 1,
    title: 'Introduction to UI/UX',
    time: '2h ago',
    participants: [
      { id: 1, name: 'User 1', avatar: 'https://placehold.co/24' },
      { id: 2, name: 'User 2', avatar: 'https://placehold.co/24' },
      { id: 3, name: 'User 3', avatar: 'https://placehold.co/24' },
      { id: 4, name: 'User 4', avatar: 'https://placehold.co/24' }
    ]
  },
  {
    id: 2,
    title: "Beginner's Guide to becoming professional UI/UX Designer",
    time: '3h ago',
    participants: [
      { id: 1, name: 'User 1', avatar: 'https://placehold.co/24' },
      { id: 2, name: 'User 2', avatar: 'https://placehold.co/24' },
      { id: 3, name: 'User 3', avatar: 'https://placehold.co/24' }
    ]
  }
]

const chatMessages = [
  {
    id: 1,
    message: 'Hey! Did you check the UI/UX WordPress For Flora App Design?',
    time: '09:30 PM',
    isSender: false
  },
  {
    id: 2,
    message: 'Oh, Hello! All Perfect, I Will Check It And Get Back To You Soon',
    time: '09:31 PM',
    isSender: true
  },
  {
    id: 3,
    message: `Thanks for checking this project, I hope you'll believe me a lot.`,
    time: '09:32 PM',
    isSender: false
  }
]
</script>