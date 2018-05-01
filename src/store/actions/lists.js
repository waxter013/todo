///////////////////////////////////
// Lists Actions
///////////////////////////////////

export const addList = (listName) => ({
    type: 'addList',
    listName,
});

export const deleteList = (listId) => ({
    type: 'deleteList',
    listId,
});

export const renameList = (listId, listName) => ({
    type: 'renameList',
    listId,
    listName,
});