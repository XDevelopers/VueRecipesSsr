import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			drawer: false
		},
		mutations: {
			change(state) {
				state.drawer = !state.drawer;

			}
		}
	})
}

export default createStore
