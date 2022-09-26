const urlItems = "/main-api/items/"
const state = {
    items: []
}

const getters = {
    getItems: state => state.items
}

const mutations = {
    setItems(state, data) {
        state.items = data;
    }
}

const actions = {
    listItems(state, VueComponenet) {
        VueComponenet.$http.get(urlItems + "list")
            .then(response => {
                state.commit("setItems", response.body.items)
            })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
