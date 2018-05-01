// import React from 'react';
import {connect} from "react-redux";
import ToDoList from "../../components/ToDoList/ToDoList.js";
import {completeToDo, deleteToDo} from "../../store/actions/todos";
import { getTodos, getList, getVisibleTodos } from "../getData";


const mapStateToProps = state => {
    const {activeList: listId, lists, todos} = state;

    return {
        listId: listId,
        listName: getList(lists, listId).get('name'),
        todos: getVisibleTodos(getTodos(todos, listId), 'ACTIVE')
    }
};

const mapDispatchToProps = dispatch => ({
    toggleComplete: (listId, id) => dispatch(completeToDo(listId, id)),
    toggleDelete: (listId, id) => dispatch(deleteToDo(listId, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);