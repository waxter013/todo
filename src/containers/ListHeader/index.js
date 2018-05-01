import React, { Component } from 'react';
import {
    Toolbar,
    ToolbarRow,
    ToolbarSection,
    ToolbarTitle,
    ToolbarMenuIcon
} from 'rmwc/Toolbar';
import { connect } from 'react-redux';
import { getList } from "../getData";


class ListHeader extends Component {

    render () {
        return (
            <Toolbar>
                <ToolbarRow>
                    <ToolbarSection alignStart>
                        <ToolbarMenuIcon use="menu" onClick={this.props.openNav}/>
                        <ToolbarTitle>{this.props.listName}</ToolbarTitle>
                    </ToolbarSection>
                </ToolbarRow>
            </Toolbar>
        );
    }
}

const mapStateToProps = state => {
    const {activeList: listId, lists, todos} = state;

    return {
        listName: getList(lists, listId).get('name'),
    };
};

export default connect(mapStateToProps)(ListHeader);