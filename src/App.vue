<template>
  <div id="app">
        <Nav :title="pageName" :icon="icon" @navClick="frameShow"></Nav>
        <UserFrame :isType="type" @frameClick="frameHide" @quit="quit"></UserFrame>
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
    computed: {
        pageName: function() {
            return this.$store.getters.pageName;
        },
        icon: function() {
            return this.$store.getters.icon;
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
        }
    },
}
</script>

<style lang="less">
@import './assets/minireset.min.css';
@import url('https://at.alicdn.com/t/font_2317048_4gxyn8zmg9s.css');
body {
    background-color: #fff !important;
}
#main {
    padding: 0 15px;
}
</style>
