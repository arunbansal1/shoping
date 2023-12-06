import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavLink,
  Nav,
  NavItem,
  Input
} from 'reactstrap';
import { Context, } from './ContextApi';
import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
export default function Header() {
  const { isLogin, logout,setSearchResult } = useContext(Context)
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const toggle = () => setIsOpen(!isOpen);
  function logoutHandler() {
    logout();
  }
  function searchHandler(e){
     let inputElem = e.target;
     setSearchResult(inputElem.value)

  }
  function searchBtnHandler(){
    
     if(location.pathname !== "/products"){
      navigate("/products");
     }
  }
  return (
    <div>
        <Navbar expand="lg" container dark color='dark'>
          <Link className='navbar-brand' to="/">Shoping</Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              {isLogin ? <>
                <NavItem>
                  <Link className='nav-link' to="/products">Product List</Link>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' onClick={logoutHandler} >
                    Log Out
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Input placeholder='Search products' onChange={searchHandler} />
                </NavItem>
                <NavItem>
                  &nbsp; <button className='btn btn-primary' type='button' onClick={searchBtnHandler}>Search</button>
                </NavItem>
              </> : <NavItem>
                <Link className='nav-link' to="/login">
                  Login
                </Link>
              </NavItem>}
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  );
}
