import React from 'react';

const Title = ({title}) => {
    return (
        <div className='section-title'>
            <h4>{title}</h4>
            <hr  style={{borderTop : '3px solid orange'}} width="10%" align="center" />
        </div>
    ) 
};

export default Title;