<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <!-- Search Header -->
    <div class="mb-6">
      <div class="relative">
        <SearchIcon class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search your course here..."
          class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
    </div>

    <!-- Main Content -->
    <div class="bg-white rounded-xl p-6">
      <div class="mb-6">
        <h1 class="text-xl font-semibold mb-2">{{ currentView === 'notifications' ? 'Notifications' : currentView === 'settings' ? 'Settings' : 'Profile' }}</h1>
        <p class="text-gray-500 text-sm">{{ getSubtitle }}</p>
      </div>

      <!-- Profile View -->
      <div v-if="currentView === 'profile'" class="space-y-6">
        <div class="flex flex-col items-center mb-8">
          <div class="w-24 h-24 rounded-full border-4 border-orange-500 overflow-hidden mb-4">
            <img src="https://placehold.co/96" alt="Profile picture" class="w-full h-full object-cover" />
          </div>
          <h2 class="text-xl font-semibold">Favour Chukwu</h2>
          <p class="text-gray-500">Student</p>
          <p class="text-sm text-gray-400">#1230456</p>
        </div>

        <!-- Personal Information -->
        <div class="border border-gray-100 rounded-lg p-4">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-sm font-medium">Personal Information</h3>
            <button @click="currentView = 'edit'" class="text-orange-500 text-sm hover:text-orange-600">
              <PencilIcon class="w-4 h-4" />
            </button>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm text-gray-500">First Name</p>
              <p class="font-medium">Favour</p>
            </div>
            <div>
              <p class="text-sm text-gray-500">Last Name</p>
              <p class="font-medium">Chukwu</p>
            </div>
            <div>
              <p class="text-sm text-gray-500">Email Address</p>
              <p class="font-medium">favourchukwu@gmail.com</p>
            </div>
            <div>
              <p class="text-sm text-gray-500">Phone Number</p>
              <p class="font-medium">+234 8023498456</p>
            </div>
          </div>
        </div>

        <!-- Address Information -->
        <div class="border border-gray-100 rounded-lg p-4">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-sm font-medium">Address Information</h3>
            <button @click="currentView = 'edit'" class="text-orange-500 text-sm hover:text-orange-600">
              <PencilIcon class="w-4 h-4" />
            </button>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm text-gray-500">Country</p>
              <p class="font-medium">Nigeria</p>
            </div>
            <div>
              <p class="text-sm text-gray-500">City/State</p>
              <p class="font-medium">Ikeja, Lagos</p>
            </div>
            <div class="col-span-2">
              <p class="text-sm text-gray-500">Address</p>
              <p class="font-medium">25, Aladimma street, opo Bishop Court</p>
            </div>
            <div>
              <p class="text-sm text-gray-500">Postal Code</p>
              <p class="font-medium">126221</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Edit Profile View -->
      <div v-if="currentView === 'edit'" class="max-w-2xl">
        <div class="mb-6">
          <button @click="currentView = 'profile'" class="text-sm text-gray-500 hover:text-gray-700">
            <ArrowLeftIcon class="w-4 h-4 inline-block mr-1" /> Back to Profile
          </button>
        </div>
        
        <form @submit.prevent="saveProfile" class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                v-model="form.firstName"
                type="text"
                class="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                v-model="form.lastName"
                type="text"
                class="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                v-model="form.email"
                type="email"
                class="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div class="flex">
                <select class="p-2 border border-gray-200 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option value="NG">🇳🇬 +234</option>
                </select>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="flex-1 p-2 border border-gray-200 rounded-r-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
          </div>

          <div class="flex gap-4">
            <button
              type="button"
              @click="currentView = 'profile'"
              class="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      <!-- Settings View -->
      <div v-if="currentView === 'settings'" class="max-w-2xl">
        <div class="space-y-6">
          <!-- Account Settings -->
          <div class="border border-gray-100 rounded-lg p-4">
            <h3 class="text-sm font-medium mb-4">Account Settings</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm text-gray-500 mb-1">Email Address</label>
                <input
                  type="email"
                  value="chiomafavour@gmail.com"
                  disabled
                  class="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg"
                />
              </div>
              <div>
                <label class="block text-sm text-gray-500 mb-1">Password</label>
                <input
                  type="password"
                  value="********"
                  disabled
                  class="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg mb-2"
                />
                <button class="w-full p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                  Change Password
                </button>
              </div>
            </div>
          </div>

          <!-- Notification Settings -->
          <div class="border border-gray-100 rounded-lg p-4">
            <h3 class="text-sm font-medium mb-4">Notification Settings</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <label class="text-sm text-gray-500">Email</label>
                <button
                  class="relative inline-flex h-6 w-11 items-center rounded-full"
                  :class="notifications.email ? 'bg-orange-500' : 'bg-gray-200'"
                  @click="notifications.email = !notifications.email"
                >
                  <span
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                    :class="notifications.email ? 'translate-x-6' : 'translate-x-1'"
                  />
                </button>
              </div>
              <div class="flex items-center justify-between">
                <label class="text-sm text-gray-500">SMS</label>
                <button
                  class="relative inline-flex h-6 w-11 items-center rounded-full"
                  :class="notifications.sms ? 'bg-orange-500' : 'bg-gray-200'"
                  @click="notifications.sms = !notifications.sms"
                >
                  <span
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                    :class="notifications.sms ? 'translate-x-6' : 'translate-x-1'"
                  />
                </button>
              </div>
              <div class="flex items-center justify-between">
                <label class="text-sm text-gray-500">Push Notifications</label>
                <button
                  class="relative inline-flex h-6 w-11 items-center rounded-full"
                  :class="notifications.push ? 'bg-orange-500' : 'bg-gray-200'"
                  @click="notifications.push = !notifications.push"
                >
                  <span
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                    :class="notifications.push ? 'translate-x-6' : 'translate-x-1'"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Notifications View -->
      <div v-if="currentView === 'notifications'" class="space-y-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg font-medium">Today</h2>
          <button class="text-orange-500 text-sm hover:text-orange-600">
            Mark all as read
          </button>
        </div>

        <div class="space-y-4">
          <div v-for="notification in notifications.items" :key="notification.id" 
               class="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50">
            <div class="flex-shrink-0">
              <component 
                :is="notification.icon" 
                class="w-5 h-5"
                :class="notification.iconColor"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm">{{ notification.message }}</p>
              <p class="text-xs text-gray-500 mt-1">{{ notification.time }}</p>
              <button v-if="notification.action" 
                      class="text-sm text-orange-500 mt-2 hover:text-orange-600">
                {{ notification.action }}
              </button>
            </div>
            <button class="text-gray-400 hover:text-gray-500">
              <MoreVerticalIcon class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  Search as SearchIcon,
  Pencil as PencilIcon,
  ArrowLeft as ArrowLeftIcon,
  MoreVertical as MoreVerticalIcon,
  Award as AwardIcon,
  Bell as BellIcon,
  MessageSquare as MessageSquareIcon
} from 'lucide-vue-next'

const currentView = ref('profile')
const form = ref({
  firstName: 'Favour',
  lastName: 'Chukwu',
  email: 'favourchukwu@gmail.com',
  phone: '8023498456'
})

const notifications = ref({
  email: true,
  sms: false,
  push: true,
  items: [
    {
      id: 1,
      message: 'Congratulations! You have earned a new certificate',
      time: '20m ago',
      icon: AwardIcon,
      iconColor: 'text-orange-500'
    },
    {
      id: 2,
      message: 'A new assignment has been assigned to you: Introduction to UI/UX Fundamentals',
      time: '1h ago',
      icon: BellIcon,
      iconColor: 'text-blue-500',
      action: 'View assignment'
    },
    {
      id: 3,
      message: 'Ikenna Olajide replied to your comment in the UI/UX Design post',
      time: '2h ago',
      icon: MessageSquareIcon,
      iconColor: 'text-green-500'
    }
  ]
})

const getSubtitle = computed(() => {
  switch (currentView.value) {
    case 'profile':
      return 'View and manage your profile'
    case 'settings':
      return 'View and manage your settings'
    case 'notifications':
      return 'View and manage your notifications and stay up-to-date'
    default:
      return ''
  }
})

const saveProfile = () => {
  // Here you would typically make an API call to save the profile
  currentView.value = 'profile'
}
</script>