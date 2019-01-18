import React, {Component} from 'react';
import { ListItem, ListItemText, ListItemMeta } from '@rmwc/list';
import { IconToggle } from 'rmwc/IconToggle';

// import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { deleteList } from "../../../store/actions/lists";

class NavItem extends Component {

    render () {
        const {list, deleteList, onClick} = this.props;

        return (
            <ListItem key={list.id} onClick={onClick}>
                <ListItemText>
                    {list.name}
                </ListItemText>
                <ListItemMeta>
                    <IconToggle
                        checked={list.isDeleted}
                        onChange={() => deleteList(list.id)}
                        on={{label: 'Undo Delete', content: 'add'}}
                        off={{label: 'Delete Todo', content: 'delete'}}
                    />
                </ListItemMeta>
            </ListItem>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteList: (id) => dispatch(deleteList(id))
});

export default connect(null, mapDispatchToProps)(NavItem);