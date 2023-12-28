<template>
  <div class="container">
  <div>
      <Navbar />
      <hr class="w-10 mb-5 mt-5">
    <h1 class="" style="font-size: 40px">Panier</h1>
    <hr class="w-100">
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="w-100" v-for="ticket in panier[0]" :key="ticket.id">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ ticket.name }}</h5>
                <p class="card-text">{{ ticket.description }}</p>
                <p class="card-text">{{ ticket.price }} €</p>
                <p class="card-text">{{ ticket.quantity }} tickets <span class="text-success">Disponibles</span></p>
                <button class="btn w-100 bg-danger text-white" @click="deleteTicket(ticket)">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill"> Infos </span>
          </h4>
          <ul class="list-group mb-3">
            <li v-for="ticket in panier[0]" :key="ticket.id" class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0"> {{ ticket.name }} </h6>
              </div>
              <span class="text-muted">$ {{ ticket.price }}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span class="text-success">-$0</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$ {{ totalTTC }}</strong>
            </li>
          </ul>
          <div class="checkout">
            <button @click="checkout()" class="btn btn-primary btn-lg btn-block" type="submit">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from '../../layouts/components/Navbar.vue'

export default {
  name: 'Panier',
  components: {
    Navbar,
  },
  data() {
    return {
      panier: [],
      totalTTC: 0,
    }
  },
  created() {
    this.getPanier()
    this.calculTotalTTC()
  },
  methods: {
    getPanier() {
      const tickets = JSON.parse(localStorage.getItem('tickets'))
      console.log(tickets)
      this.panier.push(tickets)
      console.log(this.panier)
    },
    deleteTicket(ticket) {
      const index = this.panier[0].indexOf(ticket)
      this.panier[0].splice(index, 1)
      localStorage.setItem('tickets', JSON.stringify(this.panier[0]))
    },
    calculTotalTTC() {
      this.panier[0].forEach(ticket => {
        // eslint-disable-next-line radix
        this.totalTTC += parseInt(ticket.price)
      })
      this.totalTTC = this.totalTTC.toFixed(2)
    },
    checkout() {
      this.$router.push('/checkout')
    },
  },
}
</script>
