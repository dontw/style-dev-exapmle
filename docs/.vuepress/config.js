module.exports = {
  title: 'nav title',
  description: 'a vue press testing project',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' },
      //* 如果是資料夾記得後面也要加"/"
      { text: 'Sidebar Content', link: '/sidebar-content/' }
    ],

    sidebar: {
      '/sidebar-content/': ['', 'content1'],

      //* when page is not "home" type or don't have any sidebar items
      '/': ['about', 'contact']
    }
  }
};
