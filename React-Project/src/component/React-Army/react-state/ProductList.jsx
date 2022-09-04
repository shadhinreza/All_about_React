import React from 'react';

const ProductList = ({id,productName, stock, price,quantity,total,increment,decrement}) => {

    return(
        <tr>
            <td> {id} </td>
            <td> {productName} </td>
            <td> {stock} </td>
            <td> {price} </td>
            <td> {quantity} </td>
            <td> {total} </td>
            <td>
            <button type='button' onClick={() =>increment(id)} disabled={stock < 1}> + </button>
            <button type='button' onClick={() => decrement(id)} disabled={quantity === 0} > - </button>
            </td>
        </tr>
    ) 
};

export default ProductList;