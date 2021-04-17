

export default {
  data() {
    return {
      count: 0
    }
  },
  // props: ['name'],
  template: `<button @click='count++'>点击{{count}}次</button>`
  // template: `<h1>11</h1>`
}