
import profileImg from "../assets/left_person.png";
import ProductCard from "../component/Homepage/ProductCard";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import Footer from "../component/Homepage/Footer";
import { useNavigate, useParams } from "react-router-dom";


function ProductDetails(props) {

    const navigate = useNavigate();
    const params = useParams();

    const { productID } = params;

    const { user, login, setModal } = props;

    const [productDetails, setproductDetails] = useState({});

    const [cartstock, setcartstock] = useState(0);
    const [totalPrice, settotalPrice] = useState(0);

    function cartHandler1() {
        if (cartstock > 0) {
            let total = cartstock - 10;
            setcartstock(total);
            settotalPrice(productDetails?.price * total);
        }
    }

    function cartHandler2() {
        if (cartstock < 200) {
            let total = cartstock + 10;
            setcartstock(total);
            settotalPrice(productDetails?.price * total);
        }
        else
            toast.warning("Limit Exceed");
    }

    function checkoutHandler() {

        if (cartstock === 0) {
            toast.warning("Add value to cart");
            return;
        }

        if (login)
            toast.error("Please try again after sometime");
        else
            setModal(true);
    }



    async function stockHandler() {

        try {

            if (cartstock === 0) {
                toast.warning("Add value to stock");
                return;
            }

            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/product/addstock`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ productId: productID, stock: cartstock }),
                    credentials: "include"
                }
            );


            if (Response.ok) {
                const data = await Response.json();

                setproductDetails(data.data);
                toast.success("Stock added successfully");
                fetchProductDetails();

            } else {
                toast.error("Error to add stock");
            }
        }
        catch (error) {
            toast.error("Failed to add stock.");
            console.error("Failed to add stock", error);
        }

    }


    useEffect(function () {

        async function fetchProductDetails() {

            try {

                const Response = await fetch(
                    `${process.env.REACT_APP_BASE_URL}/product/getproduct-details`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ productId: productID }),
                        credentials: "include"
                    }
                );


                if (Response.ok) {
                    const data = await Response.json();

                    setproductDetails(data.data);

                } else {
                    toast.error("Error in fetch product details");
                }
            }
            catch (error) {
                toast.error("Failed to fetch product details.");
                console.error("Failed to fetch product details", error);
            }

        }

        fetchProductDetails();
    }, [productID])



    return (
        <div className="w-full flex flex-col items-center">

            <div className="frontImage w-full mt-5" />

            <div className="w-9/12 p-4 flex flex-col items-center justify-start border border-richblack-100 rounded-lg shadow-xl -mt-[18%] mb-10 bg-darkcream">

                <div className="w-full flex justify-between items-start gap-x-8 h-80 mb-8 border-b border-richblack-100 shadow-sm">

                    <img src={productDetails?.image} alt="/" className="w-[30%] h-3/5 rounded-lg border border-richblack-50 shadow-lg" />

                    <div className="w-2/3 h-full">
                        <p className="text-caribbeangreen-700 font-serif font-bold text-2xl pb-2">{productDetails?.productName} </p>
                        <p className="text-richblack-800">Price:<span className="text-richblack-800 font-mono font-semibold"> Rs. {productDetails?.price}/Kg</span></p>
                        <p className="text-richblack-800">Stock:<span className="text-richblack-800 font-mono font-semibold"> {productDetails.stock} Kg</span></p>
                        <hr className="text-richblack-100 my-6"></hr>

                        <div className="w-full h-[56%] flex justify-between items-center gap-x-6">
                            <div className="w-1/2 h-full  p-2">
                                <p className="text-lg text-blue-500 font-semibold font-mono">Seller Information</p>
                                <div className="h-[50%] w-full flex justify-between mt-2">
                                    <img src={profileImg} alt="/" className="w-1/5 h-4/5 pt-1 rounded-full bg-white border border-richblack-50 object-center"></img>
                                    <div className="w-3/4">
                                        <p className="font-serif text-richblack-600 font-semibold">{productDetails?.seller?.firstName + " " + productDetails?.seller?.lastName} </p>
                                        <p className="font-serif text-richblack-600 select-none">{productDetails?.seller?.email}</p>
                                    </div>
                                </div>
                                {user?.accountType === "farmer" ? <div className="w-full flex justify-center items-center gap-x-2">
                                    <button onClick={() => navigate("/user/dashboard/price-update")} className="w-1/2 h-10 rounded-lg px-4
                                    font-serif text-richblack-5 grb1 simplebutton">Modify Crop</button>
                                    <button onClick={() => navigate("/user/dashboard/add-products")} className="w-1/2 h-10 rounded-lg px-4
                                    font-serif text-richblack-5 grb2 simplebutton">Add New Crop</button>
                                </div> :
                                    <div className="w-full flex justify-center items-center gap-x-2">
                                        <button className="w-1/2 h-10 rounded-lg px-4
                                    font-serif text-richblack-5 grb1 simplebutton">Contact Seller</button>
                                        <button className="w-1/2 h-10 rounded-lg px-4
                                    font-serif text-richblack-5 grb2 simplebutton">Add to Cart</button>
                                    </div>}
                            </div>

                            <div className="w-1/2 h-full p-2">
                                <p className="text-lg text-blue-500 font-semibold font-mono">Description</p>
                                <p className="font-sans">{productDetails?.description}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-full flex justify-between items-start gap-x-4 my-6">

                    <div className="w-[70%]">

                        <div className="w-full flex gap-x-16 justify-between items-center">
                            <p className="text-purple font-bold text-lg">Related Crops</p>
                            <div className="flex gap-x-2">
                                <select name="Select" id="listingFilter"
                                    className="border border-richblack-50 bg-lightcream text-blue-400 font-semibold outline-none rounded-md hover:shadow-md px-6 text-sm py-1 w-30">
                                    <option>All Product</option>
                                    <option>Seasonal Crops</option>
                                    <option>Fruits</option>
                                    <option>Vegitables</option>
                                </select>
                            </div>

                        </div>

                        <hr className="text-richblack-50 my-2"></hr>

                        <div className="w-full flex flex-wrap justify-start gap-x-2 items-center gap-y-4">

                            {productDetails?.seller?.product?.map((product, index) => (<ProductCard key={index} product={product} user={user} login={login}></ProductCard>))}

                        </div>

                    </div>

                    <div className="w-[30%] p-2 pl-4 flex flex-col items-start justify-center gap-y-1 rounded-md border border-richblack-100 CardShadow">

                        {login && user.accountType === "farmer" ? <p className="font-semibold text-richblack-700">Stock Information :</p> :
                            <p className="font-semibold text-richblack-700">Cart Information :</p>}

                        <hr className="text-richblack-100 w-full"></hr>

                        <div className="w-full flex justify-between items-center gap-x-2 mt-2">
                            <img src={productDetails?.image} alt="/" className="w-1/4 h-12 rounded-md border border-richblack-100 object-center"></img>
                            <div>
                                <p className="text-sm  font-mono text-richblack-800">{productDetails?.productName}</p>
                                <p className="text-sm  font-mono text-richblack-800">Rs. {productDetails?.price}/kg</p>
                            </div>
                            <div className="flex items-center gap-x-1 font-mono">
                                <button onClick={cartHandler1} className="border border-richblack-200 bg-white rounded-lg px-2">-</button>
                                <p>{cartstock} Kg</p>
                                <button onClick={cartHandler2} className="border border-richblack-200 bg-white rounded-lg px-2">+</button>
                            </div>
                        </div>

                        <hr className="w-full mt-8 text-richblack-100"></hr>

                        <div className="w-full flex justify-between font-mono">
                            <p className="font-semibold">Sub Total:</p>
                            {login && user.accountType === "farmer" ? <p>{cartstock} Kg</p> :
                                <p><span>Rs. </span>{totalPrice}</p>}
                        </div>

                        {login && user.accountType === "farmer" ? <button onClick={stockHandler} className="h-9 rounded-lg px-4 mt-2 w-full
                            font-serif text-richblack-5 grb1 simplebutton">Add Stock</button> :

                            <button onClick={checkoutHandler} className="h-9 rounded-lg px-4 mt-2 w-full
                            font-serif text-richblack-5 grb1 simplebutton">Proceed to Checkout</button>}
                    </div>



                </div>

            </div>
            <Footer />
        </div>


    )
}
export default ProductDetails;