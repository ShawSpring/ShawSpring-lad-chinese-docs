<h1 align="center">
  <a href="https://ladjs.github.io/lad/"><img src="https://lad.js.org/media/lad.png" alt="lad" /></a>
</h1>
<div align="center">
  <a href="https://join.slack.com/t/ladjs/shared_invite/zt-fqei6z11-Bq2trhwHQxVc5x~ifiZG0g"><img src="https://img.shields.io/badge/chat-join%20slack-brightgreen" alt="chat" /></a>
  <a href="https://travis-ci.org/ladjs/lad"><img src="https://travis-ci.org/ladjs/lad.svg?branch=master" alt="build status" /></a>
  <a href="https://codecov.io/github/ladjs/lad"><img src="https://img.shields.io/codecov/c/github/ladjs/lad/master.svg" alt="code coverage" /></a>
  <a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="code style" /></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="styled with prettier" /></a>
  <a href="https://lass.js.org"><img src="https://img.shields.io/badge/made_with-lass-95CC28.svg" alt="made with lass" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/ladjs/lad.svg" alt="license" /></a>
</div>
<br />
<div align="center">
  Lad 立志做最好的 <a href="https://nodejs.org">Node.js</a> 框架. 由前<a href="https://github.com/expressjs/express">Express</a> TC 和 <a href="https://github.com/koajs/koa">Koa</a>团队成员打造.
</div>
<div align="center">
  <sub>
    一个小伙子(lad)爱上了<a href="https://lass.js.org"><strong>小姑凉(lass)</strong></a>
    &bull; Built by <a href="https://github.com/niftylettuce">@niftylettuce</a>
    and <a href="#contributors">contributors</a>
  </sub>
</div>
<hr />
<div align="center">
  <h3><u>案例项目:</u> 转发 Email @ <a href="https://forwardemail.net" target="_blank">https://forwardemail.net</a> (made with Lad)</h3>
  <h4><u>在线框架 Demo:</u> <a href="https://lad.sh" target="_blank">https://lad.sh</a></h4>
</div>
<hr />
<div align="center">❤️ 喜欢这个项目? 支持<a href="https://github.com/niftylettuce" target="_blank">@niftylettuce's</a> <a href="https://en.wikipedia.org/wiki/Free_and_open-source_software" target="_blank">FOSS</a> on <a href="https://patreon.com/niftylettuce" target="_blank">Patreon</a> or <a href="https://paypal.me/niftylettuce">PayPal</a> 🦄</div>

## 目录
[[toc]]



## 特点

Lad拥有数十种功能，并且高度可配置.

### 微服务

这些微服务已针对安全、性能和优雅的重载资源进行预配置. 
> 点击链接查看示例
* Webapp server → [web.js](https://lad.js.org/template/web.js)
* API server → [api.js](https://lad.js.org/template/api.js)
* Job scheduler → [bree.js](https://lad.js.org/template/bree.js)
* Proxy server → [proxy.js](https://lad.js.org/template/proxy.js)

### 前端

* [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) 和[browserslist](https://github.com/ai/browserslist)用于处理浏览器兼容性(有关默认配置，请参阅[.browserslistrc](https://lad.js.org/template/.browserslistrc))
* [Pug](https://pugjs.org/) 模板引擎 (由于你可以很方便的使用[Moon](https://github.com/kbrsh/moon), [Vue](https://vuejs.org/), [React](https://facebook.github.io/react/), 或 [Angular](https://angular.io/),通常你不需要它)
* [Gulp](https://gulpjs.com/) (latest version 4.x)
* [Sass](http://sass-lang.com/)
* [PostCSS](http://postcss.org/) (with [font-magician](https://github.com/jonathantneal/postcss-font-magician), [import-url](https://github.com/unlight/postcss-import-url), [font-grabber](https://github.com/AaronJan/postcss-font-grabber), [base64](https://github.com/jelmerdemaat/postcss-base64), and [cssnext](http://cssnext.io/) pre-configured)
* [Bootstrap](https://getbootstrap.com/)
* [Font Awesome](http://fontawesome.io/)
* [SpinKit](http://tobiasahlin.com/spinkit/)
* [SweetAlert2](https://limonte.github.io/sweetalert2/)
* [Dense](http://dense.rah.pw/)
* [Waypoints](http://imakewebthings.com/waypoints/)
* [LiveReload](https://github.com/intesso/connect-livereload)
* …

### 后端

* Redis, sessions, 和 flash toast 以及 模态 [SweetAlert2](https://limonte.github.io/sweetalert2/) messages (使用 [ioredis](https://github.com/luin/ioredis) 它支持 [Cluster](https://redis.io/topics/cluster-tutorial), [Sentinel](https://redis.io/topics/sentinel)等)
* 基于Koa的webapp 和 API servers (生产环境使用HTTP/2)
* 内置分页 (使用 [ctx-paginate](https://github.com/koajs/ctx-paginate))
* RESTful API 使用 BasicAuth 和 versioning
* 自动化的计划任务和便于人阅读的语法(由 [Mongoose](http://mongoosejs.com/) 和 [Bree](https://jobscheduler.net/) 提供支持)
* Passport-based 的身份校验 和 group-based (Unix-like) 权限许可
* 受Stripe启发的错误处理
* 有通用的数据库插件的 Mongoose 和 MongoDB 
* 邮件模板引擎和本地渲染 [Nodemailer](https://nodemailer.com/)
* 内置代理，不再需要Nginx 反向代理或 Apache 虚拟主机
* 内置的国际化翻译支持多种语言 ([详细配置](#translation-configuration))
* 使用Google Translate进行自动短语翻译
* 可用于简单SEO的站点地图生成器
* …

### 翻译

框架的国际化最终由自动翻译完成.

* 翻译内建常量，不需重复翻译.
* 翻译Webapp 的错误消息和模板.
* 翻译Emails
* 翻译API 响应
* 翻译数据库错误消息
* 翻译身份校验错误
* …

### Email 引擎

我们的Email引擎使用了邮件模板 [email-templates](https://github.com/niftylettuce/node-email-templates) (这也是Lad作者的作品)!

* 本地测试测试你的emails,同时能快速的浏览器快速渲染.
* 自动创建内联css,提供跨浏览器和扩平台的email客户端支持.
* 在email模板设计中使用 [Bootstrap](https://getbootstrap.com/) .
* 重用已经存在的CSS和Webapp样式
* 可以任意选择模板引擎 (默认是Pug)
* [使用代码在email中渲染自定义的字体](https://github.com/ladjs/custom-fonts-in-emails)
* [使用代码添加Font-awesome图标](https://github.com/ladjs/font-awesome-assets)
* [自动禁用email客户端缓存](https://github.com/ladjs/nodemailer-base64-to-s3)
* 任何图片都能添加并正确渲染.
* 无需笨拙的嵌入式图像 CID附件
* …

### 错误处理

我们花了很长时间设计这个优美的错误处理器

* 支持 `text/html`, `application/json`, and `text` 响应类型
* [对用户友好的响应](https://github.com/niftylettuce/koa-better-error-handler#user-friendly-responses)
* [HTML 错误列表](https://github.com/niftylettuce/koa-better-error-handler#html-error-lists)
* …

完整信息请参阅 [koa-better-error-handler](https://github.com/niftylettuce/koa-better-error-handler).

### 性能

* 压缩和零膨胀的数据处理
* 基于Stream的文件上传
* 优雅的重载，关闭以及重连
* Manifest asset 修改
* Amazon S3 和 CloudFront 立马可用 
* …

### 安全

* 数据库安全插件和帮助函数
* 自动化测试 全代码覆盖
* CORS, SameSite 设置为 "lax" ([一种CSRF的替代](https://scotthelme.co.uk/csrf-is-dead/)), CSRF (由于[并非所有浏览器](https://caniuse.com/#search=SameSite) 都支持同源策略) XSS, 以及节流保护
* Dotenv 支持环境变量配置
* App、user和基于请求的日志
* SSL-ready (请参阅 [SSL 配置](#ssl-configuration))
* …


## 快速上手

高情商：我们严格支持Mac和Ubuntu系统. 低情商：**我们不支持Windows**.

### 要求

请确保你的操作系统已经安装以下软件:

* [Git](https://git-scm.com/) - 安装教程请参阅 [GitHub's tutorial](https://help.github.com/articles/set-up-git/)

* [Node.js](https://nodejs.org/) (v10+) - 使用 [nvm](https://github.com/creationix/nvm) 安装于任意系统

  * 安装`nvm`后 你需要运行 `nvm install node`
  * 我们同时也建议你安装 [yarn](https://yarnpkg.com/), 是可以替代[npm](https://www.npmjs.com/)的另一种包管理器.

* [MongoDB](https://www.mongodb.com/) (v3.x+):

  * Mac (使用[brew](https://brew.sh/)): `brew tap mongodb/brew && brew install mongodb-community && brew services start mongodb-community`.
  * Ubuntu:

    ```sh
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
    echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
    sudo apt-get update
    sudo apt-get -y install mongodb-org
    ```

* [Redis](https://redis.io/) (v4.x+):

  * Mac (使用 [brew](https://brew.sh/)): `brew install redis && brew services start redis`
  * Ubuntu:

    ```sh
    sudo add-apt-repository -y ppa:chris-lea/redis-server
    sudo apt-get update
    sudo apt-get -y install redis-server
    ```

### 安装
<code-group>
<code-block title="YARN">
```bash
yarn global add lad
```
</code-block>

<code-block title="NPM">
```bash
npm install -g lad
```
</code-block>
</code-group>


### 用法

#### 创建一个项目

```sh
lad new-project
cd new-project
```

#### 开发

命令行输入 `npm start` (or `yarn start`)  这可以列出所有你能运行的脚本命令.

该`start` 命令底层使用了 [nps](https://github.com/kentcdodds/nps) 和 [nps-utils](https://github.com/kentcdodds/nps-utils)。 这样能无需JSON语法，对开发十分友好.

该命令接收一个参数`<task>`, 后面再跟 `all`会生成、监听、重新编译上面提到的所有微服务[microservices](#微服务). 


打开 <http://localhost:3000> 即可测试查看效果!

<code-group>
<code-block title="npm">
```sh
npm start all
```
</code-block>

<code-block title="yarn">
```sh
yarn start all
```
</code-block>
</code-group>

##### 调试

* `DEBUG` - 使用[debug](https://github.com/visionmedia/debug)进行调试输出 (社区中广泛用于调试所有的Node包):

  ```sh
  DEBUG=* ...
  ```

* `NODE_DEBUG` - 调试 [node](https://nodejs.org/) 内部模块:

  ```sh
  NODE_DEBUG=* ...
  ```

* `MONGOOSE_DEBUG` - 调试Mongoose原生的数据库操作输出:

  ```sh
  MONGOOSE_DEBUG=true ...
  ```

* `TRANSPORT_DEBUG` - 调试 Nodemailer transport:

  ```sh
  TRANSPORT_DEBUG=true ...
  ```

* `REDIS_MONITOR` - 调试监听 Redis (使用 [@ladjs/redis](https://github.com/ladjs/redis) 并将`monitor`参数设为`true`):

  ```sh
  REDIS_MONITOR=true ...
  ```

* `REDIS_FRIENDLY_ERROR_STACK` - 以错误栈信息友好的方式调试Redis(参阅 [showFriendlyErrorStack](https://github.com/luin/ioredis#error-handling) 的选项[ioredis](https://github.com/luin/ioredis))

  ```sh
  REDIS_FRIENDLY_ERROR_STACK=true ...
  ```

#### 生产环境

强烈推荐生产环境下使用 [SemaphoreCI](https://semaphoreci.com/?ref=lad), [PM2](http://pm2.keymetrics.io/), 和 [Digital Ocean](https://m.do.co/c/a7fe489d1b27).

1. 我们提供了预配置文件[ecosystem.json](https://lad.js.org/template/ecosystem.json) [deployment file](http://pm2.keymetrics.io/docs/usage/deployment/). 你只需要按需修改你服务器的IP, hostname, 以及其它的信息.

2. 确保你的项目构建时是在 `NODE_ENV=production` 环境, 比如: `NODE_ENV=production npm run build` (或者`yarn build`);这会每个 [koa-manifest-rev](https://github.com/niftylettuce/koa-manifest-rev)对应创建一个 `build/rev-manifest.json`.

3. 本地测试可以通过 [npm](https://www.npmjs.com/) 或 [yarn](https://yarnpkg.com/)全局安装[PM2](http://pm2.keymetrics.io/), 然后运行以下命令:

   ```sh
   NODE_ENV=production pm2 start
   ```

4. 参阅下面 [持续继承和代码覆盖率测试](#持续继承和代码覆盖率测试) 和 [教程](#教程)，以获得相关教程.

5. 如果你需要将程序发布到Amazon S3/Cloudfront，请设置环境变量`AWS_CF_DOMAIN` 并且设置 `NODE_ENV=production`. 请运行`npm start publish-assets` (或 `yarn start publish-assets`).  该命令会自动设置`NODE_ENV=production` 通过 `cross-env`.

#### Provisioning

请参阅 [ansible](https://lad.js.org/ansible/)文件夹了解我们的[Ansible](https://github.com/ansible/ansible) 配置和行动指南(playbooks), 这里面有如何配置服务器的详细信息。

在使用 [Ansible](https://github.com/ansible/ansible) 行动指南时，我们建议你安装[yamllint](https://github.com/adrienverge/yamllint) 并在编辑器中对其进行配置.

另外， 当你计划修改行动指南时[ansible-lint](https://github.com/ansible/ansible-lint) 是一个很有用的lint检查工具.  注意到当前的行动指南(playbooks)有几处lint错误.

首先，你需要准备好 Ubuntu 18.04 LTS 64-bit 的服务器(群), 可以使用 [Digital Ocean](https://m.do.co/c/2ffb8129b8d6), [Linode](https://www.linode.com/?r=a2840b36770c7020730251a5643428ddbf2e284e), [Vultr](https://www.vultr.com/?ref=7429848),或者其它的云服务器.  这些新服务器你需要添加 SSH 访问秘钥.

接下来，参阅[部署](#部署)了解如何配置和部署服务器.

##### 部署

1. 配置主机host, 可以拷贝 `hosts.yml`文件模板:

   ```sh
   cp ansible/playbooks/templates/hosts.yml hosts.yml
   ```

<!-- BUG:Naming Convention原文也没有 -->
2. 编辑该配置文件，配置你的服务器别名和IP地址. 如做负载均衡你可以每组添加不止一台服务器. 关于我们推荐的服务器别名命名方法，请参阅命名 [Naming Convention](#naming-convention) 文档.  该文件自动被git忽略, 如果你的私有库想提交该文件, 请从`.gitignore`中手动移除 `hosts.yml`.

   ```sh
   vim hosts.yml
   ```

3. 环境配置，可以拷贝 `env` 模板文件:

   ```sh
   cp ansible/playbooks/templates/env .env.production
   ```
<!-- BUG: .env.defaults原文也不存在  -->
4. 编辑该配置文件，可用的环境变量配置请参阅官方[Lad](https://lad.js.org/) 文档 (或参阅 [.env.defaults](https://lad.js.org/.env.defaults)).  **你需要在你的编辑器上打开该文件** 并给任何标记了`TODO`的字段设置值. 记得保留双引号.

   ```sh
   vim .env.production
   ```

5. 使用自动模板生成器来生成 [pm2](http://pm2.keymetrics.io/) [ecosystem files](https://pm2.keymetrics.io/docs/usage/application-declaration/). 创建 [ansible-playbook.js](https://lad.js.org/ansible-playbook.js) 来加载 `.env.production` 环境变量，这些环境变量通过 [@ladjs/env](https://github.com/ladjs/env) 加载进`process.env`中， 随后在行动指南(playbooks)中要用到.  这是一种优先级高、简单的也是在Ansible中唯一的`dotenv`方法.  新的`ecosystem-api.json`, `ecosystem-bree.json`, `ecosystem-web.json` 文件会创建在你的根目录下. 如果再添加或更改 IP 地址，只需重新运行此命令即可.

   ```sh
   node ansible-playbook ansible/playbooks/ecosystem.yml -l 'localhost'
   ```

6. 设置web或IP服务器(群)(详情参阅 [patterns and ansible-playbook flags docs](https://docs.ansible.com/ansible/latest/user_guide/intro_patterns.html#patterns-and-ansible-playbook-flags)). 如果你完整(或部分)的运行行动指南(playbooks)或这下边的其它东西, 随之第二次运行可能出现失败, 这是因为我们通过安全强化来阻止 root 用户访问.  要解决此问题, 可重新运行该命令但不附加 `-e 'ansible_user=root'`, 此情况默认user为创建者.

   ```sh
   node ansible-playbook ansible/playbooks/http.yml -e 'ansible_user=root' -l 'http'
   ```

7. 设置 Bree 服务器(群):

   ```sh
   node ansible-playbook ansible/playbooks/bree.yml -e 'ansible_user=root' -l 'bree'
   ```

8. 设置 Redis 服务器:

   ```sh
   node ansible-playbook ansible/playbooks/redis.yml -e 'ansible_user=root' -l 'redis'
   ```

9. 设置 MongoDB 服务器:

   ```sh
   node ansible-playbook ansible/playbooks/mongo.yml -e 'ansible_user=root' -l 'mongo'
   ```

10. 给所有服务器设置 GitHub deployment keys. 注意`deployment-keys`目录被git忽略了, 所以如果私有库需要上传 `deployment-keys`需手动从`.gitignore`文件中移除.

    ```sh
    node ansible-playbook ansible/playbooks/deployment-keys.yml -l 'http:bree'
    ```

11. 打开github中库的"Settings"页, 点击 "Deploy keys", 然后复制秘钥到 `deployment-keys` 目录，从而为每台服务器添加一个部署秘钥deployment key.  如果是macOS上, 可使用 `pbcopy`命令复制每个文件的内容到剪贴板. 按tab键快速填充，或者替换为自己的服务器名称和路径.

    ```sh
    cat deployment-keys/api-1-li-dal.forwardemail.net.pub | pbcopy

    #
    # NOTE: repeat the above command for all servers
    # and after running the command, it will copy
    # the key to your clipboard for you to paste as
    # a new deploy key (make sure to use read-only access)
    #
    ```

12. 为所有服务器设置 PM2 部署目录:

    ```sh
    pm2 deploy ecosystem-web.json production setup
    ```

    ```sh
    pm2 deploy ecosystem-api.json production setup
    ```

    ```sh
    pm2 deploy ecosystem-bree.json production setup
    ```


13. 在[Namecheap](https://namecheap.com/)上创建一个 SSL 证书 (我们建议是 5年的通配型证书), 设置证书, 然后在电脑上下载解压证书(通过email发给你的).  我们不建议使用像 [LetsEncrypt](https://letsencrypt.org/) 和 `certbot`等工具， 因为当你使用(或扩展到)服务器集群及负载均衡时会很复杂.   换句话讲，我们已经尝试过 `lsyncd` 结合 `crontab` 来进行`certbot`证书的续期和自动检查的方法.  另外, 使用该方法服务器会面临停机，因此`80` 和 `443` 端口需要关闭， 以便生成`certbot`证书. 这不是一种可靠的方法，并且只需每年续订一次证书要简单得多，并且还使得使用负载均衡器变得微不足道。  更好的办法是： 使用[Namecheap](https://namecheap.com/) 得到一个便宜的 SSL 证书, 然后运行如下所示的少量命令. 此命令将提示你输入下载证书的绝对路径.  一年后重新生成证书?  简单重复这一步骤就行, 注意证书文件上别设置密码.  当使用`openssl` 命令 (详情参见[Namecheap](https://namecheap.com/))时, 如果你注册通配符证书,你需要使用`*.example.com` 句点后边跟星号

    ```sh
    ansible-playbook ansible/playbooks/certificates.yml
    ```

    > **Important:** 如果将来续订或更改证书，则在运行上一个命令后，随后需要按如下方式重新加载进程:

    ```sh
    #
    # NOTE: See the "Important" note above BEFORE running this command.
    #       This command ONLY APPLIES for certificate renewals/changes.
    #
    pm2 deploy ecosystem-web.json production exec "pm2 reload web"
    pm2 deploy ecosystem-api.json production exec "pm2 reload api"
    ```

14. (可选) 如果你需要支持自动翻译，只需创建Google应用证书文件并本地存储.  下面的命令会提示你输入绝对路径 (e.g. `/path/to/client-profile.json`).  关于普通话的详细信息，请参阅[mandarin](https://github.com/niftylettuce/mandarin).

    ```sh
    ansible-playbook ansible/playbooks/gapp-creds.yml -l 'http:bree'
    ```

15. 复制 `.env.production` 并在AWS服务器上创建配置文件:

    ```sh
    node ansible-playbook ansible/playbooks/env.yml -l 'http:bree'
    ```

16. 在所有服务器上运行和初始化部署:

    ```sh
    pm2 deploy ecosystem-web.json production
    ```

    ```sh
    pm2 deploy ecosystem-api.json production
    ```

    ```sh
    pm2 deploy ecosystem-bree.json production
    ```

17. 保存进程列表，以便服务器重启时能自动重新启动这些进程:

    ```sh
    pm2 deploy ecosystem-web.json production exec "pm2 save"
    ```

    ```sh
    pm2 deploy ecosystem-api.json production exec "pm2 save"
    ```

    ```sh
    pm2 deploy ecosystem-bree.json production exec "pm2 save"
    ```

18. 在浏览器上访问来测试你的 Web 和 API 服务器 (点击 "proceed to unsafe" 忽略证书警告certificate warning).

19. 为 Web 和 API 服务器主机名以及相应的 IP 地址配置 DNS 记录.

20. 在浏览器上访问来测试你的 Web 和 API 服务器(打开隐私窗口InPrivate).  这儿应该没有证书警告 (类似于步骤15).

21. (可选)出于安全目的，移除本地 `.env.production`文件.  如果这样做，请确保有备份, 或者在将来销毁服务器之前安全地从服务器备份.

    ```sh
    rm .env.production
    ```

22. (可选) 删除本地下载的步骤 11中指定的本地证书文件. 如果这样做，请确保有备份, 或者在将来销毁服务器之前安全地从服务器备份.

23. 完成. 如果你需要再次部署, 修改后push到github `master` 分支然后再根据步骤14操作.  我们建议你阅读Ansible上手指南[Ansible getting started guide](https://docs.ansible.com/ansible/latest/user_guide/intro_getting_started.html), 这能帮助你更深入了解运行在所有或指定服务器上的命令如 `ansible all -a "echo hello"`

#### 测试

我们使用 [ava](https://github.com/avajs/ava) 和 [nyc](https://github.com/istanbuljs/nyc) 来做测试和代码覆盖code coverage.

<code-group>
<code-block title="npm">
```sh
npm test
```
</code-block>

<code-block title="yarn">
```sh
yarn test
```
</code-block>
</code-group>

### 配置

#### 环境变量

通过 [dotenv](https://github.com/motdotla/dotenv) 的名为 [@ladjs/env](https://github.com/ladjs/env)的配置包, 按照 [Twelve-Factor](https://12factor.net/)原则，使你的Lad项目配置十分容易.

我们使用下列3个包来管理配置:

* [dotenv-extended](https://github.com/niftylettuce/node-dotenv-extended) - 允许我们在名为`.env.schema`的文件中创建 `.env` 定义 (也叫做"schema")
* [mustache](https://github.com/janl/mustache.js/) - 允许我们在`.env` 和 `.env.defaults` 配置文件中使用 [Mustache templating language](https://github.com/janl/mustache.js/) 
* [dotenv-parse-variables](https://github.com/niftylettuce/dotenv-parse-variables) - 从`process.env`中自动解析变量类型 (例如: `FOO=4` 会设置成 `process.env.FOO = 4` FOO设置成`Number`类型而不是 `String`)

配置管理的优先级顺序如下:

1. `config/index.js` 文件中的内容 (从`process.env`中读取环境变量)
2. `config/environments/` 目录下的文件内容 (为每个环境变量设置默认值, e.g. 你可以设置 `NODE_ENV=staging` 然后会加载`config/environments/staging.js`) <!-- XXX:是加载这个文件还在这个文件中列出的文件呢？不确定 -->
3. 用来覆盖默认值或者设置所需的环境变量 (e.g. `NODE_ENV=production`)
4. `.env` 中设置的环境变量
5. `.env.defaults`中的环境变量

顺序为环境配置文件，环境变量， `.env` 文件.  

<!-- XXX:下面这句翻译怪的 -->
基本上， [dotenv](https://github.com/motdotla/dotenv)如果检测到它作为环境变量传递，则不会设置环境变量。(译者注:它指代什么不清楚,这句话怪怪的)

[config](https://lad.js.org/template/config) 文件夹下及默认值[.env.defaults](https://lad.js.org/template/.env.defaults)的内容如下.

* `NODE_ENV` - (options: `development`, `production` default: `development`) - node 运行的环境
* `PROXY_PORT` - (default: `8080`) - 代理请求用的代理端口 (see [ladjs/proxy](https://github.com/ladjs/proxy))
* `HTTP_PROTOCOL` - (defaults: `http` recommend: `https`) - http 协议(protocol)
* `HTTP_PORT` - (defaults: `80` recommend: `443`) - http port used for http requests
* `WEB_PROTOCOL` - (default: `http`) - [ladjs/web](https://github.com/ladjs/web) application protocol
* `WEB_HOST` - (default: `localhost`) - [ladjs/web](https://github.com/ladjs/web) application host
* `WEB_PORT` - (default: `3000`) - [ladjs/web](https://github.com/ladjs/web) application port
* `WEB_URL` - (default: `{{WEB_PROTOCOL}}://{{WEB_HOST}}:{{WEB_PORT}}`) - web application absolute URI
* `WEB_SSL_KEY_PATH` - [ladjs/web](https://github.com/ladjs/web) file path to your SSL key file
* `WEB_SSL_CERT_PATH` - [ladjs/web](https://github.com/ladjs/web) file path to your SSL certificate file
* `WEB_SSL_CA_PATH` - [ladjs/web](https://github.com/ladjs/web) file path to your SSL certificate authority file
* `API_HOST` - (default: `localhost`) - [ladjs/api](https://github.com/ladjs/api) host
* `API_PORT` - (default: `4000`) - [ladjs/api](https://github.com/ladjs/api) port
* `API_PROTOCOL` - (default: `http` recommend: `https`) - [ladjs/api](https://github.com/ladjs/api) protocol
* `API_URL` - (default: `{{API_PROTOCOL}}://{{API_HOST}}:{{API_PORT}}`) - [ladjs/api](https://github.com/ladjs/api) absolute URI
* `API_SSL_KEY_PATH` - [ladjs/api](https://github.com/ladjs/api) file path to your SSL key file
* `API_SSL_CERT_PATH` - [ladjs/api](https://github.com/ladjs/api) file path to your SSL certificate file
* `API_SSL_CA_PATH` - [ladjs/api](https://github.com/ladjs/api) file path to your SSL certificate authority file
* `API_RATELIMIT_WHITELIST` - [ladjs/api](https://github.com/ladjs/api) ratelimiter whitelisted ips (see: [koa-simple-ratelimit](https://github.com/scttcper/koa-simple-ratelimit))
* `APP_NAME` - (default: `Lad`) - application name (see [usage](https://github.com/search?p=3\&q=org%3Aladjs+appName\&type=Code))
* `APP_COLOR` - application color theme (see [usage](https://github.com/search?q=org%3Aladjs+appColor\&type=Code))
* `TWITTER` - (default: `@niftylettuce`) twitter handle
* `SEND_EMAIL` - (default: `false`) - whether to send email or preview (see [outbound email configuration](https://github.com/ladjs/lad#outbound-email-configuration))
* `TRANSPORT_DEBUG` - (default: `false`) - email transport debug logging (see [debugging](https://github.com/ladjs/lad#debugging))
* `EMAIL_DEFAULT_FROM` - (default: `support@127.0.01`) - default email `from` address
* `SHOW_STACK` - (default: `true`) - whether or not to output a stack trace when logging (see [cabinjs options](https://github.com/cabinjs/axe#options))
* `SHOW_META` - (default: `true`) - whether or not to output metadata to logger methods (see [cabinjs options](https://github.com/cabinjs/axe#options))
* `SUPPORT_REQUEST_MAX_LENGTH` - (default: `500`) - support request max message size in characters
* `ERROR_HANDLER_BASE_URL` - (default: `{{WEB_URL}}`) error handling base url (see [koa-better-error-handler](https://github.com/ladjs/koa-better-error-handler))
* `I18N_SYNC_FILES` - (default: `true`) - sync locale information across all files (see [ladjs/i18n options](https://github.com/ladjs/i18n#options))
* `I18N_AUTO_RELOAD` - (default: `false`) - watch for changes in json files to reload locale on updates (see [ladjs/i18n options](https://github.com/ladjs/i18n#options))
* `I18N_UPDATE_FILES` - (default: `true`) - write new locale information to disk (see [ladjs/i18n options](https://github.com/ladjs/i18n#options))
* `AUTH_LOCAL_ENABLED` - (default: `true`) - enable passport local strategy (see [ladjs/passport](https://github.com/ladjs/passport))
* `AUTH_FACEBOOK_ENABLED` - (default: `false`) - enable authenticating with Facebook using the OAuth 2.0 (see [ladjs/passport](https://github.com/ladjs/passport))
* `AUTH_TWITTER_ENABLED` - (default: `false`) - enable authenticating with Twitter using the OAuth 1.0 (see [ladjs/passport](https://github.com/ladjs/passport))
* `AUTH_GOOGLE_ENABLED` - (default: `false`) - enable authenticating with Google using OAuth 2.0 (see [google auth](https://github.com/ladjs/lad#google-auth))
* `AUTH_GITHUB_ENABLED` - (default: `false`) - enable authenticating with Github using OAuth 2.0 (see [ladjs/passport](https://github.com/ladjs/passport))
* `AUTH_LINKEDIN_ENABLED` - (default: `false`) - enable authenticating with LinkedIn using OAuth 1.0 (see [ladjs/passport](https://github.com/ladjs/passport))
* `AUTH_INSTAGRAM_ENABLED` - (default: `false`) - enable authenticating with Instagram using OAuth 2.0 (see [ladjs/passport](https://github.com/ladjs/passport))
* `AUTH_OTP_ENABLED` - (default: `false`) - enable authenticating with OTP, a form of two-factor authentication (see [ladjs/passport](https://github.com/ladjs/passport))
* `AUTH_STRIPE_ENABLED` - (default: false) - enable authenticating with Stripe using OAuth 2.0 (see [ladjs/passport](https://github.com/ladjs/passport))
* `GOOGLE_CLIENT_ID` - google oauth2 client id (see [google auth](https://github.com/ladjs/lad#google-auth))
* `GOOGLE_CLIENT_SECRET` - google oauth2 secret (see [google auth](https://github.com/ladjs/lad#google-auth))
* `GOOGLE_CALLBACK_URL` - google oauth2 callback url (see [google auth](https://github.com/ladjs/lad#google-auth))
* `GOOGLE_APPLICATION_CREDENTIALS` - path to google cloud platform credentials (see [gcp credentials](https://cloud.google.com/docs/authentication/getting-started))
* `GITHUB_CLIENT_ID` - github oauth client id (see [ladjs/passport](https://github.com/ladjs/passport))
* `GITHUB_CLIENT_SECRET` - github oauth secret (see [ladjs/passport](https://github.com/ladjs/passport))
* `GITHUB_CALLBACK_URL` - github oauth callback URL (see [ladjs/passport](https://github.com/ladjs/passport))
* `POSTMARK_API_TOKEN` - postmark api token (see [outbound email configuration](https://github.com/ladjs/lad#outbound-email-configuration))
* `CODECOV_TOKEN` - codecov api token (see [continuous integration and code coverage](https://github.com/ladjs/lad#continuous-integration-and-code-coverage))
* `MONGO_USER` - mongodb username
* `MONGO_PASS` - mongodb password
* `MONGO_HOST` - (default: `localhost`) - mongodb hostname
* `MONGO_PORT` - (default: `27017`) - mongodb port
* `MONGO_NAME` - (default: `{{APP_NAME}}_{{NODE_ENV}}`) - mongodb name
* `MONGO_URI` - (default: `mongodb://{{MONGO_HOST}}:{{MONGO_PORT}}/{{MONGO_NAME}}`) - mongodb connection URI
* `WEB_MONGO_USER` - [ladjs/web](https://github.com/ladjs/web) mongodb username
* `WEB_MONGO_PASS` - [ladjs/web](https://github.com/ladjs/web) mongodb password
* `WEB_MONGO_HOST` - [ladjs/web](https://github.com/ladjs/web) mongodb hostname
* `WEB_MONGO_NAME` - [ladjs/web](https://github.com/ladjs/web) mongodb name
* `WEB_MONGO_PORT` - [ladjs/web](https://github.com/ladjs/web) mongodb port
* `WEB_MONGO_URI` - [ladjs/web](https://github.com/ladjs/web) mongodb connection URI
* `API_MONGO_USER` - [ladjs/api](https://github.com/ladjs/api) mongodb username
* `API_MONGO_PASS` - [ladjs/api](https://github.com/ladjs/api) mongodb password
* `API_MONGO_HOST` - [ladjs/api](https://github.com/ladjs/api) mongodb hostname
* `API_MONGO_NAME` - [ladjs/api](https://github.com/ladjs/api) mongodb name
* `API_MONGO_PORT` - [ladjs/api](https://github.com/ladjs/api) mongodb port
* `API_MONGO_URI` - [ladjs/api](https://github.com/ladjs/api) mongodb connection URI
* `BREE_MONGO_USER` - [breejs/bree](https://github.com/breejs/bree) mongodb username
* `BREE_MONGO_PASS` - [breejs/bree](https://github.com/breejs/bree) mongodb password
* `BREE_MONGO_HOST` - [breejs/bree](https://github.com/breejs/bree) mongodb hostname
* `BREE_MONGO_NAME` - [breejs/bree](https://github.com/breejs/bree) mongodb name
* `BREE_MONGO_PORT` - [breejs/bree](https://github.com/breejs/bree) mongodb port
* `BREE_MONGO_URI` - [breejs/bree](https://github.com/breejs/bree) mongodb connection URI
* `REDIS_PORT` - (default: `6379`) - redis port
* `REDIS_HOST` - (default: `localhost`) - redis hostname
* `REDIS_PASSWORD` - redis password
* `WEB_REDIS_PORT` - [ladjs/web](https://github.com/ladjs/web) redis port
* `WEB_REDIS_HOST` - [ladjs/web](https://github.com/ladjs/web) redis hostname
* `WEB_REDIS_PASSWORD` - [ladjs/web](https://github.com/ladjs/web) redis password
* `API_REDIS_PORT` - [ladjs/api](https://github.com/ladjs/api) redis port
* `API_REDIS_HOST` - [ladjs/api](https://github.com/ladjs/api) redis hostname
* `API_REDIS_PASSWORD` - [ladjs/api](https://github.com/ladjs/api) redis password
* `BREE_REDIS_PORT` - [breejs/bree](https://github.com/breejs/bree) redis port
* `BREE_REDIS_HOST` - [breejs/bree](https://github.com/breejs/bree) redis hostname
* `BREE_REDIS_PASSWORD` - [breejs/bree](https://github.com/breejs/bree) redis password
* `MANDARIN_REDIS_PORT` - [mandarin](https://github.com/niftylettuce/mandarin) redis port
* `MANDARIN_REDIS_HOST` - [mandarin](https://github.com/niftylettuce/mandarin) redis hostname
* `MANDARIN_REDIS_PASSWORD` - [mandarin](https://github.com/niftylettuce/mandarin) redis password
* `CERTBOT_WELL_KNOWN_NAME` - letsencrypt wellknown name (see [certbot options](https://certbot.eff.org/docs/using.html#id11))
* `CERTBOT_WELL_KNOWN_CONTENTS` - letsencrypt wellknown contents (see [certbot options](https://certbot.eff.org/docs/using.html#id11))
* `VERIFICATION_PIN_TIMEOUT_MS` - (default: `5m`) - email verification pin expiry
* `VERIFICATION_PIN_EMAIL_INTERVAL_MS` - (default: `1m`) - email verification pin email interval
* `API_SECRETS` - (default: `secret`) - list of restricted api secrets
* `CACHE_RESPONSES` - (default: `false`) - cache specified responses (see [ladjs/koa-cache-responses](https://github.com/ladjs/koa-cache-responses))
* `SLACK_API_TOKEN` - slack api token (see [slack web api](https://slack.dev/node-slack-sdk/web-api))

#### SSL 配置

要为 Web 或 API 服务器配置 SSL，只需在 .env 文件中设置它们或将它们作为环境变量传递

> Web 服务器:

* `WEB_PROTOCOL` - 必须设置为 `https`
* `WEB_SSL_KEY_PATH` - SSL 秘钥的文件路径 (e.g. `/home/deploy/.ssl/web-key.pem`)
* `WEB_SSL_CERT_PATH` - SSL 证书的文件路径 (e.g. `/home/deploy/.ssl/web-cert.pem`)
* `WEB_SSL_CA_PATH` (可选) - SSL 证书颁发机构文件的文件路径 (e.g. `/home/deploy/.ssl/web-ca-cert.pem`)

> API 服务器:

* `API_PROTOCOL` - 必须设置为 `https`
* `API_SSL_KEY_PATH` - SSL 秘钥的文件路径 (e.g. `/home/deploy/.ssl/api-key.pem`)
* `API_SSL_CERT_PATH` - SSL 证书的文件路径 (e.g. `/home/deploy/.ssl/api-cert.pem`)
* `API_SSL_CA_PATH` (可选) - SSL 证书颁发机构文件的文件路径 (e.g. `/home/deploy/.ssl/api-ca-cert.pem`)

#### 发出的 Email 配置

默认情况下，在开发环境中，我们只是在您的浏览器中呈现电子邮件.

但是在其他环境（例如生产环境）中，您肯定希望电子邮件真的发送出去.

默认情况下，我们内置了对邮戳 Postmark 的支持（尽管您可以在 `jobs/email.js` 文件中换成您自己的 `transport`:

1. 访问 [https://postmarkapp.com](https://postmarkapp.com?utm_source=lad) – 开启免费体验

2. 创建一个免费账户, 然后点击`Get Started`, 然后创建一个"Server" 和 "Sender Signature"

3. 复制/粘贴`.env` 文件中"Credentials"下的"Server API token" (示例如下)

   ```diff
   -POSTMARK_API_TOKEN=
   +POSTMARK_API_TOKEN=ac6657eb-2732-4cfd-915b-912b1b10beb1
   ```

4. 修改`.env`中`SEND_EMAIL` 变量的值， `false` 改为 `true`

#### Favicon 和 Touch Icon 图标配置

你可以自定义 favicon 和 touch icons – 只需在 <https://realfavicongenerator.net> 中生成一个并拿来覆盖 [assets](template/assets) 进文件夹.

只需确保 `assets/browserconfig.xml` 和 `assets/manifest.json` 文件中的任何相对路径都匹配

#### 身份认证Authentication 方法

我们在后台使用 Lad 的 auth 包； 因此，如果您想配置身份验证模块，你可以参阅[@ladjs/auth](https://github.com/ladjs/auth)或为其添砖加瓦.

##### 谷歌身份校验 Google Auth

为了将 Google 登录添加到您的应用程序（以便用户可以使用他们的 Google 帐户登录）：:

1. 访问 <https://console.developers.google.com> – 创建一个项目（并填写您的项目信息 – 如果您需要一个 120x120px 的默认图像，您可以使用[这个图片](https://cdn.rawgit.com/ladjs/lad/82d38d64/media/lad-120x120.png)的CDN <https://cdn.rawgit.com/ladjs/lad/82d38d64/media/lad-120x120.png>

2. 在您新创建的项目下，依次 Credentials – Create credentials – OAuth client ID – Web application

3. 设置 "Authorized JavaScript origins" 为 `http://yourdomain.com` (替换为你自己的域名) 和 `http://localhost:3000` (用于本地开发)

4. 设置 "Authorized redirect URIs" 为 `http://yourdomain.com/auth/google/ok` (替换为你自己的域名) 和 `http://localhost:3000/auth/google/ok` (用于本地开发)

5. 复制、粘贴新创建的秘钥对到`.env` 文件中 (示例如下)

   ```diff
   -GOOGLE_CLIENT_ID=
   +GOOGLE_CLIENT_ID=424623312719-73vn8vb4tmh8nht96q7vdbn3mc9pd63a.apps.googleusercontent.com
   -GOOGLE_CLIENT_SECRET=
   +GOOGLE_CLIENT_SECRET=Oys6WrHleTOksqXTbEY_yi07
   ```

6. 在 `.env` 中，确保设置了 `AUTH_GOOGLE_ENABLED=true` 以启用此身份验证方法。

#### 翻译配置

1. 访问 <https://console.developers.google.com>
2. 启用 Google Translate API
3. 复制你的 API key 并设置为环境变量 `GOOGLE_TRANSLATE_KEY=******`

#### 持续继承和代码覆盖率测试

我们强烈推荐使用 [SemaphoreCI](https://semaphoreci.com/?ref=lad) 作为持续集成, [Codecov][https://codecov.io/gh] 作为代码覆盖率测试的工具.

Here are the simple steps required to setup [SemaphoreCI](https://semaphoreci.com/?ref=lad) with [Codecov][https://codecov.io/gh]:

1. 访问 [SemaphoreCI](https://semaphoreci.com/?ref=lad) 并注册一个免费账号.

2. 如果你的项目在Github上, 从Github导入项目到 SemaphoreCI

3. 使用如下构建设置，来配置你在SemaphoreCI上的项目.

   > 如果你使用`yarn`, 把`npm` 换为 `yarn` 

   * Language: `JavaScript`
   * Node.js version: `10+` (latest LTS)
     > Note you can also add to `Setup` the script `nvm install latest` to install latest version if SemaphoreCI does not provide it from the drop-down
     >请注意，如果 SemaphoreCI 的下拉列表中未提供，您可以将 `nvm install latest` 添加到 `Setup` 以安装最新版本
   * Setup: `npm install`
   * Job 1: `npm run test-coverage`
   * After job: `npm run coverage`

4. 访问 [Codecov][https://codecov.io/gh] 注册一个免费账号.

5. 添加你的项目到 Codecov 并复制 Token 到剪贴板.

6. 到 SemaphoreCI 上你项目的设置 Settings, 添加环境变量 `CODECOV_TOKEN` (内容就是你上边剪贴板里的)

7. 在 SemaphoreCI 上运行测试构建（重建最新版本"Rebuild last revision"）并检查以确保您在 Codecov 上的代码覆盖率报告正确上传

8. 确保您的 `README.md` 文件具有正确呈现的构建状态和代码覆盖率标记（如果您的 GitHub 存储库是私有的，您将需要使用来自每个提供商的不同标记链接）

#### Amazon S3 and CloudFront Assert 设置 

为了让您的程序资产在生产环境中得到正确服务，您需要配置 AWS：

1. 访问并跳转 <https://console.aws.amazon.com/iam/home#security_credential> ‐ Access Keys – Create New Access Key

2. 将新创建的密钥对复制并粘贴到 `.env` 文件中（示例如下）

   ```diff
   -AWS_IAM_KEY=
   +AWS_IAM_KEY=AKIAJMH22P6W674YFC7Q
   -AWS_IAM_SECRET=
   +AWS_IAM_SECRET=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
   ```

3. 通过单击概览然后单击启用按钮启用您的 API

4. 访问 <https://console.aws.amazon.com/s3/home> – Create Bucket

5. 创建一个bucket 然后复制粘贴到 `.env` 文件中 (示例如下)

   ```diff
   -AWS_S3_BUCKET=
   +AWS_S3_BUCKET=lad-development
   ```

6. 访问 <https://console.aws.amazon.com/cloudfront/home> – Create Distribution – Get Started

7. 设置 "Origin Domain Name" 为你Amazon S3 上的 bucket name (通过下拉列表帮您填写)

8. 其余项保留为默认值（某些字段可能为空白，但没关系）

9.复制/粘贴新创建的分发ID(Distribution ID)和域名(Domain Name)到`.env` 文件中（示例如下）
   ```diff
   -AWS_CF_DI=
   +AWS_CF_DI=E2IBEULE9QOPVE
   -AWS_CF_DOMAIN=
   +AWS_CF_DOMAIN=d36aditw73gdrz.cloudfront.net
   ```

### 相关教程

* 写一个你自己的App[Writing Your App](https://github.com/koajs/koa#getting-started)
* 持续继承和部署[Continous Integration and Deployment](http://niftylettuce.com/posts/automated-node-app-ci-graceful-zerodowntime-github-pm2/)

### 社区

* [Follow us on Twitter](https://twitter.com/niftylettuce)
* [Join our Slack channel](https://join.slack.com/t/ladjs/shared_invite/zt-fqei6z11-Bq2trhwHQxVc5x~ifiZG0g/)
* [Subscribe to our Twitch channel](https://www.twitch.tv/niftylettuce)
* [Visit Koa's Community section](https://github.com/koajs/koa#community).
* [Join Mongoose's Slack channel](http://slack.mongoosejs.io/)


## 架构

以下bash输出是Lad的目录结构:

```sh
tree template -I "build|node_modules|coverage|test"
```

```sh
template
├── LICENSE
├── README
├── ansible
│   ├── playbooks
│   │   ├── aws-credentials.yml
│   │   ├── bree.yml
│   │   ├── certificates.yml
│   │   ├── deployment-keys.yml
│   │   ├── ecosystem.yml
│   │   ├── env.yml
│   │   ├── gapp-creds.yml
│   │   ├── http.yml
│   │   ├── mongo.yml
│   │   ├── node.yml
│   │   ├── python.yml
│   │   ├── redis.yml
│   │   ├── security.yml
│   │   ├── ssh-keys.yml
│   │   └── templates
│   │       ├── aws-credentials.j2
│   │       ├── before.rules.j2
│   │       ├── ecosystem-api.json.j2
│   │       ├── ecosystem-bree.json.j2
│   │       ├── ecosystem-web.json.j2
│   │       ├── env
│   │       ├── hosts.yml
│   │       └── security-limits.d-mongod.conf
│   └── requirements.yml
├── ansible-playbook.js
├── ansible.cfg
├── api.js
├── app
│   ├── controllers
│   │   ├── api
│   │   │   ├── index.js
│   │   │   └── v1
│   │   │       ├── index.js
│   │   │       ├── log.js
│   │   │       └── users.js
│   │   ├── index.js
│   │   └── web
│   │       ├── admin
│   │       │   ├── index.js
│   │       │   └── users.js
│   │       ├── auth.js
│   │       ├── index.js
│   │       ├── my-account.js
│   │       ├── otp
│   │       │   ├── disable.js
│   │       │   ├── index.js
│   │       │   ├── keys.js
│   │       │   ├── recovery.js
│   │       │   └── setup.js
│   │       ├── report.js
│   │       └── support.js
│   ├── models
│   │   ├── index.js
│   │   ├── inquiry.js
│   │   └── user.js
│   └── views
│       ├── 404.pug
│       ├── 500.pug
│       ├── _breadcrumbs.pug
│       ├── _footer.pug
│       ├── _nav.pug
│       ├── _pagination.pug
│       ├── _register-or-login.pug
│       ├── about.pug
│       ├── admin
│       │   ├── index.pug
│       │   └── users
│       │       ├── index.pug
│       │       └── retrieve.pug
│       ├── change-email.pug
│       ├── dashboard
│       │   └── index.pug
│       ├── donate.pug
│       ├── forgot-password.pug
│       ├── home.pug
│       ├── layout.pug
│       ├── my-account
│       │   ├── index.pug
│       │   ├── profile.pug
│       │   └── security.pug
│       ├── otp
│       │   ├── enable.pug
│       │   ├── keys.pug
│       │   ├── login.pug
│       │   └── setup.pug
│       ├── privacy.pug
│       ├── register-or-login.pug
│       ├── reset-password.pug
│       ├── spinner
│       │   ├── 1.pug
│       │   ├── 10.pug
│       │   ├── 11.pug
│       │   ├── 2.pug
│       │   ├── 3.pug
│       │   ├── 4.pug
│       │   ├── 5.pug
│       │   ├── 6.pug
│       │   ├── 7.pug
│       │   ├── 8.pug
│       │   ├── 9.pug
│       │   └── spinner.pug
│       ├── support.pug
│       ├── terms.pug
│       └── verify.pug
├── assets
│   ├── browserconfig.xml
│   ├── css
│   │   ├── _btn-auth.scss
│   │   ├── _custom.scss
│   │   ├── _email.scss
│   │   ├── _markdown.scss
│   │   ├── _responsive-backgrounds.scss
│   │   ├── _responsive-borders.scss
│   │   ├── _responsive-rounded.scss
│   │   ├── _swal2.scss
│   │   ├── _variables.scss
│   │   └── app.scss
│   ├── fonts
│   ├── img
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-384x384.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon.ico
│   │   ├── github-logo.svg
│   │   ├── google-logo.svg
│   │   ├── logo-square.svg
│   │   ├── mstile-150x150.png
│   │   ├── social.png
│   │   └── twitter.png
│   ├── js
│   │   ├── core.js
│   │   ├── logger.js
│   │   └── uncaught.js
│   ├── robots.txt
│   └── site.webmanifest
├── bree.js
├── config
│   ├── api.js
│   ├── bree.js
│   ├── cookies.js
│   ├── env.js
│   ├── filters.js
│   ├── i18n.js
│   ├── index.js
│   ├── koa-cash.js
│   ├── locales.js
│   ├── logger.js
│   ├── meta.js
│   ├── phrases.js
│   ├── utilities.js
│   └── web.js
├── emails
│   ├── _content.pug
│   ├── _footer.pug
│   ├── _nav.pug
│   ├── account-update
│   │   ├── html.pug
│   │   └── subject.pug
│   ├── change-email
│   │   ├── html.pug
│   │   └── subject.pug
│   ├── inquiry
│   │   ├── html.pug
│   │   └── subject.pug
│   ├── layout.pug
│   ├── recovery
│   │   ├── html.pug
│   │   └── subject.pug
│   ├── reset-password
│   │   ├── html.pug
│   │   └── subject.pug
│   ├── two-factor-reminder
│   │   ├── html.pug
│   │   └── subject.pug
│   ├── verify
│   │   ├── html.pug
│   │   └── subject.pug
│   └── welcome
│       ├── html.pug
│       └── subject.pug
├── env
├── gitignore
├── gulpfile.js
├── helpers
│   ├── email.js
│   ├── get-email-locals.js
│   ├── i18n.js
│   ├── logger.js
│   ├── markdown.js
│   ├── passport.js
│   ├── policies.js
│   ├── send-verification-email.js
│   └── to-object.js
├── index.js
├── jobs
│   ├── account-updates.js
│   ├── index.js
│   ├── translate-markdown.js
│   ├── translate-phrases.js
│   ├── two-factor-reminder.js
│   └── welcome-email.js
├── lad.sh
├── locales
│   ├── ar.json
│   ├── cs.json
│   ├── da.json
│   ├── de.json
│   ├── en.json
│   ├── es.json
│   ├── fi.json
│   ├── fr.json
│   ├── he.json
│   ├── hu.json
│   ├── id.json
│   ├── it.json
│   ├── ja.json
│   ├── ko.json
│   ├── nl.json
│   ├── no.json
│   ├── pl.json
│   ├── pt.json
│   ├── ru.json
│   ├── sv.json
│   ├── th.json
│   ├── tr.json
│   ├── uk.json
│   ├── vi.json
│   └── zh.json
├── nodemon.json
├── package-scripts.js
├── package.json
├── proxy.js
├── routes
│   ├── api
│   │   ├── index.js
│   │   └── v1
│   │       └── index.js
│   ├── index.js
│   └── web
│       ├── admin.js
│       ├── auth.js
│       ├── index.js
│       ├── my-account.js
│       └── otp.js
├── template
├── web.js
├── yarn-error.log
└── yarn.lock

42 directories, 212 files
```


## 设计理念

Lad是根据以下这些理念设计的:

1. 永远对开发者友好
2. 遵守 [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller), [Unix](https://en.wikipedia.org/wiki/Unix_philosophy), [KISS](https://en.wikipedia.org/wiki/KISS_principle), [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it), [Twelve Factor](https://12factor.net/), [Occam's razor](https://en.wikipedia.org/wiki/Occam%27s_razor), and [dogfooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food)
3. 面向斗志旺盛，自立更生 和 [拉面收益(所得利润只够开销)](http://www.paulgraham.com/ramenprofitable.html) 小型创业公司.


## 相关资源

* [lipo](https://lipo.io/) - Free image manipulation API service built on top of [Sharp](http://sharp.dimens.io/)
* [cabin](http://cabinjs.com/) - Logging and analytics solution for [Node.js](https://nodejs.org/), [Lad](https://lad.js.org/), [Koa](http://koajs.com/), and [Express](https://expressjs.com/)
* [lass](https://lass.js.org/) - Scaffold a modern boilerplate for [Node.js](https://nodejs.org/)


## Contributing

Interesting in contributing to this project or testing early releases?

1. Follow all of the above [Requirements](#requirements)
2. You will need to fork and clone this repository locally
3. After forking, follow these steps:

   ```sh
   cd lad
   yarn install
   cd template
   yarn install
   yarn start
   ```

If you'd like to preview changes to the `README.md` file, you can use `docute`.

```sh
yarn global add docute-cli
cd lad
docute ./
```

Then visit <http://localhost:8080> in your browser.


## Contributors

| Name             | Website                    |
| ---------------- | -------------------------- |
| **Nick Baugh**   | <http://niftylettuce.com>  |
| **Shaun Warman** | <https://shaunwarman.com/> |


## Trademark Notice

Lad, Lass, Cabin, Lipo, and their respective logos are trademarks of Niftylettuce LLC.
These trademarks may not be reproduced, distributed, transmitted, or otherwise used, except with the prior written permission of Niftylettuce LLC.
If you are seeking permission to use these trademarks, then please [contact us](mailto:niftylettuce@gmail.com).


## License

[MIT](LICENSE) © [Nick Baugh](http://niftylettuce.com)


## 相关链接
<a href="#"><img src="https://lad.js.org/media/lad-footer.png" alt="#" /></a>

[npm]( https://www.npmjs.com/)  [yarn]( https://yarnpkg.com/) [lass]( https://lass.js.org)

[node]( https://nodejs.org)

[kiss]( https://en.wikipedia.org/wiki/KISS_principle)

[mvc]( https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

[yagni]( https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)

[twelve-factor]( https://12factor.net/)

[ramen-profitable]( http://www.paulgraham.com/ramenprofitable.html)

[unix]( https://en.wikipedia.org/wiki/Unix_philosophy)

[nvm]( https://github.com/creationix/nvm)

[mongodb]( https://www.mongodb.com/)

[redis]( https://redis.io/)

[github-git]( https://help.github.com/articles/set-up-git/)

[git]( https://git-scm.com/)

[slack]( https://join.slack.com/t/ladjs/shared_invite/zt-fqei6z11-Bq2trhwHQxVc5x~ifiZG0g/)

[brew]( https://brew.sh/)

[twitter]( https://twitter.com/niftylettuce)

[twitch]( https://www.twitch.tv/niftylettuce)

[moon]( https://github.com/kbrsh/moon)

[vue]( https://vuejs.org/)

[react]( https://facebook.github.io/react/)

[angular]( https://angular.io/)

[pm2]( http://pm2.keymetrics.io/)

[do]( https://m.do.co/c/a7fe489d1b27)

[semaphoreci]( https://semaphoreci.com/?ref=lad)

[ava]( https://github.com/avajs/ava)

[nyc]( https://github.com/istanbuljs/nyc)

[mongoose-slack]( http://slack.mongoosejs.io/)

[codecov]( https://codecov.io/gh)

[nodemailer-base64-to-s3]( https://github.com/ladjs/nodemailer-base64-to-s3)

[custom-fonts-in-emails]( https://github.com/ladjs/custom-fonts-in-emails)

[font-awesome-assets]( https://github.com/ladjs/font-awesome-assets)

[nodemailer]( https://nodemailer.com/)

[email-templates]( https://github.com/niftylettuce/node-email-templates)

[mustache]( https://github.com/janl/mustache.js/)

[dotenv-extended]( https://github.com/niftylettuce/node-dotenv-extended)

[dotenv-parse-variables]( https://github.com/niftylettuce/dotenv-parse-variables)

[dotenv]( https://github.com/motdotla/dotenv)

[koa-better-error-handler]( https://github.com/niftylettuce/koa-better-error-handler)

[koa-manifest-rev]( https://github.com/niftylettuce/koa-manifest-rev)

[cabin]( http://cabinjs.com)

[lad]( https://lad.js.org)

[koa]( http://koajs.com/)

[mongoose]( http://mongoosejs.com)

[ladjs-auth]( https://github.com/ladjs/auth)

[csrf-alternative]( https://scotthelme.co.uk/csrf-is-dead/)

[csrf-caniuse]( https://caniuse.com/#search=SameSite)

[dry]( https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)

[lipo]( https://lipo.io)

[sharp]( http://sharp.dimens.io/)

[express]( https://expressjs.com)

[ctx-paginate]( https://github.com/koajs/ctx-paginate)

[sweetalert2]( https://limonte.github.io/sweetalert2/)

[nps]( https://github.com/kentcdodds/nps)

[nps-utils]( https://github.com/kentcdodds/nps-utils)

[eslint-plugin-compat]( https://github.com/amilajack/eslint-plugin-compat)

[browserslist]( https://github.com/ai/browserslist)

[pug]( https://pugjs.org)

[gulp]( https://gulpjs.com)

[sass]( http://sass-lang.com/)

[postcss]( http://postcss.org/)

[bootstrap]( https://getbootstrap.com/)

[font-awesome]( http://fontawesome.io/)

[spinkit]( http://tobiasahlin.com/spinkit/)

[dense]( http://dense.rah.pw/)

[waypoints]( http://imakewebthings.com/waypoints/)

[livereload]( https://github.com/intesso/connect-livereload)

[lad-env]( https://github.com/ladjs/env)

[font-magician]( https://github.com/jonathantneal/postcss-font-magician)

[import-url]( https://github.com/unlight/postcss-import-url)

[font-grabber]( https://github.com/AaronJan/postcss-font-grabber)

[base64]( https://github.com/jelmerdemaat/postcss-base64)

[cssnext]( http://cssnext.io/)

[debug]( https://github.com/visionmedia/debug)

[ladjs-redis]( https://github.com/ladjs/redis)

[show-friendly-error-stack]( https://github.com/luin/ioredis#error-handling)

[ioredis]( https://github.com/luin/ioredis)

[redis-cluster]( https://redis.io/topics/cluster-tutorial)

[redis-sentinel]( https://redis.io/topics/sentinel)

[occams-razor]( https://en.wikipedia.org/wiki/Occam%27s_razor)

[dogfooding]( https://en.wikipedia.org/wiki/Eating_your_own_dog_food)

[ladjs/web]( https://github.com/ladjs/web)

[ladjs/api]( https://github.com/ladjs/api)

[ladjs/proxy]( https://github.com/ladjs/proxy)

[breejs/bree]( https://github.com/breejs/bree)

[ladjs/passport]( https://github.com/ladjs/passport)

[google auth]( https://github.com/ladjs/lad#google-auth)

[ladjs/i18n options]( https://github.com/ladjs/i18n#options)

[mandarin]( https://github.com/niftylettuce/mandarin)

[cabinjs options]( https://github.com/cabinjs/axe#options)

[certbot options]( https://certbot.eff.org/docs/using.html#id11)

[ansible]( https://github.com/ansible/ansible)

[yamllint]( https://github.com/adrienverge/yamllint)

[ansible-lint]( https://github.com/ansible/ansible-lint)

[digital-ocean]( https://m.do.co/c/2ffb8129b8d6)

[linode]( https://www.linode.com/?r=a2840b36770c7020730251a5643428ddbf2e284e)

[vultr]( https://www.vultr.com/?ref=7429848)

[ecosystem-files]( https://pm2.keymetrics.io/docs/usage/application-declaration/)

[@ladjs/env]( https://github.com/ladjs/env)

[namecheap]( https://namecheap.com)

[letsencrypt]( https://letsencrypt.org/)

[ansible-guide]( https://docs.ansible.com/ansible/latest/user_guide/intro_getting_started.html)

[bree]( https://jobscheduler.net)