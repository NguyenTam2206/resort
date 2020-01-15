import React, { useState } from 'react';
import Title from '../Title';
import { GiFemaleLegs, GiCigarette } from 'react-icons/gi';
import { IoMdBeer } from 'react-icons/io';
import pagoda from '../../images/pagoda.png';

const Services = () => {
    const [state] = useState({
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
                info : <a href="https://www.facebook.com/qahatranh/" rel="noopener noreferrer" target="_blank" style={{textDecoration:'none', color: 'black'}}>Welcome to QaHaTranh</a>
            }
        ]
    })
    return (
        <div className="mt-5">
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
        </div>
    )
};

export default Services;