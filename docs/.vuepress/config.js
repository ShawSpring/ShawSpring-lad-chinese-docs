module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'Lad中文文档',
    description: 'Lad框架中文文档',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'application-name', content: 'Lad框架中文文档' }],
    ],

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/media/logo-square.svg',
        smoothScroll: true,
        // docsRepo: 'https://gitee.com/shawspring/lad-chinese-docs.git', // v2.0
        repo: 'https://github.com/ladjs/lad',
        repoLabel: 'Github',

        // 以下为可选的编辑链接选项

        /* 这是我翻译文档地址 */
        docsRepo: 'https://gitee.com/shawspring/lad-chinese-docs.git',

        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '编辑翻译文档',
        sidebar: [
            ['/','目录'],
            ['/Features','特性'],
            ['/GetStarted',"快速上手"],
        ],
        sidebarDepth: 6,
          
        lastUpdated: 'Last Updated', 
        locales: {
            '/': {
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
              
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',

                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },

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
                label: 'English',
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