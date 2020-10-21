import React, { useState } from 'react';
import { connect } from 'react-redux';
import { eat, play, nap, newName } from '../redux/actions';

const Activity = ({ activity, name, eat, play, nap, newName }) => {
    const [inputName, setInputName] = useState('');

    const _updateInput = input => {
        setInputName(input);
    };

    const _handleUpdateName = () => {
        newName(inputName)
        setInputName('')
    };

    return (
        <>
            <h1>What is the cat doing now???</h1>
            <p>{name} is {activity}</p>
            <button type="button" onClick={() => eat()}>Eating</button>
            <button type="button" onClick={() => nap()}>Napping</button>
            <button type="button" onClick={() => play()}>Playing</button>
            <br />
            <input
                onChange={e => _updateInput(e.target.value)}
                value={inputName}
            />
            <button className="update-name" onClick={_handleUpdateName}>
                Submit
            </button>
        </>
    )
};

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
    
}

export default connect(mapStateToProps, { eat, play, nap, newName })(Activity);