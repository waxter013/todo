import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo.js';
import { List } from '@rmwc/list';
import { StyleSheet, css } from 'aphrodite';

class ToDoList extends Component {

    render () {
        return (
            <div className={css(styles.toDoListContainer)}>
                <List tag="ul" twoLine>
                    {this.props.todos.map((todo) => {
                        return (
                            <ToDo text={todo.text} time={todo.time} isCompleted={todo.isCompleted} isDeleted={todo.isDeleted} toggleComplete={() => {this.props.toggleComplete(this.props.listId, todo.id)}} toggleDelete={() => {this.props.toggleDelete(this.props.listId, todo.id)}} key={todo.id}/>
                        );
                    })}
                </List>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    toDoListContainer: {
        padding: '2rem'
    }
});



export default ToDoList;