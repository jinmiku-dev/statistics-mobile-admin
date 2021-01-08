<template>
  <div class="home">
      <router-link to="/member?id=3">会员分析</router-link>
      <br/>
      <router-link to="/sales">销量分析</router-link>
      <br/>
      <router-link to="/transaction">交易分析</router-link>
      <br/>
      <router-link to="/product">商品分析</router-link>
      <br/>
      <router-link to="/search">搜索分析</router-link>
      <br/>
      <router-link to="/after-sale">售后分析</router-link>
  </div>
</template>

<script>
import Comparison from '@/components/Comparison';


    export default {
        components: {
            Comparison
        },
        data() {
            return {
                
            }
        },
    }
</script>

<script>
export default {
  name: 'Home'
}
</script>
