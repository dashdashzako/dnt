# dnt

[![codecov](https://codecov.io/gh/dashdashzako/dnt/branch/master/graph/badge.svg)](https://codecov.io/gh/dashdashzako/dnt)
[![npm version](https://img.shields.io/npm/v/@dashdashzako/dnt.svg)](https://www.npmjs.com/package/@dashdashzako/dnt)
![License type](https://img.shields.io/github/license/dashdashzako/dnt.svg)

Browser detection for the "Do Not Track" flag.

```shell
npm i @dashdashzako/dnt
```

## Usage

```ts
import { isDNTEnabled } from 'dnt';

const doNotTrack = isDNTEnabled(window);
```

## License

[MIT](LICENSE)
