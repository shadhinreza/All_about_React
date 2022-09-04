import React, {useState} from 'react';
import ProductList from './ProductList';
import { data2 } from '../data';


const Index = () => {
  const [products, setProducts] = useState(data2.map(item => ({
    ...item,
    quantity: 0,
    total: 0
  })))
  const increment = (id) => {
    const newProducts = products.map(product => {
      if(id === product.id){
        product.stock = product.stock - 1; 
        product.quantity = product.quantity + 1;
        product.total = product.quantity * product.price;
      }
      return product;
    })
    setProducts(newProducts)
  };
  let decrement = (id) => {
    const decrementProducts = products.map(product => {
      if(id === product.id){
        product.stock = product.stock + 1; 
        product.quantity = product.quantity - 1;
        product.total = product.total - product.price;
      }
      return product;
    })
    setProducts(decrementProducts)   
  };
  const total = products.reduce((acc,cur) => acc + cur['total'],0);
  return (
    <div style={{marginLeft:'50px',marginTop:'30px'}}>
    <table>
      <thead>
        <tr>
            <th> Id </th>
            <th> Name </th>
            <th> Stock </th>
            <th> Price </th>
            <th> Quantity </th>
            <th> Total </th>
            <th> Action </th>
        </tr>
    </thead>
    <tbody>
        {products.map(product => (
          <ProductList key={product.id} {...product} increment={increment} decrement={decrement}/>
        ))}
      </tbody>
    </table>
    {total > 0 && <p>Total Amount: {total} BDT</p>}
  </div>
  );
};

export default Index;
