import { createStore } from 'vuex'

import { telegram } from "@/store/modules/telegram.module"
export default createStore({
  modules: {
    telegram
  }
});
