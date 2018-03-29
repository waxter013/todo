import { combineReducers } from 'redux'
import todos from './todos'
// import visibilityFilter from './visibilityFilter'

/**
 * Combine all reducer functions into a single reducer function the can be passed to createStore();
 */
export default combineReducers({
    todos,
    // visibilityFilter
});