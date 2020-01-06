<template>
  <div class="asider-wrap">
		<el-menu ref="navbar" router :collapse="collapse" background-color="#2F4050" text-color="#fff">
			<h2 class="title">菜单栏</h2>
			<template v-for="(item,index) in menu" :key="">
				<el-submenu v-if="item.submenu && item.submenu.length > 0" :index="item.index">
					<template slot="title">
						<i class="el-icon-picture-outline-round"></i>
						<span>{{item.title}}</span>
					</template>
					<el-menu-item v-for="(item_02,index_01) in item.submenu" :key="" :index="item_02.index">
						<i class="el-icon-s-promotion"></i>
						<span>{{item_02.title}}</span>
					</el-menu-item>
				</el-submenu>
				<el-menu-item v-else :index="item.index">
					<i class="el-icon-s-promotion"></i>
					<span>{{item.title}}</span>
				</el-menu-item>
			</template>
		</el-menu>
	</div>
</template>

<script>
import Vue from 'vue'

export default {
	data: function() {
		return {
      collapse: false,
			menu: [
				{
					title: "主页",
					index: "home"
				},
				{
					title: "菜单二",
					index: '2',
					submenu: [
						{
							title: "登录",
							index: "login"
						},
						{
							title: "菜单2",
							index: "login"
						}
					]
				}
			]
		}
	},
	methods: {

	},
  created() {
    const bus = new Vue();
    bus.$on('collapse', function(msg){
      console.log(msg)
    });
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
