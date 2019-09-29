<template>
	<div class="asider-wrap">
		<el-menu background-color="#2F4050" text-color="#fff">
			<h2 class="title">菜单栏</h2>
			<el-menu-item index="1">
				<i class="el-icon-s-promotion"></i>
				<span>菜单一</span>
			</el-menu-item>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-picture-outline-round"></i>
					<span>菜单二</span>
				</template>
				<el-menu-item index="2-1">
					<i></i>
					<span>子菜单1</span>
				</el-menu-item>
				<el-menu-item index="2-2">
					<i></i>
					<span>子菜单2</span>
				</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	}
}
</script>

<style scoped="scoped">
	.asider-wrap {
		width: 250px;
		height: 100%;
		background: #000;
	}
	.asider-wrap .el-menu {
		border-right: 0;
	}
</style>