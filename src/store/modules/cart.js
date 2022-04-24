export default {
	state: {
		cart: []
	},
	mutations: {
		SET_CART(state, product) {
			if (state.cart.length) {
				let isProductExists = false
				state.cart.map(function (item) {
					if (item.article === product.article) {
						isProductExists = true
						item.quantity++
					}
				})
				if (!isProductExists) {
					state.cart.push(product)
				}
			} else {
				state.cart.push(product)
			}
		},
		REMOVE_FROM_CART(state, index) {
			state.cart.splice(index, 1)
		}
	},
	actions: {
		ADD_TO_CART({
			commit
		}, product) {
			commit('SET_CART', product)
		},
		DELETE_FROM_CART({
			commit
		}, index, ) {
			commit('REMOVE_FROM_CART', index)
		}
	},
	getters: {
		CART(state) {
			return state.cart
		}
	}
}