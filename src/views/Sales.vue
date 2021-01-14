<template>
  <div class="sales">
    <SelectDate></SelectDate>
    <Comparison date="week" :contentData="content"></Comparison>
    <Chart chartId="line" chartClass="sales-line" :chartOption="lineOption"></Chart>
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
                    text: '订单笔数与订单量走势图',
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
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                },
                yAxis: { // y轴
                    type : 'value'
                },
                series: [
                    {
                        name:'订单笔数',
                        type:'line',
                        data:[120, 132, 101, 134, 90, 230, 210, 145,155,188,111,133,152]
                    },
                    {
                        name:'订单量',
                        type:'line',
                        data:[220, 182, 191, 234, 290, 330, 310, 145,155,188,111,133,152]
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
}
</script>