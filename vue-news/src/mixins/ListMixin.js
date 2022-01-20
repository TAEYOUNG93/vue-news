import bus from "../utils/bus";

export default {
    // recycle component option
    created() {
        bus.$emit('start:spinner')
        // #1
        this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
            console.log('this.$route.name = ' + this.$route.name);
            // #5
                // console.log(5);
                // console.log('fetched');
                // console.log('this.$route.name= ' + this.$route.name)
                bus.$emit('end:spinner')
            } )
            .catch((error) => {
                console.log(error)
            } );
    }
}