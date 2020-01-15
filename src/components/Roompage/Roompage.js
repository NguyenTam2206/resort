import React from 'react';
import Hero from '../Hero/Hero';
import {Link} from 'react-router-dom'
import Banner from '../Banner/Banner';
import RoomsContainer from '../RoomsContainer/RoomsContainer';

const Roompage = () => {
    return (
        <>
            <Hero hero={'roomsHero'}>
                <Banner title={'Our Rooms'} subtitle={'Hello Boss, Do u love my "room"?'}>
                    <Link to="/">
                        <button type="button" className="btn btn-outline-warning">
                            Girls List
                        </button>
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    )
};

export default Roompage;