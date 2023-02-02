export default {
	state: {
		// 搜索关键字
		hotWords: []
	},
	getters: {},
	mutations: {
		SETMANAGER(state, data) {
			state.hotWords = state.hotWords.push(data);
		}
	}
}