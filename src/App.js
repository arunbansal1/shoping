import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import {useState} from 'react';
import {Provider} from './ContextApi';
import Welcome from './Welcome';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
     const [isLogin,setIsLogin] = useState(false);
     const [serachResult,setSearchResult] = useState([])
     const navigate = useNavigate();
     function loginpage(){
        setIsLogin(true);
        navigate('/')  
     }
     function logout(){
      setIsLogin(false);
      navigate('/login')  
     }
     function updateSearchBar(h){
         setSearchResult(h)
     }
   //   console.log(serachResult)
  return (
    <div>
      <Provider value={{isLogin,loginpage,logout,updateSearchBar:updateSearchBar,serachResult:serachResult,setSearchResult:setSearchResult}}>
        <Header/>
       <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='products' element={<ProductList/>}/>
          <Route path='products/product-details/:productId' element={<ProductDetails/>}/>
       </Routes>
       <Footer/>
       </Provider>
    </div>
  );
}

export default App;
