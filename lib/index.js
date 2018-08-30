'use strict';

// #region flow types
// #endregion
// #region constants
const delayedNothing = cb =>
  new Promise(resolve => process.nextTick(() => resolve(cb()))); // #endregion

(async () => {
  try {
    await delayedNothing();
  } catch (error) {
    throw error;
  }
})();
