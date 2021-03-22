import React, { memo, useState } from 'react';
/** Eventually replace Toolbar with TopAppBar when the features catch up */
import {
    Toolbar,
    ToolbarRow,
    ToolbarSection,
    ToolbarTitle,
    ToolbarMenuIcon
} from 'rmwc/Toolbar';
import { Fab } from 'rmwc/Fab';
import { connect } from 'react-redux';
import { getList } from "../getData";
import { setFocusMode } from "../../store/actions/focusMode";

function ListHeader({ openNav, listName, isFocusMode, startFocusMode }) {
    return (
        <Toolbar>
            <ToolbarRow>
                <ToolbarSection alignStart>
                    <ToolbarMenuIcon use="menu" onClick={openNav}/>
                    <ToolbarTitle>{listName}</ToolbarTitle>
                </ToolbarSection>
                <ToolbarSection alignEnd>
                    {!isFocusMode && (<Fab icon="lightbulb" label="Focus" onClick={() => startFocusMode()}/>)}
                </ToolbarSection>
            </ToolbarRow>
        </Toolbar>
    );
}

const mapStateToProps = state => {
    const {activeList, lists, isFocusMode} = state;

    return {
        listName: getList(lists, activeList).get('name'),
        isFocusMode,
    };
};

const mapDispatchToProps = dispatch => ({
    startFocusMode: () => dispatch(setFocusMode(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(ListHeader));