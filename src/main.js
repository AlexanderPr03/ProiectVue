import { createApp } from 'vue'
import { createStore } from 'vuex';


import App from './App.vue'
import router from './router'

// Creăm un depozit vuex

const store = createStore({
    state() {
        return {
            nume:"Alexandru",
            count: 10,
        }
    },
    getters: {
        doubleCount(state) {
            return ((state.count * 2));
        }
    },
    mutations: {
        actualizeazaContor(state) {
            state.count++;
        }
    },
    actions: {
        actualizeazaAsync({commit}) {
            setInterval(() => {
                commit('actualizeazaContor');
            },1000)
        }
    }
})


createApp(App).use(router).use(store).mount('#app')
