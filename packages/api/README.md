<div align="center">

![Sapphire Logo](https://cdn.skyra.pw/gh-assets/sapphire-banner.png)

# @sapphire/plugin-api

**Plugin for <a href="https://github.com/sapphiredev/framework">@sapphire/framework</a> to expose a REST API.**

[![GitHub](https://img.shields.io/github/license/sapphiredev/plugins)](https://github.com/sapphiredev/plugins/blob/main/LICENSE.md)
[![codecov](https://codecov.io/gh/sapphiredev/plugins/branch/main/graph/badge.svg?token=QWL8FB16BR)](https://codecov.io/gh/sapphiredev/plugins)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@sapphire/plugin-api?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@sapphire/plugin-api)
[![npm](https://img.shields.io/npm/v/@sapphire/plugin-api?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@sapphire/plugin-api)
[![Depfu](https://badges.depfu.com/badges/11bbf7392987e6fd51fc6559e1d42dfc/count.svg)](https://depfu.com/github/sapphiredev/plugins?project_id=15201)

</div>

## Description

Once your bot grows to a certain point and you start offering a variety of configuration options to your users, then you may want to write a website that allows people to change those configurations in a user friendly way. In order to be able to do this your bot will need some kind of API endpoint that can be called from the frontend. To easily provide this feature in your bot, there is this plugin.

## Features

-   Fully ready for TypeScript!
-   Provides a Decorator-based API to make developing your routes easy!
-   Follows common REST standards.
-   Includes ESM ready entrypoint
-   Premade OAUTH2 endpoint

## Installation

`@sapphire/plugin-api` depends on the following packages. Be sure to install these along with this package!

-   [`@sapphire/framework`](https://www.npmjs.com/package/@sapphire/framework)
-   [`@sapphire/pieces v1.x`](https://www.npmjs.com/package/@sapphire/pieces/v/1.2.5)
-   [`discord.js`](https://www.npmjs.com/package/discord.js)
-   [`discord-api-types`](https://www.npmjs.com/package/discord-api-types)

You can use the following command to install this package, or replace `npm install` with your package manager of choice.

```sh
npm install @sapphire/plugin-api @sapphire/framework @sapphire/pieces@1 discord.js discord-api-types
```

---

## Usage

Start by calling the register file in your code to start using this plugin:

**JavaScript**

```js
require('@sapphire/plugin-api/register');
```

**TypeScript**

```ts
import '@sapphire/plugin-api/register';
```

Then you can start providing some extra options to where you initialize SapphireClient. This will be `new SapphireClient` or if you use `extends SapphireClient`, then whichever class you initialize for your client.

```js
{
  auth: {
    id: '', // The User ID of your discord bot
    secret: '', // The bot secret of your discord bot. Get it from https://discord.com/developers/applications
    cookie: '', // The name of the authentication cookie. Defaults to "SAPPHIRE_AUTH"
    redirect: '', // The URL that users should be redirected to after a successful authentication
    scopes: [], // The scopes that should be given to the authentication. Defaults to ['identify']
    transformers: '' // Optional transformers to use when you want to transform the raw data from Discord to some data that your website can better understand. Defaults to []
  },
  prefix: '/', // The prefix for all routes, e.g. / or v1/.
  origin: '', // The origin header to be set on every request at 'Access-Control-Allow-Origin'. Defaults to *
  listenOptions: { // Any options passed to the NodeJS "net" internal server.listen function, see https://nodejs.org/api/net.html#net_server_listen_options_callback
    port: 3000 // This is an option that should be set, it is the port on which the API will start.
  }
}
```

## API Documentation

For the full API documentation please refer to the TypeDoc generated [documentation](https://sapphiredev.github.io/plugins/modules/_sapphire_plugin_api.html).

## Buy us some doughnuts

Sapphire Community is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, Paypal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

|   Donate With   |                       Address                       |
| :-------------: | :-------------------------------------------------: |
| Open Collective | [Click Here](https://sapphirejs.dev/opencollective) |
|      Ko-fi      |      [Click Here](https://sapphirejs.dev/kofi)      |
|     Patreon     |    [Click Here](https://sapphirejs.dev/patreon)     |
|     PayPal      |     [Click Here](https://sapphirejs.dev/paypal)     |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://favware.tech/"><img src="https://avatars3.githubusercontent.com/u/4019718?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeroen Claassens</b></sub></a><br /><a href="https://github.com/sapphiredev/plugins/commits?author=Favna" title="Code">💻</a> <a href="#infra-Favna" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#projectManagement-Favna" title="Project Management">📆</a></td>
    <td align="center"><a href="https://quantumlytangled.com"><img src="https://avatars1.githubusercontent.com/u/7919610?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nejc Drobnic</b></sub></a><br /><a href="https://github.com/sapphiredev/plugins/commits?author=QuantumlyTangled" title="Code">💻</a> <a href="https://github.com/sapphiredev/plugins/commits?author=QuantumlyTangled" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/kyranet"><img src="https://avatars0.githubusercontent.com/u/24852502?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Antonio Román</b></sub></a><br /><a href="https://github.com/sapphiredev/plugins/commits?author=kyranet" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/vladfrangu"><img src="https://avatars3.githubusercontent.com/u/17960496?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vlad Frangu</b></sub></a><br /><a href="https://github.com/sapphiredev/plugins/pulls?q=is%3Apr+reviewed-by%3Avladfrangu" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/apps/depfu"><img src="https://avatars3.githubusercontent.com/in/715?v=4?s=100" width="100px;" alt=""/><br /><sub><b>depfu[bot]</b></sub></a><br /><a href="#maintenance-depfu[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/apps/dependabot"><img src="https://avatars0.githubusercontent.com/in/29110?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dependabot[bot]</b></sub></a><br /><a href="#maintenance-dependabot[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/apps/allcontributors"><img src="https://avatars0.githubusercontent.com/in/23186?v=4?s=100" width="100px;" alt=""/><br /><sub><b>allcontributors[bot]</b></sub></a><br /><a href="https://github.com/sapphiredev/plugins/commits?author=allcontributors[bot]" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Nytelife26"><img src="https://avatars1.githubusercontent.com/u/22531310?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler J Russell</b></sub></a><br /><a href="https://github.com/sapphiredev/plugins/commits?author=Nytelife26" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Stitch07"><img src="https://avatars.githubusercontent.com/u/29275227?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stitch07</b></sub></a><br /><a href="https://github.com/sapphiredev/plugins/commits?author=Stitch07" title="Code">💻</a> <a href="https://github.com/sapphiredev/plugins/issues?q=author%3AStitch07" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/PlatinBae"><img src="https://avatars.githubusercontent.com/u/50950966?v=4?s=100" width="100px;" alt=""/><br /><sub><b>PlatinBae</b></sub></a><br /><a href="https://github.com/sapphiredev/plugins/commits?author=PlatinBae" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
