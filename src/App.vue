<template>
  <div id="app">
      <Nav :title="pageName" :icon="icon"></Nav>
    <router-view/>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
    components: {
        Nav
    },
    computed: {
        pageName: function() {
            return this.$store.getters.pageName;
        },
        icon: function() {
            return this.$store.getters.icon;
        }
    }
}
</script>

<style lang="less">
@import './assets/minireset.min.css';
</style>
