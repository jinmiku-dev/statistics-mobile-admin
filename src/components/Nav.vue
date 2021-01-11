<template>
  <div class="nav">
      <div class="flex">
          <span :class="selectIcon" @click="operation"></span>
          <h1>{{ title }}</h1>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    title: {
        type: String,
        default: 'ELODIE&JO'
    },
    icon: {
        type: String,
        default: 'none'
    }
  },
  computed: {
    selectIcon: function () { 
        switch (this.icon) {
            case 'user':
                return 'iconfont iconuser';
            case 'back':
                return 'iconfont iconfanhui';
            case 'none':
                return 'none';
        }
    }
  },
  methods: {
      operation() {
          switch (this.icon) {
            case 'user':
                this.userFrame();
                break;
            case 'back':
                this.goBack();
                break;
            default:
                break;
          }
      },
      userFrame() {
          this.$emit('navClick', true);
      },
      goBack() {
          this.$router.back();
      }
  },
}
</script>

<style scoped lang="less">
.nav {
    position: relative;
    padding: 10px 10px;
    margin-bottom: 10px;
    span {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 20px;
        &.none {
            display: none;
        }
    }
    h1 {
        font-size: 16px;
        color: #000;
        text-align: center;
        height: 20px;
        line-height: 20px;
    }
}
</style>
