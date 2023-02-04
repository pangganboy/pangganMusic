<script>
	import {
		mapGetters,
		getters
	} from "vuex"
	export default {
		onLaunch: function() {},
		mounted: function() {
		},
		onHide: function() {},
		watch: {
			theme: {
				deep: true, //深度监听设置为 true
				immediate: true,
				handler: function(newV, oldV) {
					this.appTheme = newV
					if (newV.color == '#6E707D') {
						
					}
				}
			}
		},
		computed: mapGetters(['theme']),
		globalData: {
			appTheme: '',
			// theme:''
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	page {
		
	}

	@import 'static/icon/iconfont.css';
</style>
