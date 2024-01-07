<template>
  <div class="main-section">
    <h1>Reservation</h1>
    <p> Mes reservations </p>
    <b-card class="reservation-card"
        v-for="reservation in reservations" :key="reservation.id">
      <b-card-title class="font-large-2">
        <span></span>
        <span class="">{{ reservation.ticket.event.name }} </span>
      </b-card-title>
      <b-card-body>
        <b-card-text>
          <div class="row">
            <div class="col-md-6">
              <span class="font-large-1">Informations de billet</span>
              <hr class="w-100">
              <p> Type de billet : {{ reservation.ticket.name }} </p>
              <p> Prix unitaire de Billet : <span class="text-success">{{ reservation.ticket.price }} Dh</span></p>
              <p> Les billets disponibles : <span class="text-success">{{ reservation.ticket.quantity }}</span> </p>
            </div>
            <div class="col-md-6">
              <span class="font-large-1">Informations de la reservation</span>
              <hr class="w-100">
              <p> La date de la reservation  : {{ reservation.reservation_date }} </p>
              <p> La quantité des billets : {{ reservation.quantity }} Billet</p>
            </div>
          </div>
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import { BCard, BCardTitle, BCardBody, BCardText } from 'bootstrap-vue'
// eslint-disable-next-line import/extensions
import { getReservationByUserId } from '@/services/ReservationService.js'

export default {
  components: {
    BCard,
    BCardTitle,
    BCardBody,
    BCardText,
  },
  name: 'Reservation',
  data() {
    return {
      reservations: [],
      user_id: localStorage.getItem('user_id'),
    }
  },
  methods: {
    getReservations() {
      getReservationByUserId(this.user_id).then(response => {
        console.log(response.data)
        this.reservations = response.data
      })
    },
  },
  created() {
    this.getReservations()
  },
}
</script>

<style>
.reservation-card {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
