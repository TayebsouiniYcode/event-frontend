<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators

    >
      <b-carousel-slide
          img-src="@/assets/images/slider/s1.jpg"
      >
          <h3 class="text-light" style="font-size: 80px">YouEvent</h3>
          <p></p>
      </b-carousel-slide>
      <b-carousel-slide
          caption="Second Slide"
          img-src="@/assets/images/slider/s2.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
          caption="Third Slide"
          img-src="@/assets/images/slider/s3.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
          caption="Third Slide"
          img-src="@/assets/images/slider/s4.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>

import { BCarousel, BCarouselSlide } from 'bootstrap-vue'

export default {
  name: 'Carousel',
  components: {
    BCarousel,
    BCarouselSlide,
  },
}
</script>
