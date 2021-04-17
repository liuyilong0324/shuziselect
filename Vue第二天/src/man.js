import app from './app.js'
import Vue from './vue.browser.js'

// import app from './components/title'

new Vue({
//   render(h) {
//     return h(app)
//  },
   components:{
      app
   },
   template:`<app></app>`
}).$mount('#app')