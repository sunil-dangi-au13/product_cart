import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import ApiCall from '../store/Api'
 


// axios({
//   url:"https://fakestoreapi.com/products",
//   method:"GET",
//   headers:{}
// })
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
// console.log(err);
// })


const Product = () => {
  const [products, getProducts] = useState([]);
  const[alert,setAlert]= useState(null)
  const dispatch = useDispatch();


  const options = {
    method: "GET",
    action: "/products" 
  }

  useEffect(() => {
   
    //fetch('https://fakestoreapi.com/products')
      //.then(data => data.json())
      //.then(result => getProducts(result))
      // ApiCall('https://fakestoreapi.com/products')
      ApiCall(options)
      .then((res)=>{
      // console.log('res',res);
      getProducts(res)
      })
      
  },[] )
  // console.log({ApiCall});
  // const data = ApiCall()
  // console.log(data);

  const addtocart = (Product) => {
    dispatch(add(Product))
    setAlert({ message: 'Item added to cart', success: true });

    setTimeout(() => {
      setAlert(null); // Clear the message after 2 seconds
    }, 2000);
    
    
  
  }


  const cards = products.map((product,index) =>(
    <div className="col-md-3" style={{ marginBottom: '5px' }} key={index}>
      <Card key={product.id} className='h-100'>
        <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            INR:{product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: 'white' }}>
          <Button variant="primary" onClick={() => addtocart(product)}>Add To Cart</Button>
        </Card.Footer>
      </Card>

    </div>
  ))

  return (
    <>
      <h1>Product Dashboard</h1>
      {alert && (
        <div className={`alert alert-${alert.success ? 'success' : 'danger'}`} role="alert">
          {alert.message}
        </div>
      )}
      <div  className="row"  >{cards}</div>
    </>
  )
}

export default Product