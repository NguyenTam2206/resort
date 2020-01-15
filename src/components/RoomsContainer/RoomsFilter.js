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
                types = ['all', ...types];
                //map
                types = types.map((type,index) => <option key={index} value={type}>{type}</option>)
                let people = getUnique(rooms, 'capacity');
                people = people.map((item,index)=><option key={index} value={item}>{item}</option>)
                return (
                    <section className="filter-container">
                        <Title title="search rooms" />
                        <form className="filter-form">
                            {/* seclect types */}
                            <div className="filter-group">
                                <label htmlFor="type">Room Type</label>
                                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                                    {types}
                                </select>
                            </div>
                            {/* end seclect types */}
                            {/* Guest */}
                            <div className="form-group">
                                <label htmlFor="capacity">Guests</label>
                                <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                                    {people}
                                </select>
                            </div>
                            {/* end Guest */}
                            {/* Room Price */}
                            <div className="form-group">
                                <label htmlFor="price">Room Price ${price}</label>
                                <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"></input>
                            </div>
                            {/* End Room Price */}
                            {/* Size */}
                            <div className="form-group">
                                <label htmlFor="size">Room Size (sqr)</label>
                                <div className="size-inputs">
                                    <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"></input>
                                    <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"></input>
                                </div>
                            </div>
                            {/* End Size */}
                            {/* More */}
                            <div className="form-group">
                                <div className="single-extra">
                                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                                    <label htmlFor="breakfast">Breakfast</label>
                                </div>
                                <div className="single-extra">
                                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                                    <label htmlFor="pets">Pets Allowed</label>
                                </div>
                            </div>
                            {/* End More */}
                        </form>
                    </section>
                )
            }}
        </RoomConsumer>
    )
};

export default RoomsFilter;
