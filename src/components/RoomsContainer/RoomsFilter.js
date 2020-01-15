import React from 'react';
import { RoomConsumer } from '../context';
import Title from '../Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))] //Lặp qua lấy các giá trị duy nhất (k trùng lặp), value là tên value cần get
}

const RoomsFilter = ({rooms}) => {
    return (
        <RoomConsumer>
            {(value) => {
                const {
                    handleChange,
                    type,
                    capacity,
                    price, minPrice,
                    maxPrice,
                    minSize, maxSize,
                    breakfast,
                    pets, 
                } = value
                // get unique types
                let types = getUnique(rooms, 'type');
                //add all
                types = ['all', ...types]
                
                return (
                    <section className="filter-container">
                        <Title title="search rooms" />
                        <form className="filter-form">
                            {/* seclect types */}
                            <div className="filter-group">
                                <label htmlFor="type">Room Type</label>
                                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                                    {types.map((type,index) => <option key={index} value={type}>{type}</option>)}
                                </select>
                            </div>
                        </form>
                    </section>
                )
            }}
        </RoomConsumer>
    )
};

export default RoomsFilter;