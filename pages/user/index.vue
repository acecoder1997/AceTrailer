<template>
	<view class="page">
		<view class="top-area">
			<image src="../../static/pattern-large.png" mode="aspectFill" class="top-area-bg"></image>
			<view class="top-area-body">
				<view>
					<image v-if="isUserLogin" :src="user.avatar" class="avatar" mode="aspectFill"></image>
					<image v-else src="../../static/default_user.jpg" class="avatar" mode="aspectFill"></image>
				</view>

				<view class="info-wrapper">
					<view v-if="isUserLogin">
						<view class="nick-name">{{user.userName}}</view>
						<view class="user-id">ID:123asdfg456qwe789</view>
					</view>
					<view v-else class="jumper-wrapper">
						<navigator url="../registry/index">注册</navigator>
						<block>/</block>
						<navigator url="../login/index">登录</navigator>
					</view>
				</view>

				<view v-if="isUserLogin" @click="handleSetting">
					<image src="../../static/svg/setting.svg" class="setting"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {}
			}
		},
		computed: {
			isUserLogin() {
				return !!this.user.id
			}
		},
		onShow() {
			const user = uni.getStorageSync('userInfo')

			if (user) {
				user.id = +new Date()
				this.$set(this, 'user', user)
			} else {
				this.$set(this, 'user', {})
			}
		},
		methods: {
			handleSetting() {
				uni.navigateTo({
					url: "../setting/setting"
				})
			}
		}
	}
</script>

<style>
	.top-area {
		position: relative;
	}

	.top-area-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	.top-area-body {
		position: relative;
		display: flex;
		height: 200upx;
		/* #ifdef MP */
		padding: 0upx 30upx 40upx 30upx;
		/* #endif */
		/* #ifdef H5 */
		padding: 120upx 30upx 40upx 30upx;
		/* #endif */
		background-attachment: fixed;
		align-items: center;
		z-index: 1;
	}

	.info-wrapper {
		color: #FFFFFF;
	}

	.setting {
		position: absolute;
		top: 8upx;
		right: 8upx;
		width: 48upx;
		height: 48upx;
	}

	.nick-name {
		font-size: 22px;
		font-weight: bold;
	}

	.jumper-wrapper {
		display: flex;
		width: 180upx;
		justify-content: space-between;
	}
</style>
