import {Container } from 'reactstrap';
import {Context} from './ContextApi';
import {useContext} from 'react';

export default function Welcome(){
  const {isLogin} = useContext(Context)
    return <Container fluid className='text-white page-height bg-success d-flex justify-content-center align-items-center '>
            <div className='welcome-page'>
              <img src='/logo.png' className='img-fluid' />
               <h1>
                 Welcome Back To the Store
               </h1>
               {
                !isLogin && <h5 className='text-dark'>Login to Continue</h5>
               }
            </div>
            </Container>    
} 