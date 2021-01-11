<template>
    <div class="select-date">
        <div class="flex" @click="openCalendar">
            <h5 class="time">开始时间--结束时间</h5>
            <div class="icon">
                <span class="icon iconfont iconriqi1"></span>
            </div>
        </div>
        <div class="tab">
            <div class="time">本周</div>
            <div class="time">本月</div>
            <div class="time">本年</div>
        </div>

        <calendar mode="during" v-bind:show.sync="show" :closeByClickMask="true" @change="onChange"/>
    </div>
</template>

<script>
export default {
    name: "SelectDate",
    props: {
        title: {
            type: String,
            default: "ELODIE&JO"
        },
        icon: {
            type: String,
            default: "none"
        }
    },
    data() {
        return {
            show: false
        }
    },
    computed: {
        selectIcon: function() {
            switch (this.icon) {
                case "user":
                    return "iconfont iconuser";
                case "back":
                    return "iconfont iconfanhui";
                case "none":
                    return "none";
            }
        }
    },
    methods: {
        onChange(date) {
            console.log(date);
        },
        openCalendar() {
            this.show = true;
        }
    }
};
</script>

<style scoped lang="less">
.select-date {
    .flex {
        display: flex;
        width: 80%;
        margin-left: 10%;
        .time {
            font-size: 14px;
            width: calc(100% - 40px);
            margin-right: 10px;
            height: 30px;
            line-height: 30px;
            border: 1px solid rgb(95, 95, 95);
            text-align: center;
            color: rgb(130, 130, 130);
        }
        div.icon {
            width: 30px;
            height: 30px;
            .icon {
                font-size: 30px;
            }
        }
    }
    .tab {
        display: flex;
        width: 80%;
        margin: 10px 10%;
        .time {
            flex: 1;
            text-align: center;
            font-size: 12px;
            line-height: 26px;
            height: 26px;
            border: 1px solid #333;
            border-right: none;
            &:last-child {
                border-right: 1px solid #333;
            }
        }
    }
}
</style>
