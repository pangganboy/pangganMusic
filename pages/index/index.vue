<template>
	<view class="content">
		<view class="left">
			<menuTab @pagesChange="changeComponent"></menuTab>
		</view>
		<view class="right">
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
				componentName: 'musicList',
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
