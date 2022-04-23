const themeConfig = require("./themeConfig")
module.exports = {
    base: "/ShawSpring-lad-chinese-docs/",
    // 站点配置
    lang: 'zh-CN',
    title: 'Lad中文文档',
    description: 'Lad框架中文文档',
    head: [
        // ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'application-name', content: 'Lad框架中文文档' }],
    ],
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

    /*  插件配置 */
    plugins: [
        ['vuepress-plugin-code-copy',
            {
                align: 'bottom',
                color: 'rgba(255,255,255,0.4)',
                backgroundTransition: 'bottom',
                backgroundColor: '#0075b8',
                successText: '复制成功',
                staticIcon: false,
            }
        ],
        /* 弹窗可以安装这个插件 */
        // @vuepress-reco/vuepress-plugin-bulletin-popover
        
        /* 可以展示二维码 打赏 拉群之类的 */
        // ["vuepress-plugin-toolbar",
        //     {
        //         "opts": [
        //             {
        //                 icon: '',
        //                 name: '二维码',
        //                 link: '',
        //                 popover: {
        //                     title: '使用 Base64 来作为图片源',
        //                     type: 'image',
        //                     imageUrl: 'data:image/png;base64,这里是 Base64图片编码代码作为图片源',
        //                     more: {
        //                         newWindow: false,
        //                         link: '/vuepress-plugin/vuepress-plugin-toolbar/',
        //                         name: '了解更多'
        //                     }
        //                 }
        //             }
        //         ]
        //     }
        // ]
        /* 需要vuepress 2 目前使用不了 */
        // ["vuepress-plugin-giscus",{
        //     repo:"ShawSpring/giscus",
        //     repoId:"R_kgDOHOIqlw",
        //     // category:"Announcements",
        //     // categoryId:"DIC_kwDOHOIql84COuvs"
        // }]

        /* <script src="https://giscus.app/client.js"
      data-repo="ShawSpring/giscus"
      data-repo-id="R_kgDOHOIqlw"
      data-category="Announcements"
      data-category-id="DIC_kwDOHOIql84COuvs"
      data-mapping="pathname"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-theme="light"
      data-lang="zh-CN"
      data-loading="lazy"
      crossorigin="anonymous"
      async>
</script>
*/
    ],
    // 主题和它的配置
    // theme: '@vuepress/theme-default',
    theme: '@qcyblm/vpx',
    themeConfig: themeConfig,
}