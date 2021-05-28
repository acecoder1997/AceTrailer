<template>
	<view>
		<!-- 视频播放 -->
		<view class="player">
			<video id="trailer" :src="movieInfo.videoSrc" :poster="movieInfo.poster" class="movie" controls="">
			</video>
		</view>
		<!-- 视频播放-end -->

		<!-- 影片详情 -->
		<view class="movie-info">
			<!-- 封面 -->
			<navigator url="../cover/index">
				<image :src="movieInfo.cover" class="cover"></image>
			</navigator>
			<!-- 封面-end -->
			<!-- 基本信息 -->
			<view class="movie-desc">
				<view class="title">{{movieInfo.name}}</view>
				<view class="basic-info">{{movieInfo.basicInfo}}</view>
				<view class="basic-info">原名：{{movieInfo.originName}}</view>
				<view class="basic-info">影片时长：{{movieInfo.totalTime}}</view>
				<view class="basic-info">上映时间：{{movieInfo.releaseTime}}</view>
				<view class="score-block">
					<view class="big-score">
						<view class="score-label">综合评分:</view>
						<view class="movie-score">{{movieInfo.score}}</view>
					</view>

					<view class="score-stars">
						<ace-rate :score="movieInfo.score" :show-score="false"></ace-rate>
						<view class="like-counts">{{movieInfo.like}} 人觉得很gan！</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 基本信息-end -->

		<!-- 剧情介绍 -->
		<view class="plots-block">
			<divider></divider>
			<view class="plots-title">剧情介绍</view>
			<view class="plots-desc">{{movieInfo.plotsDesc}}</view>
		</view>
		<!-- 剧情介绍-end -->

		<!-- 演职人员 -->
		<view class="scroll-block">
			<view class="plots-title">演职人员</view>
			<scroll-view scroll-x="true" style="height: 180px;">
				<view class="scroll-list">
					<view v-for="(director) in directorList" :key="director.id" class="staff-wrapper">
						<image :src="movieInfo.cover" mode="aspectFill" @click="handlePreview"></image>
						<view class="staff-name">{{director.name}}</view>
						<view class="staff-position">{{director.position}}</view>
					</view>
					<view v-for="(actor,imageIndex) in actorList" :key="actor.id" class="staff-wrapper">
						<image :src="movieInfo.cover" mode="aspectFill" :data-imgIndex="imageIndex" @click="handlePreview"></image>
						<view class="staff-name">{{actor.name}}</view>
						<view class="staff-position">{{actor.position}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 演职人员-end -->

		<!-- 剧照 -->
		<view class="scroll-block">
			<view class="plots-title">剧照</view>
			<scroll-view scroll-x="true">
				<view class="scroll-list">
					<view v-for="(pic,imageIndex) in 5" :key="imageIndex" class="pic-wrapper">
						<image :src="movieInfo.cover" mode="aspectFill" @click="handlePreview"></image>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 剧照-end -->
		<!-- 影片详情-end -->
	</view>
</template>

<script>
	import AceRate from '../../components/AceRate/index.vue'
	export default {
		name: 'Movie',
		components: {
			AceRate
		},
		data() {
			return {
				videoCtx: null,
				movieInfo: {},
				directorList: [],
				actorList: []
			}
		},
		onReady() {
			this.videoCtx = uni.createVideoContext('trailer')
		},
		onHide() {
			this.videoCtx.pause()()
		},
		// 监听导航栏按钮事件
		onNavigationBarButtonTap(e) {
			const type = e.type
			if (type === 'share') {
				uni.share({
					provider: "weixin",
					scene: "WXSceneTimeline",
					type: 0,
					href: "http://188.188.3.6:8080/#/pages/movie/index?id=0",
					title: `ACE视频: 《Rick&Ace》`,
					summary: `ACE视频: 《Rick&Ace》`,
					imageUrl: this.movieInfo.cover,
					success: (res) => {

					}
				})
			}
		},
		// 仅支持小程序端的分享（群和朋友）
		onShareAppMessage(res) {
			return {
				title: this.movieInfo.name,
				path: '/pages/movie/index?id=' + this.movieInfo.id
			}
		},
		onLoad(params) {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#000000'
			})
			this.$set(this, 'movieInfo', {
				id: 1,
				name: `瑞克和阿测`,
				basicInfo: '2021 / 科幻 / 冒险 / 悬疑 / 修仙 / 超级英雄',
				originName: `Rick&Ace`,
				totalTime: '999小时',
				releaseTime: '2021-05-27(中国)',
				score: 9.9,
				like: 99999,
				plotsDesc: `Rick（瑞克）和Ace（阿测）讲述了地球C-137（S1-06之后转移到的时空N/A（可在S2-02Jerry寄托所中Rick填的表格中看到）之前的时空由于Rick的药水使除了Morty一家的人类都变成了柯南伯格式的怪物）的Rick和Ace的冒险故事，但有时也 有Rick和Summer，Ace和Jerry这样的冒险组合。剧情设计和制作手法都极为出彩。`,
				cover: `http://122.152.205.72:88/superhero/MARVEL/Thor3/cover.jpg`,
				poster: `http://122.152.205.72:88/superhero/MARVEL/Thor3/poster.jpg`,
				videoSrc: `http://122.152.205.72:88/superhero/MARVEL/Thor3/trailer.mp4`
			})
			this.getDirectorList()
			this.getActorList()
		},
		methods: {
			getDirectorList() {
				this.directorList.push(...[{
					id: 'x1',
					name: '阿测',
					position: '导演'
				}, {
					id: 'x2',
					name: '阿测',
					position: '编剧'
				}])
			},
			getActorList() {
				this.actorList.push(...[{
					id: 'x3',
					name: '阿测',
					position: '阿测'
				}, {
					id: 'x4',
					name: '瑞克',
					position: '瑞克'
				}, {
					id: 'x5',
					name: '传送枪',
					position: '传送枪'
				}])
			},
			handlePreview() {
				uni.previewImage({
					current: this.movieInfo.cover,
					urls: [this.movieInfo.cover, this.movieInfo.cover, this.movieInfo.cover]
				})
			}
		}
	}
</script>

<style>
	.player {
		background-color: #f7f4f9;
	}

	.movie {
		width: 100%;
	}

	.movie-info {
		display: flex;
		padding: 40upx 20upx;
		background-color: #f7f4f9;
	}

	.cover {
		width: 280upx;
		height: 380upx;
	}

	.movie-desc {
		display: flex;
		flex-flow: column;
		margin-left: 30upx;
		width: 400upx;
	}

	.title {
		font-size: 30px;
	}

	.basic-info {
		color: darkgray;
		font-size: 13px;
		line-height: 36upx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.score-block {
		display: flex;
		flex-flow: row;
		width: 390upx;
		height: 138upx;
		padding: 20upx;
		margin-top: 20upx;
		box-sizing: border-box;
		background-color: #ffffff;
		box-shadow: 0 0 16px rgba(0, 0, 0, .06);
	}

	.score-label {
		font-size: 12px;
		color: gray;
		white-space: nowrap;
	}

	.movie-score {
		margin-left: 8upx;
		color: #FEAB2A;
		font-size: 26px;
		font-weight: bold;
		line-height: 70UPX;
	}

	.score-stars {
		margin-top: 28upx;
		margin-left: 24upx;
	}

	.like-counts {
		font-size: 12px;
		color: gray;
		line-height: 44upx;
		white-space: nowrap;
	}

	.plots-block {
		padding: 20upx 40upx;
		background-color: #f7f4f9;
	}

	.plots-title {
		margin-top: 20upx;
		color: #A9A9A9;
		font-size: 14px;
	}

	.plots-desc {
		font-size: 16px;
		margin-top: 10upx;
	}

	.scroll-block {
		padding: 20upx 40upx;
		background-color: #f7f4f9;
	}

	.scroll-list {
		display: flex;
		flex-flow: row nowrap;
		width: 100%;
		margin-top: 20upx;
		white-space: nowrap;
	}

	.pic-wrapper {
		width: 240upx;
		height: 320upx;
		margin-right: 10upx;
	}

	.pic-wrapper image {
		width: 240upx;
		height: 100%;
	}

	.staff-wrapper {
		width: 170upx;

		margin-right: 10upx;
	}

	.staff-wrapper image {
		width: 170upx;
		height: 220upx;
	}

	.staff-name {
		font-size: 16px;
		text-align: center;
	}

	.staff-position {
		color: #999999;
		font-size: 12px;
		text-align: center;
	}
</style>
