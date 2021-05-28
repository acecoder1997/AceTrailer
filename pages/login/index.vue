<template>
	<view class="login">
		<form @submit="handleSubmit">
			<view class="field-block">
				<label for="username">账号</label>
				<input name="username" type="text" v-model="user.userName" placeholder="请输入账号" placeholder-class="gray-word" />
			</view>
			<view class="field-block">
				<label for="password">密码</label>
				<input name="password" type="password" v-model="user.passWord" placeholder="请输入密码" placeholder-class="gray-word" />
			</view>
			<button form-type="submit" type="primary" class="login-btn">登录</button>
		</form>
	</view>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				user: {}
			}
		},
		methods: {
			handleSubmit() {
				this.user.gender = '男'
				this.user.birthday = '2021-05-28'
				this.user.avatar = '../../static/poster/batman.jpg'
				uni.setStorageSync("userInfo", this.user)
				uni.switchTab({
					url: "../user/index"
				})
			}
		}
	}
</script>

<style>
	.login {
		padding-top: 30%;
	}

	.field-block {
		display: flex;
		padding: 18upx 0;
		margin: 0 30upx 20upx;
		border-bottom: 1px solid #C0C0C0;
	}

	.field-block label {
		display: inline-block;
		margin-right: 30upx;
	}

	.login-btn {
		margin: 60upx 30upx 20upx;
	}
</style>
