import { createStore, createLogger } from 'vuex'
import auth from './modules/auth';
const isDev = import.meta.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    auth,
  },
  strict: isDev,
  plugins: isDev ? [createLogger()] : []
})