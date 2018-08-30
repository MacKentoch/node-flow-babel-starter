// @flow

// #region constants
const delayedNothing = (cb: DummyCallBack) =>
  new Promise(resolve => process.nextTick(() => resolve(cb())));
// #endregion

(async () => {
  try {
    await delayedNothing(() => console.log('done'));
  } catch (error) {
    throw error;
  }
})();
