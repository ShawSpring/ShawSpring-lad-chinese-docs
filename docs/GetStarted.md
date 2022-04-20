## Get Started

We strictly support Mac and Ubuntu-based operating systems (we do not support Windows).

### Requirements

Please ensure your operating system has the following software installed:

* [Git][] - see [GitHub's tutorial][github-git] for installation

* [Node.js][node] (v10+) - use [nvm][] to install it on any OS

  * After installing `nvm` you will need to run `nvm install node`
  * We also recommend you install [yarn][], which is an alternative to [npm][]

* [MongoDB][] (v3.x+):

  * Mac (via [brew][]): `brew tap mongodb/brew && brew install mongodb-community && brew services start mongodb-community`.
  * Ubuntu:

    ```sh
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
    echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
    sudo apt-get update
    sudo apt-get -y install mongodb-org
    ```

* [Redis][] (v4.x+):

  * Mac (via [brew][]): `brew install redis && brew services start redis`
  * Ubuntu:

    ```sh
    sudo add-apt-repository -y ppa:chris-lea/redis-server
    sudo apt-get update
    sudo apt-get -y install redis-server
    ```

### Install

[npm][]:

```sh
npm install -g lad
```

[yarn][]:

```sh
yarn global add lad
```

### Usage

#### Create a project

```sh
lad new-project
cd new-project
```

#### Development

To begin, try typing `npm start` (or `yarn start`) on command line.  This will display to you all the scripts you can run.

The `start` script (among many others) uses [nps][] and [nps-utils][] under the hood.  This helps to keep scripts very developer-friendly, and rids the need to write in JSON syntax.

This script accepts a `<task>` argument, whereas a task of `all` will spawn, watch, and re-compile all of the [microservices](#microservices) mentioned above.

Just open <http://localhost:3000> for testing!

[npm][]:

```sh
npm start all
```

[yarn][]:

```sh
yarn start all
```

##### Debugging

* `DEBUG` - debug using [debug][] output (widely adopted package in the community for debugging across all Node packages):

  ```sh
  DEBUG=* ...
  ```

* `NODE_DEBUG` - debug [node][] internal modules:

  ```sh
  NODE_DEBUG=* ...
  ```

* `MONGOOSE_DEBUG` - debug Mongoose raw database operation output:

  ```sh
  MONGOOSE_DEBUG=true ...
  ```

* `TRANSPORT_DEBUG` - debug Nodemailer transport:

  ```sh
  TRANSPORT_DEBUG=true ...
  ```

* `REDIS_MONITOR` - debug Redis using `MONITOR` (uses [@ladjs/redis][ladjs-redis] and passes `true` for the `monitor` argument):

  ```sh
  REDIS_MONITOR=true ...
  ```

* `REDIS_FRIENDLY_ERROR_STACK` - debug Redis with friendly error stack messages (see [showFriendlyErrorStack][show-friendly-error-stack] option of [ioredis][])

  ```sh
  REDIS_FRIENDLY_ERROR_STACK=true ...
  ```

#### Production

We strongly recommend using [SemaphoreCI][], [PM2][], and [Digital Ocean][do] for production deployment.

1. We've provided you with a preconfigured [ecosystem.json](template/ecosystem.json) [deployment file](http://pm2.keymetrics.io/docs/usage/deployment/). You will need to modify this file with your server's IP, hostname, and other metadata if needed.

2. Make sure that your project's assets are built with `NODE_ENV=production` flag, e.g. `NODE_ENV=production npm run build` (or with yarn as `yarn build`);this creates a `build/rev-manifest.json` file per [koa-manifest-rev][].

3. You can test this locally by installing [PM2][] globally with [npm][] or [yarn][], and then running the following command:

   ```sh
   NODE_ENV=production pm2 start
   ```

4. See the [Continuous Integration and Code Coverage](#continuous-integration-and-code-coverage) and [Tutorials](#tutorials) sections below for instructions on how to setup continuous integration, code coverage, and deployment.

5. If you specify an environment variable value for `AWS_CF_DOMAIN` and `NODE_ENV=production` is set then your assets will need to be published to Amazon S3/Cloudfront. To do so run `npm start publish-assets` (or with yarn as `yarn start publish-assets`).  This command automatically sets `NODE_ENV=production` for you as well via `cross-env`.

#### Provisioning

See the [ansible](ansible/) folder for our [Ansible][] configuration and playbooks, which we use to provision servers with.

We recommend you to install [yamllint][] and configure it in your editor while working with [Ansible][] playbooks.

Also note that [ansible-lint][] is a helpful linting tool you can use if you plan on making changes to playbooks.  Note that our current playbooks have several existing lint errors.

First you must provision Ubuntu 18.04 LTS 64-bit server(s) using [Digital Ocean][digital-ocean], [Linode][], [Vultr][], or your host of choice.  These newly provisioned server(s) should have your SSH key automatically added.

Follow the [Deployment](#deployment) guide below for automatic provisioning and deployment instructions.

##### Deployment

1. Set up host configuration by copying the `hosts.yml` file template:

   ```sh
   cp ansible/playbooks/templates/hosts.yml hosts.yml
   ```

2. Edit this configuration and update the file with your newly created server aliases and IP addresses.  You can add more than one host to each group if you are setting up load balancing.  Refer to the [Naming Convention](#naming-convention) documentation for our recommended approach to server alias naming.  Note that this file is automatically ignored by git.  If you have a private repository and would like to commit this, then remove `hosts.yml` from the root `.gitignore` file.

   ```sh
   vim hosts.yml
   ```

3. Set up environment configuration by copying the `env` file template:

   ```sh
   cp ansible/playbooks/templates/env .env.production
   ```

4. Edit this configuration and reference the official [Lad][] documentation for a list of all available environment variables (or see [.env.defaults](.env.defaults)).  **You will need to open this file in your preferred editor** and set the values for any fields containing `TODO`, whereby you replace `TODO` with the appropriate value.  Preserve double quotes where they are already defined.

   ```sh
   vim .env.production
   ```

5. Generate [pm2][] [ecosystem files][ecosystem-files] using our automatic template generator. We created an [ansible-playbook.js](ansible-playbook.js) which loads the `.env.production` environment variables rendered with [@ladjs/env][] into `process.env`, which then gets used in the playbooks.  This is a superior, simple, and the only known dotenv approach we know of in Ansible. Newly created `ecosystem-api.json`, `ecosystem-bree.json`, `ecosystem-web.json` files will now be created for you in the root of the repository.  If you ever more add or change IP addresses, you can simply re-run this command.

   ```sh
   node ansible-playbook ansible/playbooks/ecosystem.yml -l 'localhost'
   ```

6. Set up the web and API server(s) (see [patterns and ansible-playbook flags docs](https://docs.ansible.com/ansible/latest/user_guide/intro_patterns.html#patterns-and-ansible-playbook-flags) if you need help).  If you completely (or partially) run this playbook (or any others below), then the second time you try to run it may not succeed.  This is because we prevent root user access through security hardening.  To workaround this, run the same command but without `-e 'ansible_user=root'` appended as it will default to the `devops` user created.

   ```sh
   node ansible-playbook ansible/playbooks/http.yml -e 'ansible_user=root' -l 'http'
   ```

7. Set up the Bree server(s):

   ```sh
   node ansible-playbook ansible/playbooks/bree.yml -e 'ansible_user=root' -l 'bree'
   ```

8. Set up the Redis server:

   ```sh
   node ansible-playbook ansible/playbooks/redis.yml -e 'ansible_user=root' -l 'redis'
   ```

9. Set up the Mongo server:

   ```sh
   node ansible-playbook ansible/playbooks/mongo.yml -e 'ansible_user=root' -l 'mongo'
   ```

10. Set up GitHub deployment keys for all the servers. Note that the `deployment-keys` directory is ignored from git, so if you have a private repository and wish to commit it, then remove `deployment-keys` from the `.gitignore` file.

    ```sh
    node ansible-playbook ansible/playbooks/deployment-keys.yml -l 'http:bree'
    ```

11. Go to your repository "Settings" page on GitHub, click on "Deploy keys", and then add a deployment key for each servers' deployment key copied to the `deployment-keys` directory.  If you're on macOS, you can use the `pbcopy` command to copy each file's contents to your clipboard.  Use tab completion for speed, and replace the server names and paths with yours:

    ```sh
    cat deployment-keys/api-1-li-dal.forwardemail.net.pub | pbcopy

    #
    # NOTE: repeat the above command for all servers
    # and after running the command, it will copy
    # the key to your clipboard for you to paste as
    # a new deploy key (make sure to use read-only access)
    #
    ```

12. Set up PM2 deployment directories on all the servers:

    ```sh
    pm2 deploy ecosystem-web.json production setup
    ```

    ```sh
    pm2 deploy ecosystem-api.json production setup
    ```

    ```sh
    pm2 deploy ecosystem-bree.json production setup
    ```

13. Create a SSL certificate at [Namecheap][] (we recommend a 5 year wildcard certificate), set up the certificate, and download and extract the ZIP file with the certificate (emailed to you) to your computer. We do not recommend using tools like [LetsEncrypt][] and `certbot` due to complexity when you have (or scale to) a cluster of servers set up behind load balancers.  In other words, we've tried approaches like `lsyncd` in combination with `crontab` for `certbot` renewals and automatic checking.  Furthermore, using this exposes the server(s) to downtime as ports `80` and `443` may need to be shut down so that `certbot` can use them for certificate generation.  This is not a reliable approach, and simply renewing certificates once a year is vastly simpler and also makes using load balancers trivial.  Instead you can use a provider like [Namecheap][] to get a cheap SSL certificate, then run a few commands as we've documented below. This command will prompt you for an absolute file path to the certificates you downloaded. Renewed your certificate after 1 year? Simply follow this step again.  Do not set a password on the certificate files.  When using the `openssl` command (see Namecheap instructions), you need to use `*.example.com` with an asterisk followed by a period if you are registering a wildcard certificate.

    ```sh
    ansible-playbook ansible/playbooks/certificates.yml
    ```

    > **Important:** If you renew or change certificates in the future, then after running the previous command, you will subsequently need to reload the processes as such:

    ```sh
    #
    # NOTE: See the "Important" note above BEFORE running this command.
    #       This command ONLY APPLIES for certificate renewals/changes.
    #
    pm2 deploy ecosystem-web.json production exec "pm2 reload web"
    pm2 deploy ecosystem-api.json production exec "pm2 reload api"
    ```

14. (Optional) Create a Google application credentials profile file and store it locally.  You only need this if you want to support automatic translation.  The following command will prompt you for the absolute file path (e.g. `/path/to/client-profile.json`).  See the [mandarin][] docs for more information.

    ```sh
    ansible-playbook ansible/playbooks/gapp-creds.yml -l 'http:bree'
    ```

15. Copy the `.env.production` file and create an AWS config file on the servers:

    ```sh
    node ansible-playbook ansible/playbooks/env.yml -l 'http:bree'
    ```

16. Run an initial deploy to all the servers:

    ```sh
    pm2 deploy ecosystem-web.json production
    ```

    ```sh
    pm2 deploy ecosystem-api.json production
    ```

    ```sh
    pm2 deploy ecosystem-bree.json production
    ```

17. Save the process list on the servers so when if the server were to reboot, it will automatically boot back up the processes:

    ```sh
    pm2 deploy ecosystem-web.json production exec "pm2 save"
    ```

    ```sh
    pm2 deploy ecosystem-api.json production exec "pm2 save"
    ```

    ```sh
    pm2 deploy ecosystem-bree.json production exec "pm2 save"
    ```

18. Test by visiting your web and API server in your browser (click "proceed to unsafe" site and bypass certificate warning).

19. Configure your DNS records for the web and API server hostnames and respective IP addresses.

20. Test by visiting your web and API server in your browser (in an incognito window).  There should not be any certificate warnings (similar to the one that occurred in step 15).

21. (Optional) Remove the local `.env.production` file for security purposes.  If you do this, then make sure you have a backup, or securely back up off the server in the future before destroying the server.

    ```sh
    rm .env.production
    ```

22. (Optional) Remove the local certificate files you downloaded locally and specified in step 11.  If you do this, then make sure you have a backup, or securely back up off the server in the future before destroying the server.

23. Finished. If you need to deploy again, then push your changes to GitHub `master` branch and then follow step 14 again.  We recommend you to read the [Ansible getting started guide][ansible-guide], as it provides you with insight into commands like `ansible all -a "echo hello"` which can be run across all or specific servers.

#### Tests

We use [ava][] and [nyc][] for testing and code coverage.

[npm][]:

```sh
npm test
```

[yarn][]:

```sh
yarn test
```

### Configuration

#### Environment Variables

We have made configuration of your Lad project easy through a [dotenv][] configuration package called [@ladjs/env][lad-env], per [Twelve-Factor][twelve-factor].

We use the following three packages to manage configuration:

* [dotenv-extended][] - allows us to craft a `.env` definition (otherwise known as a "schema") in a file named `.env.schema`
* [mustache][] - allows us to use the [Mustache templating language][mustache] in our `.env` and `.env.defaults` configuration files
* [dotenv-parse-variables][] - automatically parses variable types from `process.env` (e.g. `FOO=4` will set `process.env.FOO = 4` with a `Number` variable type instead of a `String`)

Configuration is managed by the following, in order of priority:

1. Contents of the file at `config/index.js` (reads in `process.env` environment variables)
2. Contents of the files in directories under `config/environments/` (sets defaults per environment, e.g. you can pass `NODE_ENV=staging` and it will load the file at `config/environments/staging.js`)
3. Environment variables used to override defaults or set required ones (e.g. `NODE_ENV=production`)
4. Environment configuration in `.env`
5. Environment configuration in `.env.defaults`

Precedence is taken by the environment configuration files, environment variables, then the `.env` file.

Basically [dotenv][] won't set an environment variable if it already detects it was passed as an environment variable.

Take a look at the [config](template/config) folder contents and also at the defaults at [.env.defaults](template/.env.defaults).

* `NODE_ENV` - (options: `development`, `production` default: `development`) - the node environment the app is running in
* `PROXY_PORT` - (default: `8080`) - proxy port used to proxy requests (see [ladjs/proxy][])
* `HTTP_PROTOCOL` - (defaults: `http` recommend: `https`) - protocol used for http requests
* `HTTP_PORT` - (defaults: `80` recommend: `443`) - http port used for http requests
* `WEB_PROTOCOL` - (default: `http`) - [ladjs/web][] application protocol
* `WEB_HOST` - (default: `localhost`) - [ladjs/web][] application host
* `WEB_PORT` - (default: `3000`) - [ladjs/web][] application port
* `WEB_URL` - (default: `{{WEB_PROTOCOL}}://{{WEB_HOST}}:{{WEB_PORT}}`) - web application absolute URI
* `WEB_SSL_KEY_PATH` - [ladjs/web][] file path to your SSL key file
* `WEB_SSL_CERT_PATH` - [ladjs/web][] file path to your SSL certificate file
* `WEB_SSL_CA_PATH` - [ladjs/web][] file path to your SSL certificate authority file
* `API_HOST` - (default: `localhost`) - [ladjs/api][] host
* `API_PORT` - (default: `4000`) - [ladjs/api][] port
* `API_PROTOCOL` - (default: `http` recommend: `https`) - [ladjs/api][] protocol
* `API_URL` - (default: `{{API_PROTOCOL}}://{{API_HOST}}:{{API_PORT}}`) - [ladjs/api][] absolute URI
* `API_SSL_KEY_PATH` - [ladjs/api][] file path to your SSL key file
* `API_SSL_CERT_PATH` - [ladjs/api][] file path to your SSL certificate file
* `API_SSL_CA_PATH` - [ladjs/api][] file path to your SSL certificate authority file
* `API_RATELIMIT_WHITELIST` - [ladjs/api][] ratelimiter whitelisted ips (see: [koa-simple-ratelimit](https://github.com/scttcper/koa-simple-ratelimit))
* `APP_NAME` - (default: `Lad`) - application name (see [usage](https://github.com/search?p=3\&q=org%3Aladjs+appName\&type=Code))
* `APP_COLOR` - application color theme (see [usage](https://github.com/search?q=org%3Aladjs+appColor\&type=Code))
* `TWITTER` - (default: `@niftylettuce`) twitter handle
* `SEND_EMAIL` - (default: `false`) - whether to send email or preview (see [outbound email configuration](https://github.com/ladjs/lad#outbound-email-configuration))
* `TRANSPORT_DEBUG` - (default: `false`) - email transport debug logging (see [debugging](https://github.com/ladjs/lad#debugging))
* `EMAIL_DEFAULT_FROM` - (default: `support@127.0.01`) - default email `from` address
* `SHOW_STACK` - (default: `true`) - whether or not to output a stack trace when logging (see [cabinjs options][])
* `SHOW_META` - (default: `true`) - whether or not to output metadata to logger methods (see [cabinjs options][])
* `SUPPORT_REQUEST_MAX_LENGTH` - (default: `500`) - support request max message size in characters
* `ERROR_HANDLER_BASE_URL` - (default: `{{WEB_URL}}`) error handling base url (see [koa-better-error-handler](https://github.com/ladjs/koa-better-error-handler))
* `I18N_SYNC_FILES` - (default: `true`) - sync locale information across all files (see [ladjs/i18n options][])
* `I18N_AUTO_RELOAD` - (default: `false`) - watch for changes in json files to reload locale on updates (see [ladjs/i18n options][])
* `I18N_UPDATE_FILES` - (default: `true`) - write new locale information to disk (see [ladjs/i18n options][])
* `AUTH_LOCAL_ENABLED` - (default: `true`) - enable passport local strategy (see [ladjs/passport][])
* `AUTH_FACEBOOK_ENABLED` - (default: `false`) - enable authenticating with Facebook using the OAuth 2.0 (see [ladjs/passport][])
* `AUTH_TWITTER_ENABLED` - (default: `false`) - enable authenticating with Twitter using the OAuth 1.0 (see [ladjs/passport][])
* `AUTH_GOOGLE_ENABLED` - (default: `false`) - enable authenticating with Google using OAuth 2.0 (see [google auth][])
* `AUTH_GITHUB_ENABLED` - (default: `false`) - enable authenticating with Github using OAuth 2.0 (see [ladjs/passport][])
* `AUTH_LINKEDIN_ENABLED` - (default: `false`) - enable authenticating with LinkedIn using OAuth 1.0 (see [ladjs/passport][])
* `AUTH_INSTAGRAM_ENABLED` - (default: `false`) - enable authenticating with Instagram using OAuth 2.0 (see [ladjs/passport][])
* `AUTH_OTP_ENABLED` - (default: `false`) - enable authenticating with OTP, a form of two-factor authentication (see [ladjs/passport][])
* `AUTH_STRIPE_ENABLED` - (default: false) - enable authenticating with Stripe using OAuth 2.0 (see [ladjs/passport][])
* `GOOGLE_CLIENT_ID` - google oauth2 client id (see [google auth][])
* `GOOGLE_CLIENT_SECRET` - google oauth2 secret (see [google auth][])
* `GOOGLE_CALLBACK_URL` - google oauth2 callback url (see [google auth][])
* `GOOGLE_APPLICATION_CREDENTIALS` - path to google cloud platform credentials (see [gcp credentials](https://cloud.google.com/docs/authentication/getting-started))
* `GITHUB_CLIENT_ID` - github oauth client id (see [ladjs/passport][])
* `GITHUB_CLIENT_SECRET` - github oauth secret (see [ladjs/passport][])
* `GITHUB_CALLBACK_URL` - github oauth callback URL (see [ladjs/passport][])
* `POSTMARK_API_TOKEN` - postmark api token (see [outbound email configuration](https://github.com/ladjs/lad#outbound-email-configuration))
* `CODECOV_TOKEN` - codecov api token (see [continuous integration and code coverage](https://github.com/ladjs/lad#continuous-integration-and-code-coverage))
* `MONGO_USER` - mongodb username
* `MONGO_PASS` - mongodb password
* `MONGO_HOST` - (default: `localhost`) - mongodb hostname
* `MONGO_PORT` - (default: `27017`) - mongodb port
* `MONGO_NAME` - (default: `{{APP_NAME}}_{{NODE_ENV}}`) - mongodb name
* `MONGO_URI` - (default: `mongodb://{{MONGO_HOST}}:{{MONGO_PORT}}/{{MONGO_NAME}}`) - mongodb connection URI
* `WEB_MONGO_USER` - [ladjs/web][] mongodb username
* `WEB_MONGO_PASS` - [ladjs/web][] mongodb password
* `WEB_MONGO_HOST` - [ladjs/web][] mongodb hostname
* `WEB_MONGO_NAME` - [ladjs/web][] mongodb name
* `WEB_MONGO_PORT` - [ladjs/web][] mongodb port
* `WEB_MONGO_URI` - [ladjs/web][] mongodb connection URI
* `API_MONGO_USER` - [ladjs/api][] mongodb username
* `API_MONGO_PASS` - [ladjs/api][] mongodb password
* `API_MONGO_HOST` - [ladjs/api][] mongodb hostname
* `API_MONGO_NAME` - [ladjs/api][] mongodb name
* `API_MONGO_PORT` - [ladjs/api][] mongodb port
* `API_MONGO_URI` - [ladjs/api][] mongodb connection URI
* `BREE_MONGO_USER` - [breejs/bree][] mongodb username
* `BREE_MONGO_PASS` - [breejs/bree][] mongodb password
* `BREE_MONGO_HOST` - [breejs/bree][] mongodb hostname
* `BREE_MONGO_NAME` - [breejs/bree][] mongodb name
* `BREE_MONGO_PORT` - [breejs/bree][] mongodb port
* `BREE_MONGO_URI` - [breejs/bree][] mongodb connection URI
* `REDIS_PORT` - (default: `6379`) - redis port
* `REDIS_HOST` - (default: `localhost`) - redis hostname
* `REDIS_PASSWORD` - redis password
* `WEB_REDIS_PORT` - [ladjs/web][] redis port
* `WEB_REDIS_HOST` - [ladjs/web][] redis hostname
* `WEB_REDIS_PASSWORD` - [ladjs/web][] redis password
* `API_REDIS_PORT` - [ladjs/api][] redis port
* `API_REDIS_HOST` - [ladjs/api][] redis hostname
* `API_REDIS_PASSWORD` - [ladjs/api][] redis password
* `BREE_REDIS_PORT` - [breejs/bree][] redis port
* `BREE_REDIS_HOST` - [breejs/bree][] redis hostname
* `BREE_REDIS_PASSWORD` - [breejs/bree][] redis password
* `MANDARIN_REDIS_PORT` - [mandarin][] redis port
* `MANDARIN_REDIS_HOST` - [mandarin][] redis hostname
* `MANDARIN_REDIS_PASSWORD` - [mandarin][] redis password
* `CERTBOT_WELL_KNOWN_NAME` - letsencrypt wellknown name (see [certbot options][])
* `CERTBOT_WELL_KNOWN_CONTENTS` - letsencrypt wellknown contents (see [certbot options][])
* `VERIFICATION_PIN_TIMEOUT_MS` - (default: `5m`) - email verification pin expiry
* `VERIFICATION_PIN_EMAIL_INTERVAL_MS` - (default: `1m`) - email verification pin email interval
* `API_SECRETS` - (default: `secret`) - list of restricted api secrets
* `CACHE_RESPONSES` - (default: `false`) - cache specified responses (see [ladjs/koa-cache-responses](https://github.com/ladjs/koa-cache-responses))
* `SLACK_API_TOKEN` - slack api token (see [slack web api](https://slack.dev/node-slack-sdk/web-api))

#### SSL Configuration

To configure SSL for the web or API server simply set them in your `.env` file or pass them as environment variables.

> Web server:

* `WEB_PROTOCOL` - you must set this to `https`
* `WEB_SSL_KEY_PATH` - file path to your SSL key file (e.g. `/home/deploy/.ssl/web-key.pem`)
* `WEB_SSL_CERT_PATH` - file path to your SSL certificate file (e.g. `/home/deploy/.ssl/web-cert.pem`)
* `WEB_SSL_CA_PATH` (optional) - file path to your SSL certificate authority file (e.g. `/home/deploy/.ssl/web-ca-cert.pem`)

> API server:

* `API_PROTOCOL` - you must set this to `https`
* `API_SSL_KEY_PATH` - file path to your SSL key file (e.g. `/home/deploy/.ssl/api-key.pem`)
* `API_SSL_CERT_PATH` - file path to your SSL certificate file (e.g. `/home/deploy/.ssl/api-cert.pem`)
* `API_SSL_CA_PATH` (optional) - file path to your SSL certificate authority file (e.g. `/home/deploy/.ssl/api-ca-cert.pem`)

#### Outbound Email Configuration

By default in the development environment we simply render the email in your browser.

However in other environments such as production, you definitely want emails to be sent.

We built-in support for Postmark by default (though you can swap in your own `transport` provider in the `jobs/email.js` file):

1. Go to [https://postmarkapp.com](https://postmarkapp.com?utm_source=lad) – Start Free Trial

2. Create a free trial account, then click Get Started, and proceed to create a "Server" and "Sender Signature"

3. Copy/paste the "Server API token" under "Credentials" in your `.env` file (example below)

   ```diff
   -POSTMARK_API_TOKEN=
   +POSTMARK_API_TOKEN=ac6657eb-2732-4cfd-915b-912b1b10beb1
   ```

4. Modify the `SEND_EMAIL` variable in `.env` from `false` to `true`

#### Favicon and Touch Icon Configuration

You can customize the favicon and touch icons – just generate a new set at <https://realfavicongenerator.net> and overwrite the existing in the [assets](template/assets) folder.

Just make sure that any relative paths match up in the `assets/browserconfig.xml` and `assets/manifest.json` files.

#### Authentication Methods

We use Lad's auth package under the hood; so if you want to configure authentication providers you'll want to read more or contribute to [@ladjs/auth][ladjs-auth].

##### Google Auth

In order to add Google sign-in to your app (so users can log in with their Google account):

1. Go to <https://console.developers.google.com> – Create a project (and fill out your project information – if you need a 120x120px default image, [you can use this one](https://cdn.rawgit.com/ladjs/lad/82d38d64/media/lad-120x120.png) with a CDN path of <https://cdn.rawgit.com/ladjs/lad/82d38d64/media/lad-120x120.png>

2. Under your newly created project, go to Credentials – Create credentials – OAuth client ID – Web application

3. Set "Authorized JavaScript origins" to `http://yourdomain.com` (replace with your domain) and also `http://localhost:3000` (for local development)

4. Set "Authorized redirect URIs" to `http://yourdomain.com/auth/google/ok` (again, replace with your domain) and also `http://localhost:3000/auth/google/ok` (again, for local development)

5. Copy and paste the newly created key pair for respective properties in your `.env` file (example below)

   ```diff
   -GOOGLE_CLIENT_ID=
   +GOOGLE_CLIENT_ID=424623312719-73vn8vb4tmh8nht96q7vdbn3mc9pd63a.apps.googleusercontent.com
   -GOOGLE_CLIENT_SECRET=
   +GOOGLE_CLIENT_SECRET=Oys6WrHleTOksqXTbEY_yi07
   ```

6. In `.env`, make sure that `AUTH_GOOGLE_ENABLED=true` to enable this authentication method.

#### Translation Configuration

1. Go to <https://console.developers.google.com>
2. Enable the Google Translate API
3. Copy your API key and set it as the environment variable `GOOGLE_TRANSLATE_KEY=******`

#### Continuous Integration and Code Coverage

We strongly recommend that you use [SemaphoreCI][] for continuous integration and [Codecov][] for code coverage.

Here are the simple steps required to setup [SemaphoreCI][] with [Codecov][]:

1. Go to [SemaphoreCI][] and sign up for a free account

2. Once your repository is pushed to GitHub, add it as a project on SemaphoreCI

3. Configure your project on SemaphoreCI with the following build settings:

   > Replace `npm` with `yarn` if you're using [yarn][] as your package manager

   * Language: `JavaScript`
   * Node.js version: `10+` (latest LTS)
     > Note you can also add to `Setup` the script `nvm install latest` to install latest version if SemaphoreCI does not provide it from the drop-down
   * Setup: `npm install`
   * Job 1: `npm run test-coverage`
   * After job: `npm run coverage`

4. Go to [Codecov][] and sign up for a free account

5. Add your project on Codecov and copy to your clipboard the token

6. Go to SemaphoreCI's Project Settings for your project and add `CODECOV_TOKEN` as an environment variable (with the contents from your clipboard)

7. Run a test build ("Rebuild last revision") on SemaphoreCI and check to make sure your code coverage report uploads properly on Codecov

8. Ensure your `README.md` file has the build status and code coverage badges rendered properly (you will need to use a different badge link from each provider if your GitHub repository is private)

#### Amazon S3 and CloudFront Asset Setup

In order for your assets to get properly served in a production environment, you'll need to configure AWS:

1. Go to <https://console.aws.amazon.com/iam/home#security_credential> ‐ Access Keys – Create New Access Key

2. Copy and paste the newly created key pair for respective properties in your `.env` file (example below)

   ```diff
   -AWS_IAM_KEY=
   +AWS_IAM_KEY=AKIAJMH22P6W674YFC7Q
   -AWS_IAM_SECRET=
   +AWS_IAM_SECRET=9MpR1FOXwPEtPlrlU5WbHjnz2KDcKWSUcB+C5CpS
   ```

3. Enable your API by clicking on Overview and then clicking the Enable button

4. Go to <https://console.aws.amazon.com/s3/home> – Create Bucket

5. Create a bucket and copy/paste its name for the property in `.env` (example below)

   ```diff
   -AWS_S3_BUCKET=
   +AWS_S3_BUCKET=lad-development
   ```

6. Go to <https://console.aws.amazon.com/cloudfront/home> – Create Distribution – Get Started

7. Set "Origin Domain Name" equal to your S3 bucket name (their autocomplete drop-down will help you find it)

8. Leave the remaining defaults as is (some fields might be blank, this is OK)

9. Copy/paste the newly created Distribution ID and Domain Name for respective properties in your `.env` file (example below)

   ```diff
   -AWS_CF_DI=
   +AWS_CF_DI=E2IBEULE9QOPVE
   -AWS_CF_DOMAIN=
   +AWS_CF_DOMAIN=d36aditw73gdrz.cloudfront.net
   ```

### Tutorials

* [Writing Your App](https://github.com/koajs/koa#getting-started)
* [Continous Integration and Deployment](http://niftylettuce.com/posts/automated-node-app-ci-graceful-zerodowntime-github-pm2/)

### Community

* [Follow us on Twitter][twitter]
* [Join our Slack channel][slack]
* [Subscribe to our Twitch channel][twitch]
* [Visit Koa's Community section](https://github.com/koajs/koa#community).
* [Join Mongoose's Slack channel][mongoose-slack]