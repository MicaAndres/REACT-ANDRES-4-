import React from 'react';
import './ItemListContainer.css';

export default function ItemListContainer({title}) {
    return(
        <>
            <h1 className='titlePages'>{title}</h1>
        </>
    );
}
