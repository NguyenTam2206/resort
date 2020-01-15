import React from 'react';
import Room from '../Room/Room';

const RoomsList = ({rooms}) => {
    if(rooms.length === 0){
        return (
            <section className="empty-search">
                <h3 style={{color: "orange"}}>Unfortunately No Rooms Matched Your Search Parameters</h3>
            </section>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item => {
                        return <Room key={item.id} room={item} />
                    })
                }
            </div>
        </section>
    )
};

export default RoomsList;