import { createReducer } from "./_reducer-utils";
import initialState from '../';
import { makeTodo } from "../recordFactories";

/**
 * ToDo actions mapped to their handler functions
 * @type {Object}
 */
const todosHandler = {
    'addToDo' (todos, {listId, text, time}) {
        const newTodo = makeTodo({
            listId: listId,
            id: todos.size,
            text: text,
            time: time
        });

        return todos.push(newTodo);
    },

    'deleteToDo' (todos, {id}) {
        return todos.map(todo =>
            (todo.get('id') === id)
                ? todo.update('isDeleted', value => !value)
                : todo
        );
    },

    'completeToDo' (todos, {listId, id}) {
        return todos.map(todo =>
            (todo.get('listId') === listId && todo.get('id') === id)
                ? todo.update('isCompleted', value => !value)
                : todo
        );
    }
};

/**
 * A reducer function for ToDos
 * @type {function}
 */
export default createReducer(initialState, todosHandler);