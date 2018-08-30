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

## Global types

### Add / edit / remove flow types

Add your flow types in `./flow_typed` directory.

Don't forget `declare` unless you want `import / export`.

### Ignore flow warning or error

just add a comment in the line above the flow error:

```javascript
// $FlowIgnore
```