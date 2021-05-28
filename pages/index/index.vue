<template>
	<view class="page">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" class="carousel">
			<swiper-item v-for="(img,i) in picList" :key="img.id">
				<view class="swiper-item">
					<image :src="img.imageUrl"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 轮播图-end -->
		<!-- 热门推荐 -->
		<ace-label icon="../../static/svg/hot.svg" title="热门推荐"></ace-label>

		<scroll-view scroll-x="true" class="page-block hot">
			<view class="single-poster" v-for="(hot,i) in hotList" :key="hot.id">
				<view class="single-poster-wrapper">
					<image :src="hot.imageUrl" class="single-poster-pic" @click="showDetail(hot)"></image>
					<view class="single-poster-label">
						{{hot.title}}
					</view>
					<ace-rate :score="hot.score"></ace-rate>
				</view>
			</view>
		</scroll-view>
		<!-- 热门推荐-end -->
		<!-- 热门预告 -->
		<ace-label icon="../../static/svg/video.svg" title="热门预告"></ace-label>
		<view class="hot-preview page-block">
			<video v-for="(preview,i) in previewList" :id="preview.id" :key="preview.id" :poster="preview.poster" :src="preview.videoSrc"
			 controls class="hot-preview-video" @play="videoPlay(preview.id)">
			</video>
		</view>
		<!-- 热门预告-end -->
		<!-- 猜你喜欢 -->
		<ace-label icon="../../static/svg/collect.svg" title="猜你喜欢"></ace-label>
		<view class="guess-movies page-block">
			<movie-card v-for="(guess) in 14" cover="https://source.unsplash.com/750x1000/" :key="guess"></movie-card>
		</view>
		<!-- 猜你喜欢-end -->
	</view>
</template>

<script>
	import AceLabel from '../../components/AceLabel/index.vue'
	import AceRate from '../../components/AceRate/index.vue'
	import MovieCard from './MovieCard.vue'
	export default {
		components: {
			AceLabel,
			AceRate,
			MovieCard
		},
		data() {
			return {
				videoCtx: null,
				picList: [],
				hotList: [],
				previewList: []
			}
		},
		onLoad() {
			this.getPics()
			this.getHotList()
			this.getPreviewList()
			const a = {
				n:0,
				valueOf(){
					return ++this.n
				}
			}
			if(a==1&&a==2&&a==3){
				console.log('xxx')
			}
		},
		onHide() {
			this.videoCtx && this.videoCtx.pause()
		},
		onPullDownRefresh(a, b, c) {
			Promise.all([this.getPics(), this.getHotList()]).then(res => {
				console.log(res)
			}).finally(() => {
				uni.stopPullDownRefresh()
			})
		},
		methods: {
			// 在线获取图片
			getPics() {
				return new Promise((resolve, reject) => {
					try {
						setTimeout(() => {
							// uni.request({url,method,success}) 没有接口只能自己模拟
							const picList = []
							for (let i = 0; i < 3; i++) {
								picList.push({
									id: i,
									imageUrl: `https://api.ixiaowai.cn/mcapi/mcapi.php?_t=${i+new Date()}`
								})
							}
							this.$set(this, 'picList', picList)
							resolve({
								success: true
							})
						}, 1500)
					} catch (e) {
						reject(e)
					}
				})
			},
			// 获取热门推荐列表
			getHotList() {
				return new Promise((resolve, reject) => {
					try {
						setTimeout(() => {
							const hotList = []
							for (let i = 0; i < 14; i++) {
								hotList.push({
									id: i,
									title: `第${i+1}季·ACE起源`,
									score: (Math.random() * 10).toFixed(1) * 1,
									imageUrl: `https://source.unsplash.com/750x1000/?_t=${i+new Date()}`
								})
							}
							this.$set(this, 'hotList', hotList)
							resolve({
								success: true
							})
						}, 1500)
					} catch (e) {
						reject(e)
					}
				})
			},
			// 获取热门预告列表
			getPreviewList() {
				const previewList = []
				for (let i = 0; i < 2; i++) {
					const key = i + 2
					previewList.push({
						id: `${i}`,
						title: `第${i+1}季·ACE起源`,
						cover: `http://122.152.205.72:88/superhero/MARVEL/Thor${key}/cover.jpg`,
						poster: `http://122.152.205.72:88/superhero/MARVEL/Thor${key}/poster.jpg`,
						videoSrc: `http://122.152.205.72:88/superhero/MARVEL/Thor${key}/trailer.mp4`
					})
				}
				this.$set(this, 'previewList', previewList)
			},
			showDetail(item) {
				uni.navigateTo({
					url: `../movie/index?id=${item.id}`
				})
			},
			videoPlay(id) {
				this.videoCtx = uni.createVideoContext(id)
				this.previewList.forEach(preview => {
					preview.id !== id && uni.createVideoContext(preview.id).pause()
				})
			}
		}
	}
</script>

<style>
	@import url("./index.css");
</style>
