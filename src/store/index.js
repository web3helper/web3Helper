
import { createStore } from 'vuex'

import contentStore from './modules/contentStore'
import user from './modules/user'
import app from './modules/app'
import createPersistedState from 'vuex-persistedstate'

const state = {
  count: 12,
  requesting: false,
  error: {}
}

const getters = {
  count: state => state.count,
  requesting: state => state.requesting,
  error: state => state.error
}

export default createStore({
  state,
  getters,
  modules: {
    app,
    user,
    contentStore
  },
  Plugins:[
    createPersistedState({
      // local storsge
      key:"web3Dapp",
      paths:["app", "user", "contentStore"]
    })
  ]
})
