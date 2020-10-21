import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCat } from '../redux/actions';
import Activity from './Activity';

const AddCat = ({ cats, addCat }) => {
    const [inputName, setInputName] = useState('');

    const _updateInput = input => {
        setInputName(input);
    };

    const _handleAddCat = () => {
        addCat(inputName)
        setInputName('')
    };

    return (
        <>
            <h1>What is the cat doing now???</h1>
            <p>Add a cat!</p>
            <input
                onChange={e => _updateInput(e.target.value)}
                value={inputName}
            />
            <button className="add-cat" onClick={_handleAddCat}>
                Submit
            </button>
            <ul>
                {Object.entries(cats).map((cat) => {
                    return (
                        <li>
                            <Activity cat={cat[1]} id={cat[0]} />
                        </li>
                    )
                })
                }
            </ul>
        </>
    )
};

const mapStateToProps = state => {
    const { cats } = state;
    return ( cats );
    
}

export default connect(mapStateToProps, { addCat })(AddCat);