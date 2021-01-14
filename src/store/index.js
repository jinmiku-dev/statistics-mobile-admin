import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pageName: 'ELODIE&JO',
        icon: 'none'
    },
    getters: {
        pageName: state => state.pageName,
        icon: state => state.icon
    },
    mutations: {
        setPageName: (state, roles) => {
            state.pageName = roles;
        },
        setIcon: (state, roles) => {
            state.icon = roles;
        }
    },
    actions: {
        logout() {
            
        }
    },
    modules: {}
})
