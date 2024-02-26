import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import MyList from "./components/MyList.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
        app.component("MyList", MyList);
  }
} satisfies Theme
