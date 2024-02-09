<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from "./stores/auth";

const authStore = useAuthStore();
</script>

<template>
  
  <div class="w-full h-16 bg-gray-500 text-white">
    <div class="h-full flex justify-between items-center px-10">
      <h2 class="font-bold text-2xl">Logo</h2>
      <div class="flex items-center gap-10">
        <router-link :to="{name: 'home'}" class="px-3 py-2 hover:bg-gray-400 font-semibold">Home</router-link>
        <router-link :to="{name: 'login'}" class="px-3 py-2 hover:bg-gray-400 font-semibold">Login</router-link>
        <router-link :to="{name: 'register'}" class="px-3 py-2 hover:bg-gray-400 font-semibold">Signup</router-link>
        <button v-if="authStore.user" class="px-3 py-2 hover:bg-gray-400 font-semibold" @click="authStore.handleLogout()">Logout</button>
      </div>
    </div>
  </div>
  <div class="px-20 py-20 bg-[#f9f9f9]">
    <RouterView />
  </div>
</template>

