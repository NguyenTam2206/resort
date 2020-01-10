import React from 'react';
import Hero from '../Hero/Hero';
import {Link} from 'react-router-dom';
import Banner from '../Banner/Banner';

const PageNotFound = () => {
    return (
        <>
            <Hero>
                <Banner title={'404'} subtitle={'Page Not Found'}>
                    <Link to="/">
                        <button type="button" class="btn btn-outline-warning">
                            Return Homepage
                        </button>
                    </Link>
                </Banner>
            </Hero>
        </>
    )
};

export default PageNotFound;