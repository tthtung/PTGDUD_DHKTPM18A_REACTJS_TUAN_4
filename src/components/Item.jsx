import React from 'react';
import './Item.css';

function Item({ name, image, id }) {
    return (
        <div className="card">
            <img src={image} alt={name} />
            <p>{name}</p>
            <button onClick={() => alert(id)}>Click me</button>
        </div>
    );
}

export default Item;