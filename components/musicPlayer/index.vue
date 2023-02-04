<template>
	<view class="player" :style="colorStyle + (theme.color=='#6E707D'?'background-color:#1F1C19;color:#aaa !important':'')">
		<view class="main">
			<!-- 歌曲名字 -->
			<view class="songName">
				{{"last Dance(live)--伍佰"}}
			</view>
			<!-- 歌曲进度 -->
			<view class="songDuration">
				<view class="songTime">
					<view class="duration" :style="{'width':durationWidth + 'px'}">
					</view>
					<view class="dot" @touchmove="changeDuration" @touchstart="changeDurationStart"
						@touchend="changeDurationEnd">
					</view>
				</view>
			</view>
			<!-- 歌词信息以及时长变动 -->
			<view class="songLrc">
				<view class="lrc">
					{{"眼睛闭了起来"}}
				</view>
				<view class="time">
					{{currentTimes}}/{{durations}}
				</view>
			</view>
		</view>
		<view class="left">

		</view>
		<view class="right">
			<view @click="play" class="right_item">
				<span class="iconfont" :class="playStatus" style="font-size: 50rpx;"
					:style="(playStatus=='icon-24gl-play'?'font-weight: bold;':'') + 'color:var(--view-theme)'"></span>
			</view>
			<view @click="nextMusic" class="right_item">
				<span class="iconfont icon-xiayiqu" style="font-size: 40rpx;color:var(--view-theme)"></span>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from "vuex"
	export default {
		name: "musicPlayer",
		props: {
		},
		watch:{
			theme:{
				handler(newV,oldV){
					this.colorStyle = newV.colorList
				},
				immediate:true,
				deep:true
			}
		},
		computed: {
			...mapGetters({
				theme:'theme'
			}),
			playStatus() {
				return this.isPlaying ? "icon-zanting1" : "icon-24gl-play"
			},
			currentTimes() {
				let min = Math.floor(this.currentTime / 60);
				let s = Math.floor(this.currentTime - (min * 60));
				return min.toString().length == 1 ? '0' + min + ":" + (s.toString().length == 1 ? "0" + s : s) : min +
					":" + (s.toString().length == 1 ?
						"0" + s : s)
			},
			durations() {
				let min = Math.floor(this.duration / 60);
				let s = Math.floor(this.duration - (min * 60));
				return min.toString().length == 1 ? '0' + min + ":" + (s.toString().length == 1 ? "0" + s : s) : min +
					":" + (s.toString().length == 1 ?
						"0" + s : s)
			},
			durationWidth() {
				return (this.currentTime / this.duration) * this.progressWidth;
			}
		},
		data() {
			return {
				colorStyle:'',
				musicSrc: "http://music.163.com/song/media/outer/url?id=2015070913.mp3",
				progressWidth: 0,
				isPlaying: false,
				isPlayEnd: false,
				currentTime: 0,
				duration: 0,
				touchStart: 0,
				touchMove: 0,
				touchEnd: 0,
				startPositon: 0,
			};
		},
		created() {
			this._isChanging = false;
			this._audioContext = null;
			this.createAudio();
		},
		mounted() {
			let that = this;
			let info = uni.createSelectorQuery().in(this).select(".songTime");
			let data = info.boundingClientRect(function(data) {
				that.progressWidth = data.width
				console.log('data.width',data.width)
			}).exec(function(res) {})
		},
		methods: {
			createAudio() {
				var innerAudioContext = this._audioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = false;
				innerAudioContext.src = this.musicSrc;
				innerAudioContext.onCanplay(() => {
					this.duration = innerAudioContext.duration || 0;
					console.log(innerAudioContext)
				});
				innerAudioContext.onPlay(() => {
				});
				innerAudioContext.onTimeUpdate((e) => {
					if (this._isChanging === true) {
						return;
					}
					this.currentTime = innerAudioContext.currentTime || 0;
				});
				innerAudioContext.onEnded(() => {
					this.currentTime = 0;
					this.isPlaying = false;
					this.isPlayEnd = true;
				});
				innerAudioContext.onError((res) => {
					this.isPlaying = false;
				});
				return innerAudioContext;
			},
			play() {
				if (this.isPlaying) {
					this.pause();
					return;
				}
				this.isPlaying = true;
				this._audioContext.play();
				this.isPlayEnd = false;
			},
			nextMusic() {

			},
			pause() {
				this._audioContext.pause();
				this.isPlaying = false;
			},
			stop() {
				this._audioContext.stop();
				this.isPlaying = false;
			},
			changeDuration(e) {
				// let that = this;
				// that.touchMove = e.changedTouches[0].clientX;
				// let tempWidth = that.touchMove - that.touchStart;
				// console.log('durationWidth',that.durationWidth)
				// console.log('tempWidth',tempWidth)
				// if((tempWidth > (-that.startPositon))&&(tempWidth < (that.progressWidth - that.touchStart))){
				// 	that.currentTime =  that.startPositon + ((tempWidth/that.progressWidth)*that.duration)
				// 	console.log('tempWidth',tempWidth,'that.touchStart',that.touchStart,'that.progressWidth',that.progressWidth)
				// }
				// let tempDurationWidth = that.durationWidth;
				// console.log(tempWidth, tempDurationWidth)
				// if ((that.durationWidth < tempWidth) && (tempWidth < (that.progressWidth - tempDurationWidth))) {
				// 	that.currentTime = (tempWidth + that.tempDurationWidth)/that.progressWidth
				// }
			},
			changeDurationStart(e) {
				// let that = this;
				// that._isChanging = true;
				// that.startPositon = that.durationWidth;
				// that.touchStart = e.changedTouches[0].clientX;
			},
			changeDurationEnd(e) {
				this._isChanging = false;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.player {
		width: 100%;
		height: 80rpx;
		border-top: 4rpx solid #eee;
		position: fixed;
		bottom: 0rpx;
		// left: 100rpx;
		display: flex;
		color: #333;
	}

	.player .main {
		width: calc(100% - 326rpx);
		order: 2;
		display: flex;
		padding: 10rpx 6rpx;
		flex-direction: column;
		justify-content: space-between;
	}

	.player .main .songDuration .songTime {
		width: 100%;
		height: 4rpx;
		background-color: #ccc;
		display: flex;
		align-items: center;
	}

	.player .main .songDuration .songTime .duration {
		height: 6rpx;
		background-color: #999;
		display: flex;
		align-items: center;
	}

	// .player .main .songDuration .songTime .dot {
	// 	width: 16rpx;
	// 	height: 16rpx;
	// 	border-radius: 100%;
	// 	background-color: #999;
	// 	align-self: flex-end;
	// }

	.player .main .songLrc {
		display: flex;
		justify-content: space-between;
	}

	.player .main .songLrc .lrc {
		font-size: 12rpx;
	}

	.player .left {
		width: 80rpx;
		order: 1;
	}

	.player .right {
		width: 150rpx;
		order: 3;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.player .right.right_item {
		flex: 1;
		text-align: center;
	}
</style>
