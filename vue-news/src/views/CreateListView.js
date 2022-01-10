import ListView from './ListView.vue';
import bus from '../utils/bus.js'

// hioder component
export default function createListView(name) {
    return {
        // recycle component option space
        name: name,
        created() {
            bus.$emit('start:spinner');
            setTimeout(() => {
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    // console.log('fetched');
                    // console.log('this.$route.name= ' + this.$route.name)
                    bus.$emit('end:spinner')
                } )
                .catch((error) => {
                    console.log(error)
                } );
            // bus.$emit('end:spinner')
            }, 2000) 
        },
        render(createElement) {
            return createElement(ListView)
        }
    }
}