const state = {}
const getters = {}
const mutations = {}
const actions = {
    async login(context, payload) {
        await this._vm.axios('/login', payload)
        .then((res) => {
            console.log('login success', res);
        })
        .catch(err => {
            console.log('login error', err);
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}