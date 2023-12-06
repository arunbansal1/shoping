import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Context } from './ContextApi';
import { Row, Col, Container, UncontrolledCarousel } from 'reactstrap';
import { getDiscountedPrice } from './helpers';
import ProductRating from './ProductRating';
export default function ProductDetails() {
    let params = useParams()
    const { isLogin } = useContext(Context)
    const [isLoading, setIsLoading] = useState(false);
    const [singleProduct, setSingleProduct] = useState({});
    useEffect(() => {
        setIsLoading(true);
        fetch('https://dummyjson.com/products/' + params.productId)
            .then(res => res.json())
            .then(function (res) {
                setSingleProduct(res);
                setIsLoading(false);
            });
    },[params.productId])
    if (isLogin === false) {
        return <Navigate to={"/login"} />
    }
    let sliderImages = [];
    if(singleProduct.images){
        sliderImages = singleProduct.images.map((single)=>{
            return {
                src: single
            }
        })
    }
    if(isLoading){
        return <div className="d-flex justify-content-center p-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }
    return <div>
        <Container>
            <Row className=' m-4 rounded'>
                <Col md={4} lg={4} sm={12} >
                    <div className='position-relative'>
                    {
                        sliderImages.length > 0 && <UncontrolledCarousel
                        items={sliderImages}
                    />
                    }
                    <h5 className='position-absolute bottom-0 end-0 text-white bg-danger p-2 me-3 rounded'>
                        {singleProduct.discountPercentage}%
                    </h5>
                    </div>
                   
                </Col>
                <Col md={8} lg={8} sm={12}>
                    <h2>{singleProduct.title}</h2>
                    <h5>{singleProduct.category}</h5>
                    <div className='h6'><s className='text-warning'>Price : ₹{singleProduct.price}</s><br/>
                    Offer Price : ₹{getDiscountedPrice(singleProduct.price, singleProduct.discountPercentage)}
                    </div>
                    <div>{singleProduct.description}</div>
                    <div>
                        <span className='h6'>{singleProduct.rating}</span>
                        <span className='text-warning rating fs-6'>
                        <ProductRating rating={singleProduct.rating} />    
                        </span>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}