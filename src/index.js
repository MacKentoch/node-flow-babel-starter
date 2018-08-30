// @flow

// #region constants
// NOTE: flow type "DummyCallBack" comes from <ROOT_PROJECT_DIR>/flow_typed (no need to explicitely import)
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
