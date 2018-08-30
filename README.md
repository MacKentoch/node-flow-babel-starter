# A NodeJS 8.9+ with Flow support

Using flow in a node application is doable with `flow-bin` only.

But when you are in need of more, `babel 7` may help you.

> This starter uses babel 7 **just for adding flow support and no more**. Eslint and prettier are your best friends to keep your code weel written.

## Install

```bash
yarn install
```

## Build (removes flow types from code so that Node JS can do its job)

```bash
yarn run build
```

or

```bash
npm run build
```