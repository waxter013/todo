/**
 * The initial state of the Redux store
 */

import { List } from 'immutable';
import { makeTodo, makeList} from './recordFactories';

// Create store data
const todos = List([
        makeTodo({text: 'Item 1'}),
        makeTodo({id: 1, text: 'Item 2'}),
        makeTodo({listId: 1, text: 'L1'}),
        makeTodo({listId: 1, id: 1, text: 'L2'})
    ]);

const lists = List([
        makeList({
            id: 0,
            name: 'To Do App, Baby!'
        }),
        makeList({
            id: 1,
            name: 'List 2'
        })
    ]);

// Create store with data
const store = {activeList: 0, lists, todos};

export default store;