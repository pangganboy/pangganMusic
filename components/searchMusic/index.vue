<template>
	<view>
		<view class="topSearch">
			<view class="searchOptions">
				<uni-data-select v-model="value1" :localdata="range" @change="change" :clear="false"></uni-data-select>
			</view>
			<view class="search">
				<u-input v-model="value" :type="type" placeholder="输入歌手名字或歌曲名称进行搜索" :clearable="true" :border-color="borderColor" />
			</view>
		</view>
		<view class="songList">

		</view>
	</view>
</template>

<script>
	export default {
		name: "searchMusic",
		data() {
			return {
				value1: 0,
				range: [{
						value: 0,
						text: "小狗"
					},
					{
						value: 1,
						text: "小鹅"
					},
					{
						value: 2,
						text: "小我"
					},
				],
				value: '',
				type: 'text',
				border: true,
				borderColor:'#999999'
			}
		},
		methods: {
			change(e) {
				console.log("e:", e);
			},
		}
	}
</script>

<style lang="scss">
	.topSearch {
		display: flex;
	}
	.topSearch .searchOptions{
		width: 80rpx;
	}
	.topSearch .search{
		flex:1;
		box-sizing: border-box;
		border: 2rpx solid #999999;
		border-radius: 50rpx;
	}
</style>
