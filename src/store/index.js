import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentUser: null,
        authenticated: false,
        sellers: [],
        rankingSellers: [],
        rankingProducts: [],
        kpis: {
            venta_mensual: {},
            venta_anual: {}
        },
        offices: [],
        managers: []
    },
    mutations: {
        SET_USER(state, payload) {
            state.currentUser = payload
            state.authenticated = true
        },
        SET_SELLERS(state, payload) {
            state.sellers = payload
        },
        SET_RANKING_SELLERS(state, payload) {
            state.rankingSellers = payload
        },
        SET_RANKING_PRODUCTS(state, payload) {
            state.rankingProducts = payload
        },
        SET_KPIS_MENSUAL(state, payload) {
            state.kpis.venta_mensual = payload.find((venta) => {
                return venta.venta_mensual
            }).venta_mensual
        },
        SET_KPIS_ANUAL(state, payload) {
            state.kpis.venta_anual = payload.find((venta) => {
                return venta.venta_anual
            }).venta_anual
        },
        SET_OFFICES(state, payload) {
            state.offices = payload
        },
        SET_MANAGERS(state, payload) {
            state.managers = payload
        },
        AUTH_LOGOUT(state) {
            state.currentUser = null
            state.authenticated = false
        }
    },
    actions: {
        verifyUser({ commit }, payload) {
            Axios.get('http://localhost:8080/api/login.json').then((response) => {

                    if (response.data.username == payload.userName && response.data.password == payload.password) {
                        commit('SET_USER', response.data)
                        router.push('/home')
                    } else {
                        this.authenticated = false
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        getSellers({ commit, state }) {
            var config = {
                headers: {
                    'Authorization': `Bearer ${state.currentUser.token}`,
                }
            };
            Axios.get('http://localhost:8080/api/vendedores.json', config).then((response) => {
                    commit('SET_SELLERS', response.data.vendedores)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getDasboard({ commit, state }) {
            var config = {
                headers: {
                    'Authorization': `Bearer ${state.currentUser.token}`,
                }
            };
            Axios.get('http://localhost:8080/api/dashboard.json', config).then((response) => {
                    commit('SET_RANKING_SELLERS', response.data.ranking_vendedores)
                    commit('SET_RANKING_PRODUCTS', response.data.ranking_productos)
                    commit('SET_KPIS_MENSUAL', response.data.kpis)
                    commit('SET_KPIS_ANUAL', response.data.kpis)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getOffices({ commit, state }) {
            var config = {
                headers: {
                    'Authorization': `Bearer ${state.currentUser.token}`,
                }
            };
            Axios.get('http://localhost:8080/api/oficinas.json', config).then((response) => {
                    commit('SET_OFFICES', response.data.oficinas)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getManagers({ commit, state }) {
            var config = {
                headers: {
                    'Authorization': `Bearer ${state.currentUser.token}`,
                }
            };
            Axios.get('http://localhost:8080/api/managers.json', config).then((response) => {
                    commit('SET_MANAGERS', response.data.managers)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getSellerTab({ commit, state }) {
            var config = {
                headers: {
                    'Authorization': `Bearer ${state.currentUser.token}`,
                }
            };
            Axios.get('http://localhost:8080/api/ficha_vendedor.json', config).then((response) => {
                    commit('SET_MANAGERS', response.data.managers)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        logout({ commit }) {
            commit('AUTH_LOGOUT')
            console.log("Se ha deslogueado satisfactoriamente.")
            router.push('/')

        }
    },
    getters: {
        isAuthenticated: state => {
            return state.authenticated
        }
    },
    modules: {}
})