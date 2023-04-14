import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet
}
from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import './App.scss';
import OrderDetails from './pages/OrderDetails/OrderDetails';
import PaymentFailPage from './pages/PaymentFail/PaymentFail';

const Layout = ()=>{
  return (
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
} 


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/products/:id',
        element:<Products/>
      },
      {
        path:'/product/:id',
        element:<Product/>
      },
      {
        path:'/order/:id',
        element:<OrderDetails/>
      },
      {
        path:'/payment-fail',
        element:<PaymentFailPage/>
      }
    ]
  },
  
  
])
function App() {
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
