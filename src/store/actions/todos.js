///////////////////////////////////
// Todos Actions
///////////////////////////////////

export const addToDo = (listId, text, time) => ({
    type: 'addToDo',
    listId,
    text,
    time
});

export const completeToDo = (listId, id) => ({
    type: 'completeToDo',
    listId,
    id
});

export const deleteToDo = (listId, id) => ({
    type: 'deleteToDo',
    listId,
    id
});

export const editToDo = (listId, id, text, time) => ({
    listId,
    id,
    text,
    time
});