<template>
  <aside
    :class="collapsed ? 'w-16' : 'w-56'"
    class="bg-[var(--maz-bg)] text-gray-900 h-screen p-5 shadow flex flex-col justify-between transition-all duration-300"
  >
    <div>
      <div class="flex justify-center items-center mb-5 gap-2">
        <img :src="images.logo" alt="Logo CMS" class="w-6 h-6" />
        <span v-if="!collapsed" class="text-lg font-semibold transition-opacity duration-500">CMS</span>
      </div>

      
      <nav>
        <ul class="space-y-1 mt-8">
          <li
            v-for="item in menuItems"
            :key="item.text"
            @click="router.push(item.route)"
            class="flex items-center justify-center cursor-pointer p-2 rounded text-sm transition-all"
            :class="{ 'hover:bg-gray-200': !collapsed }"
            v-if="collapsed"
            v-tooltip.right="{ text: item.text, color: 'theme', arrow: true  }"
          >
            <component :is="item.icon" class="w-5 h-5 min-w-5" />
            <span v-if="!collapsed" class="ml-3 transition-opacity duration-300">{{ item.text }}</span>
          </li>
          <li
            v-for="item in menuItems"
            :key="item.text + '-expanded'"
            @click="router.push(item.route)"
            class="flex items-center cursor-pointer p-2 rounded text-sm transition-all"
            :class="{ 'hover:bg-gray-200': !collapsed }"
            v-else
          >
            <component :is="item.icon" class="w-5 h-5 min-w-5" />
            <span class="ml-3 transition-opacity duration-300">{{ item.text }}</span>
          </li>
        </ul>
      </nav>
    </div>

      <button
      @click="handleLogout"
      class="flex items-center justify-center cursor-pointer p-2 rounded text-sm transition-all"
      :class="{ 'hover:bg-red-100': !collapsed }"
      v-if="collapsed"
      v-tooltip.right="{ text: 'Logout', color: 'black' }"
      >
      <ArrowLeftStartOnRectangleIcon class="w-5 h-5 min-w-5" />
    </button>

    <button
      @click="handleLogout"
      class="flex items-center cursor-pointer  p-2 rounded text-sm transition-all"
      :class="{ 'hover:bg-red-100': !collapsed }"
      v-else
    >
      <ArrowLeftStartOnRectangleIcon class="w-5 h-5 min-w-5" />
      <span class="ml-3 transition-opacity duration-300">Logout</span>
    </button>
  </aside>
</template>

<script setup>
import images from "../assets/images"
import { inject } from 'vue';
import { useRouter } from 'vue-router';
import {
  Squares2X2Icon,
  DocumentIcon,
  ArrowTrendingUpIcon,
  PrinterIcon,
  BellIcon,
  Cog6ToothIcon,
  ArrowLeftStartOnRectangleIcon,
} from '@heroicons/vue/24/outline';

const router = useRouter();
const handleLogout = () => {
  console.log('Logging out...');
  router.push('/login');
};

const collapsed = inject('collapsed');

const menuItems = [
  { text: 'Dashboard', route: '/dashboard', icon: Squares2X2Icon },
  { text: 'Contracts', route: '/dashboard/contracts', icon: DocumentIcon },
  { text: 'Ratings', route: '/dashboard/ratings', icon: ArrowTrendingUpIcon },
  { text: 'Generate', route: '/dashboard/generate', icon: PrinterIcon },
  { text: 'Notifications', route: '/dashboard/notifications', icon: BellIcon },
  { text: 'Settings', route: '/dashboard/settings', icon: Cog6ToothIcon },
];
</script>
