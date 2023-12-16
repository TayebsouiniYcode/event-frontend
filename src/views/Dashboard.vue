<template>
  <div>
    <section>
      <b-card title="Liste des événements">
        <b-card-text class="d-flex justify-content-end">
          <b-link to="/event/create" class="btn btn-dark mb-2">Ajouter événement</b-link>
        </b-card-text>
        <b-card-text>
          <table class="table">
            <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th scope="col" class="d-flex justify-content-center">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="event in events" :key="event.id">
              <th scope="row">{{ event.id }}</th>
              <td>{{ event.name }}</td>
              <td>{{ event.description }}</td>
              <td>{{ event.start_date }} au {{ event.end_date }}</td>
              <td class="d-flex justify-content-end">
                <b-link :to="{ name: 'event-detail', params: { id: event.id } }" class="btn">View</b-link>
                <b-button @click="deleteEvent(event.id)" class="btn text-danger">Delete</b-button>
              </td>
            </tr>
            </tbody>
          </table>
        </b-card-text>
      </b-card>
    </section>
  </div>
</template>

<script>
import { BCard, BCardText, BLink } from 'bootstrap-vue'
import { getEvents, deleteEvent } from '@/services/eventService'

export default {
  components: {
    BCard,
    BCardText,
    BLink,
  },
  data() {
    return {
      events: [],
    }
  },
  created() {
    this.getEvents()
  },
  methods: {
    getEvents() {
      // eslint-disable-next-line import/no-named-as-default-member
      getEvents().then(response => {
        console.log(response.data.events)
        this.events = response.data.events
      })
    },
    deleteEvent(id) {
      deleteEvent(id).then(() => {
        this.getEvents()
      })
    },
  },

}
</script>

<style>

</style>
