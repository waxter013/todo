import React, { Component } from 'react';
import { Fab } from '@rmwc/fab';
import { IconButton } from '@rmwc/icon-button';
import { TextField } from '@rmwc/textfield';
import CircularSlider from '../../components/CircularSlider/CircularSlider';

import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { addToDo } from "../../store/actions/todos";
import { Transition } from 'react-transition-group';
// import GSAP from 'react-gsap-enhancer';
// import TweenMax from "gsap";

class AddToDo extends Component {

    constructor (props) {
        super (props);
        this.state = {
            showForm: false,
            toDoText: '',
            toDoTime: 30
        };
        this.display = this.display.bind(this);
        this.submit = this.submit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.updateText = this.updateText.bind(this);
        this.updateTime = this.updateTime.bind(this);
    }

    // Returns the value of the css display property of the addToDoForm
    display () {
        return (this.state.showForm)? 'block': 'none';
    }

    // Toggles the visibility of the addToDoForm
    toggleForm () {
        this.setState( (prevState) => ({
            showForm: !prevState.showForm
        }));
    }

    // Update toDoText when the text field value changes
    updateText(e) {
        e.preventDefault();
        e.persist();

        this.setState(() => ({
            toDoText: e.target.value
        }));
    }

    updateTime(newValue) {
        this.setState(() => ({
            toDoTime: newValue
        }));
    }

    /**
     * Handle submitting of the Add To Do Form
     */
    submit (e) {
        e.preventDefault();

        const {toDoTime} = this.state,
            {listId, addToDo} = this.props;

        let toDoText = this.state.toDoText.trim();

        // If toDoText is valid
        if (toDoText.length > 0) {

            // Add ToDo
            addToDo(listId, toDoText.trim(), toDoTime);

            // Hide form
            this.toggleForm();

            // Reset form
            this.setState(() => ({
                toDoText: '',
                toDoTime: 30
            }));
        }
    }

    render () {
        const { showForm, toDoText, toDoTime } = this.state;

        return (
            <Transition timeout={300} in={showForm} onEnter={() => {console.log('enter')}} onExit={() => {console.log('exit')}}>
                <div>
                    {/* This is the addToDoForm */}
                    <form className={css(styles.addToDoForm)} style={{display: this.display()}}>
                        <IconButton icon="close" className={css(styles.closeToDoFormButton)} onClick={this.toggleForm}/>
                        <TextField required fullwidth label="I want to.." onChange={this.updateText} value={toDoText}/>
                        <CircularSlider onChange={this.updateTime} value={toDoTime} height={(window.innerHeight - 36 - 56)/2} width={window.innerWidth}/>
                        <Fab icon="done" onClick={this.submit}/>
                    </form>
                    <Fab icon="add" className={css(styles.addButton)} onClick={this.toggleForm}/>
                </div>
            </Transition>
        );
    }
}


const styles = StyleSheet.create({
    closeToDoFormButton: {
        position: 'absolute',
        top: '2rem',
        right: '2rem',
        zIndex: 5
    },
    addButton: {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1
    },
    addToDoForm: {
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


const mapStateToProps = state => ({
    listId: state.activeList
});

const mapDispatchToProps = dispatch => ({
    addToDo: (listId, text, time) => dispatch(addToDo(listId, text, time))
});

// export default connect(mapStateToProps, mapDispatchToProps)(GSAP()(AddToDo));
export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);