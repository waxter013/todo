/**
 * Reducer Utilities
 */

/**
 * Create a redux reducer given an object of actions mapped to their handler functions.
 * @param initialState - The applications initial state (optional).
 * @param handlers - An object of actions mapped to their handler functions
 * @returns {function} - A reducer function
 */
function createReducer(initialState, handlers) {

    return function reducer(state = initialState, action) {

        // Call and return the action handler (if it exists)
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        }
        // Return the state object
        else {
            return state
        }
    }
}


export { createReducer };