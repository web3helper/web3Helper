import * as TYPE from '../actionType/appStore'

const state = {
  appThemeType: "light",
}

const getters = {
  appThemeType: state => state.appThemeType,
}

const actions = {
  setAppThemeType ({ commit }, appThemeType) {
    commit(TYPE.APP_THEME_TYPE, appThemeType)
  },
}

const mutations = {
  [TYPE.APP_THEME_TYPE](state, appThemeType) {
    state.appThemeType = appThemeType
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
