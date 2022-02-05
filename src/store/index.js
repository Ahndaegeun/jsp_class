import {createStore} from 'vuex'

import global from './modules/global'
import widget from './modules/widget'

const store = createStore({
  namespace: true,
  modules: {
    global,
    widget
  }
})

export default store