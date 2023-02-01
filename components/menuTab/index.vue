<template>
	<view>
		<div v-if="deviceInfo.screenWidth<480">
			<u-tabs :list="menuList" @click="goPage"></u-tabs>
		</div>
		<div v-else>
			<div class="leftMenu">
				<div class="menuItem" :class='active==index?"on":""' v-for="(item,index) in menuList" :key="index">
					{{item.name}}
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
						"name": "首页",
					},
					{
						"name": "热门歌曲"
					},
					{
						"name": "收藏列表"
					},
					{
						"name": "设置"
					}
				]
			};
		},
		created() {
			this.deviceInfo = uni.getWindowInfo();
		},
		methods: {
			goPage(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
	.leftMenu {
		width: 160rpx;
		height: 100vh;
		position: fixed;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.leftMenu .menuItem {
		padding: 30rpx 0;
		&.on{}
	}
</style>
