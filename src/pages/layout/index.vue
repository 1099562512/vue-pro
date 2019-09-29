<!-- 布局总页面 -->
<template>
	<div class="wrapper">
		<!--头部-->
		<template>
			<header-nav></header-nav>
		</template>
		<!-- 中间部分 -->
		<div class="app-main">
			<!-- 侧边菜单栏 -->
			<asider-nav></asider-nav>
			<div class="app-content">
				<div class="tap-wrap">
					<a class="tap-item">标签一<i @click.prevent.stop="" class="el-icon-close"></i></a>
				</div>
				<div class="app-page">
					<el-scrollbar class="page-component__scroll" style="height: 100%;">
						<!-- 嵌套路由 -->
						<router-view />
					</el-scrollbar>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderNav from "./header"
import AsiderNav from "./asider"

export default {
	components: {
		HeaderNav,
		AsiderNav,
	}
}
</script>

<style>
	.wrapper {height: 100%;}
	.app-main {
		display: flex;
		height: calc(100% - 50px);
	}
	.app-content {flex-grow: 1;}
	.tap-wrap {
		display: flex;
		/*justify-content: center;*/
		align-items: center;
		border-bottom: 1px solid #ddd;
    	box-shadow: 0 1px 2px #f2f2f2;
		height: 50px;
	}
	.tap-item {
		display: inline-block;
		padding: 7px;
		border-radius: 5px;
		border: 1px solid #DDDDDD;
		cursor: pointer;
		font-size: 16px;
		margin-left: 10px;
	}
	.el-icon-close {
		margin-left: 5px;	
	}
	.el-icon-close:hover{
		border-radius: 50%;
		background: #2C3E50;
	}
	.app-page {
		height: calc(100% - 51px);
		overflow: hidden;
	}
	
	.page-component__scroll .el-scrollbar__wrap {
		overflow-x: hidden;
	}
</style>