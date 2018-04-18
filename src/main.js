// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TopBanner from '@/components/Body/Home/TopBanner/TopBanner'
import AboutMEW from '@/components/Body/Home/AboutMEW/AboutMEW'
import FAQs from '@/components/Body/Home/FAQs/FAQs'

// "vue-header" prevents HTML reserved tag name conflict.
Vue.component('vue-header', Header)
// "vue-footer" prevents HTML reserved tag name conflict.
Vue.component('vue-footer', Footer)
Vue.component('top-banner', TopBanner)
Vue.component('about-mew', AboutMEW)
Vue.component('faqs', FAQs)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})