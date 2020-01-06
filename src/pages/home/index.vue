<template>
	<div class="home" @click="home">我是Home页面</div>
</template>

<script>
	export default {
		methods: {
			home: function() {
				console.log(this.$router)
				console.log(this.$route)
				window.history.length > 1
	        ? this.$router.go(-1)
	        : this.$router.push('/')
			}
		}
	}
</script>

<style>
.home {
	height: 900px;
}
</style>