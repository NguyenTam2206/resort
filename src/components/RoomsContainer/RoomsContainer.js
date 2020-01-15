import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from '../Loading';
import {withRoomConsumer} from '../context'; // HOC
// import { RoomConsumer } from '../context';

const RoomsContainer = ({value}) => {
    const {loading, sortedRooms, rooms} = value;
    if(loading){
        return <Loading />
    }
    return(
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomsContainer);

// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const {loading, sortedRooms, rooms} = value;
//                 if (loading){
//                     return <Loading />
//                 }
//                 return (
//                     <>
//                         <p>Hello from RoomsContainer</p>
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms} />
//                     </>
//                 )
//             }}
//         </RoomConsumer>
//     )
// };

// export default RoomsContainer;