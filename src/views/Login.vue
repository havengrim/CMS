<template>
  
    <div class="bg-white dark:bg-gray-900 min-h-screen flex justify-center">
      <!-- <div class="hidden lg:block lg:w-2/3 bg-cover" :style="backgroundStyle">
        <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
          <div>
            <h2 class="text-2xl font-bold text-white sm:text-3xl">Meraki UI</h2>
            <p class="max-w-xl mt-3 text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores,
              repellendus perferendis libero suscipit nam temporibus molestiae.
            </p>
          </div>
        </div>
      </div> -->
  
      <div class="flex items-center w-full max-w-md mx-auto lg:w-2/6">

      <MazCardSpotlight>
        <div class="flex-1 p-6">
          <div class="text-center">
            <div class="flex justify-center items-center mx-auto flex-col">
              <img class="w-14 h-7 sm:h-12" :src="images.logo" alt="Meraki UI Logo" />
              <span class="font-bold text-xl mt-4">Contract Management System</span>
            </div>
            <p class="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
          </div>
  
          <div class="mt-8">
            <form @submit.prevent="handleSubmit">
              <div>
                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                <MazInput v-model="email" type="email" placeholder="example@example.com" class="w-full" block />
              </div>
  
              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                  <a href="#" class="text-sm text-gray-400 hover:text-blue-500 hover:underline">Forgot password?</a>
                </div>
                <MazInput v-model="password" type="password" placeholder="Your Password" class="w-full" block />
              </div>
  
              <div class="mt-6">
                <Maz-btn color="primary" class="w-full" @click="handleSubmit" block>Sign in</Maz-btn>
              </div>
            </form>
  
            <!-- <p class="mt-6 text-sm text-center text-gray-400">
              Don't have an account yet? <a href="#" class="text-blue-500 hover:underline">Sign up</a>.
            </p> -->
          </div>
        </div>
      </MazCardSpotlight>
      </div>
    </div>
  </template>
  
  <script setup>
  import images from '../assets/images'; // Make sure this path is correct
  </script>
  
  <style scoped>
  
  </style>
  