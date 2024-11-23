<template>
  <div class="min-h-screen bg-gray-50 p-6 font-source-sans-pro">
    <h1 class="text-2xl font-bold mb-6 capitalize">Performance Overview</h1>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div v-for="(stat, key) in stats" :key="key" 
           class="bg-white rounded-xl p-6 shadow-sm">
        <h3 class="text-gray-500 text-sm mb-2 capitalize">{{ key }}</h3>
        <p class="text-3xl font-bold capitalize">{{ stat }}</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left Column -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Performance Breakdown -->
        <div class="bg-white rounded-xl p-6 shadow-sm">
          <h2 class="text-lg font-semibold mb-4 capitalize">Performance Breakdown</h2>
          <div class="space-y-4">
            <div v-for="module in modulePerformance" :key="module.name" class="space-y-2">
              <div class="flex items-center justify-between text-sm">
                <span>{{ module.name }}</span>
              </div>
              <div class="flex gap-2">
                <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div class="h-full bg-orange-500 rounded-full" 
                       :style="{ width: `${module.module1Score}%` }" />
                </div>
                <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div class="h-full bg-green-500 rounded-full" 
                       :style="{ width: `${module.module2Score}%` }" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between text-xs text-gray-500 mt-2">
            <span>Module 1</span>
            <span>Module 2</span>
          </div>
        </div>

        <!-- Overall Performance -->
        <div class="bg-white rounded-xl p-6 shadow-sm">
          <h2 class="text-lg font-semibold mb-4 capitalize">Overall Performance</h2>
          <div class="space-y-4">
            <div v-for="metric in performanceMetrics" :key="metric.label" 
                 class="flex items-center justify-between">
              <span class="text-sm capitalize">{{ metric.label }}</span>
              <div class="flex items-center">
                <TrendingUpIcon v-if="metric.trend === 'up'" 
                              class="w-4 h-4 text-green-500 mr-2" />
                <TrendingDownIcon v-if="metric.trend === 'down'" 
                                class="w-4 h-4 text-red-500 mr-2" />
                <span class="text-sm font-medium">{{ metric.percentage }}%</span>
              </div>
            </div>
          </div>
          <button class="w-full mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            See All Results
          </button>
        </div>

        <!-- Test Results Table -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
          <div class="p-6 border-b border-gray-200">
            <div class="flex justify-between items-center">
              <h2 class="text-lg font-semibold capitalize">Test Results</h2>
              <div class="flex items-center space-x-2">
                <input 
                  type="search"
                  placeholder="Search Tests..."
                  class="px-3 py-1 text-sm border rounded-md"
                />
                <select class="px-3 py-1 text-sm border rounded-md">
                  <option>Show Results: All</option>
                  <option>Passed Only</option>
                  <option>Failed Only</option>
                </select>
              </div>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Test
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mark
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Questions Attempted
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Correct
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Wrong
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Result
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="result in testResults" :key="result.id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {{ result.test }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ result.mark }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ result.questionsAttempted }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ result.correct }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ result.wrong }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span :class="[ 
                      'px-2 py-1 text-xs font-medium rounded-full',
                      result.result === 'pass' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    ]">
                      {{ result.result }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 py-4 border-t border-gray-200">
            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-500">
                Showing 1 to 10 of 20 Results
              </div>
              <div class="flex gap-2">
                <button class="px-3 py-1 text-sm border rounded-md hover:bg-gray-50">
                  Previous
                </button>
                <button class="px-3 py-1 text-sm border rounded-md hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column - Profile Stats -->
      <div class="space-y-6">
        <div class="bg-white rounded-xl p-6 shadow-sm">
          <div class="flex flex-col items-center">
            <img src="https://placehold.co/64" alt="Profile" class="w-16 h-16 rounded-full mb-4" />
            <h3 class="font-semibold capitalize">Chioma Favour</h3>
            <p class="text-sm text-gray-600 capitalize">Student</p>
          </div>
          <div class="grid grid-cols-3 gap-4 mt-6">
            <div class="text-center">
              <div class="text-xl font-semibold">64.5%</div>
              <div class="text-xs text-gray-600">Grade</div>
            </div>
            <div class="text-center">
              <div class="text-xl font-semibold">16</div>
              <div class="text-xs text-gray-600">Courses</div>
            </div>
            <div class="text-center">
              <div class="text-xl font-semibold">24</div>
              <div class="text-xs text-gray-600">Hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-vue-next'
import type { PerformanceMetric, ModulePerformance, TestResult, PerformanceStats } from '@/types/performance'

const stats = ref<PerformanceStats>({
  "totalTests": 16,
  totalPoints: 1000,
  testAwards: 1000
})

const modulePerformance = ref<ModulePerformance[]>([
  { name: 'Mathematics', module1Score: 70, module2Score: 85 },
  { name: 'Physics', module1Score: 78, module2Score: 83 },
])

const performanceMetrics = ref<PerformanceMetric[]>([
  { label: 'Test Score', percentage: 80, trend: 'up' },
  { label: 'Course Completion', percentage: 75, trend: 'down' }
])

const testResults = ref<TestResult[]>([
  { id: 1, test: 'Math Exam', mark: 75, questionsAttempted: 50, correct: 40, wrong: 10, result: 'pass' },
  { id: 2, test: 'Physics Exam', mark: 85, questionsAttempted: 50, correct: 45, wrong: 5, result: 'pass' }
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap');

.font-source-sans-pro {
  font-family: 'Source Sans Pro', sans-serif;
}

.capitalize {
  text-transform: capitalize;
}
</style>
