import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Checkbox } from 'rmwc/Checkbox';
import { IconToggle } from 'rmwc/IconToggle';

class ToDo extends Component {

    constructor (props) {
        super (props);

        this.toggleComplete = this.toggleComplete.bind(this);
    }

    toggleComplete () {
        this.props.toggleComplete();
    }

    render () {
        return (
            <div className={"toDo " + css(styles.toDo)}>
                <Checkbox checked={this.props.isCompleted}
                          onChange={this.toggleComplete}
                          className="completeTrigger"/>
                <span className="toDoText">{this.props.text}</span>
                <IconToggle
                    checked={this.props.isDeleted}
                    onChange={this.props.toggleDelete}
                    on={{label: 'Add to active todos', content: 'add'}}
                    off={{label: 'Delete', content: 'delete'}}
                />
            </div>
        );
    }
}

const styles = StyleSheet.create({
    toDo: {
        height: '3rem',
        width: '100%',
        padding: '1rem',
        // backgroundColor: 'red'
    }
});

export default ToDo;