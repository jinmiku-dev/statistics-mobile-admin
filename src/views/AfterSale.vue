<template>
  <div class="after-sales">
    <Comparison date="week" :contentData="content"></Comparison>
    <Chart chartId="line" chartClass="after-sales-line" :chartOption="lineOption"></Chart>
  </div>
</template>

<script>

export default {
    data() {
        return {
            lineOption: {
                title: { // 标题组件
                    text: '退换货量与退换货金额趋势',
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
                        name:'退换货量',
                        type:'line',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'退换货金额',
                        type:'line',
                        data:[220, 182, 191, 234, 290, 330, 310]
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
}
</script>