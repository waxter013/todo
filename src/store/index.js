/**
 * The initial state of the Redux store
 */

import { List } from 'immutable';
import { makeTodo, makeList } from './recordFactories';

// Create store data
const todos = List([
    makeTodo({text: 'Milk'}),
    makeTodo({id: 1, text: 'Eggs'}),
    makeTodo({listId: 1, text: 'Email client'}),
    makeTodo({listId: 1, id: 1, text: 'Schedule meeting'})
]);

const lists = List([
    makeList({
        id: 0,
        name: 'Grocery List'
    }),
    makeList({
        id: 1,
        name: 'Work Tasks'
    })
]);

export default {activeList: 0, isFocusMode: false, lists, todos};