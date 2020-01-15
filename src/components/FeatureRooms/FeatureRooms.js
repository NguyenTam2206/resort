import React from 'react';
import { RoomConsumer } from '../context';
import Loading from '../Loading';
import Room from '../Room/Room';
import Title from '../Title';

const FeatureRooms = () => {
    return (
        <RoomConsumer>
            {value => {
                let { loading, featuredRooms: rooms } = value;
                let roomss = rooms.map(room => {
                    return <Room key={room.id} room={room} />
                })
                return (
                    <section className="mt-5 featured-rooms">
                        <Title title={'Featured Rooms'} />
                        <div className="featured-rooms-center">
                            {loading ? <Loading /> : roomss}
                        </div>
                    </section>
                )
            }}
        </RoomConsumer>
    )
}

export default FeatureRooms;