import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "@/styles/reset.scss";
import "@/styles/shared.scss";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount("#app");
