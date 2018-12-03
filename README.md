# Chrome DevTools JSON Viewer

![Screenshot](./screenshot1.jpg =400x)

## Getting started

Install dependencies and bootstrap packages.

```sh
yarn
```


## Build

Build extension into `packages/json-viewer/build`

```sh
yarn build
```

Build favicon

```sh
npx png-to-ico packages/json-viewer/public/icons/icon-48.png > packages/json-viewer/public/favicon.ico
```


## Features

- [ ] Добавить поддержку синтаксиса [react-json-view](https://mac-s-g.github.io/react-json-view/demo/dist/)
