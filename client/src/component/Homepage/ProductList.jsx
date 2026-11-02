import "../../App.css";
import leftperson from "../../assets/left_person.png"
import rightperson from "../../assets/right_person.png"
import profileImg from "../../assets/left_person.png"
import wheatplant from "../../assets/wheat-plant.png"
import buyer from "../../assets/buyers.png"
import shield from "../../assets/shield.png"
import bestprice from "../../assets/best-price.png"
import listimage from "../../assets/requirement.png"
import Button1 from "../Homepage/Button1";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "sonner";



function ProductList(props) {

    const { user, login, setModal, cityName } = props;
    const navigate = useNavigate();

    const [productData, setproductData] = useState([]);

    useEffect(() => {
        setModal(!login);
    }, [login]);




    useEffect(function () {

        async function fetchProducts() {

            try {

                let Response;

                if (user.accountType === "farmer") {
                    Response = await fetch(
                        `${process.env.REACT_APP_BASE_URL}/profile/getmyproducts`,
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            credentials: "include"
                        }
                    );
                }
                else {
                    Response = await fetch(
                        `${process.env.REACT_APP_BASE_URL}/product/getall-products`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ city: cityName }),
                            credentials: "include"
                        }
                    );
                }

                if (Response.ok) {
                    const data = await Response.json();
                    console.log(data.data);
                    setproductData(data.data);
                    // toast.success("Fetched all products successfully");

                } else {
                    toast.error("Error in fetch products");

                }
            }
            catch (error) {
                toast.error("Failed to fetch products.");
                console.error("Failed to fetch products", error);
            }

        }

        fetchProducts();
    }, [login, cityName,user.accountType])

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className=" flex justify-center w-[100%] frontImage ">

                {user?.accountType === "buyer" ? <div className="w-10/12  flex justify-end mr-20 gap-x-32  ">

                    <div>
                        <p className="text-3xl text-caribbeangreen-700 text-center pt-5 font-serif font-bold">Buy from Local Farmers<br></br>
                            ----- Directly -----</p>
                        <p className="text-lg text-caribbeangreen-700 text-center pt-3 font-bold">Get Crops from Local farmer at the Fair prices</p>

                        <div className="flex justify-center items-center pt-14 gap-x-8 " >
                            <button onClick={() => navigate("/category/Product List")}> <Button1 name={"Browse Listing"} clsName={"grb1"}></Button1></button>
                            <button> <Button1 name={"Buy Now"} clsName={"grb2"}></Button1> </button>
                        </div>

                    </div>

                    <img src={rightperson} alt="" className="h-[100%] w-[21%]" ></img>
                </div> :

                    <div className="w-10/12  flex justify-start ml-20 gap-x-32  ">
                        <img src={leftperson} alt="" className="h-[100%] w-[21%] " ></img>

                        <div>
                            <p className="text-3xl text-caribbeangreen-700 text-center pt-5 font-serif font-bold">Sell your Crops to Local Buyers<br></br>
                                ----- Directly -----</p>
                            <p className="text-lg text-caribbeangreen-700 text-center pt-3 font-bold">Connect with consumers including Wholeseller with assured MSP.</p>

                            <div className="flex justify-center items-center pt-14 gap-x-8 " >
                                <button onClick={() => navigate("/user/dashboard/add-products")}><Button1 name={"Sell your crop"} clsName={"grb1"}></Button1></button>
                                <button onClick={() => navigate("/user/dashboard/my-products")}><Button1 name={"Browse Listing"} clsName={"grb2"}></Button1></button>

                            </div>

                        </div>

                    </div>}

            </div>

            {user?.accountType === "buyer" ? <div className="h-[75px] w-10/12 flex items-center justify-around border rounded-lg border-richblack-25 shadow-md p-1 px-12 gap-x-12 mt-10 bg-lightcream">

                <div className="w-[33%] flex justify-start items-center h-[100%] gap-x-4">
                    <img src={buyer} alt="/" className="h-full"></img>
                    <div>
                        <p className="font-semibold text-base">For Buyers</p>
                        <p className="text-sm">Purchase from local farmers</p>
                    </div>
                </div>

                <div className="border border-richblack-25 h-full "></div>

                <div className="w-[33%] flex justify-start items-center h-full gap-x-4">
                    <img src={bestprice} alt="/" className="h-full"></img>
                    <div>
                        <p className="font-semibold text-base">MSP Price Guarantee </p>
                        <p className="text-sm">Fair price for farmers and buyers</p>
                    </div>
                </div>

                <div className="border border-richblack-25 h-full"></div>

                <div className="w-[33%] flex justify-start items-center h-[100%] gap-x-4">
                    <img src={shield} alt="/" className="h-full"></img>
                    <div>
                        <p className="font-semibold text-base">Quality Assured</p>
                        <p className="text-sm">Local farm products & crops</p>
                    </div>
                </div>

            </div> :

                <div className="h-[75px] w-10/12 flex items-center justify-around border rounded-lg border-richblack-25 shadow-md p-1 px-12 gap-x-12 mt-10 bg-lightcream">

                    <div className="w-[33%] flex justify-start items-center h-full gap-x-4">
                        <img src={wheatplant} alt="/" className="h-full"></img>
                        <div>
                            <p className="font-semibold text-base">For Farmers</p>
                            <p className="text-sm">Sell your crops directly</p>
                        </div>
                    </div>

                    <div className="border border-richblack-25 h-full "></div>

                    <div className="w-[33%] flex justify-start items-center h-full gap-x-4">
                        <img src={bestprice} alt="/" className="h-full"></img>
                        <div>
                            <p className="font-semibold text-base">MSP Price Guarantee </p>
                            <p className="text-sm">Fair price for farmers and buyers</p>
                        </div>
                    </div>

                    <div className="border border-richblack-25 h-full"></div>

                    <div className="w-[33%] flex justify-start items-center h-[100%] gap-x-4">
                        <img src={listimage} alt="/" className="h-full"></img>
                        <div>
                            <p className="font-semibold text-base">Manage Your Listing</p>
                            <p className="text-sm">Add new crops or stocks quickly.</p>
                        </div>
                    </div>

                </div>}

            <div className="w-10/12 flex justify-between items-start gap-x-4 my-6">

                <div className="w-[75%]">

                    <div className="w-full flex gap-x-16 justify-between items-center">
                        <p className="text-purple font-bold text-lg">Popular Listings</p>
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

                    <div className="w-full flex flex-wrap justify-between items-center gap-y-4">

                        {productData?.map((product, index) => (<ProductCard key={index} product={product} user={user} login={login}></ProductCard>))}

                    </div>
                    <p className="mt-2 text-center text-richblack-400">You have visited all products.</p>
                </div>

                {user?.accountType === "buyer" ? <div className="w-[20%] p-2 pl-4 flex flex-col items-start justify-center gap-y-1 rounded-md border border-richblack-50 shadow-lg">

                    <p className="font-semibold">Farmers Spotlight :</p>

                    <hr className="text-richblack-200 w-full"></hr>

                    <div className="flex justify-between items-center gap-x-2">
                        <img src={profileImg} alt="/" className="w-8 h-8 rounded-full border border-richblack-100"></img>
                        <p className="text-sm font-semibold text-caribbeangreen-800">GreenLeaf Organic</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-2">
                        <img src={profileImg} alt="/" className="w-8 h-8 rounded-full border border-richblack-100"></img>
                        <p className="text-sm font-semibold text-caribbeangreen-800">GreenLeaf Organic</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-2">
                        <img src={profileImg} alt="/" className="w-8 h-8 rounded-full border border-richblack-100"></img>
                        <p className="text-sm font-semibold text-caribbeangreen-800">GreenLeaf Organic</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-2">
                        <img src={profileImg} alt="/" className="w-8 h-8 rounded-full border border-richblack-100"></img>
                        <p className="text-sm font-semibold text-caribbeangreen-800">GreenLeaf Organic</p>
                    </div>

                    <button className="h-9 rounded-lg px-4 mt-2 w-full
                     font-serif text-richblack-5 grb1 simplebutton">Browse All List</button>
                </div> :

                    <div className="w-[20%] p-2 pl-4 flex flex-col items-start justify-center gap-y-1 rounded-md border border-richblack-25 shadow-md">

                        <p className="font-semibold">Buyers Spotlight :</p>

                        <hr className="text-richblack-200 w-full"></hr>

                        <div className="flex justify-between items-center gap-x-2">
                            <img src={profileImg} alt="/" className="w-8 h-8 rounded-full border border-richblack-100"></img>
                            <p className="text-sm font-semibold text-caribbeangreen-800">GreenLeaf Organic</p>
                        </div>
                        <div className="flex justify-between items-center gap-x-2">
                            <img src={profileImg} alt="/" className="w-8 h-8 rounded-full border border-richblack-100"></img>
                            <p className="text-sm font-semibold text-caribbeangreen-800">GreenLeaf Organic</p>
                        </div>
                        <div className="flex justify-between items-center gap-x-2">
                            <img src={profileImg} alt="/" className="w-8 h-8 rounded-full border border-richblack-100"></img>
                            <p className="text-sm font-semibold text-caribbeangreen-800">GreenLeaf Organic</p>
                        </div>
                        <div className="flex justify-between items-center gap-x-2">
                            <img src={profileImg} alt="/" className="w-8 h-8 rounded-full border border-richblack-100"></img>
                            <p className="text-sm font-semibold text-caribbeangreen-800">GreenLeaf Organic</p>
                        </div>

                        <button className="h-9 rounded-lg px-4 mt-2 w-full
                       font-serif text-richblack-5 grb1 simplebutton">Browse All List</button>
                    </div>}

            </div>
        </div>
    )
}
export default ProductList;