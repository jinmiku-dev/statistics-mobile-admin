<template>
  <div class="item">
        <span :class="`icon iconfont ${icon}`"></span>
        <h5 class="text" @click="go(path)">
            <span>{{ text }}</span>
            <span class="iconfont iconic_arrow_r"></span>
        </h5>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    icon: {
        type: String,
        default: ''
    },
    path: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    }
  },
  methods: {
      go(path) {
          if (!path) return;
          else this.$router.push({ path });
      }
  }
}
</script>

<style scoped lang="less">
.item {
    margin: 15px 0;
    display: flex;
    color: #333;
    .icon {
        font-size: 26px;
        line-height: 26px;
        padding: 2px 0;
    }
    .text {
        margin-left: 10px;
        font-size: 14px;
        line-height: 14px;
        padding: 8px 0;
        border-bottom: 1px solid rgb(210, 210, 210);
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
}
</style>
