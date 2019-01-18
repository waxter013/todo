/**
 * Helper functions for getting data from the store
 */


/**
 * Get a filtered list of todos
 * @param todos - A list of unfiltered todos
 * @param filter - The filter keyword. Valid filters are 'DELETED', 'COMPLETED', 'ACTIVE', or 'ALL'. Defaults to 'ALL'.
 * @returns A list of filtered todos
 */
export const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'DELETED':
            return todos.filter(t => t.get('isDeleted'));
        case 'COMPLETED':
            return todos.filter(t => t.get('isCompleted'));
        case 'ACTIVE':
            return todos.filter(t => !t.get('isCompleted') && !t.get('isDeleted'));
        case 'ALL':
        default:
            return todos
    }
};

/**
 * Get the todos for a given list
 * @param listId - The id of the list to get the todos of
 * @param todos - Todos for multiple lists
 * @returns todos - The todos of a given list
 */
export const getTodos = (todos, listId) => {
    return todos.filter(t => t.get('listId') === listId);
};

/**
 * Get a filtered list of lists
 * @param lists - A list of unfiltered lists
 * @param filter - The filter keyword. Valid filters are 'DELETED', 'COMPLETED', 'ACTIVE', or 'ALL'. Defaults to 'ALL'.
 * @returns A list of filtered lists
 */
export const getVisibleLists = (lists, filter) => {
    switch (filter) {
        case 'DELETED':
            return lists.filter(t => t.get('isDeleted'));
        case 'ACTIVE':
            return lists.filter(t => !t.get('isDeleted'));
        case 'ALL':
        default:
            return lists;
    }
};

/**
 * Get a list by list id
 * @param lists - A list of lists
 * @param listId - The id of the list we're looking for
 */
export const getList = (lists, listId) => {
    return lists.find(l => l.get('id') === listId, this, lists.get(0));
};