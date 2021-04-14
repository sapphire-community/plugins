<div align="center">

![Sapphire Logo](https://cdn.skyra.pw/gh-assets/sapphire.png)

# @sapphire/plugin-subcommands

**Plugin for <a href="https://github.com/sapphire-community/framework">@sapphire/framework</a> so your commands can have subcommands.**

[![GitHub](https://img.shields.io/github/license/sapphire-community/plugins)](https://github.com/sapphire-community/plugins/blob/main/LICENSE.md)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/sapphire-community/plugins.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/sapphire-community/plugins/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/sapphire-community/plugins.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/sapphire-community/plugins/context:javascript)
[![Coverage Status](https://coveralls.io/repos/github/sapphire-community/plugins/badge.svg?branch=main)](https://coveralls.io/github/sapphire-community/plugins?branch=main)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@sapphire/plugin-subcommands?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@sapphire/plugin-subcommands)
[![npm](https://img.shields.io/npm/v/@sapphire/plugin-subcommands?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@sapphire/plugin-subcommands)
[![Depfu](https://badges.depfu.com/badges/11bbf7392987e6fd51fc6559e1d42dfc/count.svg)](https://depfu.com/github/sapphire-community/plugins?project_id=15201)

</div>

## Description

Subcommands are a way to split 1 command into multiple. This can in particular be very useful for configuration commands with subcommands such as `set`, `reset` and `remove`.

## Features

-   Fully ready for TypeScript!
-   Includes ESM ready entrypoint
-   Type generics for easy extension in TypeScript
-   Input/Output mapping

## Installation

```sh
yarn add @sapphire/plugin-subcommands
```

---

## Usage

_With TypeScript:_

```typescript
import { SubCommandPluginCommand } from '@sapphire/plugin-subcommands';
import { ApplyOptions } from '@sapphire/decorators';
import type { Args } from '@sapphire/framework';
import type { Message } from 'discord.js';

// Using ApplyOptions decorator makes it easy to configure
@ApplyOptions<SubCommandPluginCommand.Options>({
	subCommands: ['add', 'remove', 'list', 'reset', { input: 'show', default: true }]
})
// Extend `SubCommandPluginCommand` instead of `Command`
export class UserCommand extends SubCommandPluginCommand {
	// Do not include a `run` method, each method name should match with the subcommand names
	public async add(message: Message, args: Args) {}

	public async remove(message: Message, args: Args) {}

	public async list(message: Message, args: Args) {}

	public async reset(message: Message, args: Args) {}

	public async show(message: Message, args: Args) {}
}
```

_With JavaScript:_

```javascript

const { SubCommandPluginCommand } = require('@sapphire/plugin-subcommands');

// Extend `SubCommandPluginCommand` instead of `Command`
export class UserCommand extends SubCommandPluginCommand {

	constructor(context, options) {
		super(context, {
				...options,
				subCommands: ['add', 'remove', 'list', 'reset', { input: 'show', default: true }]
			}
		)
	}

	// Do not include a `run` method, each method name should match with the subcommand names
	public async add(message, args) {}

	public async remove(message, args) {}

	public async list(message, args) {}

	public async reset(message, args) {}

	public async show(message, args) {}
}
```

## SubCommands Documentation

For the full @sapphire/plugin-subcommands documentation please refer to the TypeDoc generated [documentation](https://sapphire-community.github.io/plugins/modules/_sapphire_plugin_subcommands.html).

## Buy us some doughnuts

Sapphire Community is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, Paypal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

|   Donate With   |                       Address                       |
| :-------------: | :-------------------------------------------------: |
| Open Collective | [Click Here](https://sapphirejs.com/opencollective) |
|      Ko-fi      |      [Click Here](https://sapphirejs.com/kofi)      |
|     Patreon     |    [Click Here](https://sapphirejs.com/patreon)     |
|     PayPal      |     [Click Here](https://sapphirejs.com/paypal)     |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://favware.tech/"><img src="https://avatars3.githubusercontent.com/u/4019718?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeroen Claassens</b></sub></a><br /><a href="https://github.com/sapphire-community/plugins/commits?author=Favna" title="Code">💻</a> <a href="#infra-Favna" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#projectManagement-Favna" title="Project Management">📆</a></td>
    <td align="center"><a href="https://quantumlytangled.com"><img src="https://avatars1.githubusercontent.com/u/7919610?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nejc Drobnic</b></sub></a><br /><a href="https://github.com/sapphire-community/plugins/commits?author=QuantumlyTangled" title="Code">💻</a> <a href="https://github.com/sapphire-community/plugins/commits?author=QuantumlyTangled" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/kyranet"><img src="https://avatars0.githubusercontent.com/u/24852502?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Antonio Román</b></sub></a><br /><a href="https://github.com/sapphire-community/plugins/commits?author=kyranet" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/vladfrangu"><img src="https://avatars3.githubusercontent.com/u/17960496?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vlad Frangu</b></sub></a><br /><a href="https://github.com/sapphire-community/plugins/pulls?q=is%3Apr+reviewed-by%3Avladfrangu" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/apps/depfu"><img src="https://avatars3.githubusercontent.com/in/715?v=4?s=100" width="100px;" alt=""/><br /><sub><b>depfu[bot]</b></sub></a><br /><a href="#maintenance-depfu[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/apps/dependabot"><img src="https://avatars0.githubusercontent.com/in/29110?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dependabot[bot]</b></sub></a><br /><a href="#maintenance-dependabot[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/apps/allcontributors"><img src="https://avatars0.githubusercontent.com/in/23186?v=4?s=100" width="100px;" alt=""/><br /><sub><b>allcontributors[bot]</b></sub></a><br /><a href="https://github.com/sapphire-community/plugins/commits?author=allcontributors[bot]" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Nytelife26"><img src="https://avatars1.githubusercontent.com/u/22531310?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler J Russell</b></sub></a><br /><a href="https://github.com/sapphire-community/plugins/commits?author=Nytelife26" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Stitch07"><img src="https://avatars.githubusercontent.com/u/29275227?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stitch07</b></sub></a><br /><a href="https://github.com/sapphire-community/plugins/commits?author=Stitch07" title="Code">💻</a> <a href="https://github.com/sapphire-community/plugins/issues?q=author%3AStitch07" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
