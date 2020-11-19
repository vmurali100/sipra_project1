export const navItems1 = [
  {
    name: 'SmartFlow Dashboard',
    url: '/dashboard',
    icon: 'fa fa-tachometer'
  },
  {
    name: 'Requests',
    url: '/generic-reports',
    icon: 'fa fa-file-text-o',
  },
  {
    name: 'Admin',
    url: '/admin/configure',
    icon: 'fa fa-cogs',
    children: [
      {
        name: ' Manage Course',
        url: '/admin/configure/commoditycode',
        icon: 'fa fa-empty'
      },
      {
        name: 'Add Quiz',
        url: '/admin/configure/configure-user',
        icon: 'fa fa-empty'
      },
      // {
      //   name: 'Workflows',
      //   url: '/admin/configure/workgroup',
      //   icon: 'fa fa-empty'
      // },
      // {
      //   name: 'Workflows',
      //   url: '/admin/configure/search-workflow',
      //   icon: 'fa fa-empty'
      // }


    ]
  }
];

/** For Admin */
export const navItems2 = [
  {
    name: 'Dashboard',
    url: '/admin/dashboard',
    icon: 'fa fa-tachometer'
  },
  {
    name: 'Configure Master Data',
    url: '/admin/configure',
    icon: 'fa fa-cogs',
    children: [
      {
        name: 'Commodity Code',
        url: '/admin/configure/commoditycode',
        icon: 'fa fa-empty'
      },
      {
        name: 'Application Access',
        url: '/admin/configure/configure-user',
        icon: 'fa fa-empty'
      },
      {
        name: 'Workflows',
        url: '/admin/configure/workgroup',
        icon: 'fa fa-empty'
      },
      // {
      //   name: 'Workflows',
      //   url: '/admin/configure/search-workflow',
      //   icon: 'fa fa-empty'
      // }


    ]
  },
];
