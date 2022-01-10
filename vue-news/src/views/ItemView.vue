<template>
  <div>
    <section>
      <!-- user info -->
      <user-profile :info="fetchedItem">
        <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
        <router-link slot="username" :to="`/users/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content">
      </div>
    </section>
    <section>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue'
// import UserProfile from '../components/UserProfile.vue'

export default {
  components: { UserProfile },
  // components: { UserProfile },
  computed: {
    ...mapGetters(['fetchedItem']),

    itemInfo() {
      return this.$store.state.item
    }
  },
  created() {
    const id = this.$route.params.id
    console.log(this.$route.params.id);
    this.$store.dispatch('FETCH_ITEM', id);
    
  }

}
</script>

<style scoped>

.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;

}

.fa-user {
  font-size: 2.5rem;

}
.user-description {
  padding-left: 8px;

}
.time {
  font-size: 0.7rem;
}

</style>