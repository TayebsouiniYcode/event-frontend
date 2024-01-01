<template>
  <div class="container">
    <Navbar />
    <hr>
    <div class="paiement-details d-flex justify-content-center mb-5">
      <span style="font-size: 50px">
        TOTAL TTC : {{ totalTTC }}.00 $
      </span>
    </div>
    <div class="checkout-form d-flex justify-content-center">
      <div class="col-md-8 order-md-1">
          <hr class="mb-4">
          <h4 class="mb-3">Payment</h4>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="cc-name">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required="">
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="cc-number">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required="">
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="cc-expiration">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="cc-expiration">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>
          <hr class="mb-4">
          <button @click="checkout" class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../layouts/components/Navbar.vue'
import router from '@/router'

export default {
  name: 'Checkout',
  components: {
    Navbar,
  },
  data() {
    return {
      cart: [],
      totalTTC: 0,
      quantity: 0,
    }
  },
  created() {
    this.getCart()
  },
  methods: {
    getCart() {
      this.cart = JSON.parse(localStorage.getItem('tickets'))
      this.cart.forEach(item => {
        // eslint-disable-next-line no-param-reassign
        this.totalTTC += parseFloat(item.price) // * item.quantity)
        this.quantity += item.quantity
      })
    },
    checkout() {
      // You will be redirected to Stripe's secure checkout page
    },
  },

}

</script>
