<template>
  <div class="home">
    <span class="iconfont iconyonghu"></span>
    <router-link to="/member?id=3">会员分析</router-link>
    <br />
    <span class="iconfont iconjine"></span>
    <router-link to="/sales">销量分析</router-link>
    <br />
    <span class="iconfont iconbiaoqiankuozhan_jiaoyi-179"></span>
    <router-link to="/transaction">交易分析</router-link>
    <br />
    <span class="iconfont iconshangpinguanli"></span>
    <router-link to="/product">商品分析</router-link>
    <br />
    <span class="iconfont iconsousuo"></span>
    <router-link to="/search">搜索分析</router-link>
    <br />
    <span class="iconfont iconshouhoukefu"></span>
    <router-link to="/after-sale">售后分析</router-link>
  </div>
</template>

<script>
import Comparison from "@/components/Comparison";

export default {
  components: {
    Comparison
  },
  data() {
    return {};
  }
};
</script>

<script>
export default {
  name: "Home"
};
</script>

<style lang="less">
.home {
  span {
    font-size: 28px;
  }
}
</style>
