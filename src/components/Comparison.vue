<template>
  <div class="comparison">
      <div class="flex">
          <div class="item" v-for="(item, index) in contentData" :key="index">
            <div>
                <div class="time">{{ selectDate }}{{ item.change | variation }}{{ item.sum }}</div>
                <div class="number">{{ item.amount }}</div>
                <div class="name">{{ item.name }}</div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'Comparison',
        props: {
            contentData: {
                type: Array,
                default: () => {}
            },
            date: {
                type: String,
                default: 'week'
            }
        },
        filters: {
            variation: function (param) { 
                switch (param) {
                    case 'add':
                        return ' + ';
                    case 'sub':
                        return ' - ';
                    default:
                        return ' ';
                }
            }
        },
        computed: {
            selectDate: function () { 
                switch (this.date) {
                    case 'day':
                        return '较前日';
                    case 'week':
                        return '较上周';
                    case 'month':
                        return '较上月';
                    case 'year':
                        return '较上年';
                    default:
                        return '';
                }
            }
        },
        methods: {}
    }
</script>

<style scoped lang="less">
.comparison {
    padding: 30px 15px;
    .flex {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .item {
            flex: 1;
            text-align: center;
            position: relative;
        }
        .item::after {
            content: '';
            display: block;
            width: 1px;
            height: 70%;
            background: rgb(200, 200, 200);
            position: absolute;
            bottom: 50%;
            margin-bottom: -20%;
            right: 0;
        }
        .item:last-child::after {
            display: none;
        }
        .time {
            font-size: 12px;
        }
        .number {
            font-size: 15px;
            font-weight: bold;
            margin: 8px 0;
        }
        .name {
            font-size: 12px;
        }
    }
}
</style>