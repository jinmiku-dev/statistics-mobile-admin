<template>
    <div class="home">
        <div class="cut-off">
            <span class="icon iconfont iconshijian_huaban"></span>
            <span class="time">截止统计 {{ cufOffTime }}</span>
        </div>
        <Comparison
            :contentData="content"
            date="day"
            compStyle="reversal"
        ></Comparison>

        <div class="list">
            <div v-for="(item, index) in menuData" :key="index">
                <Item
                    :icon="item.icon"
                    :text="item.text"
                    :path="item.path"
                ></Item>
            </div>
        </div>
    </div>
</template>

<script>
import Item from "@/components/Item";
import { homeMenu as menuData } from "@/utils/data";

export default {
    components: {
        Item
    },
    data() {
        return {
            menuData,
            content: [
                {
                    sum: 55,
                    change: "add",
                    amount: 2546,
                    name: "会员总数"
                },
                {
                    sum: 2,
                    change: "sub",
                    amount: 168,
                    name: "关注公众号"
                },
                {
                    sum: 1648,
                    change: "add",
                    amount: "21575.57",
                    name: "会员消费"
                },
                {
                    sum: 8848,
                    change: "add",
                    amount: 261779,
                    name: "会员积分"
                }
            ],
            cufOffTime: '2020-01-01 00:00:00'
        };
    }
};
</script>

<style lang="less">
.home {
    .cut-off {
        display: flex;
        color: #333;
        .icon {
            font-size: 18px;
            line-height: 18px;
            padding: 1px 0;
        }
        .time {
            display: block;
            width: 100%;
            border-bottom: 1px solid #eee;
            padding: 3px 0;
            font-size: 14px;
            line-height: 14px;
            margin-left: 5px;
        }
    }
    .comparison {
        padding: 20px 0;
        .flex {
            flex-flow: wrap;
        }
        .item {
            width: 50%;
            flex: none !important;
            margin: 10px 0;
        }
        .item::after {
            display: none !important;
        }
    }
    .list {
        padding: 0 10px;
    }
}
</style>
