
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import Footer from './components/Footer/Footer';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';

import OrderNow from './components/OrderNow/OrderNow'

import AllOrders from './components/AllOrders/AllOrders';
import AllProducts from './components/AllProducts/AllProducts';
import ManageProducts from './components/ManageProducts/ManageProducts';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';


import Success from './components/Success/Success';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          {/* header component calling above all  */}
          <Header></Header>

          <Switch>
            {/* basic website route-public  */}
            <Route exact path='/'>
              <Home></Home>
            </Route>

            {/* success message after order route-public */}
            <Route path='/success'>
              <Success></Success>
            </Route>
            {/* home route-public  */}
            <Route path='/home'>
              <Home></Home>
            </Route>
            {/* allproducts route-public  */}
            <Route path='/allproducts'>
              <AllProducts></AllProducts>
            </Route>
            {/* login route-public  */}
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            {/* registration route-public  */}
            <Route path='/register'>
              <Register></Register>
            </Route>


            {/* manage all orders route--private  */}
            <PrivateRoute path='/allorders'>
              <AllOrders></AllOrders>
            </PrivateRoute>
            {/* manage all products route--private  */}
            <PrivateRoute path='/manageproducts'>
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            {/* make admin route--private  */}
            <PrivateRoute path='/makeadmin'>
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>

            {/* single product order route--private && dynamic  */}
            <PrivateRoute exact path='/order/:_id'>
              <OrderNow></OrderNow>
            </PrivateRoute>
            {/* dashboard route--private  */}
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>





            {/* -------has to be last Route--------- */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
          {/* footer component calling at the bottom  */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
