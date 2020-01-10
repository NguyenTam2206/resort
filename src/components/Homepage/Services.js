import React, { useState } from 'react';
import Title from '../Title';
import { GiFemaleLegs, GiCigarette, GiPagoda } from 'react-icons/gi';
import { IoMdBeer } from 'react-icons/io';
import pagoda from '../../images/pagoda.png';

const Services = () => {
    const [state, setState] = useState({
        services : [
            {
                icon : <IoMdBeer />,
                title : 'Drinking is a must',
                info : 'Đi resort là phải uống bia.'
            },
            {
                icon : <GiCigarette />,
                title : 'Chilling',
                info : 'Vui có chừng, dừng đúng lúc.'
            },
            {
                icon : <GiFemaleLegs />,
                title : 'Fall In Love',
                info : 'Pass: Bạn anh Thắng'
            },
            {
                icon : <img src={pagoda} alt="icon"/>,
                title : 'Resort or Pagoda?',
                info : <a href="https://www.facebook.com/qahatranh/" style={{textDecoration:'none', color: 'black'}}>Welcome to QaHaTranh</a>
            }
        ]
    })
    return (
        <>
            <Title title={'Services'} />
            <div className="services-center">
                {state.services.map((item, index) => {
                    return (
                        <article key={index} className="services">
                            <span style={{fontSize:'80px', color:'orange'}}>{item.icon}</span>
                            <h4>{item.title}</h4>
                            <p>{item.info}</p>
                        </article>
                    )
                })}
            </div>
        </>
    )
};

export default Services;