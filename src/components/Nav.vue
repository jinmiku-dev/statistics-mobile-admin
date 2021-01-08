<template>
  <div class="nav">
      <div class="flex">
          <span @click="operation">{{ selectIcon }}</span>
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
                return '用户';
            case 'back':
                return '返回';
            case 'none':
                return '';
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
    span {
        position: absolute;
        width: 40px;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
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
