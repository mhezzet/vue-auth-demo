import Vue from 'vue'
import Router from 'vue-router'
import AuthHandler from './views/AuthHandler'
import ImageList from './views/ImageList'
import UploadForm from './views/UploadForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: ImageList
    },
    {
      path: '/oauth2/callback',
      component: AuthHandler
    },
    {
      path: '/upload',
      component: UploadForm
    }
  ]
})
