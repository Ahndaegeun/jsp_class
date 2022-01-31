const global = {
  namespaced: true,
  state: {
    nowPage: "login"
  },
  mutations: {
    setNowPage(state, nowPage) {
      state.nowPage = nowPage
    }
  },
  actions: {
    
  },
}

export default global