# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.2.1](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@2.2.0...@sapphire/plugin-logger@2.2.1) (2022-04-01)

**Note:** Version bump only for package @sapphire/plugin-logger

# [2.2.0](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@2.1.3...@sapphire/plugin-logger@2.2.0) (2022-03-06)

### Features

-   allow module: NodeNext ([#251](https://github.com/sapphiredev/plugins/issues/251)) ([31bab09](https://github.com/sapphiredev/plugins/commit/31bab09834ebc1bc646e4a2849dbd24c65f08c0e))

## [2.1.3](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@2.1.2...@sapphire/plugin-logger@2.1.3) (2022-01-23)

**Note:** Version bump only for package @sapphire/plugin-logger

## [2.1.2](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@2.1.1...@sapphire/plugin-logger@2.1.2) (2022-01-13)

**Note:** Version bump only for package @sapphire/plugin-logger

## [2.1.1](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@2.1.0...@sapphire/plugin-logger@2.1.1) (2021-12-06)

### Bug Fixes

-   **deps:** update dependency @sapphire/time-utilities to ^1.5.0 ([d4cf912](https://github.com/sapphiredev/plugins/commit/d4cf912f1e77ad4ce74e9caa4ed427e60ad4b889))

# [2.1.0](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@2.0.2...@sapphire/plugin-logger@2.1.0) (2021-11-21)

### Features

-   expose and use namespaces for options, context, etc ([#176](https://github.com/sapphiredev/plugins/issues/176)) ([33452da](https://github.com/sapphiredev/plugins/commit/33452da808d91313a5d3bf680e11b5208ac67442))

## [2.0.2](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@2.0.1...@sapphire/plugin-logger@2.0.2) (2021-11-06)

### Bug Fixes

-   **docs:** replace command usage of `run` to `messageRun` ([#160](https://github.com/sapphiredev/plugins/issues/160)) ([415adb8](https://github.com/sapphiredev/plugins/commit/415adb85b884da5d0f1f2ce07a9d46134f2bcb12))

## [2.0.1](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@2.0.0...@sapphire/plugin-logger@2.0.1) (2021-10-17)

### Bug Fixes

-   allow more node & npm versions in engines field ([ce5b12f](https://github.com/sapphiredev/plugins/commit/ce5b12f8142297bceda49b85574a95a3cf9112ab))

# [2.0.0](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@1.0.13...@sapphire/plugin-logger@2.0.0) (2021-10-16)

### Bug Fixes

-   **api:** update to Discord API v9 ([#124](https://github.com/sapphiredev/plugins/issues/124)) ([b194fe6](https://github.com/sapphiredev/plugins/commit/b194fe613ec04f327a2aa5ae8d051c400ed105c8))
-   **deps:** update dependency colorette to v2 ([#142](https://github.com/sapphiredev/plugins/issues/142)) ([5ee876b](https://github.com/sapphiredev/plugins/commit/5ee876b3c43c688861168063b92fb343ba184fc9))

### Features

-   **i18next:** update i18next dependency ([#129](https://github.com/sapphiredev/plugins/issues/129)) ([96519de](https://github.com/sapphiredev/plugins/commit/96519de5de253db390ed9a76ed073ffe1eabd187))
-   **subcommands:** migrate `Command#run` to `Command#messageRun` ([#157](https://github.com/sapphiredev/plugins/issues/157)) ([2960711](https://github.com/sapphiredev/plugins/commit/29607111c4e4f61ece463e10854982f205879996))

### BREAKING CHANGES

-   **i18next:** i18next has been updated to v21.0.1. Please also seee the breaking changes for i18next [here](https://github.com/i18next/i18next/blob/master/CHANGELOG.md#2100) and their migration guide [here](https://www.i18next.com/misc/migration-guide#v-20-x-x-to-v-21-0-0)

-   chore: activate renovate

## [1.0.13](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@1.0.12...@sapphire/plugin-logger@1.0.13) (2021-06-19)

### Bug Fixes

-   **docs:** update-tsdoc-for-vscode-may-2021 ([#92](https://github.com/sapphiredev/plugins/issues/92)) ([ac52451](https://github.com/sapphiredev/plugins/commit/ac52451f3cf5560a8b93931411cc04497c00d4a9))
-   remove peer deps, update dev deps, update READMEs ([#91](https://github.com/sapphiredev/plugins/issues/91)) ([3489b1d](https://github.com/sapphiredev/plugins/commit/3489b1dc1e8a7c64c255595b3d441cd0b5bac936))
-   **logger:** specify package side effects ([03e04d2](https://github.com/sapphiredev/plugins/commit/03e04d2751f1897e8e2cb6043ceac72681ce1049))

## [1.0.12](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@1.0.11...@sapphire/plugin-logger@1.0.12) (2021-05-02)

### Bug Fixes

-   drop the `www.` from the SapphireJS URL ([a86049f](https://github.com/sapphiredev/plugins/commit/a86049f185f0ccb12d61379dd82255b36d4fa145))
-   update all the SapphireJS URLs from `.com` to `.dev` ([c5fd156](https://github.com/sapphiredev/plugins/commit/c5fd15691abb9a9712dc4b8aebd8400f6d91f719))

## [1.0.11](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@1.0.10...@sapphire/plugin-logger@1.0.11) (2021-04-21)

### Bug Fixes

-   change all Sapphire URLs from "project"->"community" & use our domain where applicable 👨‍🌾🚜 ([#75](https://github.com/sapphiredev/plugins/issues/75)) ([e437dc4](https://github.com/sapphiredev/plugins/commit/e437dc45fcd4d22ab2dcdb0e70c67cc5856883c0))

## [1.0.10](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@1.0.9...@sapphire/plugin-logger@1.0.10) (2021-04-03)

**Note:** Version bump only for package @sapphire/plugin-logger

## [1.0.9](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@1.0.8...@sapphire/plugin-logger@1.0.9) (2021-03-16)

### Bug Fixes

-   update dependencies, add tslib, bump framework to v1.0.0 ([880b761](https://github.com/sapphiredev/plugins/commit/880b7614d857f23fcbcd351e69795c451a95f49c))

## [1.0.8](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@1.0.7...@sapphire/plugin-logger@1.0.8) (2021-02-16)

**Note:** Version bump only for package @sapphire/plugin-logger

## [1.0.7](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@1.0.6...@sapphire/plugin-logger@1.0.7) (2021-02-07)

### Bug Fixes

-   **logger:** update dependencies in package.json ([9386b3a](https://github.com/sapphiredev/plugins/commit/9386b3a30773e34ac1a50fe3d4ad0452a93a9fc1))

## [1.0.6](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@1.0.5...@sapphire/plugin-logger@1.0.6) (2021-01-23)

**Note:** Version bump only for package @sapphire/plugin-logger

## [1.0.5](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@1.0.4...@sapphire/plugin-logger@1.0.5) (2021-01-09)

**Note:** Version bump only for package @sapphire/plugin-logger

## [1.0.4](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@1.0.3...@sapphire/plugin-logger@1.0.4) (2020-12-28)

### Bug Fixes

-   **api,logger:** add type augments to index.ts ([ae1f4da](https://github.com/sapphiredev/plugins/commit/ae1f4da9671a531edf10555242e21f39eb3b0d17))
-   **api,logger:** properly export ESM register ([7cf7ea9](https://github.com/sapphiredev/plugins/commit/7cf7ea9a9c91f73874035b0512292cc08d93e38e))
-   **api,logger:** third attempt at fixing register and types ([faa3ee2](https://github.com/sapphiredev/plugins/commit/faa3ee2f53d2ca1153a7eff2a64e2abf3feaae85))
-   **logger:** fix location of register file ([6e9a6f7](https://github.com/sapphiredev/plugins/commit/6e9a6f7ae4de5222e879394d717ae04ffb048aeb))
-   **logger:** include register in github publishes ([e297af8](https://github.com/sapphiredev/plugins/commit/e297af8cada0ff3cf94bbe17e2f1c340743cd4d2))

## [1.0.3](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@1.0.2...@sapphire/plugin-logger@1.0.3) (2020-12-24)

**Note:** Version bump only for package @sapphire/plugin-logger

## [1.0.2](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@1.0.1...@sapphire/plugin-logger@1.0.2) (2020-12-24)

### Bug Fixes

-   **logger:** append extra space in default infix ([0daa435](https://github.com/sapphiredev/plugins/commit/0daa4351f75782bde0a2e763c61ca401e559d64f))

## [1.0.1](https://github.com/sapphiredev/plugins/compare/@sapphire/plugin-logger@1.0.0...@sapphire/plugin-logger@1.0.1) (2020-12-24)

### Bug Fixes

-   **logger:** remove second spread ([61cddb7](https://github.com/sapphiredev/plugins/commit/61cddb7dfd433c0afd8aeddd6a42b78a1be17850))
-   **logger:** use pre-generics initialization hook ([d8d3ce1](https://github.com/sapphiredev/plugins/commit/d8d3ce183c4e246a9707cbbfca0c69b135be7267))

# 1.0.0 (2020-12-24)

### Features

-   added plugin-logger ([#25](https://github.com/sapphiredev/plugins/issues/25)) ([192a8ca](https://github.com/sapphiredev/plugins/commit/192a8cac6c34c4dd1cc8e12dd5ba3307926c467d))
