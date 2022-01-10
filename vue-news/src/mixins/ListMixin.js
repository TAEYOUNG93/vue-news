import bus from "../utils/bus";

export default {
    // recycle component option 
    created() {
        bus.$emit('start:spinner')
        this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                // console.log('fetched');
                // console.log('this.$route.name= ' + this.$route.name)
                bus.$emit('end:spinner')
            } )
            .catch((error) => {
                console.log(error)
            } );
    }
}