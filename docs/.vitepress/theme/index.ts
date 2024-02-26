import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import MyList from "./components/MyList.vue";
import MyList2 from "./components/MyList2.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
        app.component("MyList", MyList);
        app.component("MyList2", MyList2);
  }
} satisfies Theme
