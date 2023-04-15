<template>
  <div class="user-menu">
    <img
      :src="user"
      class="user-account-btn"
      :class="{ isAuth: userStore.user.email }"
      alt=""
    />
    <ul class="user-menu" v-show="userStore.user.email">
      <li class="user-menu__item">
        <span @click="handleLogout">Logout</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import user from "@/img//icons//icons8-user-64.png";
import { useUserStore } from "@/stores/UserStore";

const userStore = useUserStore();

const handleLogout = () => {
  userStore.logoutUser();
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables/variables";
.user-menu {
  .user-account-btn {
    position: fixed;
    right: 20px;
    top: 8px;
    padding-bottom: 12px;
    display: none;
  }

  .user-menu {
    display: none;
    position: fixed;
    top: 80px;
    right: 0px;
    width: 170px;
    background-color: rgba(167, 165, 165, 0.7);

    &__item {
      padding: 8px 6px;
      span {
        color: $primary-color;
        cursor: pointer;
        font-weight: $fw-title;
        font-size: 18px;
        &:active {
          color: rgb(233, 142, 56);
        }
      }
    }
  }
  .isAuth {
    display: block;
    cursor: pointer;
  }
  &:hover .user-menu {
    display: block;
  }
}
</style>
