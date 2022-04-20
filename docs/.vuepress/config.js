module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'Lad 框架',
    description: '立志做最好的Node.js 框架',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'media/logo-square.svg',
        locales: {
            '/': {
                selectLanguageName: '简体中文',
            },
            '/en/': {
              selectLanguageName: 'English',
            },
          },
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/en/': {
            lang: 'en-US',
            title: 'Lad framework',
            description: 'Lad is the best Node.js framework',
        },
        '/': {
            lang: 'zh-CN',
            title: 'Lad 框架',
            description: '立志做最好的Node.js 框架',
        },
    },

}