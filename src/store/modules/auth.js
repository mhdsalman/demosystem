// initial state
const state = () => ({
  isLogin: false,
  error: []
})

// getters
const getters = {
  isLoggedIn: state => state.isLogin,
}

// actions
const actions = {
  loginByApiKey({ commit }) {
    commit('setError', null);
    localStorage.setItem('ds-token', true);
    commit('setLogin', true);
  },
}

// mutations
const mutations = {
  setLogin(state, isLogin) {
    state.isLogin = isLogin
  },
  setError(state, error) {
    state.error = error
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}