import * as TYPE from '../actionType/userStore'

const state = {
   profile : {
    id:"",
    avater:"",
    nickname:"",
    account:"",
    mobile:"",
    token:"",
   }
}

const getters = {
  profile: state => state.profile,
}

const actions = {
  setUser ({ commit }, profile) {
    commit(TYPE.USERS_PROFILE, profile)
  },
}

const mutations = {
  [TYPE.USERS_PROFILE](state, profile) {
    state.profile = profile
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
