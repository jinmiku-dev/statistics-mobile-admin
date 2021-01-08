<template>
  <div id="app">
        <Nav :title="pageName" :icon="icon" @frameChange="frameChange"></Nav>
        <!-- <UserFrame :show="show"></UserFrame> -->
        <div id="main">
            <router-view></router-view>
        </div>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue';
import UserFrame from '@/components/UserFrame.vue';

export default {
    components: {
        Nav,
        UserFrame
    },
    data() {
        return {
            show: false
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
        frameChange(value) {
            console.log(value);
        }
    },
}
</script>

<style lang="less">
@import './assets/minireset.min.css';
@import url('https://at.alicdn.com/t/font_2317048_ki9j8fvmqm.css');
#main {
    padding: 0 15px;
}
</style>
