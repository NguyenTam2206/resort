import React from 'react';
import defaultImg from '../../images/room-1.jpeg';
import {Link} from 'react-router-dom';

const Room = ({room}) => {
    const {name, slug, price, images} = room;

    return(
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg } alt="room" />
                <div className="price-top">
                    <h5 style={{color: 'orange'}}>${price}</h5>
                    <span style={{color: 'white', fontSize: '.8rem'}}>per night</span>
                </div>
                <Link to={`/rooms/${slug}`} className="btn btn-outline-warning room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">
                {name}
            </p>
        </article>
    )
};

export default Room;