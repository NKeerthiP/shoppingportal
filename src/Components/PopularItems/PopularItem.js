import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import productData from "../../Data/Productdata.json";
import DataContext from "../Context/DataContext"
import { json } from "react-router-dom";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';



const PoularItem = (val) => {

    const [searchVal, setSearchVal] = useState("");
    const [filteredres, setfilteredres] = useState(productData);

    // let filteredResults= productData;
    const searchProducts = (e) => {
        console.log(!e.target.value)
        setSearchVal(e.target.value);

        // console.log(filteredres)

        let filteredResults = productData.filter(item => {
            console.log("inside item")
            // console.log(e.target.val)
            if (e.target.value.length === 0 || JSON.stringify(item).toLowerCase().search((e.target.value).toLowerCase()) > 0) {
                console.log("Found")
                return true
            }
            else {
                return false
            }
        }
        )
        setfilteredres(filteredResults);
    }

    return (
        <>


            <div className="container">
                <div className="row">
                    <div className="col">  <h1 className="display-5">Shopping Items</h1> </div>
                    <div className="col">  <input type="text" placeholder="Search Products" onChange={searchProducts} value={searchVal}></input> </div>
                </div>

                <div className="row">
                    {
                        filteredres.map((obj) => {
                            return (<div id="Test" className="col"  key={obj.id}> <Product productInfo={obj} /> </div>)
                        })}
                </div>


            </div>
        </>
    )
}


export default PoularItem