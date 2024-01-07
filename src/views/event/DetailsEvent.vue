<template>
  <div>
    <section class="helo-section-event__details d-flex align-items-center" style="height: 300px"></section>
    <div class="row mt-2 container">
      <section class="col-12 col-md-4">
        <div class="row">
          <div class="col-12">
            <h2 class="helo-section-event__details--subtitle">Event Details</h2>
            <hr>
          </div>
        </div>
        <div class="row mt-1">
          <div class="col-12">
            <p class="helo-section-event__details--description">
              <span class="h4 text-dark"> Name : </span> {{ event.name }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="helo-section-event__details--description">
              <span class="h4 text-dark"> Description : </span> {{ event.description }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="helo-section-event__details--date">
              <span class="h4 text-dark"> Date de début :</span> {{ event.start_date }} | {{ event.start_time }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="helo-section-event__details--time">
              <span class="h4 text-dark"> Date de fin : </span> {{ event.end_date }} | {{ event.end_time }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="helo-section-event__details--time">
              <span class="h4 text-dark"> Location : </span>
              <ul>
                <li> <spanc class="h5">Adresse :</spanc> {{ event.address.address }}</li>
                <li> <spanc class="h5">Ville :</spanc> {{ event.address.city }}</li>
                <li> <spanc class="h5">Pays :</spanc> {{ event.address.country }}</li>
                <li> <spanc class="h5">Code postal :</spanc> {{ event.address.zip_code }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <button class="btn bg-dark text-light w-100" @click="$bvModal.show('bv-modal-editEvent')">Modifier</button>
        </div>
        <b-modal id="bv-modal-editEvent" title="Edit Event" hide-footer>
          <b-form @submit.prevent="editEvent">
            <b-form-group id="input-group-1" label="Name:" label-for="name">
              <b-form-input
                id="name"
                v-model="event.name"
                required
                placeholder="Enter event name"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="description:" label-for="description">
              <b-form-input
                id="description"
                v-model="event.description"
                required
                placeholder="Enter event description"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="Start Date:" label-for="start_date">
              <b-form-input
                id="start_date"
                v-model="event.start_date"
                required
                placeholder="Enter event start date"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-4" label="Start Time:" label-for="start_time">
              <b-form-input
                id="start_time"
                v-model="event.start_time"
                required
                placeholder="Enter event start time"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-5" label="End Date:" label-for="end_date">
              <b-form-input
                id="end_date"
                v-model="event.end_date"
                required
                placeholder="Enter event end date"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-6" label="End Time:" label-for="end_time">
              <b-form-input
                id="end_time"
                v-model="event.end_time"
                required
                placeholder="Enter event end time"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-7" label="Address:" label-for="address">
              <b-form-input
                id="address"
                v-model="event.address.address"
                required
                placeholder="Enter event address"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-8" label="City:" label-for="city">
              <b-form-input
                id="city"
                v-model="event.address.city"
                required
                placeholder="Enter event city"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-9" label="Country:" label-for="country">
              <b-form-input
                id="country"
                v-model="event.address.country"
                required
                placeholder="Enter event country"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-10" label="Zip Code:" label-for="zip_code">
              <b-form-input
                id="zip_code"
                v-model="event.address.zip_code"
                required
                placeholder="Enter event zip code"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Modifier</b-button>
          </b-form>
        </b-modal>
      </section>
      <section class="col-12 col-md-8">
        <div class="d-flex justify-content-end mb-2">
          <button class="btn bg-dark text-light" @click="$bvModal.show('bv-modal-addTicket')">Add Ticket</button>
        </div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">price</th>
              <th scope="col" class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="event.tickets.length === 0">
              <td colspan="5" class="text-center">No tickets available.</td>
            </tr>
            <tr v-for="ticket in event.tickets" :key="ticket.id">
              <th scope="row">{{ ticket.id }}</th>
              <td>{{ ticket.name }}</td>
              <td>{{ ticket.description }}</td>
              <td>{{ ticket.price }}</td>
              <td class="d-flex justify-content-end">
                <b-link :to="{ name: 'event-detail', params: { id: ticket.id } }" class="btn">View</b-link>
                <b-link :to="{ name: 'edit', params: { id: ticket.id } }" class="btn text-warning">Edit</b-link>
                <b-link :to="{ name: 'delete', params: { id: ticket.id } }" class="btn text-danger">Delete</b-link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    <div class="textes-section mt-5">
      <div class="d-flex justify-content-end">
        <button class="btn bg-dark text-light" @click="$bvModal.show('bv-modal-addText')">Add Texte</button>
      </div>
      <b-card v-for="texte in event.textes" :key="texte.id" >
        <b-card-title>
          {{ texte.title }}
        </b-card-title>
        <br>
        <b-card-sub-title class="text-muted">
          {{ texte.subtitle }}
        </b-card-sub-title>
        <b-card-text>
          {{ texte.texte }}
        </b-card-text>
      </b-card>
    </div>
    <b-modal id="bv-modal-addTicket" title="Add Ticket" hide-footer>
      <b-form @submit.prevent="addTicket">
        <b-form-group id="input-group-1" label="Name:" label-for="name">
          <b-form-input
            id="name"
            v-model="newTicket.name"
            required
            placeholder="Enter event name"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="description:" label-for="description">
          <b-form-input
            id="description"
            v-model="newTicket.description"
            required
            placeholder="Enter event description"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Price:" label-for="price">
          <b-form-input
            id="price"
            v-model="newTicket.price"
            required
            placeholder="Enter event price"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-4" label="Quantity:" label-for="quantity">
          <b-form-input
            id="quantity"
            v-model="newTicket.quantity"
            required
            placeholder="Enter event name"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Create</b-button>
      </b-form>
    </b-modal>
    <b-modal id="bv-modal-addText" title="Ajouter un texte" hide-footer>
      <b-form @submit.prevent="addText">
        <b-form-group id="textTitle" label="Titme:" label-for="title">
          <b-form-input
              id="title"
              v-model="text.title"
              required
              placeholder="Entrez le titre du texte"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="textSubTitle" label="subtitle:" label-for="subtitle">
          <b-form-input
              id="subtitle"
              v-model="text.subtitle"
              required
              placeholder="Entrez le sous-titre du texte"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="textDetails" label="text:" label-for="text">
          <b-form-input
              id="text"
              v-model="text.texte"
              required
              placeholder="Entrez le texte"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Ajouter</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { getEvent, updateEvent } from '@/services/eventService'
import { ajouterTicket } from '@/services/ticketService'
import { BCard, BCardText, BLink, BForm, BFormGroup, BFormInput, BButton} from 'bootstrap-vue'
import { ajouterTexte } from '@/services/TextService'
export default {
  name: 'DetailsEvent',
  components: {
    BCard,
    BCardText,
    BLink,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
  },
  data() {
    return {
      event: {},
      newTicket: {
        name: '',
        description: '',
        price: '',
        quantity: '',
        event_id: '',
      },
      text: {
        title: '',
        subtitle: '',
        texte: '',
        event_id: 0,
      },
    }
  },
  methods: {
    getEvent() {
      getEvent(this.$route.params.id)
        .then(response => {
          this.event = response.data.event
        })
        .catch(error => {
          console.log(error)
        })
    },
    editEvent() {
      updateEvent(this.event)
        .then(response => {
          this.event = response.data.event
          this.$bvModal.hide('bv-modal-editEvent')
        })
        .catch(error => {
          console.log(error)
        })
    },
    addTicket() {
      console.log(this.newTicket)
      this.newTicket.event_id = this.event.id
      // eslint-disable-next-line radix
      this.newTicket.price = parseInt(this.newTicket.price)
      // eslint-disable-next-line radix
      this.newTicket.quantity = parseInt(this.newTicket.quantity)
      ajouterTicket(this.newTicket)
        .then(response => {
          if (response.data.ticket != null) {
            this.event.tickets.push(response.data.ticket)
          }
          this.newTicket = {
            name: '',
            description: '',
            price: '',
            quantity: '',
            event_id: this.event.id,
          }
        })
        .then(() => {
          this.$bvModal.hide('bv-modal-addTicket')
        })
        .then(() => {
          this.$bvToast.toast('Ticket added successfully', {
            title: 'Success',
            variant: 'success',
            solid: true,
          })
        })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
        .catch(error => {
          console.log(error)
        })
    },
    addText() {
      this.text.event_id = this.event.id
      ajouterTexte(this.text)
        .then(response => {
          if (response.data.text != null) {
            this.event.texts.push(response.data.text)
          }
          this.text = {
            title: '',
            subtitle: '',
            texte: '',
            event_id: this.event.id,
          }
        })
        .then(() => {
          this.$bvModal.hide('bv-modal-addText')
        })
        .then(() => {
          this.$bvToast.toast('Text added successfully', {
            title: 'Success',
            variant: 'success',
            solid: true,
          })
        })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
  created() {
    this.getEvent()
  },

}
</script>

<style>
.helo-section-event__details {
  background-image: url("https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
