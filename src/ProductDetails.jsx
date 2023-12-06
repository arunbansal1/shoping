import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Context } from './ContextApi';
import { FaStar } from "react-icons/fa";
import { Row, Col, Card, CardTitle, CardText, CardImg, Button, Container, UncontrolledCarousel } from 'reactstrap';

export default function ProductDetails() {
    let params = useParams()
    const { isLogin } = useContext(Context)
    const [singleProduct, setSingleProduct] = useState({});
    useEffect(() => {
        fetch('https://dummyjson.com/products/' + params.productId)
            .then(res => res.json())
            .then(function (res) {
                setSingleProduct(res)
            });
    }, [])
    if (isLogin === false) {
        return <Navigate to={"/login"} />
    }
    // console.log(singleProduct)
    let sliderImages = [];
    if(singleProduct.images){
        sliderImages = singleProduct.images.map((single)=>{
            return {
                src: single
            }
        })
    }
    var totalValue = singleProduct.price *(singleProduct.discountPercentage/100);
    var total = singleProduct.price-totalValue;
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
                    <div className='h6'><s className='text-warning'>Price :{singleProduct.price}</s><br/>
                    Offer Price{total}
                    </div>
                    <div>{singleProduct.description}</div>
                    <div>
                        <span className='h6'>{singleProduct.rating}</span>
                        <span className='text-warning rating fs-6'><FaStar /></span>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}