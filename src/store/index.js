import {createStore} from 'vuex'

import global from './modules/global'

const store = createStore({
  namespace: true,
  modules: {
    global
  }
})

export default store