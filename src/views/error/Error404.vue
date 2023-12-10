<template>
  <!-- Error page-->
  <div class="misc-wrapper">
    <b-link class="brand-logo">
      <vuexy-logo />
      <h2 class="brand-text text-primary ml-1">
        Vuexy
      </h2>
    </b-link>

    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
          Hello YouCoders this page is not found :) 🕵🏻‍♀️
        </h2>
        <p class="mb-2">
          Oops! 😖 The requested URL was not found on this server.
        </p>

        <b-button
          variant="primary"
          class="mb-2 btn-sm-block"
          :to="{path:'/'}"
        >
          Back to home
        </b-button>

        <!-- image -->
        <b-img
          fluid
          :src="imgUrl"
          alt="Error page"
        />
      </div>
    </div>
  </div>
<!-- / Error page-->
</template>

<script>
/* eslint-disable global-require */
import { BLink, BButton, BImg } from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import store from '@/store/index'

export default {
  components: {
    VuexyLogo,
    BLink,
    BButton,
    BImg,
  },
  data() {
    return {
      //downImg: require('@/assets/images/pages/error.svg'),
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        // this.downImg = require('@/assets/images/pages/error-dark.svg')
        // return this.downImg
      }
      return this.downImg
    },
  },
}
</script>

<style>
.brand-logo svg {
  height: 28px;
  width: 40.95px;
}

.misc-wrapper {
  display: flex;
  flex-basis: 100%;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.misc-wrapper .misc-inner {
  position: relative;
  max-width: 750px; /* Utilisation directe de la valeur déclarée dans SCSS */
}

.misc-wrapper .brand-logo {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 2rem;
  left: 2rem;
  margin: 0;
}

.misc-wrapper .brand-logo .brand-text {
  font-weight: 600;
}
</style>
