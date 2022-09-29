const urlCategories = "/main-api/categories/"
const state = {
    categories: [],
    category: {
        id: 0,
        name: "",
        price: 0,
        category_id: 1
    }
}

const getters = {
    getCategories: state => state.categories,
    getCategory: state => state.category,
    getCategoryID: state => state.category.id,
}

const mutations = {
    setCategories(state, data) {
        state.categories = data;
    },
    setCategory(state, data) {
        state.category = data;
    },
    setCategoryID(state, data) {
        state.category.id = data;
    }
}

const actions = {
    listCategories(state, VueComponenet) {
        VueComponenet.$http.get(urlCategories + "list")
            .then(response => {
                state.commit("setCategories", response.body.categories)
            })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
