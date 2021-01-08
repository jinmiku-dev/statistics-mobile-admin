<template>
  <div class="user-frame">
      
  </div>
</template>

<script>
export default {
  name: 'UserFrame',
  props: {
    show: {
        type: Boolean,
        default: false
    }
  },
  computed: {

  },
  methods: {

  },
}
</script>

<style scoped lang="less">
.user-frame {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 999 !important;
}
</style>
