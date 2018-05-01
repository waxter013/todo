import { combineReducers } from 'redux'
import todos from './todos'
import activeList from './activeList'
import lists from './lists';
// import visibilityFilter from './visibilityFilter'

/**
 * Combine all reducer functions into a single reducer function the can be passed to createStore();
 */
export default combineReducers({
    activeList: activeList,
    todos: todos,
    lists: lists
    // visibilityFilter

});