import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "../components/cartProduct";
import emptyCartImage from "../Images/assest/empty.gif";
import { toast } from "react-hot-toast";
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from "react-router-dom";
import securitylogo from "../Images/64x76 security logo.png";
import securitybage from "../Images/security bages.png";
import Popup from '../components/Popup';
import { ToastContainer } from 'react-toastify';

const Cart = () => {
    const productCartItem = useSelector((state) => state.product.cartItem);
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [shippingAddresses, setShippingAddresses] = useState([]);

    const totalPrice = productCartItem.reduce(
        (acc, curr) => acc + parseInt(curr.total),
        0
    );
    const totalQty = productCartItem.reduce(
        (acc, curr) => acc + parseInt(curr.qty),
        0
    );

    const addShippingAddress = (newAddress) => {
        setShippingAddresses([newAddress]); // Clear the array and add the new address
        toast.success("Address added successfully!");
    };


    const handlePayment = async () => {
        if (user.email) {
            const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
            const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/create-checkout-session`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(productCartItem)
            });
            if (res.statusCode === 500) return;

            const data = await res.json();
            console.log(data);

            toast("Redirect to payment Gateway...!");
            stripePromise.redirectToCheckout({ sessionId: data });
        } else {
            toast("You have not logged in!");
            setTimeout(() => {
                navigate("/login");
            }, 1000);
        }
    };

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="p-2 md:p-4">
            {productCartItem[0] ? (
                <div className="my-4 flex gap-3">
                    {/* Display cart items */}
                    <div className="w-full max-w-3xl">
                        {/* Display shipping address */}
                        <div className="bg-white p-4 rounded-lg">
                            <h2 className="text-black font-bold font-sans antialiased pb-4 text-3xl">Shipping Address</h2>

                            {shippingAddresses.length > 0 ? (
                                shippingAddresses.map((address, index) => (
                                    <div key={index} className="flex flex-col items-start font-semibold font-sans antialiased">
                                        <h2>{address.name}</h2>
                                        <h3>{address.streetAddress} {address.aptSuite && `, ${address.aptSuite}`}</h3>
                                        <h3>{address.phoneNumber}</h3>
                                        <h4>{address.province}</h4>
                                        <h5>{address.zipCode}</h5>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No shipping address set.</p>
                            )}

                            <div className="flex justify-end">
                                <h4 className="text-blue-500 font-sans font-semibold cursor-pointer" onClick={handleOpenPopup}>+ Add Shipping Address</h4>
                                {isPopupOpen && <Popup onClose={handleClosePopup} addShippingAddress={addShippingAddress} />}
                                <ToastContainer />
                            </div>
                        </div>
                        {productCartItem.map((el) => (
                            <CartProduct
                                key={el._id}
                                id={el._id}
                                name={el.name}
                                image={el.image}
                                category={el.category}
                                qty={el.qty}
                                total={el.total}
                                price={el.price}
                            />
                        ))}
                    </div>

                    {/* Total cart item */}
                    <div className="w-full max-w-md ml-auto">
                        <div className="bg-white p-5 rounded-lg shadow-md">
                            <h2 className="text-black font-bold font-sans antialiased pb-4 text-3xl text-center">Order Summary</h2>
                            <div className="flex w-full py-2 text-lg pt-3">
                                <p className="font-bold font-sans antialiased">Total Qty</p>
                                <p className="ml-auto w-32 font-bold">{totalQty}</p>
                            </div>
                            <div className="flex w-full py-2 text-lg pt-2">
                                <p className="font-bold font-sans antialiased">Discount</p>
                                <p className="ml-auto w-32 font-bold">0 %</p>
                            </div>
                            <div className="flex w-full py-2 text-lg pt-2">
                                <p className="font-bold font-sans antialiased">Total</p>
                                <p className="ml-auto w-32 font-bold text-2xl">
                                    <span className="text-black">Rs.</span>{totalPrice}
                                </p>
                            </div>
                            <button className="mt-8 bg-red-500 hover:bg-red-600 w-full text-lg font-bold py-2 text-white rounded-md" onClick={handlePayment}>
                                Place Order
                            </button>
                        </div>

                        <div className="w-full max-w-md ml-auto p-4">
                            <p className="text-gray-400 text-xs font-semibold font-sans antialiased">
                                Upon clicking 'Place Order', I confirm I have read and acknowledged
                                <span> <a href="#" className="text-blue-400">Terms and conditions</a> </span>
                            </p>
                        </div>

                        <div className="bg-white w-full max-w-md ml-auto p-2 border border-gray-900 rounded-lg">
                            <div className="flex items-center justify-center">
                                <img src={securitylogo} className="mr-2 w-4 pb-4" alt="Security Logo" />
                                <h2 className="text-gray-900 font-medium font-sans antialiased pb-4 text-md text-center">CampPro</h2>
                            </div>
                            <p className="text-gray-700 font-semibold font-sans antialiased pb-4 text-sm text-center">
                                CampPro keeps your information and payment safe
                            </p>
                            <div className="flex items-center justify-center">
                                <img src={securitybage} className="w-30 h-10 pb-4" alt="Security Badge" />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <h2 className="text-lg md:text-2xl font-bold text-slate-600">Your Cart Items</h2>
                    <div className="flex w-full justify-center items-center flex-col">
                        <img src={emptyCartImage} className="w-full max-w-sm" alt="Empty Cart" />
                        <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
