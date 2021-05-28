<template>
	<view class="ace-cell" @click="handleClick">
		<view class="ace-cell-wrapper">
			<label class="ace-cell-label">{{label}}</label>
			<view class="ace-cell-body">
				<slot></slot>
			</view>
			<view class="icon-wrapper">
				<image src="../../static/svg/right.svg" class="ace-cell-icon"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'AceCell',
		props: {
			label: String
		},
		data() {
			return {

			};
		},
		methods: {
			handleClick(e) {
				this.$emit('click', e)
			}
		}
	}
</script>

<style>
	.ace-cell {
		background-color: #FFFFFF;
	}

	.ace-cell-wrapper {
		display: flex;
		padding: 14upx 0;
		margin: 0 10upx;
		border-bottom: 1px solid #EAEAEA;
		align-items: center;
	}

	.ace-cell-label {
		padding: 4upx;
	}

	.ace-cell-body {
		flex: 1;
		padding-right: 10upx;
		text-align: right;
	}

	.icon-wrapper {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.ace-cell-icon {
		width: 36upx;
		height: 36upx;
	}
</style>
