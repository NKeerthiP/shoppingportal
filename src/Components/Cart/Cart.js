import React, { useContext } from "react";
import DataContext from "../Context/DataContext";
import CartProduct from "./CartProduct";

const Cart = () => {

    const { cartData, setCartData } = useContext(DataContext);

    const totalPrice = cartData.reduce((accumulator, obj) => {
        return accumulator + (obj.productInfo.price * obj.quantity)
    }, 0).toFixed(2);

    const totalQuantity = cartData.reduce((acc, obj)=>{return acc+obj.quantity},0)

    return (
        <div className="container">
            <div className="row">
                <div className="col">  <h1 className="display-5">Shopping Cart</h1>
                    <div className="row">
                        Total ({totalQuantity } ) items: {totalPrice}
                    </div></div>

            </div>

            <div className="row">
                {cartData.length > 0 ? cartData.map((obj) => {
                    return (
                        <CartProduct key={obj.id} product={obj}></CartProduct>
                    )

                }) : <div><h5>Your cart is empty</h5></div>



                }

            </div>




        </div>
    )
}


export default Cart