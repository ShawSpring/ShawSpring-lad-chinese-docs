## Features

Lad boasts dozens of features and is extremely configurable.

### Microservices

These microservices are preconfigured for security, performance, and graceful reloading.

* Webapp server → [web.js](template/web.js)
* API server → [api.js](template/api.js)
* Job scheduler → [bree.js](template/bree.js)
* Proxy server → [proxy.js](template/proxy.js)

### Front-end

* Browser linting using [eslint-plugin-compat][] and [browserslist][] (see [.browserslistrc](template/.browserslistrc) for the default config)
* [Pug][] template engine (you can easily use [Moon][], [Vue][], [React][], or [Angular][], though typically [you aren't going to need it][yagni])
* [Gulp][] (latest version 4.x)
* [Sass][]
* [PostCSS][] (with [font-magician][], [import-url][], [font-grabber][], [base64][], and [cssnext][] pre-configured)
* [Bootstrap][]
* [Font Awesome][font-awesome]
* [SpinKit][]
* [SweetAlert2][]
* [Dense][]
* [Waypoints][]
* [LiveReload][]
* …

### Back-end

* Redis, sessions, and flash toast and modal [SweetAlert2][] messages (uses [ioredis][] which has support for [Cluster][redis-cluster], [Sentinel][redis-sentinel], and more)
* Koa-based webapp and API servers (uses HTTP/2 for production!)
* Pagination built-in (using [ctx-paginate][])
* RESTful API with BasicAuth and versioning
* Automated job scheduler with cron and human-readable syntax (backed by [Mongoose][] and [Bree][])
* Passport-based authentication and group-based (Unix-like) permissioning
* Stripe-inspired error handling
* Mongoose and MongoDB with common database plugins
* Email template engine with [Nodemailer][] and local rendering
* Proxy eliminates need for Nginx reverse-proxy or Apache virtual hosts
* Multilingual through built-in i18n translation support ([see configuration](#translation-configuration))
* Automatic phrase translation with Google Translate
* Sitemap generator for simple SEO
* …

### Translation

Finally a framework that solves i18n everywhere; complete with automatic translation.

* Translation constants built-in so you [don't repeat yourself][dry]
* Webapp error messages and templates are translated
* Emails are translated
* API responses are translated
* Database errors are translated
* Authentication errors are translated
* …

### Email Engine

Our beautiful email engine uses [email-templates][] (which is also made by the creator of Lad)!

* Test your emails locally with automatic browser-rendering on the fly
* Automatically inlines CSS for cross-browser and cross-platform email client support
* Use [Bootstrap][] in your email template designs
* Reuse your existing CSS and webapp styling
* Use any template engine (defaults to Pug)
* [Render custom fonts in emails with code][custom-fonts-in-emails]
* [Add icons with Font Awesome with code][font-awesome-assets]
* [Automatically avoid email client caching][nodemailer-base64-to-s3]
* Include any image you want and it will be properly rendered
* Rids the need for awkward embedded image CID attachments
* …

### Error Handling

We've spent a lot of time designing a beautiful error handler.

* Supports `text/html`, `application/json`, and `text` response types
* [User-friendly responses](https://github.com/niftylettuce/koa-better-error-handler#user-friendly-responses)
* [HTML error lists](https://github.com/niftylettuce/koa-better-error-handler#html-error-lists)
* …

See [koa-better-error-handler][] for a complete reference.

### Performance

* Compression and zero-bloat approach
* Stream-based file uploading
* Graceful reloading, shutdown, and reconnection handling
* Manifest asset revisioning
* Amazon S3 and CloudFront ready
* …

### Security

* Database security plugins and helpers
* Automated tests and code coverage
* CORS, SameSite set to "lax" ([an alternative to CSRF][csrf-alternative]), CSRF (since [not all browsers][csrf-caniuse] support SameSite yet) XSS, and rate limited protection
* Dotenv support for environment-based configurations
* App, user, and request-based logging
* SSL-ready (see [instructions below](#ssl-configuration))
* …
