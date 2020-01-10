import React from 'react';
import SingleRoom from './SingleRoom';
import Hero from '../Hero/Hero';
import {Link} from 'react-router-dom'
import Banner from '../Banner/Banner';

const Roompage = () => {
    return (
        <>
            <Hero hero={'roomsHero'}>
                <Banner title={'Our Rooms'} subtitle={'Hello Boss, Do u love my "room"?'}>
                    <Link to="/">
                        <button type="button" class="btn btn-outline-warning">
                            Girls List
                        </button>
                    </Link>
                </Banner>
            </Hero>
        </>
    )
};

export default Roompage;