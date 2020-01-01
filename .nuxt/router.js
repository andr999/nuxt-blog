import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _77c3a596 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _314877ae = () => interopDefault(import('..\\pages\\admin\\create.vue' /* webpackChunkName: "pages_admin_create" */))
const _0570d40b = () => interopDefault(import('..\\pages\\admin\\list.vue' /* webpackChunkName: "pages_admin_list" */))
const _e4745f68 = () => interopDefault(import('..\\pages\\admin\\login.vue' /* webpackChunkName: "pages_admin_login" */))
const _780541b7 = () => interopDefault(import('..\\pages\\admin\\logout.vue' /* webpackChunkName: "pages_admin_logout" */))
const _b54c9e90 = () => interopDefault(import('..\\pages\\admin\\user.vue' /* webpackChunkName: "pages_admin_user" */))
const _36fe847d = () => interopDefault(import('..\\pages\\admin\\post\\_id.vue' /* webpackChunkName: "pages_admin_post__id" */))
const _677c0878 = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages_post__id" */))
const _7cdae6b0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _77c3a596,
      name: "admin"
    }, {
      path: "/admin/create",
      component: _314877ae,
      name: "admin-create"
    }, {
      path: "/admin/list",
      component: _0570d40b,
      name: "admin-list"
    }, {
      path: "/admin/login",
      component: _e4745f68,
      name: "admin-login"
    }, {
      path: "/admin/logout",
      component: _780541b7,
      name: "admin-logout"
    }, {
      path: "/admin/user",
      component: _b54c9e90,
      name: "admin-user"
    }, {
      path: "/admin/post/:id?",
      component: _36fe847d,
      name: "admin-post-id"
    }, {
      path: "/post/:id?",
      component: _677c0878,
      name: "post-id"
    }, {
      path: "/",
      component: _7cdae6b0,
      name: "index"
    }],

    fallback: false
  })
}
