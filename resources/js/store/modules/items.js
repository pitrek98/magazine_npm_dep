const urlItems = "/main-api/items/"
const state = {
    items: [],
    item: {
        id: 0,
        name: "",
        price: 0,
        category_id: 1
    }
}

const getters = {
    getItems: state => state.items,
    getItem: state => state.item,
    getItemID: state => state.item.id,
}

const mutations = {
    setItems(state, data) {
        state.items = data;
    },
    setItem(state, data) {
        state.item = data;
    },
    setItemID(state, data) {
        state.item.id = data;
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
