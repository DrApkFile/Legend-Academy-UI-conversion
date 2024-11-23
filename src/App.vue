<template>
  <div id="app" class="flex h-screen">
    <!-- Left Sidebar -->
    <aside v-if="!$route.name.includes('Login')" class="w-64 bg-black border-r border-gray-700 p-4 flex-shrink-0">
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
        <!-- Main Section -->
        <section class="flex-grow pr-8">
          <router-view></router-view>
        </section>

        <!-- Updated Profile Section with More Details -->
        <section v-if="!$route.name.includes('Login')" class="w-72 bg-white rounded-xl shadow-sm">
          <div class="p-4 border-b flex items-center justify-between">
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
                  <a @click="logout" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <LogOut class="inline-block w-4 h-4 mr-2" />
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-4 space-y-6">
            <!-- Profile Info -->
            <div class="flex items-center space-x-3">
              <div class="relative">
                <img
                  src="https://placehold.co/80"
                  alt="Profile picture"
                  class="w-16 h-16 rounded-full border-2 border-orange-500"
                />
                <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h3 class="font-semibold">Chioma Favour</h3>
                <p class="text-sm text-gray-500">Student</p>
              </div>
            </div>

            <!-- Stats -->
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

            <!-- Hours Spent Chart -->
            <div class="space-y-2">
              <h4 class="text-sm font-medium">Hours Spent</h4>
              <div class="h-32 flex items-end gap-2">
                <div v-for="(height, day) in hoursSpent" :key="day" 
                     class="flex-1 bg-orange-100 rounded-t-lg relative"
                     :style="{ height: `${height}%` }">
                  <div class="absolute inset-x-0 bottom-0 bg-orange-500 rounded-t-lg" 
                       :style="{ height: `${height}%` }"></div>
                </div>
              </div>
              <div class="flex justify-between text-xs text-gray-500">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
              </div>
            </div>

            <!-- Task Progress -->
            <div class="space-y-2">
              <h4 class="text-sm font-medium">Task Progress</h4>
              <div class="space-y-2">
                <div v-for="(progress, task) in taskProgress" :key="task" class="space-y-1">
                  <div class="flex justify-between text-xs">
                    <span>{{ task }}</span>
                    <span>{{ progress }}%</span>
                  </div>
                  <div class="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-orange-500 rounded-full" :style="{ width: `${progress}%` }"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- To Do List -->
            <div class="space-y-2">
              <h4 class="text-sm font-medium">To Do List</h4>
              <div class="space-y-2">
                <label v-for="(task, index) in todoList" :key="index" class="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" :checked="task.completed" class="rounded text-orange-500 focus:ring-orange-500" />
                  {{ task.name }}
                </label>
              </div>
            </div>

            <button class="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
              See All
            </button>
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
} from "lucide-vue-next";

export default {
  name: "App",
  components: {
    MoreVertical,
    User,
    GraduationCap,
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
        { name: "Notification", icon: Bell },
      ],
      hoursSpent: {
        Mon: 80,
        Tue: 65,
        Wed: 45,
        Thu: 90,
        Fri: 75
      },
      taskProgress: {
        'Introduction to Figma': 80,
        'Complete UI/UX Course': 65,
        'Front-End Development': 45
      },
      todoList: [
        { name: 'Human Interaction Design', completed: false },
        { name: 'Introduction to UI', completed: true },
        { name: 'Web Development', completed: false }
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
    }
  },
};
</script>
