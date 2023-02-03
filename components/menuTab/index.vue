<template>
	<view>
		<div v-if="deviceInfo.screenWidth<480">
			<u-tabs :list="menuList" @click="goPage"></u-tabs>
		</div>
		<div v-else>
			<div class="leftMenu">
				<div class="menuItem" @click="goPage(item)" :class='active==index?"on":""' v-for="(item,index) in menuList" :key="index">
					<view class="item">
						<view>
							<span class="iconfont" :class="item.icon"></span>
						</view>
					</view>
				</div>
			</div>
			<!-- <u-tabs :list="menuList" @click="goPage"></u-tabs> -->
		</div>
	</view>
</template>

<script>
	export default {
		name: "menuTab",
		data() {
			return {
				active:0,
				deviceInfo: [],
				menuList: [{
						"name": "搜索",
						"componentName":'searchMusic',
						"icon":"icon-sousuoleimu"
					},
					{
						"name": "热门歌单",
						"componentName":'hotMusic',
						"icon":"icon-remen1"
					},
					{
						"name": "收藏列表",
						"componentName":'musicList',
						"icon":"icon-jushoucanggift"
					},
					{
						"name": "设置",
						"componentName":'systemSet',
						"icon":"icon-shezhi3"
					}
				]
			};
		},
		created() {
			this.deviceInfo = uni.getWindowInfo();
		},
		methods: {
			goPage(e) {
				this.$emit("pagesChange",e)
			}
		}
	}
</script>

<style lang="scss">
	.leftMenu {
		width: 80rpx;
		height: 100vh;
		border-right: 2rpx solid green;
		position: fixed;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.leftMenu .menuItem {
		padding: 30rpx 0;
		&.on{}
	}
	.leftMenu .menuItem .item .iconfont{
		font-size: 48rpx;
	}
</style>
