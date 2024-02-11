<script setup>
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();
</script>

<template>
    <div class="flex font-pop bg-portbg">
        <!-- navigation -->
        <div
            class="h-screen bg-gray1 px-6 flex flex-col gap-10 max-md:hidden sticky left-0 top-0"
        >
            <!-- Logo -->
            <a :href="route('home')" class="flex items-center gap-2 px-3 py-5">
                <img :src="logo" alt="" class="h-7 max-md:h-6" />
                <h1 class="text-3xl max-md:text-2xl font-semibold text-white">Vinrecs</h1>
            </a>

            <button
              v-if="authStore.user"
              class="text-white border border-red-500 rounded-md py-3"
              @click="authStore.handleLogout()"
            >
              Logout
            </button>
        </div>
        <div
            class="w-[1180px] min-h-screen mx-auto max-2xl:w-[1000px] max-xl:w-[1000px] max-md:w-screen max-md:px-5 py-5 max-sm:py-0 text-white"
        >
            <!-- Header -->
            <div
                class="flex justify-between items-center bg-gray1 absolute z-10 top-0 left-0 w-screen py-5 px-5 text-white md:hidden"
            >
                <a>
                    <img :src="logo" alt="" class="h-8" />
                </a>
                <div
                    class="lg:hidden cursor-pointer select-none"
                    @click="show_nav = !show_nav"
                >
                    <img :src="burger" alt="" class="h-6" />
                </div>
            </div>
            <!-- Responsive Nav -->
            <div v-if="show_nav">
                <MobileNav @close_emit="show_nav = !show_nav" />
            </div>
            <slot></slot>
        </div>
    </div>
</template>
