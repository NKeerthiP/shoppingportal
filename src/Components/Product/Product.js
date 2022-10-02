import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DataContext from "../Context/DataContext";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Tooltip from 'react-bootstrap/Tooltip';
import { Row } from "react-bootstrap";

const Product = (props) => {
    const productDetail = props.productInfo;
    const { cartData, setCartData } = useContext(DataContext);
    const [quantity, setquantity] = useState(1);
    const [show, setShow] = useState(false);

    // const updatedProductDetail = { ...productDetail, quantity: quantity }

    //console.log(cartData)
    const toggleShowA = () => setShow(!show);

    const addCart = () => setCartData((prevData) => {
        setShow(true);

        let isexisting = false;
        const updatedQty = prevData.map(obj => {


            if (obj.productInfo.id === productDetail.id) {
                isexisting = true
                return { ...obj, quantity: obj.quantity + quantity }
            }
            else {
                console.log("in else");
                return obj
            }
        });

        // console.log("updatedQty");
        // console.log(updatedQty);
        // return
        // !isexisting ? [...prevData, { productInfo: productDetail, quantity: quantity }] : updatedQty
        // return updatedQty;

        if (isexisting) {
            return updatedQty
        }
        else {
            return [...prevData, { productInfo: productDetail, quantity: quantity }]
        }
    }

    );
    const removeCount = () => setquantity(quantity > 1 ? quantity - 1 : 1);
    const addCount = () => setquantity(quantity + 1)

    return (
       <>

            <ToastContainer className="p-3" position="top-end" >
                <Toast show={show} delay={2000} onClose={() => setShow(!show)} autohide={true}  >
                    <Toast.Header >
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Message</strong>
                    </Toast.Header>
                    <Toast.Body>Product added to cart successfully</Toast.Body>
                </Toast>
            </ToastContainer>



            <Card className="card " style={{ width: '18rem', height: "100%" }}>
                <div style={{ textAlign: "center", width: "60%" }}>
                    <Card.Img variant="top" src={productDetail.image} />
                </div>

                <Card.Body  style ={{}} className=" display:flex ">
                    <Card.Title>{productDetail.title}</Card.Title>
                    <Card.Text title={productDetail.description}>
                        {productDetail.description<100? productDetail.description: productDetail.description.slice(0,100)+"..."}
                    </Card.Text>
                    <div>
                        <div>Price: {productDetail.price}</div>
                        <div>
                            <button onClick={removeCount}>-</button>{quantity} <button onClick={addCount}>+</button>
                        </div>
                    </div>

         
                    
                  
                                    
                </Card.Body>
                <Card.Footer>
        <Row>
        <Button  className="align-self-end"  onClick={addCart} variant="primary">Add to Cart</Button>

        </Row>
    </Card.Footer>
            </Card>

        </>
    )

}


export default Product;