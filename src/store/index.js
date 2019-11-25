export const state = () => ({
  blogPosts: []
})

export const getters = {
  sortNewPosts(state) {
    const newArr = Array.from(state.blogPosts)
    return newArr.sort((a, b) => {
      const [aT, bT] = [a.date, b.date]
      return aT < bT ? 1 : -1
    })
  }
}

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context('@@/posts', false, /\.json$/)
    let blogPosts = files.keys().map(key => {
      let res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)
  }
}
