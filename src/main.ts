import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { useLoadingStore } from "./core/store/loadingStore";
import Loading from "./core/components/Loading.vue";

const app = createApp(App);

app.use(router).use(createPinia());

const loadingStore = useLoadingStore();
loadingStore.startLoading();

router.isReady().then(() => {
  loadingStore.stopLoading();
});

app.component("Loading", Loading).mount("#app");
