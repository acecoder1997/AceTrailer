<template>
	<view class="page">
		<view class="search-block">
			<view class="search-ico-wrapper">
				<image src="../../static/tabBarIcon/searchActive.png" class="search-ico"></image>
			</view>
			<input type="text" placeholder="请输入名称搜索" maxlength="16" class="search-input" confirm-type="search">
		</view>
		<view class="movie-list page-block">
			<view v-for="(item,i) in movieList" :key="item.id" class="movie-item" @click="showDetail(item)">
				<image :src="item.poster" class="movie-item-poster"></image>
				<view class="movie-item-title">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				movieList: []
			}
		},
		onLoad() {
			this.getMovieList()
		},
		onReachBottom() {
			this.getMovieList()
		},
		methods: {
			getMovieList() {
				if (this.movieList.length > 28) {
					uni.showToast({
						title: '我们是有底线的',
						icon: 'none',
						mask: true
					})
					return
				}
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						const movies = []
						for (let i = 0; i < 18; i++) {
							movies.push({
								id: +new Date() + i,
								name: `Rick&Ace 第${i+1}季`,
								poster: `https://source.unsplash.com/750x1000/?_t=${i+new Date()}`
							})
						}
						this.movieList.push(...movies)
						uni.hideLoading();
					}, 1000)
				})
			},
			showDetail(item) {
				uni.navigateTo({
					url: `../movie/index?id=${item.id}`
				})
			}
		}
	}
</script>

<style>
	@import url("./index.css");
</style>
