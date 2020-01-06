const layout = () => import('../pages/layout');

export default [
	{
		path: "/",
		redirect: "/home",
		component: layout,
		children: [
			{
				path: "home",
				component: () => import("../pages/home"),
        meta: {title: "首页"}
			},
			{
				path: "login",
				component: () => import("../pages/login"),
        meta: {title: "登录"}
			}
		]
	},
]
