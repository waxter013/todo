import React, {Component} from 'react';
import { Drawer, DrawerContent} from 'rmwc/Drawer';
import { List, ListItem, ListItemGraphic, ListItemText} from '@rmwc/list';
import { Fab } from '@rmwc/Fab';
import { IconButton } from '@rmwc/icon-button';
import { TextField } from '@rmwc/textfield';
import NavItem from './NavItem'

import { StyleSheet, css } from 'aphrodite';
import { getVisibleLists } from '../getData';
import { connect } from 'react-redux';
import { addList } from '../../store/actions/lists';
import { showList } from '../../store/actions/activeList';

class ListsNav extends Component {

    constructor (props) {
        super (props);

        this.state = {
            showForm: false,
            listName: ''
        };

        this.display = this.display.bind(this);
        this.showAddListForm = this.showAddListForm.bind(this);
        this.hideAddListForm = this.hideAddListForm.bind(this);
        this.submit = this.submit.bind(this);
        this.updateText = this.updateText.bind(this);
    }

    // Returns the value of the css display property of the addToDoForm
    display () {
        return (this.state.showForm)? 'block': 'none';
    }

    showAddListForm () {
        this.setState(() => ({
            showForm: true
        }));
    }

    hideAddListForm () {
        this.setState(() => ({
            showForm: false
        }));
    }

    /**
     * Handle submitting of the Add To Do List Form
     */
    submit (e) {
        e.preventDefault();

        const {addList} = this.props;
        let listName = this.state.listName.trim();

        // If toDoText is valid
        if (listName.length > 0) {

            // Add To Do List
            addList(listName);

            // Hide form
            this.hideAddListForm();

            // Reset form
            this.setState(() => ({
                listName: ''
            }));
        }
    }

    updateText (e) {
        e.preventDefault();
        e.persist();

        this.setState(() => ({
            listName: e.target.value
        }));
    }

    render () {
        const { listName } = this.state,
            { open, showList, closeNav, lists } = this.props;

        return (
            <div>
                {/* Navbar */}
                <Drawer temporary open={open} onClose={closeNav}>
                    {/*<DrawerHeader/>*/}
                    <DrawerContent>
                        <List>

                            {/* Add New List Button */}
                            <ListItem onClick={this.showAddListForm}>
                                <ListItemGraphic>add_circle_outline</ListItemGraphic>
                                <ListItemText>Add New List</ListItemText>
                            </ListItem>

                            {/* The Lists */}
                            {lists.map( list => {
                                return (
                                    <NavItem key={list.id} list={list} onClick={(e) => {e.preventDefault(); showList(list.id); closeNav(); }}/>
                                );
                            })}
                        </List>
                    </DrawerContent>
                </Drawer>

                {/* Add To Do List Form */}
                <form className={css(styles.addListForm)} style={{display: this.display()}}>
                    <IconButton
                        onClick={this.hideAddListForm}>
                        close
                    </IconButton>
                    <TextField required fullwidth label="List Name" onChange={this.updateText} value={listName}/>
                    <Fab
                        onClick={this.submit}>
                        done
                    </Fab>
                </form>
            </div>
        );
    }
}


const styles = StyleSheet.create({
    addTrigger: {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1
    },
    addListForm: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        padding: '2rem',
        zIndex: 999,
        backgroundColor: '#ffffff'
    }
});


const mapStateToProps = state => {
    return {
        lists: getVisibleLists(state.lists, 'ACTIVE')
    }
};

const mapDispatchToProps = dispatch => ({
    showList: (id) => dispatch(showList(id)),
    addList: (listName) => dispatch(addList(listName))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListsNav);