import Vue from 'vue'
import Vuex from 'vuex'
import Settings from './../config'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: {},
    token: localStorage.getItem(Settings.TOKEN_ID) || '',
    isLoading: false
  },
  mutations: {
    // CHANGE_USERNAME(state, payload) {
    //     state.user.username = payload
    // },
    // CHANGE_PASSWORD(state, payload) {
    //     state.user.password = payload
    // },
    AUTH_REQUEST(state) {
      state.status = 'loading'
    },

    AUTH_SUCCESS(state, data) {
      state.status = 'success'
      state.token = data.token
      // state.user = data.user
    },

    AUTH_ERROR(state) {
      state.status = 'error'
    },

    ENABLE_LOADING(state) {
      state.isLoading = true
    },

    DISABLE_LOADING(state) {
      state.isLoading = false
    },

    LOGOUT(state) {
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    // changeUserName(context, username) {
    //     context.commit('CHANGE_USERNAME', username)
    // },
    // changePassword(context, password) {
    //     context.commit('CHANGE_PASSWORD', password)
    // },

    login({ commit }, user) {
      commit('ENABLE_LOADING')
      return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST')
        axios({
          url: process.env.VUE_APP_API_URL + '/login',
          data: user,
          method: 'POST'
        })
          .then(resp => {
            const token = resp.data.access_token
            // const user = resp.data.user_data
            localStorage.setItem(Settings.TOKEN_ID, token)
            axios.defaults.headers.common['Authorization'] = token
            commit('AUTH_SUCCESS', { token: token })
            commit('DISABLE_LOADING')
            resolve(resp)
          })
          .catch(err => {
            commit('AUTH_ERROR')
            localStorage.removeItem(Settings.TOKEN_ID)
            commit('DISABLE_LOADING')
            reject(err)
          })

      })
    },

    logout(context) {
      context.commit('ENABLE_LOADING')
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

      return new Promise((resolve, reject) => {
        axios({
          url: process.env.VUE_APP_API_URL + '/logout',
          method: 'POST'
        })
          .then(resp => {
            context.commit('LOGOUT')
            localStorage.removeItem(Settings.TOKEN_ID)
            context.commit('ENABLE_LOADING')
            delete axios.defaults.headers.common['Authorization']
            resolve(resp)
          })
          .catch(err => {
            context.commit('ENABLE_LOADING')
            reject(err)
          })

      })
    },

    register(context, user) {

      return new Promise((resolve, reject) => {
        context.commit('AUTH_REQUEST')

        axios({
          url: process.env.VUE_APP_API_URL + '/register',
          data: user,
          method: 'POST'
        })
          .then(resp => {
            // const token = resp.data.token
            // const user = resp.data.user
            // localStorage.setItem(Settings.TOKEN_ID, token)
            // axios.defaults.headers.common['Authorization'] = token
            // commit('AUTH_SUCCESS', token, user)
            resolve(resp)
          })
          .catch(err => {
            console.log(err)
            context.commit('AUTH_ERROR')
            localStorage.removeItem(Settings.TOKEN_ID)
            reject(err)
          })
      })
    },
  },
  getters: {
    // getUser(state) {
    //     return state.user
    // },
    isLoggedIn: state => !!state.token,

    authStatus: state => state.status,

    isLoading(state) {
      return state.isLoading
    }
  },
  modules: {
  },
});
