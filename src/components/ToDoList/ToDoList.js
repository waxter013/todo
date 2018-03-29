import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo.js'
import { StyleSheet, css } from 'aphrodite';

class ToDoList extends Component {

    render () {
        return (
            <div>
                <h1>{this.props.listName}</h1>
                <ul className={"toDoList " + css(styles.toDoList)}>
                    {this.props.todos.map((todo, index) => {
                        return (
                            <ToDo text={todo.text} isCompleted={todo.isCompleted} isDeleted={todo.isDeleted} toggleComplete={() => {this.props.toggleComplete(todo.id)}} toggleDelete={() => {this.props.toggleDelete(todo.id)}} key={index}/>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    toDoList: {
        padding: 0
    }
});



export default ToDoList;