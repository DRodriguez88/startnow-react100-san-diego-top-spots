import React from 'react';

export default props => (
    <div className='card mb-5 pt-3 pb-3'>
        <a href={'https://maps.google.com/?q='+props.location[0]+','+props.location[1]}><h2>{props.name}</h2></a>
        <h5 className='mt-1'>{props.description}</h5>
    </div>
);