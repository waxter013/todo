import { createReducer } from "./_reducer-utils";

/**
 * Focus Mode action names mapped to their handler functions
 * @type {Object}
 */
const focusModeHandler = {
    'setFocusMode' (wasFocusMode, { isFocusMode }) {
        return isFocusMode;
    }
};

/**
 * A reducer function for focus mode
 * @type {function}
 */
export default createReducer(focusModeHandler);;