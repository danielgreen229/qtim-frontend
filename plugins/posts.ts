import axios from "axios";

export default defineNuxtPlugin ({
  state() {
    return {
      posts: [],
      currentPost: null
    }
  },
  mutations: {
    SET_POSTS (state, data) {
      state.posts = data
    },
    SET_CURRENTPOST (state, data) {
      state.currentPost = data
    }
  },
  actions: {
    async GET_POSTS ({dispatch, commit}, data) {
      try {
        let posts = axios.get('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/').then((res)=>{
          commit('SET_POSTS', res.data)
        })
      }
      catch (e) {
        alert('error: ' + e)
      }
    },
    async GET_CURRENTPOST ({dispatch, commit}, data) {
      try {
        let posts = axios.get('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/' + data.id).then((res)=>{
          commit('SET_CURRENTPOST', res.data)
        })
      }
      catch (e) {
        alert('error: ' + e)
      }
    }
  }
})