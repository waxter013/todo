
export const addToDo = (text, time, id) => ({
    type: 'addToDo',
    text,
    time,
    id
});

export const completeToDo = id => ({
    type: 'completeToDo',
    id
});

export const deleteToDo = id => ({
    type: 'deleteToDo',
    id
});