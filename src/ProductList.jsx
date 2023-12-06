import {
  Container,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';
import { Context } from './ContextApi';
import { Link, Navigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { getDiscountedPrice } from './helpers';
import ProductRating from './ProductRating';
export default function ProductList() {
  const [products, setProducts] = useState([]);
  const { isLogin, serachResult } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isLogin) {
      setIsLoading(true)
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(function (res) {
          setProducts(res.products)
          setIsLoading(false)
        });
    }
  }, [isLogin]);
  if (isLogin === false) {
    return <Navigate to={"/login"} />
  }
  const productFilter = products.filter((single) => {
    if (serachResult.length === 0 || single.title.toLowerCase().indexOf(serachResult) !== -1) {
      return true
    }
    return false
  })
  if (isLoading) {
    return <div className="d-flex justify-content-center p-5">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  }
  const productList = productFilter.map((product, index) => {

    return <div className='col-md-4 col-sm-6 col-lg-3' key={product.title}>
      <Card
        className="m-2 "
        color="primay"
        outline
      >
        <div className='position-relative'>
          <img src={product.thumbnail} className='card-img-top img-fluid' alt='not shown' />
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
            <s className='text-warning'>Price : ₹{product.price}</s><br />
            Offer Price : ₹{getDiscountedPrice(product.price, product.discountPercentage)}
          </CardTitle>
          {product.rating}
          <ProductRating rating={product.rating} /> <br />
          <Link to={'/products/product-details/' + product.id} className='btn btn-success'>
            View Detail
          </Link>
        </CardBody>
      </Card>
    </div>
  })

  const hasProducts = productList.length > 0;
  return <Container>
    {
      hasProducts ? <div className='row'>
      {productList}
    </div> : <h3 className='alert alert-danger mt-3'>
      Sorry, There is not product matching without search, please search something else.
    </h3>
    }
    
  </Container>
}
