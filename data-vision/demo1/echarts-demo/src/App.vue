<script setup>
import { ref, onMounted, nextTick } from 'vue';
const chartEl = ref(null)
let categories = ['老包','老南','老君']
let genDataArr = () => {
  return categories.map(t => Math.ceil(Math.random()*100))
}
onMounted(() => {
  // console.log(chartEl.value);
  nextTick(() => {
    // reactive ref 更新全部到位
    const chart = echarts.init(chartEl.value)
    const option = {
      legend: {
        data: ['黑子程度']
      },
      xAxis: {
        data: categories
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: genDataArr()
        }
      ]
    }
    chart.setOption(option)

    setInterval(() => {
      chart.setOption({
        series: [
          {
            data: genDataArr()
          }
        ]
      })
    },1000)
  })
})
</script>

<template>
  <div class="chart" ref="chartEl"></div>
</template>

<style>
.chart {
  width: 500px;
  height: 500px;
}
</style>
