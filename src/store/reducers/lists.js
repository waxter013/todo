import { createReducer } from "./_reducer-utils";
import initialState from '../';
import { makeList } from "../recordFactories";

/**
 * List action names mapped to their handler functions
 * @type {Object}
 */
const listsHandler = {
    'addList' (lists, {listName}) {
        const numLists = lists.size,
            newList = makeList({id: numLists, name: listName});

        return lists.push(newList);
    },
    'deleteList' (lists, {listId}) {
        return lists.map(list =>
            (list.id === listId)?
            list.update('isDeleted', value => !value):
            list
        );
    }
};

/**
 * A reducer function for Lists
 * @type {function}
 */
export default createReducer(initialState, listsHandler);;