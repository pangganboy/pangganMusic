import Cache from '../../utils/cache';
const defaultTheme = {
	name: '激情紫',
	color: '#C566FE',
	colorList: '--view-theme:#C566FE;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(254,102,254,0.7);',
};
export default {
	state: {
		// 主题色
		theme: Cache.get('THEME', true) || defaultTheme,
	},
	getters: {},
	mutations: {
		SETAPPTHEME(state, data) {
			Cache.set('THEME', data)
			// uni.setStorage({
			// 	key: 'THEME',
			// 	data
			// })
			state.theme = data;
		}
	}
}
