<template>
  <div class="member">
    <SelectDate></SelectDate>
    <Comparison date="week" :contentData="content"></Comparison>
    <Chart chartId="line" chartClass="member-line" :chartOption="lineOption"></Chart>
    <Chart chartId="pie" chartClass="member-pie" :chartOption="pieOption"></Chart>
  </div>
</template>

<script>
    import Chart from '@/components/echarts/Chart';
    import SelectDate from '@/components/SelectDate';

    export default {
        components: {
            Chart,
            SelectDate
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
                pieOption: {
                    title: {
                        text: '会员总数、关注公众号、付费会员人数占比',
                        textStyle: {
                            fontSize: 14,
                            fontWeught: 'normal'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b} : {c} ({d}%)'
                    },
                    legend: {
                        bottom: 10,
                        left: 'center',
                        icon: 'circle'
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '50%'],
                            selectedMode: 'circle',
                            data: [
                                {
                                    value: 1548,
                                    name: '会员数'
                                },
                                {
                                    value: 535,
                                    name: '关注公众号'
                                },
                                {
                                    value: 510,
                                    name: '付费会员'
                                }
                            ],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
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
                    },
                ]
            }
        },
        methods: {
            need() {
                x = {
                    time: ['2020-01-01','2020-01-02','2020-01-03','2020-01-04','2020-01-05','2020-01-06','2020-01-07'],
                    data: [
                        {
                            name:'会员数',
                            data:[100, 100, 100, 100, 100, 100, 100],
                            sum: 700
                        },
                        {
                            name:'关注公众号',
                            data:[200, 200, 200, 200, 200, 200, 200],
                            sum: 1400
                        },
                        {
                            name:'付费会员',
                            data:[300, 300, 300, 300, 300, 300, 300],
                            sum: 2100
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="less">

</style>