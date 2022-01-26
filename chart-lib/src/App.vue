<template>
  <div>
    <bar-chart v-bind:propsdata="chartDataSet"></bar-chart>
    <line-cart></line-cart>
  </div>
</template>

<script>
import axios from 'axios'
import BarChart from './components/BarChart.vue';
import LineCart from './components/LineCart.vue';
export default {
  components: {
    BarChart,
    LineCart
  },
  data() {
    return {
      chartDataSet: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 12, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
      }]
    }
  },
  methods: {
    getChartData() {
      setTimeout(() => {

      }, 3000)
    }
  },
  created() {
    axios.get()
      .then(response => this.chartDataSet =  response.data)
      .catch(error => console.log(error));
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.chart_box {
  width: 30%;

}
</style>
