import { 
Container,
Card,
CardBody,
CardTitle
}from 'reactstrap';
import { Context } from './ContextApi';
import {Link, Navigate} from 'react-router-dom';
import {useState,useEffect, useContext} from 'react';
export default function ProductList(){
const [products,setProducts] = useState([]);
const {isLogin,serachResult} = useContext(Context);
useEffect(()=>{
    if(isLogin){
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(function(res){
          setProducts(res.products)    
        });
    }    
},[isLogin]);
if(isLogin === false){
  return  <Navigate to={"/login"} />
}
const productFilter = products.filter((single)=>{
  if(serachResult.length === 0 || single.title.toLowerCase().indexOf(serachResult)!==-1){
    return true
  }
  return false
})
const productList = productFilter.map((product)=>{
  var totalValue = product.price *(product.discountPercentage/100)
  var total = product.price - totalValue;
  var productValue = Math.trunc(total)
  console.log(productValue)
  return <div className='col-md-4 col-sm-6 col-lg-3' key={product.title}>
    <Card
      className="m-2 "
      color="primary"
      outline    
    >
      <div className='position-relative'>
      <img src={product.thumbnail}  className='card-img-top img-fluid' alt='not shown'/>
          <span className='h6 bg-danger p-2 rounded position-absolute end-0 bottom-0 me-2 text-white'>{product.discountPercentage}%</span>  
      </div>
      <CardBody>
        <CardTitle tag="h5" className='text-danger'>
          {product.title}
        </CardTitle>
        <CardTitle tag="h6">
        {product.category}
        </CardTitle>
        <CardTitle tag='h6'>
        <s className='text-warning'>Price : {product.price}</s><br/>
        Offer Price : {productValue}
        </CardTitle>
        <Link to={'/products/product-details/'+product.id} className='btn btn-success'>
            View Detail
        </Link>
      </CardBody>
    </Card>  
  </div>
})
              
    return <Container fluid>
      <Container>
       <div className='row'>
          {productList}
       </div>
       </Container>
    </Container>
}
