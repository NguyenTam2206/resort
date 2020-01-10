import React from 'react';

const Banner = ({title, children, subtitle}) => {
    return (
        <>
        <div className="banner">
            <h1>{title}</h1>
            <hr  style={{borderTop : '3px solid orange'}} width="30%" align="center" />
            <div>
                <p>{subtitle}</p>
                {children}
            </div>
        </div>
        </>
    )
}

export default Banner;