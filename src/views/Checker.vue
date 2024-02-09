<script setup>
import { onMounted, ref } from "vue";
import { useCheckerStore } from "../stores/checker";

const checkerStore = useCheckerStore();

// onMounted(async () => {
//   await checkerStore.getData();
// });
</script>
<template>
  <div class="max-w-7xl mx-auto">
    <!-- <div v-if="checkerStore.data">
      <h1>{{ checkerStore.data }}</h1>
    </div>
    <div v-else>
      <h1>Nothing</h1>
    </div> -->
    <h1>Nothing</h1>

  </div>
</template>
