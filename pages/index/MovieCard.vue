<template>
	<view class="movie-card">
		<view class="movie-card-wrapper">
			<image :src="cover" class="movie-card-cover"></image>
			<view class="movie-card-content">
				<view class="movie-card-title">ACE联盟3</view>
				<ace-rate :score="5" :show-score="false"></ace-rate>
				<view class="movie-card-text">2021 / 中国 / 科幻 / 超级英雄</view>
				<view class="movie-card-text">上映时间：2020-05-28(中国)</view>
			</view>
			<button class="movie-card-like" style="border-radius: 0;">
				<image src="../../static/svg/like.svg" class="like-icon"></image>
				<view class="like-text">点赞一下</view>
			</button>
		</view>
	</view>
</template>

<script>
	import AceRate from '../../components/AceRate/index.vue'
	export default {
		name: 'MovieCard',
		components: {
			AceRate
		},
		props: {
			cover: String,
			title: String,
			score: Number,
			year: Number,
			releaseDate: String,
			category: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style>
	.movie-card {
		position: relative;
		width: 100%;
		margin-bottom: 10upx;
	}

	.movie-card-wrapper {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
	}

	.movie-card-cover {
		width: 240upx;
		height: 260upx;
		margin: 0 10upx;
		border-radius: 12upx;
	}

	.movie-card-title {
		font-size: 18px;
		font-weight: bold;
	}

	.movie-card-content {
		flex: 1;
		display: flex;
		flex-flow: column;
	}

	.movie-card-text {
		color: #999999;
	}

	.movie-card-like {
		position: relative;
		display: flex;
		padding: 0;
		width: 185upx;
		color: #ffbc00;
		font-size: 14px;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		border-radius: 0px;
		background-color: transparent;
	}

	uni-button:after,button:after {
		position: absolute;
		top:50%;
		left: 10upx;
		transform: translateY(-50%);
		width: 1px;
		height: 80%;
		content: "";
		border: none;
		background-color: #efefef;
	}

	.like-icon {
		width: 30px;
		height: 30px;
	}
</style>
