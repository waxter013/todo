import { combineReducers } from 'redux'
import activeList from './activeList'
import focusMode from './focusMode'
import lists from './lists';
import todos from './todos'

/**
 * Combine all reducer functions into a single reducer function the can be passed to createStore();
 */
export default combineReducers({
    activeList,
    'isFocusMode': focusMode,
    todos,
    lists
});