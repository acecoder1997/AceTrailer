<template>
	<view class="ace-rate">
		<image src="../../static/svg/star-yellow.svg" v-for="(star) in stars" :key="star" class="star"></image>
		<image src="../../static/svg/star-gray.svg" class="star" v-for="(star) in (5 - stars)" :key="`gray${star}`"></image>
		<view class="score" v-if="showScore">{{score}}</view>
	</view>
</template>

<script>
	export default {
		name: 'AceRate',
		props: {
			score: Number,
			showScore: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {}
		},
		computed: {
			stars() {
				const stars = Math.floor(this.score / 2)
				return stars * 1
			}
		}
	}
</script>

<style>
	.ace-rate {
		display: flex;
	}

	.ace-rate .star {
		width: 20upx;
		height: 20upx;
		margin-top: 6upx;
	}

	.score {
		color: #C0C0C0;
		font-size: 12px;
		line-height: 32upx;
		margin-left: 8upx;
	}

	@media screen and (min-width:768px) {
		.ace-rate .star {
			width: 24upx;
			height: 24upx;
			margin-top: 6upx;
		}

		.score {
			font-size: 18px;
			line-height: 38upx;
		}
	}
</style>
