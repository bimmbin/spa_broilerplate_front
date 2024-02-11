<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useCheckerStore } from "../stores/checker";
import GuestLayout from "./layouts/GuestLayout.vue";

const authStore = useAuthStore();
const checkerStore = useCheckerStore();

authStore.getUser();

const form = ref({
  email: "",
  password: "",
});
</script>
<template>
  <GuestLayout>
    <div class="max-w-7xl mx-auto">
      <div v-if="authStore.user">
        <h1>{{ authStore.user.name }}</h1>
        <p>{{ authStore.user.email }}</p>
      </div>
      <div v-else>
        <h1>Go and login</h1>
      </div>
      <a href="#asdfasdf">
        <div
          class="relative top-[-3em] w-0 h-0 border-t-[50px] border-t-transparent border-solid border-x-transparent border-x-[3em] border-b-[1.25em] border-black border-round afte:content-none after:absolute after:left-[-3em] after:top-[1.25em] after:h-0 after:w-0 after:border-b-[3em] after:border-solid after:border-x-transparent after:border-b-transparent after:border-x-[3em] after:border-t-[4.4em] after:border-t-black"
        ></div
      ></a>
    </div>
  </GuestLayout>
</template>
