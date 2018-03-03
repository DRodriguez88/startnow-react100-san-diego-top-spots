import React from 'react';

export default props => (
    <div className='card mb-5 pt-3 pb-3'>
        <h2>{props.name}</h2>
        <h5 className='mt-1'>{props.description}</h5>
        <div className='bg-dark mx-auto'>
            <button className='btn-success' onClick={clickHandler}>See it on Google Maps</button>
        </div>
    </div>
);