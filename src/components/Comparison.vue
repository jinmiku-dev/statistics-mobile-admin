<template>
    <div class="comparison">
        <div v-if="showSelectDate">
            <SelectDateComp></SelectDateComp>
        </div>
        <div class="flex">
            <div class="item" v-for="(item, index) in contentData" :key="index">
                <div>
                    <div class="time">
                        {{ selectDate }}
                        {{ item.change | variation }}
                        {{ item.sum }}
                    </div>
                    <div class="number">{{ item.amount }}</div>
                    <div class="name" :class="compStyle">{{ item.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SelectDateComp from '@/components/SelectDate';

export default {
    name: "Comparison",
    components: {
        SelectDateComp
    },
    props: {
        showSelectDate: {
            type: Object,
            default: () => { return true }
        },
        contentData: {
            type: Array,
            default: () => { return [] }
        },
        date: {
            type: String,
            default: "week"
        },
        compStyle: {
            type: String,
            default: ""
        }
    },
    filters: {
        variation: function(param) {
            switch (param) {
                case "add":
                    return " + ";
                case "sub":
                    return " - ";
                default:
                    return " ";
            }
        }
    },
    computed: {
        selectDate: function() {
            switch (this.date) {
                case "day":
                    return "较前日";
                case "week":
                    return "较上周";
                case "month":
                    return "较上月";
                case "year":
                    return "较上年";
                default:
                    return "";
            }
        }
    },
    methods: {}
};
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
            content: "";
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
            &.reversal {
                color: #fff;
                background-color: rgb(80, 80, 80);
                display: inline-block;
                padding: 4px 10px;
                border-radius: 8px;
            }
        }
    }
}
</style>
