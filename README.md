# Chrome DevTools JSON Viewer

<image src="screenshot3.jpg" width="400"/>


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
# Setup credentials
sh ./release-to-chrome-web-store.sh
```


## Features

- [x] Toggle mode on click the action button.
- [x] Apply extension only if available
- [ ] Добавить поддержку синтаксиса [react-json-view](https://mac-s-g.github.io/react-json-view/demo/dist/)
- [ ] Сделать страницу настроек (options) и выбор темы на ней 
- [ ] Сделать обзор решений для парсинга и отображения html
- [ ] Составить список "аналогов", посмотреть у них issue, может что интересного предлагают
- [ ] Добавить поддержку jsonp
- [ ] Добавить поддержку подветки синтаксиса "raw" файлов (например, если открыть raw view в github)

## Links

- [create-react-typescript-sass-webextension](https://github.com/crimx/create-react-typescript-sass-webextension)
  Boilerplate for building webextension targeting Chrome & Firefox, using React, TypeScript and Sass
- [chrome-extension-webpack-boilerplate](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate)
  A basic foundation boilerplate for rich Chrome Extensions using Webpack to help you write modular and modern
  Javascript code, load CSS easily and automatic reload the browser on code changes.
- [Awesome-JSON-Viewer](https://github.com/rbrahul/Awesome-JSON-Viewer)
  A Chrome extension to visualize JSON response and introduce awesome JSON prettyfying experiences.
