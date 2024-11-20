<template>
  <div id="app" class="flex h-screen">
    <!-- Left Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 p-4 flex-shrink-0">
      <div class="flex items-center mb-8">
        <h1 class="text-xl font-bold">Academy</h1>
      </div>

      <nav class="space-y-2">
        <router-link
          v-for="item in navigationItems"
          :key="item.name"
          :to="{ name: item.name }"
          class="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          :class="{ 'bg-red-50 text-red-600': $route.name === item.name }"
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

        <!-- Profile Section -->
        <section class="w-72 bg-white rounded-xl shadow-sm p-6">
          <div class="text-right w-full mb-6">
            <span class="text-sm text-gray-500">Your Profile</span>
          </div>
          <div class="flex flex-col items-center space-y-4">
            <div class="w-20 h-20 rounded-full border-4 border-red-500 overflow-hidden">
              <img
                src="https://placehold.co/80"
                alt="Profile picture"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="text-center">
              <h3 class="font-semibold text-lg">Chioma Favour</h3>
              <p class="text-sm text-gray-500">Student</p>
            </div>
            <div class="flex justify-center gap-8 w-full">
              <div class="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mx-auto mb-1 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M12 7h4m-4 4h4m-4 4h4m-6 8h-2m1-18h-1a2 2 0 000 4h.5M5 13l4 4L19 7"
                  />
                </svg>
                <p class="font-semibold">64.50</p>
                <p class="text-xs text-gray-500">Hours Spent</p>
              </div>
              <div class="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mx-auto mb-1 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0m8 10H4m12 0a2 2 0 11-4 0h4z"
                  />
                </svg>
                <p class="font-semibold">10</p>
                <p class="text-xs text-gray-500">Courses</p>
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
        </section>
      </div>
    </main>
  </div>
</template>

---

### Updated Script
Add the updated `script` section:

```vue
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
} from "lucide-vue-next";

export default {
  name: "App",
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
    };
  },
};
</script>
