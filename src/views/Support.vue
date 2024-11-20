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
        <h1 class="text-xl font-semibold mb-2">Support</h1>
        <p class="text-gray-500 text-sm">How can we help you?</p>
      </div>

      <!-- Navigation -->
      <div class="flex gap-4 mb-6">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="currentTab = tab.id"
          :class="[
            'text-sm font-medium px-4 py-2 rounded-lg',
            currentTab === tab.id 
              ? 'bg-orange-100 text-orange-500' 
              : 'text-gray-500 hover:bg-gray-50'
          ]"
        >
          {{ tab.name }}
        </button>
      </div>

      <!-- FAQ Section -->
      <div v-if="currentTab === 'faq'" class="space-y-4">
        <div v-for="faq in faqs" :key="faq.id">
          <button
            @click="toggleFaq(faq.id)"
            class="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50"
            :class="activeFaq === faq.id ? 'bg-gray-50' : ''"
          >
            <span class="text-orange-500">{{ faq.question }}</span>
            <PlusIcon 
              class="w-5 h-5 text-gray-400"
              :class="activeFaq === faq.id ? 'rotate-45' : ''"
            />
          </button>
          <div 
            v-if="activeFaq === faq.id"
            class="p-4 text-gray-600 text-sm bg-gray-50 rounded-lg mt-2"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>

      <!-- Report Form -->
      <div v-if="currentTab === 'report' && !isSubmitted" class="max-w-2xl">
        <form @submit.prevent="submitReport" class="space-y-4">
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              id="subject"
              v-model="reportForm.subject"
              type="text"
              placeholder="Enter subject"
              class="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              v-model="reportForm.message"
              rows="4"
              placeholder="Send us a message..."
              class="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Send Report
          </button>
        </form>
      </div>

      <!-- Success Message -->
      <div v-if="isSubmitted" class="text-center py-12">
        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckIcon class="w-6 h-6 text-green-500" />
        </div>
        <h3 class="text-lg font-medium mb-2">Message Sent!</h3>
        <p class="text-gray-500 mb-6">We will get back to you within the next 24hours</p>
        <button
          @click="resetForm"
          class="bg-orange-500 text-white px-8 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  Search as SearchIcon,
  Plus as PlusIcon,
  Check as CheckIcon
} from 'lucide-vue-next'

const currentTab = ref('faq')
const activeFaq = ref('password')
const isSubmitted = ref(false)

const tabs = [
  { id: 'faq', name: 'FAQ' },
  { id: 'report', name: 'Report A Problem' },
  { id: 'contact', name: 'Contact Us' }
]

const faqs = [
  {
    id: 'password',
    question: 'How do I change my password?',
    answer: 'To reset your password, go to the "Settings" page. Click on "Change Password" and follow the instructions.'
  },
  {
    id: 'support',
    question: 'How can I contact support?',
    answer: 'You can contact our support team through the "Contact Us" form or by sending an email to support@example.com'
  },
  {
    id: 'email',
    question: 'Can I change my email address?',
    answer: 'Yes, you can change your email address in your account settings. Please ensure you verify your new email address.'
  },
  {
    id: 'report',
    question: 'How do I report a problem?',
    answer: 'Use the "Report A Problem" form to submit any issues you encounter. Our team will respond within 24 hours.'
  },
  {
    id: 'profile',
    question: 'How do I edit my profile?',
    answer: 'You can edit your profile information by going to your profile page and clicking the "Edit Profile" button.'
  }
]

const reportForm = ref({
  subject: '',
  message: ''
})

const toggleFaq = (id) => {
  activeFaq.value = activeFaq.value === id ? null : id
}

const submitReport = () => {
  // Here you would typically make an API call to submit the report
  isSubmitted.value = true
}

const resetForm = () => {
  isSubmitted.value = false
  reportForm.value = {
    subject: '',
    message: ''
  }
  currentTab.value = 'faq'
}
</script>