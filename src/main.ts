import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueObserveVisibility from "vue-observe-visibility";

const app = createApp(App);
app.use(VueObserveVisibility);
app.mount("#app");

createApp(App).mount("#app");
