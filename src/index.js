// @flow

// #region flow types
type CallBack = () => any;
// #endregion

// #region constants
const delayedNothing = (cb: CallBack) =>
  new Promise(resolve => process.nextTick(() => resolve(cb())));
// #endregion

(async () => {
  try {
    await delayedNothing(() => console.log('done'));
  } catch (error) {
    throw error;
  }
})();
