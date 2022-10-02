import React, { useState } from "react";
import Header from "../Header/Header";
import PoularItem from "../PopularItems/PopularItem";
import ProductList from "../ProductList/ProductList";
import Footer from "../Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataContext from "../Context/DataContext";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Cart from "../Cart/Cart";

//import './Home.scss'


const Home = () => {

    const [cartData, setCartData] = useState([]);

    return (
        <>

            <DataContext.Provider value={{ cartData, setCartData }}>

                <Router>
                    <div><Header /></div>
                    <Routes >
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/' element={<PoularItem />} />
                        <Route path='/home' element={<PoularItem />} />
                    </Routes >
                    <div><Footer></Footer></div>
                </Router>

                {/* <div><PoularItem /></div>
                <div><ProductList></ProductList></div> */}

            </DataContext.Provider>
        </>
    )
}



export default Home