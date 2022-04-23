const themeConfig = require("./themeConfig")
module.exports = {
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
        '@vuepress/back-to-top'
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