<div align="center">

![Sapphire Logo](https://cdn.skyra.pw/gh-assets/sapphire.png)

# @sapphire/plugin-logger

**Plugin for <a href="https://github.com/sapphire-project/framework">@sapphire/framework</a> to have pretty console output.**

[![GitHub](https://img.shields.io/github/license/sapphire-project/plugins)](https://github.com/sapphire-project/plugins/blob/main/LICENSE.md)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/sapphire-project/plugins.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/sapphire-project/plugins/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/sapphire-project/plugins.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/sapphire-project/plugins/context:javascript)
[![Coverage Status](https://coveralls.io/repos/github/sapphire-project/plugins/badge.svg?branch=main)](https://coveralls.io/github/sapphire-project/plugins?branch=main)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@sapphire/plugin-logger?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@sapphire/plugin-logger)
[![npm](https://img.shields.io/npm/v/@sapphire/plugin-logger?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@sapphire/plugin-logger)
[![Depfu](https://badges.depfu.com/badges/11bbf7392987e6fd51fc6559e1d42dfc/count.svg)](https://depfu.com/github/sapphire-project/plugins?project_id=15201)

</div>

## Description

A Logger implementation that implements Sapphire's `ILogger` interface and implements timestamp and style formatting
with the blazing fast [`colorette`](https://www.npmjs.com/package/colorette) library.

## Features

-   Fully ready for TypeScript!
-   Includes ESM ready entrypoint
-   [`NO_COLOR`](https://no-color.org) friendly, inherited by colorette

## Installation

```sh
yarn add -D @sapphire/plugin-logger
```

---

## Usage

```typescript
import '@sapphire/plugin-logger/register';
```

## Logger Documentation

For the full @sapphire/plugin-logger documentation please refer to the TypeDoc generated [documentation](https://sapphire-project.github.io/plugins/modules/_sapphire_plugin_logger.html).

## Buy us some doughnuts

Sapphire Project is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, Paypal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

|   Donate With   |                                             Address                                              |
| :-------------: | :----------------------------------------------------------------------------------------------: |
| Open Collective |                    [Click Here](https://opencollective.com/sapphire-project)                     |
|      Ko-fi      |                         [Click Here](https://ko-fi.com/sapphireproject)                          |
|     Patreon     |                      [Click Here](https://www.patreon.com/sapphire_project)                      |
|     PayPal      | [Click Here](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SP738BQTQQYZY) |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://favware.tech/"><img src="https://avatars3.githubusercontent.com/u/4019718?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeroen Claassens</b></sub></a><br /><a href="https://github.com/sapphire-project/plugins/commits?author=Favna" title="Code">💻</a> <a href="#infra-Favna" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#projectManagement-Favna" title="Project Management">📆</a></td>
    <td align="center"><a href="https://quantumlytangled.com"><img src="https://avatars1.githubusercontent.com/u/7919610?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nejc Drobnic</b></sub></a><br /><a href="https://github.com/sapphire-project/plugins/commits?author=QuantumlyTangled" title="Code">💻</a> <a href="https://github.com/sapphire-project/plugins/commits?author=QuantumlyTangled" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
