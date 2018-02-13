export default {
	items: [
		{
			name: 'Clientes',
			url: '/clientes',
			icon: 'fa fa-user',
			children: [
				{
					name: 'Adicionar',
					url: '/clientes/add'
				}
			]
		},
		{
			title: true,
			name: 'Theme',
			wrapper: {
				// optional wrapper object
				element: '', // required valid HTML5 element tag
				attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
			},
			class: '' // optional class names space delimited list for title item ex: "text-center"
		},
		{
			name: 'Colors',
			url: '/theme/colors',
			icon: 'icon-drop'
		},
		{
			name: 'Base',
			url: '/base',
			icon: 'icon-puzzle',
			children: [
				{
					name: 'Breadcrumbs',
					url: '/base/breadcrumbs',
					icon: 'icon-puzzle'
				},
				{
					name: 'Carousels',
					url: '/base/carousels',
					icon: 'icon-puzzle'
				},
				{
					name: 'Collapses',
					url: '/base/collapses',
					icon: 'icon-puzzle'
				},
				{
					name: 'Navs',
					url: '/base/navs',
					icon: 'icon-puzzle'
				},
				{
					name: 'Paginations',
					url: '/base/paginations',
					icon: 'icon-puzzle'
				},
				{
					name: 'Progress Bar',
					url: '/base/progress-bar',
					icon: 'icon-puzzle'
				},
				{
					name: 'Switches',
					url: '/base/switches',
					icon: 'icon-puzzle'
				},
				{
					name: 'Tables',
					url: '/base/tables',
					icon: 'icon-puzzle'
				},
				{
					name: 'Tabs',
					url: '/base/tabs',
					icon: 'icon-puzzle'
				},
				{
					name: 'Tooltips',
					url: '/base/tooltips',
					icon: 'icon-puzzle'
				}
			]
		},
		{
			name: 'Buttons',
			url: '/buttons',
			icon: 'icon-cursor',
			children: [
				{
					name: 'Buttons',
					url: '/buttons/buttons',
					icon: 'icon-cursor'
				},
				{
					name: 'Button dropdowns',
					url: '/buttons/button-dropdowns',
					icon: 'icon-cursor'
				},
				{
					name: 'Button groups',
					url: '/buttons/button-groups',
					icon: 'icon-cursor'
				},
				{
					name: 'Social Buttons',
					url: '/buttons/social-buttons',
					icon: 'icon-cursor'
				}
			]
		},
		{
			name: 'Charts',
			url: '/charts',
			icon: 'icon-pie-chart'
		},
		{
			name: 'Notifications',
			url: '/notifications',
			icon: 'icon-bell',
			children: [
				{
					name: 'Alerts',
					url: '/notifications/alerts',
					icon: 'icon-bell'
				},
				{
					name: 'Badges',
					url: '/notifications/badges',
					icon: 'icon-bell'
				},
				{
					name: 'Modals',
					url: '/notifications/modals',
					icon: 'icon-bell'
				}
			]
		},
		{
			name: 'Widgets',
			url: '/widgets',
			icon: 'icon-calculator',
			badge: {
				variant: 'info',
				text: 'NEW'
			}
		},
		{
			divider: true
		},
		{
			title: true,
			name: 'Extras'
		},
		{
			name: 'Pages',
			url: '/pages',
			icon: 'icon-star',
			children: [
				{
					name: 'Login',
					url: '/login',
					icon: 'icon-star'
				},
				{
					name: 'Register',
					url: '/register',
					icon: 'icon-star'
				},
				{
					name: 'Error 404',
					url: '/404',
					icon: 'icon-star'
				},
				{
					name: 'Error 500',
					url: '/500',
					icon: 'icon-star'
				}
			]
		},
		{
			name: 'Download CoreUI',
			url: 'http://coreui.io/react/',
			icon: 'icon-cloud-download',
			class: 'mt-auto',
			variant: 'success'
		},
		{
			name: 'Try CoreUI PRO',
			url: 'http://coreui.io/pro/react/',
			icon: 'icon-layers',
			variant: 'danger'
		}
	]
};
