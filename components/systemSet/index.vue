<template>
	<view class="" style="margin-top: 20rpx;">
		<view class="baseSet">
			<text>基本设置</text>
			<view class="" style="display: flex;flex-wrap: wrap;">
				<view v-for="(item,index) in themeGround" style="width: 20%;">
					<view class="" style="width: 100%;">
						<view class="" :style="'width: 40rpx;height: 40rpx;display:flex;border-radius:10rpx;margin-left:40rpx;'+'background-color: ' + item.color">
						</view>
						<view class="" style="text-align: center;">
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
	export default {
		name: "systemSet",
		data() {
			return {
				themeGround: [{
						name: "深蓝色",
						color:'#6665FF',
						blueDeep: '--view-theme:#6665FF;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(102,101,255,0.7);',

					}, {
						name: '天空蓝',
						color:'#90E8FE',
						blueSky: '--view-theme:#90E8FE;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(144,232,254,0.7);',

					}, {
						name: '激情紫',
						color:'#C566FE',
						purple: '--view-theme:#C566FE;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(254,102,254,0.7);',

					}, {
						name: '卡通绿',
						color:'#63A96B',
						green: '--view-theme:#63A96B;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(99,169,107,0.7);',
					}, {
						name: '夜幕黑',
						color:'#13152D',
						black: '--view-theme:#13152D;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(19,21,45,0.7);',
					}, {
						name:"奶白色",
						color:'#F3EAEB',
						white: '--view-theme:#F3EAEB;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(243,234,235,0.7);',
					}, {
						name: '烈焰红',
						color:'#E60431',
						red: '--view-theme:#E60431;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(230,4,49,0.7);',
					}, {
						name:'忧郁灰',
						color:'#6E707D',
						grey: '--view-theme:#6E707D;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(110,112,125,0.7);',
					}, {
						name: '橘子黄',
						color:'#FFA600',
						yellow: '--view-theme:#FFA600;--view-fontColor:;--view-error:;--view-success:;--view-warn:;--view-bntColor:;--view-minColor:rgba(255,166,0,0.7);',
					}






				]
			};
		}
	}
</script>

<style lang="scss">
</style>
