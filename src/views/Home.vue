<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div class="hero-section">
      <HeroSection />
    </div>
    <div class="container mt-5">
      <b-row>
        <b-col v-for="event in events" :key="event.id" col="12" md="3">
          <b-card tag="article" no-body>
            <b-link :to="{ name: 'pages-blog-detail', params: { id: event.id } }">
              <b-img src="../assets/images/events/image.jpg" alt="" class="card-img-top"/>
            </b-link>
            <b-card-body>
              <b-card-title>
                <b-link
                    :to="{ name: 'eventDetails', params: { id: event.id } }"
                    class="blog-title-truncate text-body-heading"
                >
                  {{ event.name }}
                </b-link>
              </b-card-title>
              <b-media no-body>
                <b-media-aside vertical-align="center" class="mr-50">
                  <b-avatar href="" size="24" src="https://images.pexels.com/photos/1714361/pexels-photo-1714361.jpeg" />
                </b-media-aside>
                <b-media-body>
                  <small class="text-muted mr-50">by</small>
                  <small>
                    <b-link class="text-body">YouCode</b-link>
                  </small>
                  <span class="text-muted ml-75 mr-50"></span>
                  <small class="text-muted d-block">De : {{ event.start_date }} | {{ event.start_time}}</small>
                  <small class="text-muted d-block">Au : {{ event.end_date }} | {{ event.end_time }}</small>
                </b-media-body>
              </b-media>
              <div class="my-1 py-25">
                <b-link v-for="(tag, index) in ['Festival', 'Match']" :key="index">
                  <b-badge pill class="mr-75">
                    {{ tag }}
                  </b-badge>
                </b-link>
              </div>
              <b-card-text class="blog-content-truncate">
                {{ event.description}}
              </b-card-text>
              <hr />
              <div class="button-details-event">
                <b-link
                    :to="{ name: 'eventDetails', params: { id: event.id } }"
                    class="btn btn-primary btn-block"
                >
                  Details
                </b-link>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>

</template>

<script>
// eslint-disable-next-line import/no-unresolved,no-unused-vars
import { BCard, BLink, BCardBody, BCardTitle, BCardText, BMediaBody, BMedia, BMediaAside, BImg, BCol, BRow, BBadge } from 'bootstrap-vue'
import HeroSection from '../layouts/components/HeroSection.vue'
import { getEvents } from '@/services/eventService'
import Navbar from '../layouts/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    BCard,
    BLink,
    BCardBody,
    BCardTitle,
    BCardText,
    BMediaBody,
    BMedia,
    BMediaAside,
    BImg,
    BCol,
    BRow,
    BBadge,
    Navbar,
  },
  data() {
    return {
      events: [],
    }
  },
  methods: {
    async getEvents() {
      getEvents().then(response => {
        this.events = response.data.events
      })
    },
  },
  mounted() {
    this.getEvents()
  },
}

</script>

<style>

</style>
