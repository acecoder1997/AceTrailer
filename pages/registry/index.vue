<template>
	<view class="registry">
		<view class="field-block">
			<label for="username">账号</label>
			<input name="username" type="text" v-model="user.username" placeholder="请输入账号" placeholder-class="gray-word" />
		</view>
		<view class="field-block">
			<label for="password">密码</label>
			<input name="password" type="password" v-model="user.password" placeholder="请输入密码" placeholder-class="gray-word" />
		</view>
		<view class="field-block">
			<label for="password">确认密码</label>
			<input name="password" type="password" v-model="user.confirmPassword" placeholder="请输入密码" placeholder-class="gray-word" />
		</view>
		<button type="primary" class="registry-btn">注册</button>
	</view>
</template>

<script>
	export default {
		name: 'Registry',
		data() {
			return {
				user: {}
			}
		},
		methods: {

		}
	}
</script>

<style>
	.registry {
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

	.registry-btn {
		margin: 60upx 30upx 20upx;
	}
</style>
