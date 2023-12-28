<template>
  <section class="w-100">
<!--    <div class="hero-section d-flex align-items-center flex-column mt-2 mb-3">-->
<!--      <h1 class="mb-5">-->
<!--        YouEvent-->
<!--      </h1>-->
<!--      <p class="w-50 text-center">-->
<!--        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.-->
<!--      </p>-->
<!--    </div>-->
    <Carousel />
  </section>
</template>

<script>
import { BRow, BCol, BForm, BFormSelect, BFormGroup, BCard } from 'bootstrap-vue'
// eslint-disable-next-line import/extensions
import Carousel from '@/layouts/components/Carousel'

export default {
  name: 'HeroSection',
  components: {
    Carousel,
    BRow,
    BCol,
    BForm,
    BFormSelect,
    BFormGroup,
    BCard,
  },
}
</script>
