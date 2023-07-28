import { createApp } from "vue";
import { createPinia } from "pinia";
import { createToastifyPlugin } from "vue-toastify-3";
import "vue-toastify-3/style.css";
import App from "./App.vue";
import "@/styles/reset.scss";
import "@/styles/shared.scss";
import router from "./router";
import "./firebase";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(createToastifyPlugin, {
  pauseTimerOnHover: true,
  closeOnClick: true,
});

app.mount("#app");
