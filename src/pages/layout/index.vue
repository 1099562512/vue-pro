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
        <tag></tag>
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
	import tag from "./tag"

	export default {
		data: function() {
			return {
				tagList: []
			}
		},
		watch: {
      //监听路由对象，设置tag
      $route(to, from) {
        
      }
		},
    methods: {
    },
		components: {
			HeaderNav,
			AsiderNav,
      tag
		},
	}
</script>

<style>
	.wrapper {height: 100%;}
	.app-main {
		display: flex;
		height: calc(100% - 50px);
	}
	.app-content {flex-grow: 1;}

	.app-page {
		height: calc(100% - 51px);
		overflow: hidden;
	}

	.page-component__scroll .el-scrollbar__wrap {
		overflow-x: hidden;
	}
</style>
