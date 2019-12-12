export const state = () => ({
  hasSeriesPosts: []
})

export const getters = {
  getSeries(state) {
    const orderList = []
    state.hasSeriesPosts.forEach(elem => {
      const foundIndex = orderList.findIndex(
        foundElem => foundElem.seriesName === elem.series
      )
      if (foundIndex !== -1) {
        // 시리즈를 가진 배열을 순회
        // 현재 인덱스의 배열의 시리즈 이름이 시리즈 목록에 있으면 Title과 Slug를 넣음
        orderList[foundIndex].posts.push({
          title: elem.title,
          slug: elem.slug
        })
      } else {
        // 없으면 새로 만듬
        const titleAndSlug = [
          {
            title: elem.title,
            slug: elem.slug
          }
        ]
        orderList.push({
          seriesName: elem.series,
          posts: titleAndSlug
        })
      }
    })

    return orderList
  }
}

export const mutations = {
  setHasSeriesPosts(state, posts) {
    state.hasSeriesPosts = posts
  }
}

// // 기대 리턴 값

// [
//   {
//     seriesName: 'asdasd',
//     posts: []
//   }
// ]

// // 원본 배열

// [                                                                                                                                                                                                                                     19:20:31
//   {
//     title: 'Netlify 가입하기 & 설정하기',
//     date: '2019-12-11T16:08:26.117Z',
//     description: 'Nuxt, Netlify로 개인 블로그 만들기- Netlify 가입하기 & 설정하기',
//     thumbnail: '/img/netlify.png',
//     body: ''
//     tags: [
//       'nuxt',
//       'netlify'
//     ],
//     series: 'Nuxt, Netlify로 개인 블로그 만들기',
//     slug: '2019-12-12-netlify-가입하기-설정하기'
//   }
// ]
