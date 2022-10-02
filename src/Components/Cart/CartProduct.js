import React, { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import DataContext from "../Context/DataContext";
import './cart.scss'

const CartProduct = (props) => {

    const productDetail = props.product
    const [quantity, setquantity] = useState(1);
    const { cartData, setCartData } = useContext(DataContext);

    const removeCount = () => setquantity(quantity > 1 ? quantity - 1 : 1);
    const updateCount = (e) => {
        console.log(e.target.id)
        setCartData((prevData) => {

            const updatedQty = prevData.map(obj => {

                if (obj.productInfo.id === productDetail.productInfo.id) {
                    console.log("INSIDE qty update")
                    console.log({ ...obj })
                    return { ...obj, quantity: (e.target.id === "increment" ? obj.quantity + 1 : (obj.quantity > 1 ? obj.quantity - 1 : 0)) }

                }
                else
                    console.log("in else")
                return obj

            });

            // console.log("updatedQty");
            // console.log(updatedQty);

            return updatedQty;
        })

    }

    const removeProduct = () => {
        setCartData((prevData) => {
            const removedSet = prevData.filter(obj => {
                return obj.productInfo.id !== productDetail.productInfo.id

            });
            return removedSet;
        })
    }


    return (
        <div>

            <Card className="card " style={{ width: '100%', marginBottom: "15px" }}>


                <div className="container">
                    <div className="row">

                        <div className="col-3">

                            <Card.Img style={{ width: "55%" }} variant="top" src={productDetail.productInfo.image} />

                        </div>
                        <div className="col-9">
                            <Card.Body>
                                <Card.Title>{productDetail.productInfo.title}</Card.Title>
                                <Card.Text>
                                    {productDetail.productInfo.description}
                                </Card.Text>
                                <div style={{marginBottom:"10px"}}>
                                    <div className="priceText">Price: {productDetail.productInfo.price}</div>
                                    <div>
                                        Quantity:  <button className="button" onClick={updateCount} id="decrement" >-</button>
                                        {productDetail.quantity}
                                        <button className="button" onClick={updateCount} id="increment" >+</button>
                                    </div>
                                </div>
                                <Button onClick={removeProduct} variant="primary">Remove from Cart</Button>
                            </Card.Body>
                        </div>

                    </div>
                </div>



            </Card>
        </div>

    )
}

export default CartProduct