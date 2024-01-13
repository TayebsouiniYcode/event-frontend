import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        layout: 'full',
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          }],
      },
    },
    {
      path: '/event/detail/:id',
      name: 'eventDetails',
      component: () => import('@/views/client/DetailsEventClient.vue'),
      meta: {
        layout: 'full',
        pageTitle: 'Event Details',
        breadcrumb: [
          {
            text: 'Event Details',
            active: true,
          }],
      },
    },
    {
      path: '/panier',
      name: 'panier',
      component: () => import('@/views/event/Panier.vue'),
      meta: {
        layout: 'full',
        pageTitle: 'Panier',
        breadcrumb: [
          {
            text: 'Panier',
            active: true,
          },
        ],
      },
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/client/Checkout.vue'),
      meta: {
        layout: 'full',
        pageTitle: 'Checkout',
        breadcrumb: [
          {
            text: 'Checkout',
            active: true,
          },
        ],
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue'),
      meta: {
        pageTitle: 'Dashboard',
        breadcrumb: [
          {
            text: 'Dashboard',
            active: true,
          },
        ],
      },
    },
    {
      path: '/event/create',
      name: 'event-create',
      // eslint-disable-next-line import/no-unresolved
      component: () => import('@/views/event/CreateEvent.vue'),
      meta: {
        pageTitle: 'Create Event',
        breadcrumb: [
          {
            text: 'Create Event',
            active: true,
          },
        ],
      },
    },
    {
      path: '/event/:id',
      name: 'event-detail',
      // eslint-disable-next-line import/no-unresolved
      component: () => import('@/views/event/DetailsEvent.vue'),
      meta: {
        pageTitle: 'Event Detail',
        breadcrumb: [
          {
            text: 'Event Detail',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: () => import('@/views/reservation/Reservation.vue'),
      meta: {
        pageTitle: 'Reservation',
        breadcrumb: [
          {
            text: 'Reservation',
            active: true,
          },
        ],
      },
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('accessToken')

  if ((to.name !== 'login' && to.name !== 'register') && !isAuthenticated) next({ name: 'login' })
  else next()
})

export default router
