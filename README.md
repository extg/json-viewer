# Chrome DevTools JSON Viewer

![Screenshot](./screenshot1.jpg =400x)

## Getting started

```sh
git clone https://github.com/extg/json-viewer
cd json-viewer
yarn
yarn build # extendion will be builded into packages/json-viewer/build
```


## Bootstrap

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


## Publish

```sh
cp .env.example .env
# Enter credentials
# sh ./release-to-chrome-web-store.sh
```

## Features

- [ ] Добавить поддержку синтаксиса [react-json-view](https://mac-s-g.github.io/react-json-view/demo/dist/)
