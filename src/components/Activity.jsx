import React from 'react';
import { connect } from 'react-redux';
import { setActivity } from '../redux/actions';

const Activity = ({ cat, id, setActivity }) => {

    return (
        <>
            <p>{cat.name} is {cat.activity}</p>
            <button type="button" onClick={() => setActivity(id, "eating")}>Eating</button>
            <button type="button" onClick={() => setActivity(id, "napping")}>Napping</button>
            <button type="button" onClick={() => setActivity(id, "playing")}>Playing</button>
        </>
    )
};

const mapStateToProps = state => {
    const { cat, id } = state;
    return ( cat, id );
    
}

export default connect(mapStateToProps, { setActivity })(Activity);