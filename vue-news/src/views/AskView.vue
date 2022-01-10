<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
// import bus from '../utils/bus.js'
import ListMixin from '../mixins/ListMixin.js'
export default {
  components: { 
    ListItem
  },
  mixin: [ListMixin]
  // created() {
  //   bus.$emit('start:spinner')
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_ASKS')
  //       .then(() => {
  //         console.log('fetched');
  //         bus.$emit('end:spinner');
  //       } )
  //       .catch((error) => {
  //         console.log(error)
  //       } );
  //     bus.$emit('end:spinner')
  //   }, 2000)
  // }

}
</script>