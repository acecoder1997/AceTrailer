<template>
	<view class="page">
		<ace-cell label="头像" @click="handleAvatar">
			<image class="avatar" :src="user.avatar" mode="aspectFill"></image>
		</ace-cell>
		<ace-cell label="昵称">{{user.userName}}</ace-cell>
		<ace-cell label="生日">{{user.birthday}}</ace-cell>
		<ace-cell label="性别">{{user.gender}}</ace-cell>

		<view class="bottom-action">
			<view class="bottom-action-item" @click="clearCache">清除缓存</view>
			<view class="bottom-action-item" @click="logout">退出登录</view>
		</view>
	</view>
</template>

<script>
	import AceCell from '../../components/Cell/index.vue'
	export default {
		name: 'setting',
		components: {
			AceCell
		},
		data() {
			return {
				user: {}
			}
		},
		onShow() {
			this.loadUserInfo()
		},
		methods: {
			loadUserInfo(){
				const user = uni.getStorageSync('userInfo')
				
				if (user) {
					user.id = +new Date()
					this.$set(this, 'user', user)
					console.log(user)
				}
			},
			clearCache() {
				uni.clearStorageSync()
				uni.showToast({
					title: "清除缓存成功！",
					mask: true
				})
			},
			logout() {
				uni.removeStorageSync("userInfo")
				uni.showToast({
					title: "退出登录成功！",
					mask: true
				})
				setTimeout(() => {
					uni.switchTab({
						url: '../user/index'
					})
				}, 2000)
			},
			handleAvatar() {
				const user = uni.getStorageSync('userInfo')
				uni.showActionSheet({
					itemList: ['查看我的头像', '从相册选择上传'],
					success: (e) => {
						const tapIndex = e.tapIndex
						if (tapIndex === 0) {
							uni.previewImage({
								urls: [user.avatar],
								current: user.avatar
							})
						} else if (tapIndex === 1) {
							uni.chooseImage({
								count: 1,
								sizeType: ['compressed'],
								sourceType: ['album'],
								success: (res) => {
									const path = res.tempFilePaths[0]
									user.avatar = path
									uni.setStorageSync('userInfo', user)
									this.loadUserInfo()
								}
							})
						}
					}
				})


			}
		}
	}
</script>

<style>
	.avatar {
		width: 80upx;
		height: 80upx;
		margin: 0;
	}

	.bottom-action {
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	.bottom-action-item {
		padding: 20upx 10upx;
		margin-bottom: 15upx;
		text-align: center;
		background-color: #FFFFFF;
	}
</style>
