import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { remove, incrementQuantity, decrementQuantity } from '../store/cartSlice';
import{useNavigate} from 'react-router-dom'

const Cart = () => {
  //const history = useHistory();
  const products = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkoutpage = ()=>{
    navigate("/checkout")
  }

  const handleRemoveFromCart = (productId) => {
    dispatch(remove(productId))
  }

  const handleincrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId))
  }

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId))
  }


  const cards = products.map((product, index) => {
    const quantity = product.quantity;
    const producttotalPrice = quantity * product.price
    return (
      <div className="col-md-12" style={{ marginBottom: '5px' }} key={index}>
        <Card key={product.id} className='h-100'>
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text> INR:{product.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: 'white' }} key={product.id}>
            <Button variant="danger" onClick={() => handleRemoveFromCart(product.id)}>Remove Item</Button>
            <div className='counter-btn'>
              <Button onClick={() => handleincrementQuantity(product.id)} style={{ margin: '10px' }} className='Plus'>+</Button>
              <Button onClick={() => handleDecrementQuantity(product.id)} className='Minus'>-</Button>
              <p> Quantity : {quantity}</p>
              <p>Total Price: ₹ {producttotalPrice}</p>
              </div>
           </Card.Footer>
          </Card>
          <button onClick={checkoutpage} type="button" className="btn btn-primary" style={{ margin: '5px' }}   > Check Out</button>
         </div>
      )
  })
  return (
    <>
      <div className='row'>
        {cards}
      </div>
    </>
  )
}

export default Cart