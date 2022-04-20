module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'Lad 框架',
    description: 'Lad框架 立志做最好的Node.js框架',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'application-name', content: 'Lad框架中文文档' }],
    ],

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'media/logo-square.svg',
        docsRepo: 'https://gitee.com/shawspring/lad-chinese-docs.git',
        docsBranch: 'master',
        docsDir: 'docs',
        /* https://gitee.com/shawspring/lad-chinese-docs/edit/master/docs/README.md */
        editLinkPattern: ':repo/edit/:branch/:path',
        locales: {
            '/': {
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',
                selectLanguageName: '简体中文',

                editLinkText: '在 Gitee 上编辑此页',
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',

                // custom containers
                tip: '提示',
                warning: '注意',
                danger: '警告',

                // 404 page
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',

                // a11y
                openInNewWindow: '在新窗口打开',
                toggleDarkMode: '切换夜间模式',
                toggleSidebar: '切换侧边栏',
            },
            '/en/': {
                selectLanguageName: 'English',
            },
        },
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: 'Lad中文文档',
            description: 'Lad框架中文文档',
        },
        '/en/': {
            lang: 'en-US',
            title: 'Lad framework',
            description: 'Lad is the best Node.js framework',
        },
    },

}