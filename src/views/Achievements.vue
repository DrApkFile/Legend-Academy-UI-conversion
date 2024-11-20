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

    <!-- Achievements Section -->
    <div class="bg-white rounded-xl p-6">
      <div class="mb-6">
        <h1 class="text-xl font-semibold mb-2">Achievements</h1>
        <p class="text-gray-500 text-sm">View and manage your Achievements</p>
      </div>

      <!-- Tabs -->
      <div class="border-b border-gray-200 mb-6">
        <nav class="flex space-x-8">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="currentTab = tab"
            :class="[
              'pb-4 px-1 text-sm font-medium border-b-2 transition-colors',
              currentTab === tab
                ? 'border-orange-500 text-orange-500'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            ]"
          >
            {{ tab }}
          </button>
        </nav>
      </div>

      <!-- Certificates Tab -->
      <div v-if="currentTab === 'Certificate'" class="space-y-4">
        <!-- Progress Section -->
        <div class="mb-8">
          <h3 class="text-sm font-medium mb-2">Your Progress</h3>
          <div class="bg-gray-100 h-2 rounded-full overflow-hidden">
            <div class="bg-orange-500 h-full rounded-full" style="width: 60%"></div>
          </div>
          <div class="flex justify-between mt-2">
            <span class="text-sm text-gray-500">Points Earned: 60</span>
            <span class="text-sm text-gray-500">Level 5</span>
          </div>
        </div>

        <!-- Certificates Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="cert in certificates" :key="cert.id" 
               class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 class="font-medium mb-1">{{ cert.title }}</h3>
            <p class="text-sm text-gray-500 mb-2">
              Issued by: {{ cert.issuer }}<br>
              Completed on: {{ cert.completedDate }}
            </p>
            <p class="text-sm text-gray-600 mb-4">{{ cert.description }}</p>
            <div class="flex space-x-2">
              <button class="flex items-center px-3 py-1.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm">
                <DownloadIcon class="w-4 h-4 mr-1" />
                Download PDF
              </button>
              <button class="flex items-center px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm">
                <ShareIcon class="w-4 h-4 mr-1" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Medals Tab -->
      <div v-if="currentTab === 'Medals'" class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="medal in medals" :key="medal.id" 
             class="flex flex-col items-center text-center">
          <div :class="`w-20 h-20 rounded-full flex items-center justify-center ${medal.bgColor}`">
            <component :is="medal.icon" class="w-10 h-10 text-white" />
          </div>
          <h3 class="font-medium mt-2">{{ medal.title }}</h3>
          <p class="text-sm text-gray-500">{{ medal.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  Search as SearchIcon,
  Download as DownloadIcon,
  Share as ShareIcon,
  Trophy as TrophyIcon,
  Star as StarIcon,
  Award as AwardIcon,
  Target as TargetIcon
} from 'lucide-vue-next'

const currentTab = ref('Certificate')
const tabs = ['Certificate', 'Medals']

const certificates = [
  {
    id: 1,
    title: 'Certified UI/UX Developer',
    issuer: 'ABC Institute',
    completedDate: '14 October 2024',
    description: 'This certificate validates your expertise in UI/UX and Front-End Development Skills.'
  },
  {
    id: 2,
    title: 'Advanced Front-End Development',
    issuer: 'ABC Institute',
    completedDate: '25 September 2024',
    description: 'This certificate validates your expertise in HTML, CSS and JavaScript Skills.'
  },
  {
    id: 3,
    title: 'Certified UI/UX Developer',
    issuer: 'ABC Institute',
    completedDate: '20 September 2024',
    description: 'This certificate validates your expertise in UI/UX and Front-End Development Skills.'
  }
]

const medals = [
  {
    id: 1,
    title: 'First Course Completed',
    description: '1 Course',
    icon: TrophyIcon,
    bgColor: 'bg-orange-500'
  },
  {
    id: 2,
    title: 'XP Points',
    description: '100 Points',
    icon: StarIcon,
    bgColor: 'bg-yellow-500'
  },
  {
    id: 3,
    title: 'Weekly Top Scorer',
    description: 'Top Performer',
    icon: AwardIcon,
    bgColor: 'bg-orange-500'
  },
  {
    id: 4,
    title: 'Five Courses Completed',
    description: '5 Courses',
    icon: TargetIcon,
    bgColor: 'bg-blue-500'
  }
]
</script>