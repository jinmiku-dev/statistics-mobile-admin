<template>
  <div id="app">
        <div v-if="showDom">
            <Nav :title="pageTitle" :icon="icon" @navClick="frameShow"></Nav>
            <UserFrame :isType="type" @frameClick="frameHide" @quit="quit"></UserFrame>
        </div>
        <div id="main">
            <router-view></router-view>
        </div>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue';
import UserFrame from '@/components/UserFrame.vue';
import { removeToken } from '@/utils/auth';

export default {
    components: {
        Nav,
        UserFrame
    },
    data() {
        return {
            type: 'hide'
        }
    },
    created() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
        if (flag) {
            // mobile
            let ua = window.navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                // 微信浏览器
                this.$store.commit('setErrorBrowser', true);
                this.message("请使用非微信浏览器打开！");
                this.$router.replace({ path: '/error' });
            } else {
                // 普通浏览器
                this.$store.commit('setErrorBrowser', false);
            }
        } else {
            // pc
            this.$store.commit('setErrorBrowser', true);
            this.message("请使用移动端浏览器打开！");
            this.$router.replace({ path: '/error' });
        }


        this.$axios.get('https://store.elodiejo.com/api/tiny-shop/v1/index/get-data').then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    },
    computed: {
        pageTitle: function() {
            return this.$store.getters.pageTitle;
        },
        icon: function() {
            return this.$store.getters.icon;
        },
        showDom: function () { 
            return !this.$store.getters.errorBrowser;
        }
    },
    methods: {
        frameShow() {
            this.type = 'show';
        },
        frameHide() {
            this.type = 'hide';
        },
        async quit() {
            await removeToken('Token');
            this.type = 'hide';
            this.$router.replace({ path: '/login' });
        },
        message(title) {
            this.$message({
                center: true,
                duration: 5 * 1000,
                message: title,
                type: 'error'
            });
        }
    },
}
</script>

<style lang="less">
@import './assets/minireset.min.css';
@import url('https://at.alicdn.com/t/font_2317048_4gxyn8zmg9s.css');
body {
    transform : translateZ (0);
    background-color: #fff !important;

    .el-date-picker {
        width: 100% !important;
    }
    .el-picker-panel__content {
        width: calc(100% - 30px) !important;
    }
    .el-date-table th {
        text-align: center !important;
    }
}
#main {
    padding: 0 15px;
}
</style>
