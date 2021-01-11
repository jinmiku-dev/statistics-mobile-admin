<template>
  <div class="product">
    <Comparison date="week" :contentData="content"></Comparison>
    <Chart chartId="line" chartClass="product-line" :chartOption="lineOption"></Chart>
    <Chart chartId="histogram" chartClass="product-histogram" :chartOption="histogramOption"></Chart>
  </div>
</template>

<script>
    import Chart from '@/components/echarts/Chart';

    export default {
        components: {
            Chart
        },
        data() {
            return {
                lineOption: {
                    title: { // 标题组件
                        text: '会员总数、关注公众号、付费会员人数趋势',
                        textStyle: {
                            fontSize: 14,
                            fontWeught: 'normal'
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: { // 图例组件
                        left: 'center',
                        bottom: '0%'
                    },
                    grid: { // 直角坐标系
                        left: '0%',
                        containLabel: true
                    },
                    xAxis: { // x轴
                        type : 'category',
                        boundaryGap : false,
                        data : ['2020-01-01','2020-01-02','2020-01-03','2020-01-04','2020-01-05','2020-01-06','2020-01-07']
                    },
                    yAxis: { // y轴
                        type : 'value'
                    },
                    series: [
                        {
                            name:'会员数',
                            type:'line',
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'关注公众号',
                            type:'line',
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'付费会员',
                            type:'line',
                            data:[150, 232, 201, 154, 190, 330, 410]
                        }
                    ]
                },
                histogramOption: {
                    title: {
                        text: '销售排行榜'
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
                        data: ['刮痧板', '囤货套装', '安服盒子', '维稳套装', '蓝睡莲水光原液', '舒颜修护面膜', '山茶花洗面奶']
                    },
                    series: [
                        {
                            name: '2011年',
                            type: 'bar',
                            data: [8, 12, 31, 41, 59, 61, 70]
                        }
                    ]
                },
                content: [
                {
                    sum: 24,
                    change: 'add',
                    amount: 199,
                    name: '会员总数'
                },
                {
                    sum: 4,
                    change: 'sub',
                    amount: 22,
                    name: '关注公众号'
                },
                {
                    sum: 1,
                    change: 'add',
                    amount: 8,
                    name: '付费会员'
                }
            ]
            }
        },
        methods: {
        }
    }
</script>

<style lang="less">

</style>