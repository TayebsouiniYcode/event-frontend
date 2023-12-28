<template>
  <div>
    <section class="container">
      <b-card title="Create Event" class="mb-2">
        <b-card-text>
          <b-form @submit.prevent="createEvent">
            <b-form-group id="input-group-1" label="Name:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="event.name"
                required
                placeholder="Enter event name"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Description:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="event.description"
                required
                placeholder="Enter event description"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Start Date:" label-for="input-3">
              <b-form-input
                type="date"
                id="input-3"
                v-model="event.start_date"
                required
                placeholder="Enter event start date"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="End Date:" label-for="input-4">
              <b-form-input
                id="input-4"
                type="date"
                v-model="event.end_date"
                required
                placeholder="Enter event end date"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5" label="Start Time:" label-for="input-5">
              <b-form-input
                id="input-5"
                type="time"
                v-model="event.start_time"
                required
                placeholder="Enter event start time"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-6" label="End Time:" label-for="input-6">
              <b-form-input
                id="input-6"
                type="time"
                v-model="event.end_time"
                required
                placeholder="Enter event end time"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-7" label="Address:" label-for="input-7">
              <b-form-input
                id="input-7"
                v-model="event.address.address"
                required
                placeholder="Enter event address"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-15" label="code postal:" label-for="input-8">
              <b-form-input
                id="input-15"
                v-model="event.address.zip_code"
                required
                placeholder="Enter event zip code"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-8" label="City:" label-for="input-8">
              <b-form-input
                id="input-8"
                v-model="event.address.city"
                required
                placeholder="Enter event city"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-9" label="Country:" label-for="input-9">
              <b-form-input
                id="input-9"
                v-model="event.address.country"
                required
                placeholder="Enter event country"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-10" label="Image:" label-for="input-10">
              <b-form-input
                id="input-10"
                v-model="event.image"
                required
                placeholder="Enter event image"
              ></b-form-input>
            </b-form-group>
            <b-button @click="addEvent()" type="submit" variant="primary">Create</b-button>
          </b-form>
        </b-card-text>
      </b-card>
    </section>
  </div>
</template>

<script>

import { BCard, BCardText, BLink, BForm, BFormGroup, BFormInput, BButton, BFormFile } from 'bootstrap-vue'
import { createEvent } from '@/services/eventService'

export default {
  name: 'CreateEvent',
  components: {
    BCard,
    BCardText,
    BFormFile,
    // eslint-disable-next-line vue/no-unused-components
    BLink,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
  },
  data() {
    return {
      event: {
        name: '',
        description: '',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: '',
        address: {
          address: '',
          city: '',
          country: '',
          zip_code: '',
        },
        image: '',
        tickets: [
          {
            name: '',
            description: '',
            price: '',
            quantity: '',
          },
        ],

      },
    }
  },
  methods: {
    addEvent() {
      createEvent(this.event)
        .then(() => {
          this.$router.push({ path: '/' })
        })
        .catch(error => {
          console.log(error)
        })
    },

  },
}
</script>
