const bookRouter = {
  route: null,
  name: null,
  title: '图书管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-demo',
  filePath: 'views/book/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '添加图书',
      type: 'view',
      name: 'bookAdd',
      route: '/book/add',
      filePath: 'views/book/BookAdd.vue',
      inNav: true,
      icon: 'iconfont icon-demo',
      right: ['添加图书'],
    },
    {
      title: '图书列表',
      type: 'view',
      name: 'bookAdd',
      route: '/book/list',
      filePath: 'views/book/BookList.vue',
      inNav: true,
      icon: 'iconfont icon-demo',
      right: ['图书列表'],
    },
  ],
}

export default bookRouter
