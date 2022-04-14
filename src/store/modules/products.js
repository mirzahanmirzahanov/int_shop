import axios from "axios"

export default {
	state: {
		products: []
	},
	mutations: {
		SET_PRODUCTS_STATE(state, products) {
			state.products = products
		}
	},
	actions: {
		async GET_PRODUCTS_API({ commit }) {
			const products = await axios(' http://localhost:3000/products', {
				method: "GET"
			})
			commit('SET_PRODUCTS_STATE', products.data);
			return products
		}
	},
	getters: {
		PRODUCTS(state) {
			return state.products
		}
	},
}