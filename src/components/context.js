import React, { useState, useEffect } from 'react';
import items from '../data';

const RoomContext = React.createContext();

const RoomProvider = (props) => {
    const [state, setState] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        //filters
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    })

    useEffect(
        () => {
            let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = state;
            let tempRooms = [...rooms]
            //tranform value
            capacity = parseInt(capacity);
            //filter type
            if (type !== 'all') {
                tempRooms = tempRooms.filter(room => room.type === type)
            }
            //filter capacity
            if (capacity !== 1) {
                tempRooms = tempRooms.filter(room => room.capacity >= capacity)
            }
            //filter price
                tempRooms = tempRooms.filter(room => room.price <= price)
            //filter size
                tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
            //filter breakfast
                if(breakfast){
                    tempRooms = tempRooms.filter(room => room.breakfast === true);
                }
            //filter pets
                if(pets){
                    tempRooms = tempRooms.filter(room => room.pets === true);
                }
            setState((state) => {
                return {
                    ...state,
                    sortedRooms: tempRooms
                }
            })
        },
        [state.type, state.capacity, state.price, state.minPrice, state.maxSize, state.breakfast, state.pets]
    );

    useEffect(() => {
        let rooms = formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        setState((state) => {
            return {
                ...state,
                rooms: rooms,
                featuredRooms: featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice: maxPrice,
                maxSize: maxSize
            }
        })
    }, [])

    const formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id };
            return room;
        })
        return tempItems
    }

    const getRoom = (slug) => {
        let tempRooms = [...state.rooms];
        let room = tempRooms.find(room => {
            return room.slug === slug;
        });
        return room;
    }

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = event.target.name;
        // const type = event.target.type;
        // const name = event.target.name;
        // const value = event.target.value;
        setState((state) => {
            return {
                ...state,
                [name]: value
            }
        })
    }


    // const filterRooms = () => {
    //     console.log('hello')
    // }
    return (
        <RoomContext.Provider value={{
            ...state,
            getRoom,
            handleChange
        }}>
            {props.children}
        </RoomContext.Provider>
    )
}
const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} value={value} />}
        </RoomConsumer>
    }
}

// function propsProxyHOC(WrappedComponent) {
//     return class PropsProxy extends React.Component {
//         render() {
//             return <WrappedComponent {...this.props}/>
//         }
//     }
// }

export { RoomProvider, RoomConsumer, RoomContext };
