
module.exports = {
    logo: '/media/logo-square.svg',
    smoothScroll: true,

    // repo: 'https://github.com/ladjs/lad',
    // repoLabel: 'Github',
    // // 以下为可选的编辑链接选项
    // /* 这是我翻译文档地址 */
    // docsRepo: 'https://gitee.com/shawspring/lad-chinese-docs.git',
    // // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // // 默认是 false, 设置为 true 来启用
    // editLinks: true,
    // // 默认为 "Edit this page"
    // editLinkText: '编辑此页',

    repo: {
        platform: 'https://github.com/',  // 填写 Git 服务商链接
        icon: 'fab fa-github',  // 填写 icon 图标 (可选)
        owner: 'ladjs',  //  填写 Git 项目仓库所有者
        repositories: 'lad',  // 填写 Git 项目仓库
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // `GitHub`/`GitLab`/`Bitbucket`/`Gitee` 其中之一，或是 `Source`。
        label: '', // 这里没有中英文切换，干脆不要
    },

    editLinks: true,  // 默认是 false, 设置为 true 来启用
    //   editLinkText: '帮助我们改善此页面！',  // 默认为 "编辑此页面"
    // 假如你的文档仓库和项目本身不在一个仓库
    edit: {
        docsPlatform: 'https://github.com/',  // 填写 Git 服务商链接
        docsRepo: 'ShawSpring/ShawSpring-lad-chinese-docs',  // 填写 Git 文档仓库
        docsBranch: 'main',  //  填写 Git 文档仓库分支，默认 `master`
        docsDir: 'docs',  // 填写 Git 文档根目录
    },
// https://github.com/ShawSpring/ShawSpring-lad-chinese-docs/edit/main/docs/README.md
    sidebar:"auto",

    sidebarDepth: 4,
    locales: {
        '/': {
            editLinkText: '编辑此页',
            selectText: '选择语言',
            label: '中文',
        },
        '/en/': {
            label: 'English',
        },
    },
    ads:{
        text: 'lad',
        desc: '小姑凉，你别跑啊',
        img:'https://img.3dmgame.com/uploads/images/news/20210714/1626228370_795452.gif',
        link: '/'
      }
}