import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

class Checkbox extends Component {

    constructor (props) {
        super (props);
        this.state = {
            isChecked: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState((prevState) => ({
            isChecked: value
        }));
    }

    render () {
        return (
            <input
                className={this.props.className}
                type="checkbox"
                checked={this.state.isChecked}
                onChange={this.handleChange} />
        );
    }
}

const styles = StyleSheet.create({
    checkbox: {
        float: 'left',
        cursor: 'pointer'
    }
});

export default Checkbox;