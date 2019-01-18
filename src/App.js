import React, { Component } from 'react';
/* TODO: Convert these list-related components into a List view */
import ListHeader from './containers/ListHeader';
import ListsNav from './containers/ListsNav';
import FilteredToDoList from './containers/FilteredToDoList';
import AddToDo from './views/AddToDo';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {

    constructor(props){
        super (props);
        this.state = {
          showNav: false
        };

        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    openNav () {
        this.setState(() => ({
            showNav: true
        }));
    }

    closeNav () {
        this.setState(() => ({
            showNav: false
        }));
    }

    render() {
        return (
            <div className={css(styles.app)}>
                <ListHeader openNav={this.openNav}/>
                <ListsNav open={this.state.showNav} closeNav={this.closeNav}/>
                <FilteredToDoList/>
                <AddToDo/>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    app: {
        // textAlign: 'center',
    }
});

export default App;
