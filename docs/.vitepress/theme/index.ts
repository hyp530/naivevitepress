import { h, defineComponent } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import MyList from "./components/MyList.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
        // register global components
        app.component("MyList", MyList);
  }
} satisfies Theme
