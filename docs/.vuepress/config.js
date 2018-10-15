module.exports = {
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: 'logo_favicon_180x180.jpg'
      }
    ]
  ],
  title: 'Starlux Web Style Guide',
  description: '',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      //* 如果是資料夾記得後面也要加"/"
      { text: 'Documents', link: '/documents/' }
    ],

    sidebar: {
      '/documents/': [
        '',
        'Variables',
        'Theme',
        'Layout',
        'Typography',
        'Utility',
        'Components'
      ],

      //* when page is not "home" type or don't have any sidebar items
      '/': []
    }
  }
};
