import { createReducer } from "./_reducer-utils";
import initialState from '../';

/**
 * List action names mapped to their handler functions
 * @type {Object}
 */
const listsHandler = {
    'showList' (state, action) {
        return action.id;
    }
};

/**
 * A reducer function for Lists
 * @type {function}
 */
export default createReducer(initialState, listsHandler);;