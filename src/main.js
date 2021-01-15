import Vue from 'vue';
import { DatePicker, Message } from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import { getToken } from '@/utils/auth';
import Axios from '@/utils/axios';

Vue.prototype.$message = Message;
Vue.prototype.$axios = Axios;

import Comparison from "@/components/Comparison";
import Chart from '@/components/echarts/Chart';
import SelectDate from '@/components/SelectDate';

Vue.use(DatePicker);
Vue.component('Message', Message);
Vue.component('Comparison', Comparison);
Vue.component('Chart', Chart);
Vue.component('SelectDate', SelectDate);

router.beforeEach((to, from, next) => {
    if (from.path === '/error' && store.getters.errorBrowser) return;

    switch (to.path) {
        case '/login':
            if (getToken('Token')) {
                next({ path: '/' });
            } else {
                next();
            }
            break;
        case '/error':
            next();
            break;
        default:
            if (getToken('Token')) {
                next();
            } else {
                next({ path: '/login' });
            }
            break;
    }
});

router.afterEach((to, from) => {
    let title, icon, navData;
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
            title = '';
            icon = 'none';
            break;
    }
    navData = {
        title,
        icon
    }
    store.commit('setNavData', navData);
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
