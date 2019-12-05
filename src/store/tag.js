export const state = () => ({
  tags: []
})

export const getters = {
  getTags(state) {
    // 중복 제거
    const result = []
    const removeOverlap = [...new Set(state.tags)]
    // 뼈대 잡기
    removeOverlap.forEach(element => {
      const name = element
      // 초기 카운트 0으로 초기화
      const count = 0
      result.push({ name, count })
    })
    // 갯수 파악하기
    state.tags.forEach(element => {
      const idx = result.filter((tag) => tag.name === element)
      idx[0].count++
    })
    // 정렬하면서 내보내기
    return result.sort((a, b) => a.count > b.count ? -1 : 1)
  }
}

export const mutations = {
  setTags(state, tags) {
    state.tags = tags
  }
}
