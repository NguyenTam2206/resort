import React, { useState } from 'react';
import defaultBcg from '../../images/room-1.jpeg';
import { Link } from 'react-router-dom';
import { RoomConsumer } from '../context';
import Banner from '../Banner/Banner';
import SCHero from '../Hero/SCHero';

const SingleRoom = (props) => {
    const [state] = useState({
        slug: props.match.params.slug,
        defaultBcg,
    })

    return (
        <RoomConsumer>
            {value => {
                const room = value.getRoom(state.slug);
                if (!room) {
                    return <div className="error">
                        <h6>No such room could be found</h6>
                        <Link to="/rooms" className="btn btn-warning">
                            Back To Rooms
                        </Link>
                    </div>
                }
                const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
                return (
                    <>
                        <SCHero image={images[0] || state.defaultBcg}>
                            <Banner title={`${name} room`}>
                                <Link to="/rooms">
                                    <button type="button" className="btn btn-outline-warning">
                                        Back To Rooms
                                </button>
                                </Link>
                            </Banner>
                        </SCHero>
                        <section className="single-room">
                            <div className="single-room-images">
                                {images.map((item, index) => {
                                    return <img src={item} alt={name} key={index} />
                                })}
                            </div>
                            <div className="single-room-info">
                                <article className="desc">
                                    <h3 style={{ color: "orange" }}>Details</h3>
                                    <p>{description}</p>
                                </article>
                                <article className="info">
                                    <h3 style={{ color: "orange" }}>Info</h3>
                                    <h4>Price : ${price}</h4>
                                    <h4>Size : {size} Sqr</h4>
                                    <h4>Max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h4>
                                    <h4>{pets ? "Pets Allowed" : "No Pets Allowed"}</h4>
                                    <h4>{breakfast && "Free Buffet for Breakfast"}</h4>
                                </article>
                            </div>
                        </section>
                        <section className="room-extras">
                            <h3 style={{ color: "orange" }}>Extras</h3>
                            <ul className="extras" style={{paddingInlineStart: '0px'}}>{extras.map((item,index)=>{
                                return <li key={index}>- {item}</li>
                            })}</ul>
                        </section>
                    </>
                )
            }}
        </RoomConsumer>
    )
}

export default SingleRoom;