<template>
    <div class="select-date">
        <div class="flex" @click="openCalendar">
            <h5 class="time">{{ startTime || '开始时间' }} -- {{ endTime || '结束时间' }}</h5>
            <div class="icon">
                <span class="icon iconfont iconriqi1"></span>
            </div>
        </div>
        <div class="tab">
            <div class="time">本周</div>
            <div class="time">本月</div>
            <div class="time">本年</div>
        </div>
        <div class="btn">
            <el-date-picker
                ref="picker"
                v-model="time"
                type="date"
                align="center"
                value-format="yyyy-MM-dd"
                :onClick="isClick()"
                :blur="isBlur()"
            >
            </el-date-picker>
        </div>
    </div>
</template>

<script>
export default {
    name: "SelectDate",
    data() {
        return {
            startTime: '',
            endTime: '',
            time: '',
            show: false,
            timeOut: '',
            timeOut2: '',

            isClickTimes: 0,
            isBlurTimes: 0
        }
    },
    methods: {
        resetTimes() {
            this.startTime = '';
            this.endTime = '';
            this.time = '';
            this.isClickTimes = 0;
            this.isBlurTimes = 0;
        },
        openCalendar() {
            this.time = '';
            this.isClickTimes = 0;
            if (this.endTime) {
                this.resetTimes();
            }
            this.$refs.picker.focus();
        },
        isClick() {
            if (this.time && this.isClickTimes === 0) {
                // 开始时间存在，结束时间等于确定时间
                if (this.startTime) {
                    let timeArr = [new Date(this.startTime).getTime(), new Date(this.endTime).getTime()];
                    let currentTimeArr = timeArr.sort((a, b) => { return a - b; });
                    if (currentTimeArr[1] - currentTimeArr[0] > (31 * 24 * 60 * 60 * 1000)) {
                        this.$message({
                            center: true,
                            message: "选取时间段过长，请选择一月内时间段",
                            type: 'error'
                        });
                        this.resetTimes();
                        this.isClickTimes++;
                    } else {
                        this.endTime = this.time;
                    }
                } else {
                    // 开始时间不存在，开始时间等于确定时间，且再次打开选择框选择结束时间
                    this.startTime = this.time;
                    this.time = '';
                    this.timeOut = setTimeout(() => {
                        this.$refs.picker.focus();
                        if (this.timeOut) clearTimeout(this.timeOut);
                    }, 20);
                }
            }
        },
        isBlur() {
            if (this.startTime && this.endTime && this.isBlurTimes == 0) {
                this.isBlurTimes++;
                console.log('isBlur');
                // this.resetTimes();
            }
        }
    }
};
</script>

<style scoped lang="less">
.select-date {
    position: relative;
    .flex {
        display: flex;
        width: 100%;
        padding: 0 20px;
        .time {
            font-size: 14px;
            width: calc(100% - 35px);
            margin-right: 5px;
            height: 30px;
            line-height: 30px;
            border: 1px solid rgb(95, 95, 95);
            text-align: center;
            color: rgb(66, 66, 66);
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
        width: 100%;
        margin: 10px 0;
        padding: 0 20px;
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
    .btn {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        height: 0;
        overflow: hidden;
    }
}
</style>
