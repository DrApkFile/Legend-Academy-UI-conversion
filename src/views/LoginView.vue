<!-- src/views/LoginView.vue -->
<template>
  <div class="login-container">
    <!-- Left Section - Login Form -->
    <div class="login-form-section">
      <div class="login-form-container">
        <div class="logo-container">
          <img src="@/assets/la.png" alt="Legend Academy" class="logo" />
        </div>
        
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">Enter your credentials below</label>
            <input 
              type="email" 
              id="email"
              v-model="email"
              placeholder="Email"
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <input 
              type="password" 
              id="password"
              v-model="password"
              placeholder="Password"
              class="form-input"
            />
          </div>
          
          <div class="remember-me">
            <input 
              type="checkbox" 
              id="remember"
              v-model="rememberMe"
            />
            <label for="remember">Remember me</label>
          </div>
          
          <button type="submit" class="login-button">
            Login
          </button>
        </form>
        
        <div class="footer">
          <p>© 2024 Legend Academy. All rights reserved</p>
        </div>
      </div>
    </div>

    <!-- Right Section - Welcome Message -->
    <div class="welcome-section">
      <div class="welcome-content">
        <h1>Welcome to Legend Academy</h1>
        <p>Lorem ipsum is a dummy text until you give me better text to use for the actual welcome message. Even better having this Why go elsewhere?</p>
        <button class="read-more">Read More</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const router = useRouter()

const handleLogin = () => {
  // Placeholder for actual login logic
  console.log('Login attempted', {
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value
  })

  // Redirect to Dashboard on successful login
  router.push({ name: 'dashboard' })
}
</script>

<style scoped>
/* Styles remain the same as before */
.login-container {
  display: flex;
  min-height: 100vh;
  font-family: 'Source Sans Pro', sans-serif;
}

.login-form-section {
  flex: 1;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}

.login-form-container {
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
}

.logo-container {
  text-align: center;
  margin-bottom: 2rem;
}

.logo {
  max-width: 200px;
  height: auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 1rem;
  color: #666;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Source Sans Pro', sans-serif;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #FF4500;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
}

.login-button:hover {
  background-color: #FF5722;
}

.footer {
  text-align: center;
  margin-top: 2rem;
  color: #666;
  font-size: 0.875rem;
  font-family: 'Source Sans Pro', sans-serif;
}

.welcome-section {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 2rem;
  background: linear-gradient(rgba(255, 69, 0, 0.85), rgba(255, 69, 0, 0.85)),
              url('@/assets/background.jpg') center/cover no-repeat;
  overflow: hidden;
}

.welcome-content {
  max-width: 400px;
  text-align: center;
  font-family: 'Source Sans Pro', sans-serif;
  position: relative;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 2rem;
  border-radius: 8px;
  backdrop-filter: blur(5px);
}

.heading-container {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.welcome-content h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-family: 'Source Sans Pro', sans-serif;
  white-space: nowrap;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.heading-underline {
  width: 100%;
  height: 1px;
  background-color: white;
  position: absolute;
  bottom: -4px;
  left: 0;
}

.welcome-content p {
  margin-bottom: 2rem;
  line-height: 1.6;
  font-family: 'Source Sans Pro', sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.read-more {
  padding: 0.75rem 2rem;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.read-more:hover {
  background-color: white;
  color: #FF4500;
}
</style> 
