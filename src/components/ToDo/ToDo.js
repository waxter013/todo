import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Checkbox } from '@rmwc/checkbox';
import { IconButton } from 'rmwc/IconButton';
import {
    ListItem,
    ListItemText,
    ListItemSecondaryText,
    ListItemGraphic
} from '@rmwc/list';

class ToDo extends Component {

    render () {
        return (
            <ListItem tag="li" className={css(styles.toDo)}>
                <ListItemGraphic>
                    <Checkbox checked={this.props.isCompleted}
                              onChange={this.props.toggleComplete}
                    />
                </ListItemGraphic>
                <ListItemText className="toDoText">
                    {this.props.text}
                    <ListItemSecondaryText>{this.props.time}</ListItemSecondaryText>
                </ListItemText>
                <IconButton
                    checked={this.props.isDeleted}
                    onClick={this.props.toggleDelete}
                    icon="delete"
                    className={css(styles.deleteBttn)}
                />
            </ListItem>
        );
    }
}

const styles = StyleSheet.create({
    toDo: {
        // height: '3rem',
        // width: '100%',
        // padding: '1rem'
    },
    deleteBttn: {
        marginLeft: 'auto'
    }
});

export default ToDo;