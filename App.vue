<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.page{
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
	}
	
	.page-block{
		background-color: #ffffff;
	}
	
	.avatar {
		width: 134upx;
		height: 134upx;
		margin: 0 40upx 0 30upx;
		border-radius: 50%;
		border: 2px solid #FFFFFF;
		box-shadow: 0 0 8px rgba(0, 0, 0, .15);
	}
	
</style>
