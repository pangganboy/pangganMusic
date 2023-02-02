<template>
	<view class="player">
		<view class="main">
			<!-- 歌曲名字 -->
			<view class="songName">
				{{"last Dance(live)--伍佰"}}
			</view>
			<!-- 歌曲进度 -->
			<view class="songDuration">
				<view class="songTime">
					<view class="duration"></view>
				</view>
			</view>
			<!-- 歌词信息以及时常变动 -->
			<view class="songLrc">
				<view class="lrc">
					{{"眼睛闭了起来"}}
				</view>
				<view class="time">
					{{"00:0/04:58"}}
				</view>
			</view>
		</view>
		<view class="left">
			
		</view>
		<view class="right">
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"musicPlayer",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.player{
		width: 100%;
		height: 80rpx;
		border-top: 2rpx solid green;
		position: fixed;
		bottom: 0rpx;left: 100rpx;
		display: flex;
	}
	.player .main{
		flex: 1;
		border: 2rpx solid red;
		order: 2;
		display: flex;
		padding: 10rpx 6rpx;
		flex-direction: column;
		justify-content: space-between;
	}
	.player .main .songDuration .songTime{
		width: 100%;
		height: 4rpx;
		background-color:#999;
		display: flex;
		align-items: center;
	}
	.player .main .songDuration .songTime .duration{
		width: 0;
		height: 6rpx;
		background-color:#999;
	}
	.player .main .songLrc{
		display: flex;
		justify-content: space-between;
	}
	.player .main .songLrc .lrc{
		font-size: 12rpx;
	}
	.player .left{
		width:80rpx;
		border: 2rpx solid red;
		order: 1;
	}
	.player .right{
		width:240rpx;
		border: 2rpx solid red;
		order: 3;
	}
</style>