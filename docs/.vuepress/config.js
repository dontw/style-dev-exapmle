module.exports = {
  title: 'Starlux Web Style Guide',
  description: 'Current For Temporarily Use',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      //* 如果是資料夾記得後面也要加"/"
      { text: 'Documents', link: '/documents/' }
    ],

    sidebar: {
      '/documents/': ['', 'Base', 'Theme', 'Utility'],

      //* when page is not "home" type or don't have any sidebar items
      '/': ['about', 'contact']
    }
  }
};
