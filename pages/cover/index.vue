<template>
	<view class="black" @longpress="handleLongpress">
		<image :src="src" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		name: 'Cover',
		data() {
			return {
				src: 'http://122.152.205.72:88/superhero/MARVEL/Thor3/cover.jpg'
			}
		},
		onLoad() {
			uni.setNavigationBarColor({
				frontColor: "#ffffff",
				backgroundColor: "#000000"
			})
		},
		methods: {
			handleLongpress() {
				const itemList = ['保存图片到本地']
				uni.showActionSheet({
					itemList,
					success: (res) => {
						const {
							tapIndex
						} = res

						switch (itemList[tapIndex]) {
							case "保存图片到本地":
								this.saveImage()
								break
							default:
								break
						}
					}
				})
			},
			// 保存图片
			saveImage() {
				uni.showLoading({
					title: '保存中...'
				})
				uni.downloadFile({
					url: this.src,
					success: (result) => {
						const {
							tempFilePath
						} = result
						uni.saveImageToPhotosAlbum({
							filePath: tempFilePath,
							success: function() {
								uni.showToast({
									title: '保存成功'
								})
							},
							complete: function() {
								uni.hideLoading()
							}
						})
					}
				})
			}
		}
	}
</script>

<style>
	.black {
		display: flex;
		position: fixed;
		flex-flow: column;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: #000000;
	}

	.black image {
		align-self: center;
	}
</style>
