<template>
  <div id="app" class="flex h-screen">
    <!-- Left Sidebar (unchanged) -->
    <aside class="w-64 bg-black border-r border-gray-700 p-4 flex-shrink-0">
      <!-- ... (sidebar content remains the same) ... -->
    </aside>

    <!-- Main Content -->
    <main class="flex-grow bg-gray-50 p-8">
      <div class="flex justify-between">
        <!-- Main Section -->
        <section class="flex-grow pr-8">
          <router-view></router-view>
        </section>

        <!-- Updated Profile Section -->
        <section class="w-72 bg-white rounded-xl shadow-sm">
          <div class="p-4 border-b">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium">Your Profile</span>
              <div class="relative">
                <button @click="toggleDropdown" class="text-gray-500 hover:text-gray-700">
                  <MoreVertical class="w-4 h-4" />
                </button>
                <!-- Dropdown Menu -->
                <div v-if="showDropdown" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <div class="py-1">
                    <h3 class="px-4 py-2 text-sm font-semibold text-gray-700">Admin</h3>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <User class="inline-block w-4 h-4 mr-2" />
                      Teacher
                    </a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <GraduationCap class="inline-block w-4 h-4 mr-2" />
                      Student
                    </a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <UserCircle class="inline-block w-4 h-4 mr-2" />
                      My Profile
                    </a>
                    <a @click="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      <LogOut class="inline-block w-4 h-4 mr-2" />
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- ... (rest of the profile section remains the same) ... -->
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  LayoutDashboard,
  GraduationCap,
  ClipboardList,
  Calendar,
  MessageSquare,
  FileText,
  Trophy,
  HelpCircle,
  Settings,
  Bell,
  Gauge,
  MoreVertical,
  User,
  UserCircle,
  LogOut,
} from "lucide-vue-next"

export default {
  name: "App",
  components: {
    MoreVertical,
    User,
    GraduationCap,
    UserCircle,
    LogOut,
  },
  setup() {
    const router = useRouter()
    const showDropdown = ref(false)

    const navigationItems = [
      { name: "Dashboard", icon: LayoutDashboard },
      { name: "Courses", icon: GraduationCap },
      { name: "Assignments", icon: ClipboardList },
      { name: "Performance", icon: Gauge },
      { name: "Calendar", icon: Calendar },
      { name: "Discussions", icon: MessageSquare },
      { name: "Resources", icon: FileText },
      { name: "Achievements", icon: Trophy },
      { name: "Support", icon: HelpCircle },
      { name: "Settings", icon: Settings },
      { name: "Notification", icon: Bell },
    ]

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value
    }

    const logout = () => {
      // Perform any logout logic here (e.g., clearing tokens, etc.)
      router.push({ name: 'Login' })
    }

    return {
      navigationItems,
      showDropdown,
      toggleDropdown,
      logout
    }
  }
}
</script>