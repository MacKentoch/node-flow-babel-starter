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

## Donate

Do you use & like `node-flow-babel-starter` but you don’t find a way to show some love?
If yes, please consider donating to support this project. Otherwise, no worries, regardless of whether there is support or not, I will keep maintaining this project. Still, if you buy me a cup of coffee I would be more than happy though 😄

[![Support via PayPal](./assets/Paypal-button.png)](https://www.paypal.me/ErwanDatin/)

## License

The MIT License (MIT)

Copyright (c) 2018 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
