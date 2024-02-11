<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <main class="flex flex-col">
    <div class="w-full h-[7svh] bg-gray-500 text-white">
      <div
        class="w-[1180px] h-full mx-auto max-2xl:w-[1000px] max-xl:w-[900px] max-lg:w-screen max-md:px-5 max-sm:py-0 max-xl:px-10"
      >
        <div class="h-full flex justify-between items-center">
          <h2 class="font-bold text-2xl">Logo</h2>
          <div class="flex items-center gap-10">
            <router-link
              :to="{ name: 'home' }"
              class="px-3 py-2 hover:bg-gray-400 font-semibold"
              >Home</router-link
            >
            <router-link
              :to="{ name: 'login' }"
              class="px-3 py-2 hover:bg-gray-400 font-semibold"
              >Login</router-link
            >
            <router-link
              :to="{ name: 'register' }"
              class="px-3 py-2 hover:bg-gray-400 font-semibold"
              >Signup</router-link
            >
            <button
              v-if="authStore.user"
              class="px-3 py-2 hover:bg-gray-400 font-semibold"
              @click="authStore.handleLogout()"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[93svh] bg-[#f9f9f9]">
      <div
        class="w-[1180px] h-full mx-auto max-2xl:w-[1000px] max-xl:w-[900px] max-lg:w-screen max-md:px-5 py-5 max-sm:py-0 max-xl:px-10"
      >
        <slot>
          <RouterView />
        </slot>
      </div>
    </div>
  </main>
</template>
