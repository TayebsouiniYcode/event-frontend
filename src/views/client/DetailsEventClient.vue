<template>
  <div>
    <Navbar />
    <section class="banner">
      <div class="">
        <div class="row">
          <div class="col-md-12">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
    <section class="d-flex align-items-center flex-column justify-content-center"  style="height: 400px">
      <h1 style="font-size: 80px">
        {{ event.name }}
      </h1>
      <hr class="w-50">
      <p style="font-size: 30px">
        {{ event.description }}
      </p>
      <p class="text-muted" style="font-size: 15px">
        Du : {{ event.start_date }} au {{ event.end_date }}
      </p>
      <p class="mt-5" style="font-size: 150px">
        {{ countdown() }}
      </p>
    </section>
    <section class="container affichage des texte">
      <b-card v-for="texte in event.textes" :key="texte.id">
        <b-card-title class="font-large-2">{{ texte.title }}</b-card-title>
        <hr class="w-100">
        <b-card-sub-title>
          {{ texte.subtitle }}
        </b-card-sub-title>
        <b-card-body>
          <b-card-text>
            {{ texte.texte }}
          </b-card-text>
        </b-card-body>
      </b-card>
    </section>
    <section class="tickets">
      <div class="container">
        <h2 class="font-large-1 text-center">Billets</h2>
        <hr class="w-100">
        <div class="row">
          <div class="col-md-4" v-for="ticket in event.tickets" :key="ticket.id">
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">{{ ticket.name }}</h5>
                <p class="card-text">{{ ticket.description }}</p>
                <p class="card-text">{{ ticket.price }} €</p>
                <p class="card-text">{{ ticket.quantity }} tickets</p>
                <button @click="addPanier(ticket)" class="btn btn-primary w-100">Add  Panier</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { getEvent } from '@/services/eventService'
import Navbar from '../../layouts/components/Navbar.vue'
import Carousel from '../../layouts/components/Carousel.vue'
import { BCard, BCardBody, BCardText, BCardTitle, BCardSubTitle } from 'bootstrap-vue'

export default {
  name: 'DetailsEventClient',
  components: {
    Carousel,
    Navbar,
    BCard,
    BCardBody,
    BCardText,
    BCardTitle,
    BCardSubTitle,
  },
  data() {
    return {
      event: {},
    }
  },
  created() {
    this.getEvent()
  },
  methods: {
    getEvent() {
      const id = this.$route.params.id
      getEvent(id).then(response => {
        console.log(response.data.event)
        this.event = response.data.event
      })
    },
    countdown() {
      setInterval(() => {
        const date = new Date(this.event.start_date)
        const now = new Date()
        const diff = date - now
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)
        return `${days} - ${hours} : ${minutes} : ${seconds}`
      }, 1000)
    },
    addPanier(ticket) {
      const tickets = JSON.parse(localStorage.getItem('tickets')) || []
      tickets.push(ticket)
      localStorage.setItem('tickets', JSON.stringify(tickets))
      console.log(localStorage.getItem('tickets'))
      this.$router.push({ path: '/panier' })
    },
  },
}
</script>
