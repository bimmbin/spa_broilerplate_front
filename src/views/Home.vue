<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useCheckerStore } from "../stores/checker";


const authStore = useAuthStore();
const checkerStore = useCheckerStore();

authStore.getUser();

const form = ref({
  email: "",
  password: "",
});
</script>
<template>
  <div class="max-w-7xl mx-auto">
    <div v-if="authStore.user">
      <h1>{{ authStore.user.name }}</h1>
      <p>{{ authStore.user.email }}</p>
    </div>
    <div v-else>
      <h1>Go and login</h1>
    </div>

    <form @submit.prevent="checkerStore.handleData(form)">
              <div class="mb-6">
                <input
                  type="email"
                  v-model="form.email"
                  placeholder="Email"
                  class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                />
         
              </div>
              <div class="mb-6">
                <input
                  type="password"
                  v-model="form.password"
                  placeholder="Password"
                  class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                />
              </div>
              <div class="mb-10">
                <button
                  type="submit"
                  class="w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white"
                >
                  Login
                </button>
              </div>
            </form>
  </div>
</template>