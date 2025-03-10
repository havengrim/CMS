<script setup lang="ts">
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 p-4">
    <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
      <h2 class="text-xl font-semibold text-center mb-4">Login</h2>
      
      <div class="w-full">
          <MazInput v-model="email" label="Email" type="email" class="mb-3" :full="true" block />
        </div>
        <div class="w-full">
          <MazInput v-model="password" label="Password" type="password" class="mb-3" :full="true" block />
        </div>


      <div class="flex items-center justify-between mb-4">
        <MazCheckbox v-model="rememberMe" label="Remember me" />
        <a href="#" class="text-sm text-primary hover:underline">Forgot password?</a>
      </div>

      <MazBtn block>Login</MazBtn>
    </div>
  </div>
</template>

<style scoped>
:deep(.maz-input) {
  width: 100% !important;
}

:deep(.maz-field) {
  width: 100% !important;
}
</style>
