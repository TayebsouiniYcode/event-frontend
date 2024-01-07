<template>
  <div class="navbar-container d-flex align-items-center bg-dark text-light"> <!-- content -->

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">
      <b-link
        v-b-tooltip.hover
        class="btn btn-icon navbar-menu-bookmark d-none d-lg-block"
        title="Bookmark page"
      >
        <a href="/"><h3 class="text-light">YouEvent</h3></a>
      </b-link>
    </div>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <b-nav-item-dropdown
        right
        toggle-class="d-flex align-items-center dropdown-user-link"
        class="dropdown-user"
      >
        <template #button-content>
          <!--          <diV>-->
          <!--            <dark-Toggler class="d-none d-lg-block" />-->
          <!--          </diV>-->
          <div class="d-sm-flex d-none user-nav">
            <p class="user-name font-weight-bolder mb-0 text-light">
              {{ name }}
            </p>
          </div>
          <b-avatar
            size="40"
            variant="light-primary"
            badge
            :src="require('@/assets/images/avatars/13-small.png')"
            class="badge-minimal"
            badge-variant="success"
          />
        </template>
        <div class="d-flex justify-content-center mt-2 mb-2">
          <span class="text-success"> {{ role }}</span>
        </div>
        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="UserIcon"
            class="mr-50"
          />
          <router-link to="dashboard">
            <span>Dashboard</span>
          </router-link>
        </b-dropdown-item>

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="UserIcon"
            class="mr-50"
          />
          <router-link to="/panier">
            <span>Panier</span>
          </router-link>
        </b-dropdown-item>
        <b-dropdown-divider />

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="LogOutIcon"
            class="mr-50"
          />
          <span @click="logout">Logout</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </div>
</template>

<script>
import {
  BLink, BNavbarNav, BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar, BNavbarBrand, BNavbarToggle, BNavbar, BNavbarNavText,
  BCard, BCardText, BCardTitle, BCardBody, BCardHeader, BCardFooter, BCarousel, BCarouselSlide, BCarouselIndicators, BCarouselIndicator,
} from 'bootstrap-vue'
import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue'

export default {
  components: {
    BLink,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,
    BNavbarBrand,
    BNavbarToggle,
    BNavbar,
    BNavbarNavText,
    BCard,
    BCardText,
    BCardTitle,
    BCardBody,
    BCardHeader,
    BCardFooter,
    BCarousel,
    BCarouselSlide,
    BCarouselIndicators,
    BCarouselIndicator,
    DarkToggler,
  },
  data() {
    return {
      name: '',
      role: '',
    }
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
  created() {
    this.name = `${localStorage.getItem('firstname')} ${localStorage.getItem('lastname')}`
    this.role = localStorage.getItem('role')
  },
  methods: {
    logout() {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('expires')
      localStorage.removeItem('type')
      this.$router.push({ name: 'login' })
    },
  },
}
</script>
