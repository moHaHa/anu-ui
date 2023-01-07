import { anu } from "anu-vue";
import { createApp } from "vue";
import App from "./App.vue";

// UnoCSS import
import "uno.css";

// import styles
import "anu-vue/dist/style.css";

// default theme styles
import "@anu-vue/preset-theme-default/dist/styles.scss";

createApp(App).use(anu, { registerComponents: true }).mount("#app");
