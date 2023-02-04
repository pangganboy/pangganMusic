<template>
	<view class="basePage" :style="theme.colorList + (theme.color=='#6E707D'?'background-color:#1F1C19;color:#aaa !important':'')">
		<view class="baseSet">
			<text class="setTitle">基本设置</text>
			<view class="setList">
				<view v-for="(item,index) in themeGround" class="setItem" :key="index">
					<view class="item">
						<view class="topIconFont" :class="theme.color == item.color?'on':''"
							:style="theme.color == item.color?'border-color:'+ item.color:''" @click="setTheme(item)">
							<view class="iconFont" :style="'background-color: ' + item.color">
							</view>
						</view>
						<view class="bottomFont">
							{{item.name}}
						</view>
					</view>


				</view>
			</view>
		</view>
		<view>

		</view>
	</view>
</template>

<script>
	import {
		mapMutations,
		mapGetters,
	} from 'vuex'
	export default {
		name: "systemSet",
		computed: mapGetters({
			theme: 'theme'
		}),
		data() {
			return {
				themeGround: [{
					name: "深蓝色",
					color: '#6665FF',
					colorList: '--view-theme:#6665FF;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(102,101,255,0.7);',

				}, {
					name: '天空蓝',
					color: '#90E8FE',
					colorList: '--view-theme:#90E8FE;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(144,232,254,0.7);',

				}, {
					name: '激情紫',
					color: '#C566FE',
					colorList: '--view-theme:#C566FE;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(254,102,254,0.7);',

				}, {
					name: '卡通绿',
					color: '#63A96B',
					colorList: '--view-theme:#63A96B;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(99,169,107,0.7);',
				}, {
					name: '夜幕黑',
					color: '#6E707D',
					colorList: '--view-theme:#1F1C19;--view-fontColor:#aaa;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(19,21,45,0.7);',
				}, 
				// {
				// 	name: "奶白色",
				// 	color: '#F3EAEB',
				// 	colorList: '--view-theme:#F3EAEB;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(243,234,235,0.7);',
				// }, 
				{
					name: '烈焰红',
					color: '#E60431',
					colorList: '--view-theme:#E60431;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(230,4,49,0.7);',
				}, 
				// {
				// 	name: '忧郁灰',
				// 	color: '#6E707D',
				// 	colorList: '--view-theme:#6E707D;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(110,112,125,0.7);',
				// }, 
				{
					name: '橘子黄',
					color: '#FFA600',
					colorList: '--view-theme:#FFA600;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(255,166,0,0.7);',
				}],
			};
		},
		methods:{
			...mapMutations(['SETAPPTHEME']),
			setTheme(item){
				this.SETAPPTHEME(item)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.basePage {
		margin-top: 20rpx;
		padding: 0 12rpx;
		height: 100vh;
	}
	.basePage .setTitle {
		font-weight: bolder;
	}
	.basePage .baseSet .setList {
		display: flex;
		flex-wrap: wrap;
	}

	.basePage .baseSet .setList .setItem {
		width: 20%;
	}

	.basePage .baseSet .setList .setItem .item {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 4rpx 0;

		.topIconFont {
			width: 44rpx;
			height: 44rpx;
			border-width: 4rpx;
			border-style: solid;
			border-color: rgba(0, 0, 0, 0);

			&.on {
				display: flex;
				border-radius: 10rpx;
				// align-self: center;	
				align-items: center;
				margin: 0 auto;
			}
		}

		.iconFont {
			box-sizing: border-box;
			height: 40rpx;
			width: 40rpx;
			margin: 0 auto;
			// display: flex;
			border-radius: 10rpx;
		}

		.bottomFont {
			text-align: center;
		}
	}
</style>
