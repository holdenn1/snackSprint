import { auth } from "@/firebase";
import router from "@/router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
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

  function signUpUser(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        if (!!user.email) {
          setUser(user.uid, user.email);
        }
        router.push("/");
      })
      .catch((e) => console.error(e));
  }

  function signInUser(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        if (!!user.email) {
          setUser(user.uid, user.email);
        }
        if (user.email === "caulfieldd17@gmail.com") {
          router.push("/admin");
        } else {
          router.push("/");
        }
      })
      .catch((e) => console.error(e));
  }

  function logoutUser() {
    signOut(auth)
      .then(() => {
        removeUser();
        router.push("/");
      })
      .catch((e) => {
        router.push("/");
        console.error(e);
      });
  }

  return {
    user,
    setUser,
    removeUser,
    signUpUser,
    signInUser,
    logoutUser,
  };
});
