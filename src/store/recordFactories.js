import { List, Record } from 'immutable';

// Record Factories
const makeTodo = Record({id: 0, listId: 0, text: '', time: 30, isCompleted: false, isDeleted: false}),
    makeList = Record({id: 0, name: '', todos: List(), isDeleted: false});

export { makeTodo, makeList };