import Vue from 'vue';
import Vuetify from 'vuetify/lib';
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#CC433B',
        secondary: '#f6f6f6',
        // accent: '', // #3F51B5
      },
    },
  },
});