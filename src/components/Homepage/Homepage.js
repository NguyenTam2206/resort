import React from 'react';
import Hero from '../Hero/Hero';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import Services from './Services';
import FeatureRooms from '../FeatureRooms/FeatureRooms';

const Homepage = () => {
    return (
        <>
            <Hero>
                <Banner title={'Luxurious Rooms'} subtitle={'Deluxe Rooms starting at $299'}>
                    <Link to="/rooms">
                        <button type="button" className="btn btn-outline-warning">
                            Our Rooms
                        </button>
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeatureRooms />
        </>
    )
};

export default Homepage;