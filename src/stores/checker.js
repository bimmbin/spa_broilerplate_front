import { defineStore } from "pinia";
import axios from "axios";

export const useCheckerStore = defineStore("checker", {
  state: () => ({
    checkData: [],
    responseData: [],
  }),
  getters: {
    data: (state) => state.checkData,
  },
  actions: {
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },
    async getData() {
      await this.getToken();
      const data = await axios.get("/api/checker");
      this.checkData = data.data;
    },
    async handleData(data) {
      this.checkData = [];
      // await this.getToken();

      axios
        .post("/api/checker", {
          data: data,
        })
        .then((response) => {
          // Handle the response data
          console.log(response.data.status); // This will log the status from your Laravel controller

          // You can assign the response to a data property in your Vue component
          this.responseData = response.data.status;
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.authErrors = error.response.data.errors;
          }
        });
    },
  },
});
