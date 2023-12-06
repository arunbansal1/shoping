import {Container } from 'reactstrap';

export default function Welcome(){
    return <Container fluid className='text-white page-height bg-success d-flex justify-content-center align-items-center '>
            <div>
               <h1>
                 Welcome Back
               </h1>
               <h5 className='text-dark'>
                Login To Continue
               </h5>
            </div>
            </Container>    
} 