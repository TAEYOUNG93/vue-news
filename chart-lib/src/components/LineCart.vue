<template>
  <div>
    <h1>linechart</h1>
    <div class="chart_box">
      <canvas ref="lineChart" id="lineChart" width="400" height="400"></canvas>
    </div>
  </div>
</template>

<script>
// import Chart from 'chart.js'
export default {
    mounted() {
        // var ctx = this.$refs.lineChart.getContext('2d')
        // var ctx = document.getElementById('lineChart').getContext('2d');
        var lineChart = new this.$_Chart(this.$refs.lineChart, {
            type: 'line',
            data: {
                labels:[
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                ],
                datasets:[{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45],
                }]
            },
            opttion: {}
        });

        console.log(lineChart);
    }
}
</script>

<style>

</style>_