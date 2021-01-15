<template>
  <div class="search">
    <Chart chartId="histogram" chartClass="search-histogram" :chartOption="histogramOption"></Chart>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                histogramOption: {
                    title: {
                        text: '搜索词排行榜'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: { // 直角坐标系
                        left: '0%',
                        containLabel: true,
                        show: true,
                        borderWidth: 0
                    },
                    xAxis: {
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: ['补水', '水光原液', '面膜', '美白']
                    },
                    series: [
                        {
                            name: '2020年',
                            type: 'bar',
                            data: [45, 83, 100, 140]
                        }
                    ]
                }
            }
        },
        methods: {
        }
    }
</script>

<style lang="less">

</style>