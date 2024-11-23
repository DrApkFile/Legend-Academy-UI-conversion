<template>
  <div id="app" class="flex h-screen">
    <!-- Left Sidebar -->
    <aside v-if="isLoggedIn" class="w-64 bg-black border-r border-gray-700 p-4 flex-shrink-0">
      <div class="flex items-center mb-8">
        <h1 class="text-xl font-bold text-white">Legend Academy</h1>
      </div>
      <nav class="space-y-2">
        <router-link
          v-for="item in navigationItems"
          :key="item.name"
          :to="{ name: item.name }"
          class="flex items-center px-4 py-2 rounded-lg text-gray-300 hover:bg-orange-600 hover:text-white transition-colors duration-200"
          :class="{ 'bg-orange-600 text-white': $route.name === item.name }"
        >
          <component :is="item.icon" class="w-5 h-5 mr-3" />
          {{ item.name }}
        </router-link>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-grow bg-gray-50 p-8">
      <div class="flex justify-between">
        <!-- Dynamic Router View -->
        <section class="flex-grow pr-8">
          <router-view></router-view>
        </section>

        <!-- Profile Sidebar -->
        <section v-if="isLoggedIn" class="w-72 bg-white rounded-xl shadow-sm">
          <div class="p-4 border-b flex items-center justify-between">
            <span class="text-sm font-medium">Your Profile</span>
            <div class="relative">
              <button @click="toggleDropdown" class="text-gray-500 hover:text-gray-700">
                <MoreVertical class="w-4 h-4" />
              </button>
              <div v-if="showDropdown" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div class="py-1">
                  <h3 class="px-4 py-2 text-sm font-semibold text-gray-700">Admin</h3>
                  <router-link
                    v-for="(option, index) in profileOptions"
                    :key="index"
                    :to="option.route"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <component :is="option.icon" class="inline-block w-4 h-4 mr-2" />
                    {{ option.label }}
                  </router-link>
                  <a @click="logout" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <LogOut class="inline-block w-4 h-4 mr-2" />
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 space-y-6">
            <div class="flex items-center space-x-3">
              <img
                src="https://placehold.co/80"
                alt="Profile picture"
                class="w-16 h-16 rounded-full border-2 border-orange-500"
              />
              <div>
                <h3 class="font-semibold">Chioma Favour</h3>
                <p class="text-sm text-gray-500">Student</p>
              </div>
            </div>
            <div class="flex justify-between py-2">
              <div class="text-center">
                <p class="text-xl font-semibold">64.5K</p>
                <p class="text-xs text-gray-500">Grade</p>
              </div>
              <div class="text-center">
                <p class="text-xl font-semibold">11</p>
                <p class="text-xs text-gray-500">Courses</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
<script>
import {
  LayoutDashboard,
  GraduationCap,
  ClipboardList,
  Gauge,
  Calendar,
  MessageSquare,
  FileText,
  Trophy,
  HelpCircle,
  Settings,
  Bell,
  MoreVertical,
  User,
  UserCircle,
  LogOut,
} from "lucide-vue-next";

export default {
  name: "App",
  components: {
    MoreVertical,
    User,
    UserCircle,
    LogOut,
  },
  data() {
    return {
      navigationItems: [
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
      ],
      profileOptions: [
        { label: "My Profile", icon: UserCircle, route: { name: "Settings" } },
        { label: "Logout", icon: LogOut },
      ],
      showDropdown: false,
      isLoggedIn: true,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    logout() {
      this.isLoggedIn = false;
      this.$router.push({ name: "LoginView" });
    },
  },
};
</script>
