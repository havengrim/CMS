<template>
  <nav class="bg-[var(--maz-bg)] text-gray-900 py-4 px-6 flex justify-between items-center">
    <!-- Toggle Sidebar Button -->
    <Bars3BottomLeftIcon class="w-6 h-6 cursor-pointer" @click="toggleSidebar" />

    <!-- Avatar -->
    <MazAvatar
      class="cursor-pointer"
      src="https://api.dicebear.com/7.x/big-smile/svg?backgroundColor=1d90ff&scale=80&seed=200"
      alt="User Avatar"
      @click="logout"
      size="10px"
    />
  </nav>
</template>

<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";
import { Bars3BottomLeftIcon } from "@heroicons/vue/24/outline";

const router = useRouter();
const logout = () => {
  router.push("/"); // Redirect to login page
};

// Inject sidebar toggle function from the parent (App.vue)
const toggleSidebar = inject("toggleSidebar");
</script>
