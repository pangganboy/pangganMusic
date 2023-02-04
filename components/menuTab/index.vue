<template>
	<view :style="colorStyle">
		<view v-if="deviceInfo.screenWidth<480">
			<u-tabs :list="menuList" @click="goPage"></u-tabs>
		</view>
		<view v-else>
			<view class="leftMenu" :style="theme.color=='#6E707D'?'background-color:#1F1C19':''">
				<view class="menuItem" @click="goPage(item)" :class='active==index?"on":""'
					v-for="(item,index) in menuList" :key="index">
					<view class="item">
						<view>
							<span class="iconfont" :class="item.icon"
								:style="theme.color=='#6E707D'?'color:#aaaaaa':'color:var(--view-theme)'"></span>
						</view>
					</view>
				</view>
			</view>
			<!-- <u-tabs :list="menuList" @click="goPage"></u-tabs> -->
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from "vuex"
	let app = getApp()
	export default {
		name: "menuTab",
		props: {

		},
		watch: {
			theme: {
				handler(newV, oldV) {
					console.log(newV.name)
					this.colorStyle = newV.colorList
				},
				immediate: true,
				deep: true
			}
		},
		computed: mapGetters({
			theme: 'theme'
		}),
		data() {
			return {
				colorStyle: '',
				active: 0,
				deviceInfo: [],
				menuList: [{
						"name": "搜索",
						"componentName": 'searchMusic',
						"icon": "icon-sousuoleimu"
					},
					{
						"name": "热门歌单",
						"componentName": 'hotMusic',
						"icon": "icon-remen1"
					},
					{
						"name": "收藏列表",
						"componentName": 'musicList',
						"icon": "icon-jushoucanggift"
					},
					{
						"name": "设置",
						"componentName": 'systemSet',
						"icon": "icon-shezhi3"
					}
				]
			};
		},
		created() {
			this.deviceInfo = uni.getWindowInfo();
		},
		mounted() {},
		methods: {
			goPage(e) {
				this.$emit("pagesChange", e)
			}
		}
	}
</script>

<style lang="scss">
	.leftMenu {
		width: 80rpx;
		height: 100vh;
		border-right: 4rpx solid #eee;
		position: fixed;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.leftMenu .menuItem {
		padding: 30rpx 0;

		&.on {}
	}

	.leftMenu .menuItem .item .iconfont {
		font-size: 48rpx;
	}
</style>
