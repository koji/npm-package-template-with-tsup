# npm-package-template-tsup
This is a template package to publish npm package with typescript and tsup.

## tsup
Bundle your TypeScript library with no config, powered by esbuild.

https://tsup.egoist.dev/

## how to use this
1. add your code to `src`  
2. add export statement to `src/index.ts`
3. test build command to build `src`.
once the command works properly, you will see `dist` folder.

```zsh
# pnpm
$ pnpm run build

# yarn
$ yarn build

# npm
$ npm run build
```
4. publish your package

```zsh
$ npm publish
```
