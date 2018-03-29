/**
 * The initial state of the Redux store
 */

let storeWithoutIDs = {
    toDoLists: [
        {
            name: 'To Do App, Baby!',
            todos: [
                {text: 'Item 1', isCompleted: false, isDeleted: false},
                {text: 'Item 2', isCompleted: false, isDeleted: false}
            ]
        }
    ]
};

//Object.assign({}, storeWithoutIDs, {});

const store = {};
store.toDoLists = storeWithoutIDs.toDoLists.map((list, index) => {
    // Add IDs to each toDoList
    Object.defineProperty(list, 'id', {value: index, writable: true, configurable: true, enumerable: true});

    list.todos = list.todos.map((todo, i) => {
        // Add IDs to each todo
        Object.defineProperty(todo, 'id', {value: i, writable: true, configurable: true, enumerable: true});
        return todo;
    });
    return list;
});

export default store;