# Changelog

All notable changes to this project will be documented in this file.

## [5.1.0](https://www.github.com/Fdawgs/ydh-fhir-listeners/compare/v5.0.0...v5.1.0) (2021-07-15)


### Features

* **medicationstatement:** add note and additionalinstruction key/values ([#221](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/221)) ([db5b06c](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/db5b06c006d284e57789c3342fefb3d692742ca9))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 35.4.0 to 35.4.1 ([d3a6a0e](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/d3a6a0e595c0892bc94c12fe3a0ebd41827c8073))
* **deps-dev:** bump prettier from 2.3.1 to 2.3.2 ([a3076d6](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/a3076d6f801dcfdbcaec258c08e33ddac1b660c9))
* **deps:** bump actions/setup-node from 2.1.5 to 2.2.0 ([f36e60b](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/f36e60b3d9fc00660c35230f37f12e1c7f2d633b))


### Miscellaneous

* **vscode:** disable redhat telemetry ([08b89e8](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/08b89e8942274ae68b2c27cb5a7c7c366442c360))
* **vscode:** remove user space config setting ([b4a6190](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/b4a619095bea07b6530e524138cebe6132043d00))


### Continuous Integration

* **cd:** move perf optimizations and refactoring into same section ([a070746](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/a0707466507f185b56e8943f1f5a5582083bbb18))

## [5.0.0](https://www.github.com/Fdawgs/ydh-fhir-listeners/compare/v4.0.1...v5.0.0) (2021-06-25)


### ⚠ BREAKING CHANGES

* **patient:** `deceasedBoolean` key removed

### Features

* **patient:** use `deceasedDateTime` instead of `deceasedBoolean` ([8fd6eb1](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/8fd6eb1b6f12920e42124276ba75594e0677ad0d))


### Bug Fixes

* **patient:** add work phone contact number ([8f9b0cf](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/8f9b0cf94758ef8ed8a140799eef4aae30138642))
* **patient:** meta.lastupdated substring check ([9892588](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/98925887d51437751d74dd4f38cb671439147ed3))
* treat empty strings as undefined values ([bec7cbe](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/bec7cbe2378f4dad03ece81c55a6d00e13afc6ab))


### Miscellaneous

* **ci:** replace `node-version` key with shorter `node` ([#191](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/191)) ([2a1dd8c](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/2a1dd8c3448bf84b8daee866a53b8b69516cf6f7))
* **workflows:** remove `stale.yml` ([92e5d9d](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/92e5d9d676ff4bd091bf60c8d9e3507e2028bb04))


### Documentation

* **readme:** grammar and wordiness fixes ([cdc304d](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/cdc304da0eec5233762e96c3162b43b8988d44ca))
* **readme:** update contributing section ([1826517](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/1826517af5777102bf9f91cd24e33fd3a8005a24))


### Continuous Integration

* fix key usage in `action/setup-node` ([a8388b8](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/a8388b85e02eedd98378edf4d51c8dc3778faeae))
* **link-check:** reduce frequency from daily to monthly ([#205](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/205)) ([47cc2e1](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/47cc2e1ebf231fcaee1b59d24753621b762f151e))


### Dependencies

* **deps-dev:** bump @babel/cli from 7.13.16 to 7.14.3 ([34195f4](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/34195f4608c1bfce0744dd95961c4a5ff3f409de))
* **deps-dev:** bump @babel/cli from 7.14.3 to 7.14.5 ([eb4f0a7](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/eb4f0a76a87a3fee9271219aa26b824b6182dccb))
* **deps-dev:** bump @babel/core from 7.14.0 to 7.14.3 ([df63add](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/df63add112cdbc7b576ec1d05a21d4c8337bd700))
* **deps-dev:** bump @babel/core from 7.14.3 to 7.14.6 ([6e2a1f4](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/6e2a1f45703e697b0692b060fde28788571b76ff))
* **deps-dev:** bump @babel/node from 7.13.13 to 7.14.2 ([f294b66](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/f294b668b79a8344c133f5f2d2c2470ebcd3dc00))
* **deps-dev:** bump @babel/node from 7.14.2 to 7.14.7 ([65bc2cd](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/65bc2cdc5b4d3047f207cce8e1bbf89401742292))
* **deps-dev:** bump @babel/preset-env from 7.14.1 to 7.14.4 ([3b610f5](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/3b610f5de933efcc7296778b8fc135cb9bee824e))
* **deps-dev:** bump @babel/preset-env from 7.14.4 to 7.14.7 ([c88cf23](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/c88cf23ec070ba602f8be332b9eb3054bdb14d0c))
* **deps-dev:** bump @commitlint/cli from 12.1.1 to 12.1.4 ([8fddc61](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/8fddc61b626a01f9320a42fba9a1ca17fb464373))
* **deps-dev:** bump @commitlint/config-conventional ([00ac1f7](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/00ac1f700f9cd89db9288872a9f16fa0ace04603))
* **deps-dev:** bump eslint from 7.26.0 to 7.27.0 ([07fd15f](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/07fd15fb37ab79f2f2a10400e97727c895f9c93b))
* **deps-dev:** bump eslint from 7.27.0 to 7.29.0 ([f15a3bd](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/f15a3bd6404d0a0ce1dfaa4127a3d6cb4326fe33))
* **deps-dev:** bump eslint-plugin-import from 2.22.1 to 2.23.4 ([2d81306](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/2d81306af14d86fcf38d01d3dd2684a998e6e40b))
* **deps-dev:** bump eslint-plugin-jsdoc from 33.2.0 to 35.1.2 ([86d374c](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/86d374c79708e4e9e71adab16cd69fc6d5e8b3a1))
* **deps-dev:** bump eslint-plugin-jsdoc from 35.1.2 to 35.4.0 ([0888719](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/0888719f0a66a4a80d9fc87bccd466f27640a718))
* **deps-dev:** bump prettier from 2.3.0 to 2.3.1 ([79c16c4](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/79c16c405ca6e441416fe854d7b5254f99578bdf))
* **deps:** bump actions/cache from 2.1.5 to 2.1.6 ([86979ed](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/86979ed406899730a716c70cb5212b220f60f493))
* **deps:** bump actions/upload-artifact from 2.2.3 to 2.2.4 ([f0d886b](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/f0d886b9a72b7cf620b44fb594975ee950d594ca))
* **deps:** bump browserslist from 4.16.3 to 4.16.6 ([09aa996](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/09aa99693dc742e1f3852f8b95f09c877f137513))
* **deps:** bump wagoid/commitlint-github-action from 3.1.2 to 3.1.4 ([5e6d867](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/5e6d867cf10f7955cde2631e33572ddc3487f74f))

### [4.0.1](https://www.github.com/Fdawgs/ydh-fhir-listeners/compare/v4.0.0...v4.0.1) (2021-05-11)


### Bug Fixes

* **encounters:** correct status case order ([1e75583](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/1e755834c37b36d672e2b4a5e35aa244b99c99c7))


### Miscellaneous

* lint with new prettier version ([366d48c](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/366d48c054562c5fcbf567e9a4ec69d86b41fd96))


### Dependencies

* **deps-dev:** bump dependencies ([40c6c0a](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/40c6c0a79ad91e7c3d798cba3afa0b8028da34a4))
* **deps:** bump wagoid/commitlint-github-action from v3.1.1 to v3.1.2 ([3653e87](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/3653e87b299b185d7405556801b5675bc55ebd90))

## [4.0.0](https://www.github.com/Fdawgs/ydh-fhir-listeners/compare/v3.2.3...v4.0.0) (2021-05-06)


### ⚠ BREAKING CHANGES

* remove support for nodejs v10, as it is EOL as of 2021-04-30

### Miscellaneous

* remove support for nodejs v10 ([abf7afd](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/abf7afddd3463aded2046ded8d30fe706a3347de))


### Continuous Integration

* add cleanup-run job ([45126ce](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/45126ce32001b97055b6e32ecb61758b5985652d))
* **link-check:** fix skip regex ([9242c59](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/9242c590f784fe9ec9d86cb8e4f9ce70efe7d05d))
* use nodejs v16 for workflows ([fbfc6a0](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/fbfc6a0aa1498f53cb8176d7b9393034f9eed04d))


### Dependencies

* **deps-dev:** bump @babel/cli from 7.13.10 to 7.13.14 ([134b7d3](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/134b7d3fa97183616a8f27d5a7ce054a3adbcd39))
* **deps-dev:** bump @babel/cli from 7.13.14 to 7.13.16 ([c1d1d8a](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/c1d1d8a0a0da4996173045bbfa97da50645d5b78))
* **deps-dev:** bump @babel/core from 7.13.13 to 7.13.14 ([ca0802b](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/ca0802b08fa1c03656dfdd3ccae93b54b617007f))
* **deps-dev:** bump @babel/core from 7.13.14 to 7.14.0 ([7438f2b](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/7438f2b3e59f6574f4991faf3adacba8c576dfce))
* **deps-dev:** bump @babel/preset-env from 7.13.12 to 7.14.0 ([c29f0c0](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/c29f0c03444bc01c5cfaf1b27e1e405d8a90c21a))
* **deps-dev:** bump @babel/preset-env from 7.14.0 to 7.14.1 ([77268e8](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/77268e858a8244b8aacadad8b1f56b3742275b8b))
* **deps-dev:** bump @commitlint/cli from 12.0.1 to 12.1.1 ([dd98f5f](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/dd98f5f6ef20d954d78ea928eaaa715e8b0679ab))
* **deps-dev:** bump @commitlint/config-conventional ([6360cef](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/6360cef616e5683356e908372f5e97eabd9b5a15))
* **deps-dev:** bump eslint from 7.23.0 to 7.25.0 ([dac63ba](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/dac63baf9c5e562dfcfe81a2b26974332f7fa64b))
* **deps-dev:** bump eslint-config-prettier from 8.1.0 to 8.3.0 ([14cd871](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/14cd871218092a2b3ce80a23d3a116f6bf72fbf1))
* **deps-dev:** bump eslint-plugin-jsdoc from 32.3.0 to 33.0.0 ([3ba27f9](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/3ba27f9fa3fa462f32be7b9c79502462b48d1fee))
* **deps-dev:** bump eslint-plugin-jsdoc from 33.0.0 to 33.1.0 ([9eeed27](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/9eeed27a00c7e0535aa5f6121ca3086bc12c6758))
* **deps:** bump actions/cache from v2.1.4 to v2.1.5 ([24b506c](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/24b506c95f21c7fe4517ca88523bee8e379cc60f))
* **deps:** bump actions/github-script from v3.1.0 to v3.1.1 ([01e16ef](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/01e16ef5234fa4ef56b5e362ebd2032a4d617384))
* **deps:** bump actions/github-script from v3.1.1 to v4.0.2 ([05d9e6f](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/05d9e6f973292123500ec363dc62a20dce50bdc9))
* **deps:** bump actions/upload-artifact from v2.2.2 to v2.2.3 ([7b1424e](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/7b1424e51455462c42107debca49de7d48b060aa))
* **deps:** bump GoogleCloudPlatform/release-please-action ([d662c29](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/d662c29194fe5e122e421ce47e82131ca92fd711))
* **deps:** bump GoogleCloudPlatform/release-please-action ([4dd56f3](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/4dd56f35bbd6672d68fd2a2e9c0dab02755b7474))
* **deps:** bump typoci/spellcheck-action from v0.4.0 to v1.1.0 ([618bbdb](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/618bbdb22069fcb2b0e8f3249dd0e9612acddb78))
* **deps:** bump wagoid/commitlint-github-action from v3.0.6 to v3.1.0 ([1ffd146](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/1ffd14654fd088824bda1512cb19718512b8def0))
* **deps:** bump wagoid/commitlint-github-action from v3.1.0 to v3.1.1 ([938c6ee](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/938c6ee03320db2738bdcae2e6f08842f5547960))


### Documentation

* grammar and readability fixes ([e8e5d99](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/e8e5d9925e2ff416a8e3a2ace752c4a1b60d6d6e))
* **readme:** add data quality issue/caveat for gp organization name ([f70f84f](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/f70f84fa7511c36d139d9089f96dc747e7c2c173))

### [3.2.3](https://www.github.com/Fdawgs/ydh-fhir-listeners/compare/v3.2.2...v3.2.3) (2021-03-29)


### Miscellaneous

* **prettierignore:** add yarn lock file ([51d9f52](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/51d9f525b3a0d4b97634ee5405418725c317a875))
* **prettierignore:** remove `dist` ([9510df9](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/9510df97cf23dd5c0d025c97daa4511b6e26adc7))
* **readme:** replace jpg ydh logo with svg ([09432c5](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/09432c5cf7cd9ed23ad81815ec6a226f69cb1851))
* remove contraction usage in comments ([0833d37](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/0833d37ab92f9dd94f868f7c28c210c39a712781))
* **workflows:** rename ci and perf sections ([7f6e00a](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/7f6e00a144e7956eab939c916aa61e6e8fccb035))


### Dependencies

* **deps-dev:** bump @babel/cli from 7.13.0 to 7.13.10 ([4057918](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/40579185c0344a651dd61f9d2b6ee17a851e74a5))
* **deps-dev:** bump @babel/core from 7.13.8 to 7.13.13 ([e555593](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/e5555931336a586cb2e979e8db2e4398a4ae2d9f))
* **deps-dev:** bump @babel/node from 7.13.0 to 7.13.13 ([213deb1](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/213deb16c011347102e12472f266970400c1a72f))
* **deps-dev:** bump @babel/preset-env from 7.13.8 to 7.13.12 ([6938418](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/693841884ad9aae66ac5ed1fb8238e50753b397e))
* **deps-dev:** bump eslint from 7.21.0 to 7.23.0 ([f9b7fb4](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/f9b7fb4784fa14fe9ddfd8e8a834936cd8be4fcc))
* **deps-dev:** bump eslint-plugin-jsdoc from 32.2.0 to 32.3.0 ([9d0d926](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/9d0d92625e82bd84211d1eba659cb35a3f36b730))
* **deps-dev:** bump husky from 4.3.8 to 6.0.0 ([2951280](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/2951280faee3d88fc742e943746ea73d8fd52c3d))
* **deps:** bump actions/stale from v3.0.17 to v3.0.18 ([36823de](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/36823de4da3338abaf446c633f85047dc2360be8))
* **deps:** bump GoogleCloudPlatform/release-please-action ([7ac5460](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/7ac5460acf5258c938a2d037371cc0e649325f5f))
* **deps:** bump typoci/spellcheck-action from v0.3.0 to v0.4.0 ([067f5a8](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/067f5a88814b1c604489e7b07983e10c05788528))
* **deps:** bump wagoid/commitlint-github-action from v3.0.1 to v3.0.6 ([2c090b9](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/2c090b9163aade7baf4ae8bafc061a396e7ffa4d))


### Continuous Integration

* **automerge:** move automerge job into new workflow ([845a4cd](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/845a4cd84a593d2b48e85191217a0981793f24d0))
* **ci:** ignore dependabot prs for commit message linting ([aa406db](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/aa406dbdebe140810b0a7ecc0230322580871935))
* **stale:** shorten workflow name ([f23da20](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/f23da208e8e51ccc63a86937d03d27328056946c))
* **workflows:** run only on push and pulls to master branch ([14afd4c](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/14afd4c3eff051e419bdcb696f23a05fef2f60b2))

### [3.2.2](https://www.github.com/Fdawgs/ydh-fhir-listeners/compare/v3.2.1...v3.2.2) (2021-03-03)


### Documentation

* **contributing:** add documentation style ([d170912](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/d17091247b462a0449c2f9461c42e63e3ff60d2a))
* **readme:** fix broken link ([526d52b](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/526d52b807af95bdf918384caeda1b0e4d18f5a7))
* **readme:** shorten links ([0d68edd](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/0d68edd7f8091615bc53e697c7e5e55254661765))
* **worklog:** reference correct standard ([1673ca1](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/1673ca1435c6170e49ecbfc46d97ea9828e4dff6))


### Dependencies

* **dependabot:** set commit message prefix; lower pull limit ([8ed9d81](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/8ed9d813aa64268e68e03a5a91c886438229daee))
* **deps-dev:** add husky for git hook handling ([172476d](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/172476dbe97aedf2c651b654a12bd9a28f57960f))
* **deps-dev:** bump @babel/cli from 7.12.10 to 7.12.16 ([#128](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/128)) ([d12f5fc](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/d12f5fce2b64d9634ae25f69a6b14ec54afa585a))
* **deps-dev:** bump @babel/cli from 7.12.16 to 7.13.0 ([82308e6](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/82308e646a11702bd5660cbd1d5dd71c2b69c42b))
* **deps-dev:** bump @babel/core from 7.12.10 to 7.12.16 ([#125](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/125)) ([fdbcac2](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/fdbcac26ed89b4a60fd07d186cf0f085b0bff78c))
* **deps-dev:** bump @babel/core from 7.12.16 to 7.13.8 ([34f6fc2](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/34f6fc2fc2535d73a050a40ee0378322817a2cae))
* **deps-dev:** bump @babel/node from 7.12.10 to 7.12.16 ([#127](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/127)) ([a633158](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/a633158da5f54359c420c1723b25cf1435ddc68f))
* **deps-dev:** bump @babel/node from 7.12.16 to 7.13.0 ([6919a07](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/6919a0722ee702dbbf36f83ccf5b9f433670d4bc))
* **deps-dev:** bump @babel/preset-env from 7.12.11 to 7.12.16 ([#129](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/129)) ([34b7541](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/34b754120dcc22ff57f1e9018b7d9b47e41baeff))
* **deps-dev:** bump @babel/preset-env from 7.12.16 to 7.13.8 ([9d439d8](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/9d439d8fa2e27d991b13a17767d8fe259657a20c))
* **deps-dev:** bump @commitlint/cli from 11.0.0 to 12.0.1 ([#133](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/133)) ([5576c8e](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/5576c8ef252783fdc3a5d0ebfff1d3e3ad7c4260))
* **deps-dev:** bump @commitlint/config-conventional ([509036a](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/509036a517acd3d8906ce8670ed1755dfc07e297))
* **deps-dev:** bump eslint from 7.18.0 to 7.19.0 ([#117](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/117)) ([bdd0093](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/bdd0093ef84c3cd3ca484581dcc57563a707fcdf))
* **deps-dev:** bump eslint from 7.19.0 to 7.20.0 ([#126](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/126)) ([bfaa1bf](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/bfaa1bf6e7f7db4ae9987a6d43e1ecd5f2b941b7))
* **deps-dev:** bump eslint from 7.20.0 to 7.21.0 ([#136](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/136)) ([f0d1671](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/f0d16713c41bd692887f404730db25de0f99063f))
* **deps-dev:** bump eslint-config-prettier from 7.2.0 to 8.1.0 ([5285c92](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/5285c9290a7ad925e9d5df8e3129234489f7b334))
* **deps-dev:** bump eslint-plugin-jsdoc from 31.4.0 to 31.6.0 ([#116](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/116)) ([0fac348](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/0fac348cd755c82a55b844d130f6716d07538827))
* **deps-dev:** bump eslint-plugin-jsdoc from 31.6.0 to 32.0.1 ([#124](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/124)) ([cb906f7](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/cb906f7dea0e523463383bc412a4815397a532bd))
* **deps-dev:** bump eslint-plugin-jsdoc from 32.0.1 to 32.2.0 ([#135](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/135)) ([43694a0](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/43694a0b8b906d4e08414a8d19a9ec00e705913d))
* **deps-dev:** pin husky major version ([5e2a3c9](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/5e2a3c9c874d66931b61ef72877b41852719b5a7))
* **deps:** bump actions/cache from v2 to v2.1.4 ([#123](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/123)) ([efdd036](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/efdd036df1c9f1b2d8c7f13e36032d3d7b08fa38))
* **deps:** bump wagoid/commitlint-github-action from v2.0.3 to v2.2.3 ([#122](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/122)) ([5bae414](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/5bae414850cc0a9953ff17455a3a879d609b5ae4))
* **deps:** bump wagoid/commitlint-github-action from v2.2.3 to v3.0.1 ([d9e419f](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/d9e419fa890df1a03492fca6ef956d5a2b738e7f))
* **deps:** specify minor and hotfix versions ([d7e707d](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/d7e707d15c1543f752145d2b97cb2b732bacc849))
* **deps:** specify minor and hotfix versions ([ab5e83b](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/ab5e83bff7f9853103fb77190b4343be6f1c892b))


### Miscellaneous

* add commit-lint job ([197559d](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/197559de951cc8037e5111746687118b873251ac))
* add documentation style link to pr template ([08685d0](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/08685d0dabca4dc9158514c1a07940ee60706016))
* add link check workflow ([76daeda](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/76daeda42950bb625f3b5c86702b50cfea1b30c9))
* automate release and changelog generation ([d6afb8b](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/d6afb8b80e5a2d80fcebbc71e425f81d357c5d0d))
* **codeql:** remove autobuild action ([c7878ef](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/c7878efe2903c632dfcd6c55b3b331a5903e29b4))
* **dependabot:** ignore husky updates ([32ab2ef](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/32ab2ef166e0dc2a0cf294de809d6ed9a27bb24e))
* **linkcheck:** extend paths and ignored urls ([2e84277](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/2e842778edd51e732a9affafc1109f21cfeaa22c))
* **lint-check:** compress patterns ([d43c9bb](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/d43c9bb4543074edb4244e5c534efa17595d062b))
* **prettier:** create separate files to allow for CI/CD to use prettier config ([#143](https://www.github.com/Fdawgs/ydh-fhir-listeners/issues/143)) ([09c245a](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/09c245a331c5e62bcbc96031a91d9b3e188e3343))
* **readme:** add linebreaks between badges ([4da66a4](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/4da66a41cd208e3d2363e31cd8d8a55bcbea1fe9))
* remove whitespace from filename ([52c0996](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/52c0996741768a11c0a3f6d8b089351454a76c44))
* replace stalebot with github action ([2c0effc](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/2c0effcdfde3804ea37019f98d395227a43e2d2a))
* replace typo ci app with action ([679a728](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/679a72869258e78b7a5ce798940f2a2b4411b3a7))
* require `commit-lint` job to pass before automerge ([b1e70a4](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/b1e70a43b3105adcc8cf3e19a746dcba9be8ecbc))
* **vscode:** add `redhat.vscode-yaml` as recommended extension ([c68f763](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/c68f763b7bc8f2efac4f4cdf6d137a30ca5c0793))
* **vscode:** add `updateImportsOnFileMove` setting ([4839e44](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/4839e44010a6f2427153a47e50b7bf6285d68b3a))
* **vscode:** add workspace settings and extensions ([a20fca3](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/a20fca31b5b4db0686f26aa5218b4d1d0496270c))
* **vscode:** remove conflicting prettier ext setting ([4de2575](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/4de257564aa8accb4fbd3af221d2a545bdbfe214))
* **workflows:** move release steps into `cd` workflow ([9e8e63c](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/9e8e63cb008518bbe313e5ea24b6fd3adc784260))
* **workflows:** remove redundant comments ([13f63b2](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/13f63b298e4c2525ee06f0ac101134d7de0739b0))
* **workflows:** rename spellcheck workflow ([f62756e](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/f62756e397dd9b20c2dc54e995083dac3f7737f3))
* **workflows:** tidy node-version syntax ([89de90d](https://www.github.com/Fdawgs/ydh-fhir-listeners/commit/89de90d18cb093c12be6b7a69ee7777eb30a3b14))

### 3.2.1 (2021-01-28)

-   build: add typoci config file ([ee3c451](https://github.com/Fdawgs/ydh-fhir-listeners/commit/ee3c451))
-   build: remove `yarn` as package manager, revert to `npm` ([6fc6490](https://github.com/Fdawgs/ydh-fhir-listeners/commit/6fc6490))
-   build(deps-dev): bump eslint-config-prettier from 7.1.0 to 7.2.0 (#114) ([169f405](https://github.com/Fdawgs/ydh-fhir-listeners/commit/169f405)), closes [#114](https://github.com/Fdawgs/ydh-fhir-listeners/issues/114)
-   build(deps-dev): bump eslint-plugin-jsdoc from 30.7.13 to 31.4.0 (#115) ([e32b09b](https://github.com/Fdawgs/ydh-fhir-listeners/commit/e32b09b)), closes [#115](https://github.com/Fdawgs/ydh-fhir-listeners/issues/115)
-   style(ci): capitalise jobs and job step names ([4b0f558](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4b0f558))
-   style(docs): capitalise headings correctly ([79c60e1](https://github.com/Fdawgs/ydh-fhir-listeners/commit/79c60e1))
-   style(readme): prettier badge shape ([5acf932](https://github.com/Fdawgs/ydh-fhir-listeners/commit/5acf932))
-   docs: bump coc from v1.4.0 to v2.0.0 ([4f7f2c2](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4f7f2c2))
-   docs: update link to auth service ([51d3974](https://github.com/Fdawgs/ydh-fhir-listeners/commit/51d3974))
-   docs(readme): update acknowledgements section ([144d87c](https://github.com/Fdawgs/ydh-fhir-listeners/commit/144d87c))
-   docs(readme): update yarn link ([4cafb56](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4cafb56))
-   chore: add pull request template ([b2ea07b](https://github.com/Fdawgs/ydh-fhir-listeners/commit/b2ea07b))
-   chore(package): add homepage and bug urls ([87c2ddb](https://github.com/Fdawgs/ydh-fhir-listeners/commit/87c2ddb))
-   ci: cache on `node-version` as well as `os` ([42d652f](https://github.com/Fdawgs/ydh-fhir-listeners/commit/42d652f))
-   ci: lint lockfile ([9a65be7](https://github.com/Fdawgs/ydh-fhir-listeners/commit/9a65be7))
-   ci: remove redundant javascript dictionary ([15e5fd3](https://github.com/Fdawgs/ydh-fhir-listeners/commit/15e5fd3))
-   ci(typo-ci): add `ydh` to list of excluded words ([80befee](https://github.com/Fdawgs/ydh-fhir-listeners/commit/80befee))

## 3.2.0 (2021-01-04)

-   build: update github-actions with dependabot ([fa48dd3](https://github.com/Fdawgs/ydh-fhir-listeners/commit/fa48dd3))
-   build(deps-dev): bump eslint from 7.16.0 to 7.17.0 (#109) ([035bb68](https://github.com/Fdawgs/ydh-fhir-listeners/commit/035bb68)), closes [#109](https://github.com/Fdawgs/ydh-fhir-listeners/issues/109)
-   build(deps-dev): bump eslint-plugin-jsdoc from 30.7.9 to 30.7.13 (#110) ([ff78661](https://github.com/Fdawgs/ydh-fhir-listeners/commit/ff78661)), closes [#110](https://github.com/Fdawgs/ydh-fhir-listeners/issues/110)
-   build(deps-dev): remove eslint-plugin-json ([e086d0a](https://github.com/Fdawgs/ydh-fhir-listeners/commit/e086d0a))
-   build(deps): bump fastify/github-action-merge-dependabot (#104) ([8cce0b8](https://github.com/Fdawgs/ydh-fhir-listeners/commit/8cce0b8)), closes [#104](https://github.com/Fdawgs/ydh-fhir-listeners/issues/104)
-   chore: remove old .env files from gitignore ([4ba1611](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4ba1611))
-   ci: do not run github actions for draft prs ([5651def](https://github.com/Fdawgs/ydh-fhir-listeners/commit/5651def))
-   ci: refactor `codeql-analysis.yml` ([3890db1](https://github.com/Fdawgs/ydh-fhir-listeners/commit/3890db1))
-   ci: use yarn `--frozen-lockfile` flag for repro deps ([992cf4f](https://github.com/Fdawgs/ydh-fhir-listeners/commit/992cf4f))
-   ci: use yarn cache of node dependencies if present ([82c1b08](https://github.com/Fdawgs/ydh-fhir-listeners/commit/82c1b08))
-   ci(codeql): specify more query suites ([6255af1](https://github.com/Fdawgs/ydh-fhir-listeners/commit/6255af1))
-   docs: fix broken links ([8c240fc](https://github.com/Fdawgs/ydh-fhir-listeners/commit/8c240fc))
-   docs(readme): add acknowledgements section ([3400506](https://github.com/Fdawgs/ydh-fhir-listeners/commit/3400506))
-   docs(readme): add ydh logo ([dd6b112](https://github.com/Fdawgs/ydh-fhir-listeners/commit/dd6b112))
-   docs(readme): add ydh staff to acknowledgements section ([bab73aa](https://github.com/Fdawgs/ydh-fhir-listeners/commit/bab73aa))
-   docs(readme): grammar fix ([7a4dea6](https://github.com/Fdawgs/ydh-fhir-listeners/commit/7a4dea6))
-   docs(readme): remove excess build information ([43abddf](https://github.com/Fdawgs/ydh-fhir-listeners/commit/43abddf))
-   feat(encounter-res): add expected/planned discharge datetimes ([90b2c34](https://github.com/Fdawgs/ydh-fhir-listeners/commit/90b2c34))
-   fix(encounter-res): correct specialty system url ([b8dc489](https://github.com/Fdawgs/ydh-fhir-listeners/commit/b8dc489))
-   style: use default prettier options for trailing commas and quotes ([62dda75](https://github.com/Fdawgs/ydh-fhir-listeners/commit/62dda75))
-   style(ci): add missing draft pr catch ([87960d0](https://github.com/Fdawgs/ydh-fhir-listeners/commit/87960d0))

### 3.1.2 (2020-12-21)

-   fix(encounter-res): merge admitting and discharging location if same ([6a3ad57](https://github.com/Fdawgs/ydh-fhir-listeners/commit/6a3ad57))
-   build(deps-dev): bump @babel/cli from 7.12.8 to 7.12.10 ([918d4f5](https://github.com/Fdawgs/ydh-fhir-listeners/commit/918d4f5))
-   build(deps-dev): bump @babel/core from 7.12.9 to 7.12.10 ([6009fa3](https://github.com/Fdawgs/ydh-fhir-listeners/commit/6009fa3))
-   build(deps-dev): bump @babel/node from 7.12.6 to 7.12.10 ([278c849](https://github.com/Fdawgs/ydh-fhir-listeners/commit/278c849))
-   build(deps-dev): bump @babel/preset-env from 7.12.7 to 7.12.11 ([90db481](https://github.com/Fdawgs/ydh-fhir-listeners/commit/90db481))
-   build(deps-dev): bump eslint from 7.14.0 to 7.16.0 ([1d6d9a7](https://github.com/Fdawgs/ydh-fhir-listeners/commit/1d6d9a7))
-   build(deps-dev): bump eslint-config-prettier from 6.15.0 to 7.1.0 ([8e0ae14](https://github.com/Fdawgs/ydh-fhir-listeners/commit/8e0ae14))
-   build(deps-dev): bump eslint-plugin-jsdoc from 30.7.8 to 30.7.9 ([53b73ec](https://github.com/Fdawgs/ydh-fhir-listeners/commit/53b73ec))
-   build(deps): bump ini from 1.3.5 to 1.3.8 ([7fd9938](https://github.com/Fdawgs/ydh-fhir-listeners/commit/7fd9938))
-   ci: add linting job; expand scope of jobs ([e4327f1](https://github.com/Fdawgs/ydh-fhir-listeners/commit/e4327f1))
-   ci: automatically merge dependabot pull requests on pass build stage ([fa9f591](https://github.com/Fdawgs/ydh-fhir-listeners/commit/fa9f591))
-   chore: add stale confg ([ed686bc](https://github.com/Fdawgs/ydh-fhir-listeners/commit/ed686bc))
-   chore: remove unused test resources ([c96dc64](https://github.com/Fdawgs/ydh-fhir-listeners/commit/c96dc64))
-   chore: update test resources for patient 9449304513 ([226073f](https://github.com/Fdawgs/ydh-fhir-listeners/commit/226073f))
-   chore: update test resources for patient 9449307210 ([76abac8](https://github.com/Fdawgs/ydh-fhir-listeners/commit/76abac8))
-   chore: update test resources for unknown patients ([4fa1736](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4fa1736))
-   chore(scripts): rename test scripts ([dad2811](https://github.com/Fdawgs/ydh-fhir-listeners/commit/dad2811))
-   docs(readme): state hospital's full name ([685ccbf](https://github.com/Fdawgs/ydh-fhir-listeners/commit/685ccbf))
-   [ImgBot] Optimize images ([492ef57](https://github.com/Fdawgs/ydh-fhir-listeners/commit/492ef57))

### 3.1.1 (2020-12-01)

-   docs(security): remove backticks ([3c06a2d](https://github.com/Fdawgs/ydh-fhir-listeners/commit/3c06a2d))
-   fix(encounter-res): double equals ([2a25ef3](https://github.com/Fdawgs/ydh-fhir-listeners/commit/2a25ef3))
-   fix(patient-res): add missing school contact name text ([99c795f](https://github.com/Fdawgs/ydh-fhir-listeners/commit/99c795f))
-   fix(patient-res): add missing switchboard contact ([aaf1d3a](https://github.com/Fdawgs/ydh-fhir-listeners/commit/aaf1d3a))
-   build(deps-dev): bump prettier from 2.2.0 to 2.2.1 ([e44e0e3](https://github.com/Fdawgs/ydh-fhir-listeners/commit/e44e0e3))
-   chore: add security.md ([bede1e0](https://github.com/Fdawgs/ydh-fhir-listeners/commit/bede1e0))

## 3.1.0 (2020-11-25)

-   chore(capabilitystatement): update documentation value ([9d0c1ed](https://github.com/Fdawgs/ydh-fhir-listeners/commit/9d0c1ed))
-   docs(readme): remove old info ([a0977af](https://github.com/Fdawgs/ydh-fhir-listeners/commit/a0977af))
-   feat(listeners): support multiple search params to allergyint resources ([95ad5fd](https://github.com/Fdawgs/ydh-fhir-listeners/commit/95ad5fd))
-   fix(listeners): add `type` to accepted encounter search params ([eff5c23](https://github.com/Fdawgs/ydh-fhir-listeners/commit/eff5c23))

### 3.0.3 (2020-11-25)

-   fix(listeners): encounter search params ([0baf773](https://github.com/Fdawgs/ydh-fhir-listeners/commit/0baf773))

### 3.0.2 (2020-11-25)

-   fix(listeners): date search params ([12549a2](https://github.com/Fdawgs/ydh-fhir-listeners/commit/12549a2))
-   fix(listeners): param key checks ([87bffbd](https://github.com/Fdawgs/ydh-fhir-listeners/commit/87bffbd))
-   fix(listeners): remaining search params ([f558e1c](https://github.com/Fdawgs/ydh-fhir-listeners/commit/f558e1c))

### 3.0.1 (2020-11-25)

-   build(deps-dev): bump dev dependencies ([582a758](https://github.com/Fdawgs/ydh-fhir-listeners/commit/582a758))
-   fix(medicationstatement-res): change tag predicates ([2329c40](https://github.com/Fdawgs/ydh-fhir-listeners/commit/2329c40))

## 3.0.0 (2020-11-24)

-   build(deps-dev): bump dev dependencies ([b99ff28](https://github.com/Fdawgs/ydh-fhir-listeners/commit/b99ff28))
-   refactor: change path from `r3` to `STU3` ([af25c48](https://github.com/Fdawgs/ydh-fhir-listeners/commit/af25c48))
-   refactor(code-templates): replace if... else chain with switch statement ([6e94be8](https://github.com/Fdawgs/ydh-fhir-listeners/commit/6e94be8))
-   refactor(listeners): revoke access to allergyintolerance resources ([eb5dbd2](https://github.com/Fdawgs/ydh-fhir-listeners/commit/eb5dbd2))
-   feat(medicationstatement-res): add sider specific meta tags ([bf4e0f9](https://github.com/Fdawgs/ydh-fhir-listeners/commit/bf4e0f9))
-   style(sql): tidy whitespace ([ddc2b4e](https://github.com/Fdawgs/ydh-fhir-listeners/commit/ddc2b4e))
-   docs(readme): update links, dates, version numbers ([6bb0e0b](https://github.com/Fdawgs/ydh-fhir-listeners/commit/6bb0e0b))
-   fix(code-templates): add support for clob types ([1fc4682](https://github.com/Fdawgs/ydh-fhir-listeners/commit/1fc4682))
-   fix(code-templates): import dstu3 model library instead of r4 ([e881340](https://github.com/Fdawgs/ydh-fhir-listeners/commit/e881340))
-   fix(listeners): declare fhir version in operationoutcome ([28cfec1](https://github.com/Fdawgs/ydh-fhir-listeners/commit/28cfec1))
-   chore(code-templates): remove unused templates ([0a3236e](https://github.com/Fdawgs/ydh-fhir-listeners/commit/0a3236e))
-   chore(listeners): remove inline eslint rules ([926328e](https://github.com/Fdawgs/ydh-fhir-listeners/commit/926328e))
-   chore(listeners): remove unused vread destination ([df1c304](https://github.com/Fdawgs/ydh-fhir-listeners/commit/df1c304))

### BREAKING CHANGE

-   context path of listener url changed from `r3` to `STU3`

## 2.8.0 (2020-11-20)

-   build(deps-dev): bump dev dependencies ([c5ea129](https://github.com/Fdawgs/ydh-fhir-listeners/commit/c5ea129))
-   docs: clarify on sider specific meta tags ([a6e5fa7](https://github.com/Fdawgs/ydh-fhir-listeners/commit/a6e5fa7))
-   fix(flag-res): change snomed codes from int to varchar for lead zeroes ([0860d4d](https://github.com/Fdawgs/ydh-fhir-listeners/commit/0860d4d))
-   feat(allergyintolerance-res): add sider specific meta tags ([66749cd](https://github.com/Fdawgs/ydh-fhir-listeners/commit/66749cd))
-   feat(encounter-res): add sider specific meta tags ([72e347c](https://github.com/Fdawgs/ydh-fhir-listeners/commit/72e347c))
-   feat(flag-res): add sider specific meta tags ([55f4814](https://github.com/Fdawgs/ydh-fhir-listeners/commit/55f4814))

### 2.7.3 (2020-11-18)

-   chore: convert channel to target mirth connect v3.10.0 ([00159da](https://github.com/Fdawgs/ydh-fhir-listeners/commit/00159da))
-   style: fix build name ([f76f444](https://github.com/Fdawgs/ydh-fhir-listeners/commit/f76f444))
-   style: fix comment spacing ([665d419](https://github.com/Fdawgs/ydh-fhir-listeners/commit/665d419))
-   style: format codeql.yml ([99f4c8b](https://github.com/Fdawgs/ydh-fhir-listeners/commit/99f4c8b))
-   build(deps-dev): bump dev dependencies ([606486e](https://github.com/Fdawgs/ydh-fhir-listeners/commit/606486e))
-   ci: clean up config ([19d819b](https://github.com/Fdawgs/ydh-fhir-listeners/commit/19d819b))
-   ci: replace travis-ci with github actions ([44e6888](https://github.com/Fdawgs/ydh-fhir-listeners/commit/44e6888))

### 2.7.2 (2020-11-02)

-   fix(listeners): unescape system part of [system]|[code] search params ([8f6f588](https://github.com/Fdawgs/ydh-fhir-listeners/commit/8f6f588))
-   docs(readme): capitalise beginning of sentence ([ad8ee3e](https://github.com/Fdawgs/ydh-fhir-listeners/commit/ad8ee3e))

### 2.7.1 (2020-11-01)

-   build(deps-dev): bump dev dependencies ([be4d993](https://github.com/Fdawgs/ydh-fhir-listeners/commit/be4d993))
-   docs(readme): change 'shareholder' to correct 'stakeholder' ([4a181c1](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4a181c1))
-   docs(readme): correct descriptions of purpose and deployments ([e764edc](https://github.com/Fdawgs/ydh-fhir-listeners/commit/e764edc))
-   docs(readme): sort stakeholders alphabetically ([2fed6b2](https://github.com/Fdawgs/ydh-fhir-listeners/commit/2fed6b2))

## 2.7.0 (2020-10-16)

-   build(deps-dev): bump dev dependencies ([4d05ebb](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4d05ebb))
-   fix(patient-res): catch empty nhs number trace status codes and deceased ([64db3c9](https://github.com/Fdawgs/ydh-fhir-listeners/commit/64db3c9))
-   feat(medicationstatement-res): add encounter context reference ([dac39d6](https://github.com/Fdawgs/ydh-fhir-listeners/commit/dac39d6))
-   feat(patient-res): add nhs communication extension ([302798a](https://github.com/Fdawgs/ydh-fhir-listeners/commit/302798a))
-   feat(patient-res): add religious affiliation extension ([6457c45](https://github.com/Fdawgs/ydh-fhir-listeners/commit/6457c45))

### 2.6.3 (2020-10-14)

-   docs: replace xlsx with ods file ([18556f8](https://github.com/Fdawgs/ydh-fhir-listeners/commit/18556f8))
-   chore: convert channel to target mirth connect v3.9.1 ([58880c5](https://github.com/Fdawgs/ydh-fhir-listeners/commit/58880c5))
-   build: create codeql-analysis.yml workflow file ([42a3007](https://github.com/Fdawgs/ydh-fhir-listeners/commit/42a3007))
-   build(deps-dev): bump dev dependencies ([c47a6f0](https://github.com/Fdawgs/ydh-fhir-listeners/commit/c47a6f0))
-   perf(listeners): reduce response time for read requests ([223b5e1](https://github.com/Fdawgs/ydh-fhir-listeners/commit/223b5e1))
-   refactor(listeners): specify resource type in error message ([e54389b](https://github.com/Fdawgs/ydh-fhir-listeners/commit/e54389b))

### 2.6.2 (2020-10-05)

-   refactor(listeners): declare fhir standard in operationoutcome ([70d2d2f](https://github.com/Fdawgs/ydh-fhir-listeners/commit/70d2d2f))
-   refactor(listeners): read functionality to have same style as search ([15d04bf](https://github.com/Fdawgs/ydh-fhir-listeners/commit/15d04bf))
-   fix(flag-res): add lastupdated meta value ([3ba2001](https://github.com/Fdawgs/ydh-fhir-listeners/commit/3ba2001))
-   fix(listeners): correct flag and medicationstatement read query strings ([17d6d86](https://github.com/Fdawgs/ydh-fhir-listeners/commit/17d6d86))
-   fix(listeners): fix error variable name for read operationoutcomes ([27590d7](https://github.com/Fdawgs/ydh-fhir-listeners/commit/27590d7))
-   fix(listeners): looping through java object, not param array ([4d825a4](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4d825a4))
-   fix(listeners): search operationoutcomes using deprecated function ([a08fedc](https://github.com/Fdawgs/ydh-fhir-listeners/commit/a08fedc))
-   fix(medicationstatement-res): add lastupdated meta value ([5caa2d2](https://github.com/Fdawgs/ydh-fhir-listeners/commit/5caa2d2))
-   fix(templates): add support for nchar and char columntypes ([9fa7a7b](https://github.com/Fdawgs/ydh-fhir-listeners/commit/9fa7a7b))
-   docs: spelling and grammar fixes ([44e4de4](https://github.com/Fdawgs/ydh-fhir-listeners/commit/44e4de4))

### 2.6.1 (2020-10-01)

-   docs: add data quality issue section ([c0483a2](https://github.com/Fdawgs/ydh-fhir-listeners/commit/c0483a2))
-   docs(contributing): correct eslintrc file extension reference ([4afcfe2](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4afcfe2))
-   docs(contributing): correct release step order ([f1f3c8d](https://github.com/Fdawgs/ydh-fhir-listeners/commit/f1f3c8d))
-   fix(medicationstatement-res): status search param had too many quotes ([5a08afc](https://github.com/Fdawgs/ydh-fhir-listeners/commit/5a08afc))

## 2.6.0 (2020-10-01)

-   build(deps-dev): bump dev dependencies ([faac1fa](https://github.com/Fdawgs/ydh-fhir-listeners/commit/faac1fa))
-   fix(allergyintolerance-res): remove leftover test limit ([778c94f](https://github.com/Fdawgs/ydh-fhir-listeners/commit/778c94f))
-   fix(flag-res): remove leftover test limit ([24080ea](https://github.com/Fdawgs/ydh-fhir-listeners/commit/24080ea))
-   fix(listeners): add new allergyintolerance search params to support list ([a930148](https://github.com/Fdawgs/ydh-fhir-listeners/commit/a930148))
-   fix(listeners): fix date period search params works ([fb868a7](https://github.com/Fdawgs/ydh-fhir-listeners/commit/fb868a7))
-   fix(patient-res): add deceased search param as accepted param ([837fc61](https://github.com/Fdawgs/ydh-fhir-listeners/commit/837fc61))
-   fix(patient-res): add leading zeros to nhsnumber trace status code ([b0d745b](https://github.com/Fdawgs/ydh-fhir-listeners/commit/b0d745b))
-   feat(allergyintolerance-res): add support for criticality search param ([5eea70b](https://github.com/Fdawgs/ydh-fhir-listeners/commit/5eea70b))
-   feat(allergyintolerance-res): add support for type search param ([4035a97](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4035a97))
-   feat(encounter-res): add support for status search param ([9acaa69](https://github.com/Fdawgs/ydh-fhir-listeners/commit/9acaa69))
-   feat(flag-res): add support for date search param ([820961d](https://github.com/Fdawgs/ydh-fhir-listeners/commit/820961d))
-   feat(patient-res): add support for address search param ([caaa24c](https://github.com/Fdawgs/ydh-fhir-listeners/commit/caaa24c))
-   feat(patient-res): add support for address-city search param ([7b52998](https://github.com/Fdawgs/ydh-fhir-listeners/commit/7b52998))
-   feat(patient-res): add support for deceased search param; bug fixes ([8f82be7](https://github.com/Fdawgs/ydh-fhir-listeners/commit/8f82be7))
-   feat(patient-res): add support for email search param ([28f173a](https://github.com/Fdawgs/ydh-fhir-listeners/commit/28f173a))
-   feat(patient-res): add support for phone search param ([7b5fe55](https://github.com/Fdawgs/ydh-fhir-listeners/commit/7b5fe55))
-   refactor(flag-res): add nolock to lookup table join ([ae21e69](https://github.com/Fdawgs/ydh-fhir-listeners/commit/ae21e69))
-   refactor(listeners): make wherearray const multi-dimensional array ([a9e6521](https://github.com/Fdawgs/ydh-fhir-listeners/commit/a9e6521))
-   refactor(listeners): remove redundant whereparts array variable ([93d3457](https://github.com/Fdawgs/ydh-fhir-listeners/commit/93d3457))
-   refactor(patient-res): remove use of lower function on already low gen ([8792c28](https://github.com/Fdawgs/ydh-fhir-listeners/commit/8792c28))
-   refactor(resources): remove use of %allindex ([352b65a](https://github.com/Fdawgs/ydh-fhir-listeners/commit/352b65a))
-   chore: make eslint rule cover file ([4016655](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4016655))
-   chore(capabilitystatement): refine address search param definition ([94a8f15](https://github.com/Fdawgs/ydh-fhir-listeners/commit/94a8f15))
-   style(encounter-res): casing of sql syntax ([8a96e39](https://github.com/Fdawgs/ydh-fhir-listeners/commit/8a96e39))
-   style(resources): tidy comments and whitespace ([173f9d3](https://github.com/Fdawgs/ydh-fhir-listeners/commit/173f9d3))
-   docs: fix uri structure ([4bf6f62](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4bf6f62))

### 2.5.2 (2020-09-24)

-   docs: correct link to auth service ([1b78111](https://github.com/Fdawgs/ydh-fhir-listeners/commit/1b78111))
-   docs(readme): add snyk badge ([48363dd](https://github.com/Fdawgs/ydh-fhir-listeners/commit/48363dd))
-   docs(readme): repoint travis-ci badge from .org to .com ([d52cde2](https://github.com/Fdawgs/ydh-fhir-listeners/commit/d52cde2))
-   docs(worklogs): add list of known data quality issues ([94f2245](https://github.com/Fdawgs/ydh-fhir-listeners/commit/94f2245))
-   docs(worklogs): add list of known performance issues ([c617b88](https://github.com/Fdawgs/ydh-fhir-listeners/commit/c617b88))
-   docs(worklogs): add nhw as contributor ([d7a5d59](https://github.com/Fdawgs/ydh-fhir-listeners/commit/d7a5d59))
-   fix(allergyintolerance): use correct array for patient id search ([7ee26e3](https://github.com/Fdawgs/ydh-fhir-listeners/commit/7ee26e3))
-   chore(allergyintolerance): add example mrn ([254db7e](https://github.com/Fdawgs/ydh-fhir-listeners/commit/254db7e))
-   build(dependabot): remove assignment of pull requests to user ([3183ff7](https://github.com/Fdawgs/ydh-fhir-listeners/commit/3183ff7))
-   build(deps-dev): add jsdoc and security eslint plugins ([2649877](https://github.com/Fdawgs/ydh-fhir-listeners/commit/2649877))
-   build(deps-dev): bump dev dependencies ([e07b7a7](https://github.com/Fdawgs/ydh-fhir-listeners/commit/e07b7a7))
-   style: tidy jsdoc tags ([a2cee0c](https://github.com/Fdawgs/ydh-fhir-listeners/commit/a2cee0c))

### 2.5.1 (2020-08-28)

-   build(deps-dev): bump dev dependencies ([05b7bee](https://github.com/Fdawgs/ydh-fhir-listeners/commit/05b7bee))
-   refactor(patient): remove restricted patient table join bottleneck ([4f365bc](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4f365bc))
-   chore: reduce minimum nodejs engine version from 12.x to 10.x ([2c6ad52](https://github.com/Fdawgs/ydh-fhir-listeners/commit/2c6ad52))
-   chore(github): add issue templates ([5c5281b](https://github.com/Fdawgs/ydh-fhir-listeners/commit/5c5281b))

## 2.5.0 (2020-08-13)

-   fix(patient): fix crashes when searching without mrn or nhs no ([162a273](https://github.com/Fdawgs/ydh-fhir-listeners/commit/162a273))
-   feat(patient): add address-postalcode search param ([f29af71](https://github.com/Fdawgs/ydh-fhir-listeners/commit/f29af71))
-   build(deps-dev): bump dev dependencies to resolve security cve ([2cf3b7b](https://github.com/Fdawgs/ydh-fhir-listeners/commit/2cf3b7b))

### 2.4.1 (2020-07-27)

-   build(deps-dev): bump dev dependencies ([39d4052](https://github.com/Fdawgs/ydh-fhir-listeners/commit/39d4052))
-   build(travis): add osx image ([e70dcd4](https://github.com/Fdawgs/ydh-fhir-listeners/commit/e70dcd4))
-   build(travis): add test script ([491215e](https://github.com/Fdawgs/ydh-fhir-listeners/commit/491215e))
-   build(travis): add version branches to safelist ([24179b6](https://github.com/Fdawgs/ydh-fhir-listeners/commit/24179b6))
-   build(travis): suppress git log ([b98e49c](https://github.com/Fdawgs/ydh-fhir-listeners/commit/b98e49c))
-   build(travis): update linux dist to latest lts ([d503c0d](https://github.com/Fdawgs/ydh-fhir-listeners/commit/d503c0d))
-   chore: update contact email ([9423d05](https://github.com/Fdawgs/ydh-fhir-listeners/commit/9423d05))
-   chore: update team contact email again ([fce512b](https://github.com/Fdawgs/ydh-fhir-listeners/commit/fce512b))
-   chore(scripts): use gitignore for ignore-path options ([3edd42f](https://github.com/Fdawgs/ydh-fhir-listeners/commit/3edd42f))
-   fix(capabilitystatement): correct publisher value ([6d7b6cd](https://github.com/Fdawgs/ydh-fhir-listeners/commit/6d7b6cd))
-   fix(capabilitystatement): move sol dev email to seperate contact ([44f05cf](https://github.com/Fdawgs/ydh-fhir-listeners/commit/44f05cf))
-   fix(capabilitystatement): remove sol dev email from my contact ([559cd10](https://github.com/Fdawgs/ydh-fhir-listeners/commit/559cd10))
-   fix(capabilitystatement): remove stray period ([77e83ee](https://github.com/Fdawgs/ydh-fhir-listeners/commit/77e83ee))
-   docs(readme): remove inactive dependabot badge ([4b829d2](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4b829d2))

## 2.4.0 (2020-07-09)

-   build(deps-dev): bump development dependencies ([8c88121](https://github.com/Fdawgs/ydh-fhir-listeners/commit/8c88121))
-   build(travis): set linux dist ([0c79dce](https://github.com/Fdawgs/ydh-fhir-listeners/commit/0c79dce))
-   chore: add solutions development team contact to capability statement ([09d5a49](https://github.com/Fdawgs/ydh-fhir-listeners/commit/09d5a49))
-   chore: replace http links with https ([ffce9ca](https://github.com/Fdawgs/ydh-fhir-listeners/commit/ffce9ca))
-   chore: tidy medicationstatement sql comments ([e75c68e](https://github.com/Fdawgs/ydh-fhir-listeners/commit/e75c68e))
-   feat(patient): add care connect ethnicity coding support ([becd830](https://github.com/Fdawgs/ydh-fhir-listeners/commit/becd830))
-   docs(readme): replace tst and sompar with new sft ([0b18629](https://github.com/Fdawgs/ydh-fhir-listeners/commit/0b18629))

### 2.3.7 (2020-06-30)

-   chore: create code_of_conduct.md ([ed76036](https://github.com/Fdawgs/ydh-fhir-listeners/commit/ed76036))
-   chore(eslint): convert from json to js file format ([f6c9b06](https://github.com/Fdawgs/ydh-fhir-listeners/commit/f6c9b06))
-   chore(scripts): expand coverage of eslint and prettier ([0061395](https://github.com/Fdawgs/ydh-fhir-listeners/commit/0061395))
-   build(deps-dev): bump @babel/cli from 7.10.1 to 7.10.3 ([5d7806a](https://github.com/Fdawgs/ydh-fhir-listeners/commit/5d7806a))
-   build(deps-dev): bump @babel/core from 7.10.2 to 7.10.3 ([25173e3](https://github.com/Fdawgs/ydh-fhir-listeners/commit/25173e3))
-   build(deps-dev): bump @babel/node from 7.10.1 to 7.10.3 ([4c6bdb5](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4c6bdb5))
-   build(deps-dev): bump @babel/preset-env from 7.10.2 to 7.10.3 ([be83809](https://github.com/Fdawgs/ydh-fhir-listeners/commit/be83809))
-   build(deps-dev): bump @commitlint/config-conventional ([b45c589](https://github.com/Fdawgs/ydh-fhir-listeners/commit/b45c589))
-   build(deps-dev): bump eslint-plugin-import from 2.20.2 to 2.22.0 ([9a7f9b9](https://github.com/Fdawgs/ydh-fhir-listeners/commit/9a7f9b9))
-   Create Dependabot config file ([567824d](https://github.com/Fdawgs/ydh-fhir-listeners/commit/567824d))
-   style: add whitespace ([eb6f9cb](https://github.com/Fdawgs/ydh-fhir-listeners/commit/eb6f9cb))

### 2.3.6 (2020-06-01)

-   build(deps-dev): bump @babel/cli from 7.8.4 to 7.10.1 ([1d7faf5](https://github.com/Fdawgs/ydh-fhir-listeners/commit/1d7faf5))
-   build(deps-dev): bump @babel/core from 7.9.6 to 7.10.2 ([75545d9](https://github.com/Fdawgs/ydh-fhir-listeners/commit/75545d9))
-   build(deps-dev): bump @babel/node from 7.8.7 to 7.10.1 ([8d4cc71](https://github.com/Fdawgs/ydh-fhir-listeners/commit/8d4cc71))
-   build(deps-dev): bump @babel/preset-env from 7.9.6 to 7.10.2 ([446d70d](https://github.com/Fdawgs/ydh-fhir-listeners/commit/446d70d))
-   build(deps-dev): bump conventional-changelog-cli from 2.0.31 to 2.0.34 ([d7c760a](https://github.com/Fdawgs/ydh-fhir-listeners/commit/d7c760a))
-   chore: update gitignore with latest github version ([f7eeb2b](https://github.com/Fdawgs/ydh-fhir-listeners/commit/f7eeb2b))
-   chore(eslintrc): enable json plugin ([c483ef9](https://github.com/Fdawgs/ydh-fhir-listeners/commit/c483ef9))
-   chore(package): set minimum engine version ([17b7633](https://github.com/Fdawgs/ydh-fhir-listeners/commit/17b7633))
-   docs(contributing): update conventional commit link to latest version ([8e998b9](https://github.com/Fdawgs/ydh-fhir-listeners/commit/8e998b9))

### 2.3.5 (2020-05-01)

-   chore: convert channel to be compatible with mirth connect v3.9.0 ([b2c205b](https://github.com/Fdawgs/ydh-fhir-listeners/commit/b2c205b))
-   build(deps-dev): bump @babel/core from 7.9.0 to 7.9.6 ([72b929a](https://github.com/Fdawgs/ydh-fhir-listeners/commit/72b929a))
-   build(deps-dev): bump @babel/preset-env from 7.9.0 to 7.9.5 ([7932131](https://github.com/Fdawgs/ydh-fhir-listeners/commit/7932131))
-   build(deps-dev): bump @babel/preset-env from 7.9.5 to 7.9.6 ([df7b999](https://github.com/Fdawgs/ydh-fhir-listeners/commit/df7b999))
-   build(deps-dev): bump eslint-config-prettier from 6.10.1 to 6.11.0 ([d259973](https://github.com/Fdawgs/ydh-fhir-listeners/commit/d259973))
-   build(deps-dev): bump prettier from 2.0.4 to 2.0.5 ([8d779ed](https://github.com/Fdawgs/ydh-fhir-listeners/commit/8d779ed))
-   fix: add missing read support for flag resources ([5eab8bb](https://github.com/Fdawgs/ydh-fhir-listeners/commit/5eab8bb))
-   fix: read for patient resources that were showing all as restricted ([9b370b8](https://github.com/Fdawgs/ydh-fhir-listeners/commit/9b370b8))

### 2.3.4 (2020-04-06)

-   chore: prep release ([fcba033](https://github.com/Fdawgs/ydh-fhir-listeners/commit/fcba033))
-   chore: rebuild with retained lines ([e3e8fc4](https://github.com/Fdawgs/ydh-fhir-listeners/commit/e3e8fc4))
-   build(babel): add retainlines generator option ([b78421c](https://github.com/Fdawgs/ydh-fhir-listeners/commit/b78421c))
-   build(deps-dev): bump eslint-plugin-import from 2.20.1 to 2.20.2 ([a760db7](https://github.com/Fdawgs/ydh-fhir-listeners/commit/a760db7))
-   docs: grammar and spelling fixes ([da318b0](https://github.com/Fdawgs/ydh-fhir-listeners/commit/da318b0))
-   docs(readme): correct section sizes ([f06ca59](https://github.com/Fdawgs/ydh-fhir-listeners/commit/f06ca59))

### 2.3.3 (2020-03-27)

-   style: parse with new prettier version ([313fba1](https://github.com/Fdawgs/ydh-fhir-listeners/commit/313fba1))
-   chore: add covid-19 test patient ([9e8bb4e](https://github.com/Fdawgs/ydh-fhir-listeners/commit/9e8bb4e))
-   chore: compress supporting docs and images ([79a0a42](https://github.com/Fdawgs/ydh-fhir-listeners/commit/79a0a42))
-   chore(package): add prettier call to build script ([a78e299](https://github.com/Fdawgs/ydh-fhir-listeners/commit/a78e299))
-   chore(package): add prettier call to changelog gen script ([9961d84](https://github.com/Fdawgs/ydh-fhir-listeners/commit/9961d84))
-   build(deps-dev): bump @babel/core from 7.8.7 to 7.9.0 ([12a0d9a](https://github.com/Fdawgs/ydh-fhir-listeners/commit/12a0d9a))
-   build(deps-dev): bump @babel/preset-env from 7.8.7 to 7.9.0 ([ffb2fc4](https://github.com/Fdawgs/ydh-fhir-listeners/commit/ffb2fc4))
-   build(deps-dev): bump eslint-config-prettier from 6.10.0 to 6.10.1 ([a736292](https://github.com/Fdawgs/ydh-fhir-listeners/commit/a736292))
-   build(deps-dev): bump prettier from 1.19.1 to 2.0.1 ([45cea40](https://github.com/Fdawgs/ydh-fhir-listeners/commit/45cea40))
-   build(deps-dev): bump prettier from 2.0.1 to 2.0.2 ([ce8d9d4](https://github.com/Fdawgs/ydh-fhir-listeners/commit/ce8d9d4))
-   docs(flag): update covid-19 entries ([42a5d0b](https://github.com/Fdawgs/ydh-fhir-listeners/commit/42a5d0b))
-   feat(flag-res): tidy snomed table sql; add covid-19 values ([d2e3400](https://github.com/Fdawgs/ydh-fhir-listeners/commit/d2e3400))

### 2.3.2 (2020-03-16)

-   chore(security): update dependencies ([d37748a](https://github.com/Fdawgs/ydh-fhir-listeners/commit/d37748a))
-   build(deps-dev): bump eslint-plugin-json from 2.1.0 to 2.1.1 ([884f2f2](https://github.com/Fdawgs/ydh-fhir-listeners/commit/884f2f2))

### 2.3.1 (2020-03-12)

-   style: change whitespace indents ([b9f753d](https://github.com/Fdawgs/ydh-fhir-listeners/commit/b9f753d))
-   fix(read): correct misspelled variable ([345f134](https://github.com/Fdawgs/ydh-fhir-listeners/commit/345f134))
-   chore: add school contact and pregnancy flag to test resources ([9a1e3fd](https://github.com/Fdawgs/ydh-fhir-listeners/commit/9a1e3fd))
-   chore: update lockfile ([7eaf5dc](https://github.com/Fdawgs/ydh-fhir-listeners/commit/7eaf5dc))
-   build(deps-dev): bump @babel/core from 7.8.4 to 7.8.6 ([6d619d4](https://github.com/Fdawgs/ydh-fhir-listeners/commit/6d619d4))
-   build(deps-dev): bump @babel/core from 7.8.6 to 7.8.7 ([48a4404](https://github.com/Fdawgs/ydh-fhir-listeners/commit/48a4404))
-   build(deps-dev): bump @babel/node from 7.8.4 to 7.8.7 ([a343217](https://github.com/Fdawgs/ydh-fhir-listeners/commit/a343217))
-   build(deps-dev): bump @babel/preset-env from 7.8.4 to 7.8.6 ([1755080](https://github.com/Fdawgs/ydh-fhir-listeners/commit/1755080))
-   build(deps-dev): bump @babel/preset-env from 7.8.6 to 7.8.7 ([b3f0405](https://github.com/Fdawgs/ydh-fhir-listeners/commit/b3f0405))

## 2.3.0 (2020-02-24)

-   feat(patient-res): add school code ([722cf5f](https://github.com/Fdawgs/ydh-fhir-listeners/commit/722cf5f))
-   feat(patient-res): add school contact ([4aa28c3](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4aa28c3))
-   feat(patient-res): add school subquery ([a1a990d](https://github.com/Fdawgs/ydh-fhir-listeners/commit/a1a990d))
-   build(deps-dev): bump eslint-plugin-json from 2.0.1 to 2.1.0 ([2e2a10b](https://github.com/Fdawgs/ydh-fhir-listeners/commit/2e2a10b))
-   fix(patient-res): change contact.name from array to object ([fe1ca5f](https://github.com/Fdawgs/ydh-fhir-listeners/commit/fe1ca5f))
-   docs(flag): add coronavirus / Covid-19 flag code ([52fb8f8](https://github.com/Fdawgs/ydh-fhir-listeners/commit/52fb8f8))

### 2.2.1 (2020-02-05)

-   fix(patient-res): correct name of gp display column ([8de1e5c](https://github.com/Fdawgs/ydh-fhir-listeners/commit/8de1e5c))
-   fix(res-query): fix case of column name ([4ff1a92](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4ff1a92))

## 2.2.0 (2020-02-04)

-   feat: add getResultSet function ([df7dc2e](https://github.com/Fdawgs/ydh-fhir-listeners/commit/df7dc2e))
-   feat(allergy-res): use getResultSet function ([29706f2](https://github.com/Fdawgs/ydh-fhir-listeners/commit/29706f2))
-   feat(condition-res): use getResultSet function ([42778b1](https://github.com/Fdawgs/ydh-fhir-listeners/commit/42778b1))
-   feat(docref-res): use getResultSet function ([df68c44](https://github.com/Fdawgs/ydh-fhir-listeners/commit/df68c44))
-   feat(encounter-res): add adm/dis wards and specialties ([af07ecb](https://github.com/Fdawgs/ydh-fhir-listeners/commit/af07ecb))
-   feat(encounter-res): map adm/dis wards to location elements ([e437a34](https://github.com/Fdawgs/ydh-fhir-listeners/commit/e437a34))
-   feat(encounter-res): use getResultSet function ([ce1037d](https://github.com/Fdawgs/ydh-fhir-listeners/commit/ce1037d))
-   feat(flag-res): use getResultSet function ([5ce1cc0](https://github.com/Fdawgs/ydh-fhir-listeners/commit/5ce1cc0))
-   refactor: remove unused variable ([710cda2](https://github.com/Fdawgs/ydh-fhir-listeners/commit/710cda2))
-   refactor(medication-res): use getResultSet function ([1120e62](https://github.com/Fdawgs/ydh-fhir-listeners/commit/1120e62))
-   refactor(patient-res): use getResultSet function ([e1058c6](https://github.com/Fdawgs/ydh-fhir-listeners/commit/e1058c6))
-   chore: lint and build encounter changes ([815bc14](https://github.com/Fdawgs/ydh-fhir-listeners/commit/815bc14))
-   chore: move channel files to dist ([48a7942](https://github.com/Fdawgs/ydh-fhir-listeners/commit/48a7942))
-   chore: use prettier ([414c22c](https://github.com/Fdawgs/ydh-fhir-listeners/commit/414c22c))
-   chore(eslintignore): add .eslintignore file ([6172160](https://github.com/Fdawgs/ydh-fhir-listeners/commit/6172160))
-   chore(prettierignore): add dist directory ([3cad27a](https://github.com/Fdawgs/ydh-fhir-listeners/commit/3cad27a))
-   fix: convert getResultSet return to object not array ([ec447b4](https://github.com/Fdawgs/ydh-fhir-listeners/commit/ec447b4))
-   fix(encounter-res): fix indentifier values ([faf9444](https://github.com/Fdawgs/ydh-fhir-listeners/commit/faf9444))
-   build(babel): add babel transcompiling ([459f062](https://github.com/Fdawgs/ydh-fhir-listeners/commit/459f062))
-   build(babel): disable strict mode ([06795b6](https://github.com/Fdawgs/ydh-fhir-listeners/commit/06795b6))
-   build(deps-dev): bump eslint-config-prettier from 6.9.0 to 6.10.0 ([bd1a1d1](https://github.com/Fdawgs/ydh-fhir-listeners/commit/bd1a1d1))
-   build(deps-dev): bump eslint-plugin-import from 2.20.0 to 2.20.1 ([4d42f43](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4d42f43))
-   docs: replace references to src with dist ([e42afcb](https://github.com/Fdawgs/ydh-fhir-listeners/commit/e42afcb))
-   docs(contributing): add transcompiling steps ([32fe772](https://github.com/Fdawgs/ydh-fhir-listeners/commit/32fe772))
-   docs(contributing): grammar and punctuation fixes ([6cbda2c](https://github.com/Fdawgs/ydh-fhir-listeners/commit/6cbda2c))
-   docs(contributing): grammatical fixes and minor corrections ([c24e44c](https://github.com/Fdawgs/ydh-fhir-listeners/commit/c24e44c))
-   docs(readme): grammatical fixes and minor corrections ([92ac062](https://github.com/Fdawgs/ydh-fhir-listeners/commit/92ac062))
-   docs(readme): spelling fixes ([9af14f8](https://github.com/Fdawgs/ydh-fhir-listeners/commit/9af14f8))

## 2.1.0 (2020-01-24)

-   chore: add prettierignore file ([0d99767](https://github.com/Fdawgs/ydh-fhir-listeners/commit/0d99767))
-   chore: move test patients into test_resources route ([e0654ea](https://github.com/Fdawgs/ydh-fhir-listeners/commit/e0654ea))
-   chore: remove live_backups ([b5cfab5](https://github.com/Fdawgs/ydh-fhir-listeners/commit/b5cfab5))
-   chore: tidy config structure ([9c8c5da](https://github.com/Fdawgs/ydh-fhir-listeners/commit/9c8c5da))
-   chore(test-patient): add flag resource for 9449304513 ([96c83a5](https://github.com/Fdawgs/ydh-fhir-listeners/commit/96c83a5))
-   chore(test-patient): add flag resource for 9449307210 ([55b66af](https://github.com/Fdawgs/ydh-fhir-listeners/commit/55b66af))
-   chore(test-patient): update test patient 9449304513 example ([8b2ffce](https://github.com/Fdawgs/ydh-fhir-listeners/commit/8b2ffce))
-   chore(test-patient): update test patient 9449307210 example ([cf747eb](https://github.com/Fdawgs/ydh-fhir-listeners/commit/cf747eb))
-   docs: add contributing guide ([cda09b3](https://github.com/Fdawgs/ydh-fhir-listeners/commit/cda09b3))
-   docs: add quote on purpose of repo ([98659c6](https://github.com/Fdawgs/ydh-fhir-listeners/commit/98659c6))
-   docs: add src/CapabilityStatement to release steps ([3df7c52](https://github.com/Fdawgs/ydh-fhir-listeners/commit/3df7c52))
-   docs: add version of TrakCare deployed against ([a7a2bae](https://github.com/Fdawgs/ydh-fhir-listeners/commit/a7a2bae))
-   docs: clarify on what Mirth Connect doesn't support ([322faef](https://github.com/Fdawgs/ydh-fhir-listeners/commit/322faef))
-   docs(flag): tidy whitespace ([4b272f1](https://github.com/Fdawgs/ydh-fhir-listeners/commit/4b272f1))
-   docs(readme): add travis-ci button ([7d81984](https://github.com/Fdawgs/ydh-fhir-listeners/commit/7d81984))
-   ci(travis): add build config ([a7ea735](https://github.com/Fdawgs/ydh-fhir-listeners/commit/a7ea735))
-   feat: add documentation value ([bb86721](https://github.com/Fdawgs/ydh-fhir-listeners/commit/bb86721))
-   feat: extend CapabilityStatement resource values ([5a853b1](https://github.com/Fdawgs/ydh-fhir-listeners/commit/5a853b1))
-   feat(flag): add snomed code support ([996393a](https://github.com/Fdawgs/ydh-fhir-listeners/commit/996393a))
-   build: add basic test script ([de01c9f](https://github.com/Fdawgs/ydh-fhir-listeners/commit/de01c9f))

## 2.0.0 (2020-01-16)

-   chore: increment major release version ([5856aef](https://github.com/Fdawgs/ydh-fhir-listeners/commit/5856aef))
-   feat: Add changelog generation ([1094555](https://github.com/Fdawgs/ydh-fhir-listeners/commit/1094555))
-   feat: add class search parameter ([1a19f32](https://github.com/Fdawgs/ydh-fhir-listeners/commit/1a19f32))
-   feat: add type and class search parameters to channel ([2405ba5](https://github.com/Fdawgs/ydh-fhir-listeners/commit/2405ba5))
-   feat: add type search parameter ([340695c](https://github.com/Fdawgs/ydh-fhir-listeners/commit/340695c))
-   refactor: remove redundant checks for descs ([0614fe7](https://github.com/Fdawgs/ydh-fhir-listeners/commit/0614fe7))
-   refactor: remove redundant newStringOrUndefined function calls ([09e5dcc](https://github.com/Fdawgs/ydh-fhir-listeners/commit/09e5dcc))
-   refactor: stop queries from running if patient ID not present ([8afcc3d](https://github.com/Fdawgs/ydh-fhir-listeners/commit/8afcc3d))
-   docs: fix key task table ([341f835](https://github.com/Fdawgs/ydh-fhir-listeners/commit/341f835))
-   docs: update contextual link key task table ([b31e178](https://github.com/Fdawgs/ydh-fhir-listeners/commit/b31e178))
-   Add outpatient encounter.class coding ([7c059bd](https://github.com/Fdawgs/ydh-fhir-listeners/commit/7c059bd))
-   Add outpatient encounter.class coding ([b2082f5](https://github.com/Fdawgs/ydh-fhir-listeners/commit/b2082f5))
-   Bump eslint-plugin-import from 2.19.1 to 2.20.0 ([80f72e9](https://github.com/Fdawgs/ydh-fhir-listeners/commit/80f72e9))
-   Fix test patient reference ([10b8e97](https://github.com/Fdawgs/ydh-fhir-listeners/commit/10b8e97))
-   Update dependencies ([ad295fe](https://github.com/Fdawgs/ydh-fhir-listeners/commit/ad295fe))
