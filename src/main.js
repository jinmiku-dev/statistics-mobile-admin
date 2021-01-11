import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { getToken } from '@/utils/auth';

import Calendar from 'vue-mobile-calendar';
import Comparison from "@/components/Comparison";

Vue.use(Calendar);
Vue.component('Comparison', Comparison);

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        if (getToken('Token')) {
            next({ path: '/' });
        } else {
            next();
        }
    } else {
        if (getToken('Token')) {
            next();
        } else {
            next({ path: '/login' });
        }
    }
});

router.afterEach((to, from) => {
    let title, icon;
    switch (to.path) {
        case '/':
        case '/home':
            title = 'ELODIE&JO';
            icon = 'user';
            break;
        case '/login':
            title = 'ELODIE&JO';
            icon = 'none';
            break;
        case '/member':
            title = '会员分析';
            icon = 'back';
            break;
        case '/sales':
            title = '销量分析';
            icon = 'back';
            break;
        case '/transaction':
            title = '交易分析';
            icon = 'back';
            break;
        case '/product':
            title = '商品分析';
            icon = 'back';
            break;
        case '/search':
            title = '搜索分析';
            icon = 'back';
            break;
        case '/after-sale':
            title = '售后分析';
            icon = 'back';
            break;
        default:
            title = 'ELODIE&JO';
            icon = 'none';
            break;
    }
    store.commit('setPageName', title);
    store.commit('setIcon', icon);
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
