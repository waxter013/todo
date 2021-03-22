import { createReducer } from "./_reducer-utils";

/**
 * List action names mapped to their handler functions
 * @type {Object}
 */
const listsHandler = {
    'showList' (state, { id }) {
        return id;
    }
};

/**
 * A reducer function for Lists
 * @type {function}
 */
export default createReducer(listsHandler);