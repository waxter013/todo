import initialState from '../';

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

/**
 * ToDo actions mapped to their handler functions
 * @type {Object}
 */
const todosHandler = {
    'addToDo' (state, action) {
        return Object.assign({}, state, {
            toDoLists: [{
                ...state.toDoLists[0],
                todos: [
                    ...state.toDoLists[0].todos,
                    {
                        id: state.toDoLists[0].todos.length,
                        text: action.text,
                        completed: false
                    }
                ]
            }]
        });
    },

    'deleteToDo' (state, action) {
        return Object.assign({}, state,
            {
                toDoLists: [{
                    ...state.toDoLists[0],
                    todos: state.toDoLists[0].todos.map(todo =>
                        (todo.id === action.id)
                            ? {...todo, isDeleted: !todo.isDeleted}
                            : todo
                        )
                }]
            }
        );
    },

    'completeToDo' (state, action) {
        return Object.assign({}, state,
            {
                toDoLists: [{
                    ...state.toDoLists[0],
                    todos: state.toDoLists[0].todos.map(todo =>
                        (todo.id === action.id)
                            ? {...todo, isCompleted: !todo.isCompleted}
                            : todo
                    )
                }]
            }
        );
    }
};

/**
 * A reducer function for ToDos
 * @type {function}
 */
const todos = createReducer(initialState, todosHandler);

export default todos;