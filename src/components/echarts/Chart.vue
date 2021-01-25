<template>
    <div class="comp-chart">
        <div :id="chartId" :class="chartClass" :style="chartStyle"></div>
    </div>
</template>

<script>
import echarts from 'echarts';
import echartsTheme from '@/utils/theme.json';

export default {
    name: 'Chart',
    props: {
        chartId: {
            type: String,
            default: 'chart'
        },
        chartClass: {
            type: String,
            default: 'chart'
        },
        chartOption: {
            type: Object,
            default: () => {}
        },
        chartStyle: {
            type: String,
            default: 'width: 100%; height: 300px;'
        }
    },
    data() {
        return {
            myChart: null
        }
    },
    mounted() {
        this.loadChart();
    },
    methods: {
        loadChart() {
            if (!this.chartOption) return;
            this.$nextTick(() => {
                echarts.registerTheme('etheme', echartsTheme);
                this.myChart = echarts.init(document.getElementById(this.chartId), 'etheme');
                this.myChart.setOption(this.chartOption);
            });
        }
    },
    beforeDestroy() {
        if (!this.myChart) return
        this.myChart.dispose();
        this.myChart = null;
    },
}
</script>

<style lang="less">

</style>