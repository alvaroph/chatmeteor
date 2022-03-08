import Vue from 'vue'

import '../imports/ui/plugins'

import App from '../imports/ui/App.vue'

import 'bootstrap/dist/js/bootstrap.bundle';




Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  })
})
