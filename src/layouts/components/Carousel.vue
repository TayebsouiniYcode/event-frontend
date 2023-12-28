<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators

    >
      <b-carousel-slide
          caption="First Slide"
          img-src="@/assets/images/slider/s1.jpg"
      >
          <h3>Titre Diapositive 1</h3>
          <p>Description de la première diapositive.</p>
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
