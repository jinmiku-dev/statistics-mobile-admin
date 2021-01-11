<template>
    <div class="user-frame" :class="isType">
        <div class="mask" @click="frameClick"></div>
        <div class="content">
            <div class="head">
                <span class="icon iconfont iconshouqi" @click="frameClick"></span>
            </div>
            <div class="information">
                <div class="item">
                    <div class="left">
                        <img class="portrait" src="../assets/head.jpg">
                    </div>
                    <div class="right">
                        <h5 class="name">一城烟雨柳色青</h5>
                        <h5 class="position">研发工程师</h5>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <span class="quit" @click="quitLogin">退出账号</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserFrame",
    props: {
        isType: {
            type: String,
            default: "hide"
        }
    },
    methods: {
        frameClick() {
            this.$emit('frameClick', 'hide');
        },
        quitLogin() {
            this.$emit('quit', true);
        }
    }
};
</script>

<style scoped lang="less">
@keyframes showPopup {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes showContent {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
}
.user-frame {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    z-index: 999 !important;
    &.hide {
        display: none;
    }
    &.show {
        display: block;
        .mask {
            animation: showPopup .3s linear both;
        }
        .content {
            animation: showContent .3s linear both;
        }
    }
    .mask {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.3);
    }
    .content {
        position: fixed;
        top: 0;
        left: 0;
        width: 45%;
        height: 100%;
        z-index: 2;
        background-color: #fff;
        padding: 20px 10px;
        .head {
            width: 100%;
            height: 18px;
            .icon {
                font-size: 18px;
                line-height: 18px;
                color: #333;
            }
        }
        .information {
            width: 100%;
            margin-top: 20px;
            .item {
                display: flex;
            }
            .left {
                width: 42px;
            }
            .left .portrait {
                width: 42px;
                height: 42px;
                border-radius: 50%;
                display: block;
            }
            .right {
                width: calc(100% - 42px);
                padding: 3px 0 3px 7px;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                .name {
                    font-size: 15px;
                    line-height: 15px;
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .position {
                    font-size: 11px;
                    line-height: 11px;
                    width: 100%;
                }
            }
        }
        .bottom {
            position: absolute;
            bottom: 20px;
            left: 10px;
            width: calc(100% - 20px);
            .quit {
                display: block;
                width: 80%;
                margin-left: 10%;
                margin-bottom: 10px;
                height: 30px;
                line-height: 30px;
                font-size: 13px;
                text-align: center;
                background-color: #fff;
                border: 1px solid rgb(100, 100, 100);
            }
        }
    }
}
</style>
