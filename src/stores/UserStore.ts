import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const user = ref({
    id: "",
    email: "",
  });

  function setUser(id: string, email: string) {
    user.value.id = id;
    user.value.email = email;
    console.log(1);
  }

  function removeUser() {
    user.value.id = "";
    user.value.email = "";
  }

  return {
    user,
    setUser,
    removeUser,
  };
});
