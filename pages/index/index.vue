<template>
	<view class="content">
		<view class="left">
			<menuTab @pagesChange="changeComponent"></menuTab>
		</view>
		<view class="right"
			style="display: flex;">
			<!-- <view style="width: 90%;height: 8rpx;background-color: red;display: flex;align-items: center;border-radius: 10rpx;margin: 0 20rpx;">
				<view style="width: 0.9%;height: 12rpx;background-color: green;display: flex;align-items: center;border-radius: 10rpx;">
				</view>
				<view style="width: 16rpx;height: 16rpx;background-color: #333;display: flex;align-items: center;border-radius: 10rpx;margin-left: -8rpx;"></view>
			</view> -->
			<component :is="componentName">
			</component>
		</view>
	</view>
</template>

<script>
	import menuTab from '@/components/menuTab/index.vue'
	import musicList from '@/components/musicList/index.vue'
	import systemSet from '@/components/systemSet/index.vue'
	import hotMusic from '@/components/hotMusic/index.vue'
	export default {
		components: {
			menuTab,
			musicList,
			systemSet,
			hotMusic
		},
		data() {
			return {
				fontColor:"red",
				componentName: 'musicList',
				current: {
					poster: 'https://web-assets.dcloud.net.cn/unidoc/zh/music-a.png',
					name: '致爱丽丝',
					author: '暂无',
					src: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3',
				},
				audioAction: {
					method: 'pause'
				}
			}
		},
		onLoad() {

		},
		methods: {
			changeComponent(e) {
				this.componentName = e.componentName;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
	}

	.content .left {
		width: 160rpx;
	}

	.content .right {
		flex: 1;
	}
</style>
