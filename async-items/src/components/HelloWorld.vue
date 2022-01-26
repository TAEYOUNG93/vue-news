<template>
  <div>
    <button @click="loginUser1">
      show list
    </button>
    <div>
      <ul v-for="item in items" :key="item.id">
        <!-- <li>{{ item.userId }}</li> -->
        <!-- <li>{{ item.id }}</li> -->
        <h3>{{ item.title }}</h3>
        <li>{{ item.complete }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    // getData() {
    //   axios.get('https://jsonplaceholder.typicode.com/users/1')
    //     .then(response => {
    //       if(response.data.id === 1) {
    //         axios.get('https://jsonplaceholder.typicode.com/todos')
    //           .then(response => {
    //             // console.log(response.data);
    //             this.items = response.data
    //             // console.log(this.items);
    //           })
    //           .catch(error => {
    //             console.log(error);
    //           })
    //       }
    //       // this.items = response.data
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     })
    // },
    async loginUser1() {
      try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        console.log(response.data);

        if(response.data.id === 1) {
          console.log('로그인이 인증되었습니다. ');
          response = await axios.get('https://jsonplaceholder.typicode.com/todos');
          this.items = response.data
        }
      } catch (error) {
        console.log(error);
      }
      // this.items = response.data

    }

  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border-radius: 10px;
  border-style: none;
  width: 90px;
  height: 40px;
  font-weight: 700;
  cursor: pointer;
}

button:hover{
  box-shadow: 1px 1px 10px gray;
}

button:active {
  box-shadow: none;
}

li {
  list-style: none;
}
</style>
