<template>
  <div class="transaction">
    <Chart chartId="line" chartClass="transaction-line" :chartOption="lineOption"></Chart>
    <Chart chartId="pie" chartClass="transaction-pie" :chartOption="pieOption"></Chart>
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
                    text: '下单量与下单金额走势图',
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
                    data : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29', '30', '31']
                },
                yAxis: { // y轴
                    type : 'value'
                },
                series: [
                    {
                        name:'下单量',
                        type:'line',
                        data:[1,8,2,4,7,8,4,7,7,5,10,1,0,1,2,5,4,15,2,10,24,11,2,3,4,8,4,1,1,2,0]
                    },
                    // {
                    //     name:'下单金额',
                    //     type:'line',
                    //     data:[220, 182, 191, 234, 290, 330, 310]
                    // }
                ]
            },
            pieOption: {
                title: {
                    text: '订单来源',
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
                        radius: ['30%', '50%'],
                        center: ['50%', '50%'],
                        selectedMode: 'circle',
                        data: [
                            {
                                value: 1548,
                                name: '微信小程序'
                            },
                            {
                                value: 535,
                                name: '微信'
                            },
                            {
                                value: 510,
                                name: 'H5'
                            }
                        ]
                    }
                ]
            }
        }
    },
}
</script>