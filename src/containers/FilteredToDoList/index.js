// import React from 'react';
import {connect} from "react-redux";
import ToDoList from "../../components/ToDoList/ToDoList.js";
import {completeToDo, deleteToDo} from "../../store/actions";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'DELETED':
            return todos.filter(t => t.isDeleted);
        case 'COMPLETED':
            return todos.filter(t => t.isCompleted);
        case 'ACTIVE':
            return todos.filter(t => !t.isCompleted && !t.isDeleted);
        case 'ALL':
        default:
            return todos
    }
};

const mapStateToProps = state => {
    console.log(state);
    return {
        listName: "listName", //state.toDoLists[0].name
        todos: getVisibleTodos(state.toDoLists[0].todos, 'ACTIVE')
    }
};

const mapDispatchToProps = dispatch => ({
    toggleComplete: id => dispatch(completeToDo(id)),
    toggleDelete: id => dispatch(deleteToDo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);