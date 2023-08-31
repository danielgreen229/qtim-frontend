import { createStore } from "vuex";
import lang from './lang'
import posts from './posts'

const store = createStore({
  state() {
    return {
      language: 'rus',
    };
  },
  mutations: {
    SET_LANG(state, data) {
      state.language = data;
    },
  },
  modules: {
    lang, posts
  }
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});