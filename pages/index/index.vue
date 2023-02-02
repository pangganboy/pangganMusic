<template>
	<view class="content">
		<!-- 右侧展示内容区域和播放器控件 -->
		<view class="main">
			<!-- 主要内容展示 -->
			<view>
				<component :is="componentName">
				</component>
			</view>
			<!-- 底部播放器控件 -->
			<view>
				<musicPlayer />
			</view>
		</view>
		<!-- 顶部和左侧菜单栏 -->
		<view class="leftMenu">
			<menuTab />
		</view>
	</view>
</template>

<script>
	import searchMusic from '@/components/searchMusic/index.vue'
	import menuTab from '@/components/menuTab/index.vue'
	import musicList from '@/components/musicList/index.vue'
	import systemSet from '@/components/systemSet/index.vue'
	import hotMusic from '@/components/hotMusic/index.vue'
	import musicPlayer from '@/components/musicPlayer/index.vue'
	export default {
		components: {
			menuTab,
			musicList,
			systemSet,
			hotMusic,
			searchMusic,
			musicPlayer
		},
		data() {
			return {
				componentName:"searchMusic"
			}
		},
		onLoad() {

		},
		methods: {
			changeComponent(e) {
				console.log(e)
				this.componentName = e.componentName;
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
	}

	.content .main {
		order: 2;
		flex: 1;
	}

	.content .leftMenu {
		order: 1;
		width: 100rpx;
	}
</style>
