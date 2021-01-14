import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pageTitle: 'ELODIE&JO',
        icon: 'none',
        errorBrowser: false
    },
    getters: {
        pageTitle: state => state.pageTitle,
        icon: state => state.icon,
        errorBrowser: state => state.errorBrowser
    },
    mutations: {
        setNavData: (state, roles) => {
            let data = JSON.parse(JSON.stringify(roles));
            state.pageTitle = data.title;
            state.icon = data.icon;
        },
        setErrorBrowser: (state, roles) => {
            state.errorBrowser = roles;
        }
    },
    actions: {
        logout() {
            
        }
    },
    modules: {}
})
