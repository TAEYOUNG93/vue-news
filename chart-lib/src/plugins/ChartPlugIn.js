import Chart from 'chart.js'


export default {
    install(Vue) {
        console.log('ChartPlugIn');
        Vue.prototype.$_Chart = Chart;

        this.$_Chart
    }
}