<template>
	<div id="hd" class="header-wrap">
		<div class="logo">Logo</div>
		<div class="userInfo">
      UserInfo
		</div>
	</div>
</template>

<script>
	export default {
		data: function(){
			return {}
		},
    mounted(){
      console.log(this);
    }
	}
</script>

<style>
.header-wrap {
	display: flex;
	flex-direction: row;
	height: 50px;
	color: #fff;
	background: #2C3E50;
}
</style>
