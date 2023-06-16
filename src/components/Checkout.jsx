import React from 'react';
import{Table,Card}from 'react-bootstrap';
import Cart from './Cart';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const products = useSelector(state => state.cart);
  //const totalprice = useSelector(state => state.cart);
//console.log(products);
  const renderCards = products.map((product, index) => (
   
    
      <tbody key={index}>
        <tr>
          <td>{index + 1}</td>
          <td> {product.title}</td>
          <td><p>{product.quantity}</p></td>
          <td>{product.price}</td>
        </tr>
        </tbody>
      

    // )
  ));
  const totalquantity = products.reduce((total, product) => total + (product.quantity),0)
  
  const totalprice = products.reduce((total,product)=>{
    return total+(product.quantity*product.price)
  },0).toFixed(2)
console.log(totalquantity,totalprice);

  return (
    <>
   <h1> Cart Details</h1>
   <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      {renderCards}
      <tfoot>
      <tr>
        <th></th>
        <th>Total</th>
        {/* <td>{products.reduce((total, product) => total + (product.quantity),0)}</td> */}
        {/* <td>{products.reduce((total,product)=>{total+(product.quantity*product.price),0})}</td> */}
        <th>{totalquantity}</th>
        <th>{totalprice}</th>
      </tr>
      </tfoot>
      </Table>
          
    </>
      )
}

export default Checkout

   {/* <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td> <Card.Title>{product.title}</Card.Title></td>
          <td><p> Quantity : {quantity}</p></td>
          <td><Card.Text> INR:{product.price}</Card.Text></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table> */}
    
  
 