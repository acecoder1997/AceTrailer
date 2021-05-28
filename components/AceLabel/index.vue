<template>
	<view class="page-block ace-label">
		<view class="ace-label-wrapper">
			<image :src="icon" mode="" class="ace-label-icon"></image>
			<view class="ace-label-text">{{title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'AceLabel',
		props: {
			icon: String,
			title: String
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
.ace-label {
	margin-top: 12upx;
	padding: 20upx 10upx;
}

.ace-label-wrapper {
	display: flex;
	flex-flow: row;
}

.ace-label-icon {
	width: 30upx;
	height: 30upx;
	margin: 8upx 10upx 0 0;
}

.ace-label-text {
	font-size: 16px;
	font-weight: bold;
}
</style>
