import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import profileImg from "../../assets/left_person.png";
import ProductCard from "../Homepage/ProductCard";
import { toast } from "sonner";

function ProductListing(props) {

    const { user, login, cityName } = props;

    const [productData, setproductData] = useState([]);

    const [loading, setloading] = useState(true);



    useEffect(function () {

        async function fetchProducts() {

            try {

                let Response;
                if (login && user.accountType === "farmer") {
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
                    setproductData(data.data);
                    setloading(false);
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
    }, [login, cityName, user.accountType, setloading])

    return (
        <div className="w-full flex justify-between items-start gap-x-4 my-6">

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

                        <NavLink to="category/Product List" className="text-blue-400 bg-lightcream border border-richblack-50 hover:shadow-md
                     rounded-md text-sm py-1 px-4">View All</NavLink>
                    </div>

                </div>

                <hr className="text-richblack-50 my-2"></hr>

                <div className="w-full">

                    {loading ? (
                        <div className="w-full flex flex-wrap justify-between items-center gap-y-4">
                            {[1, 2, 3, 4].map((_, index) => (
                                <div key={index} className="w-[24%] border border-richblack-50 rounded-lg pb-4 shadow-md bg-lightcream animate-pulse">
                                    
                                    <div className="w-full h-40 bg-richblack-100 rounded-t-lg"></div>

                                    <div className="mt-2 pl-4 pr-2">
                                        <div className="h-6 w-3/4 bg-richblack-100 rounded"></div>

                                        <hr className="my-2 text-richblack-100" />

                                        <div className="h-5 w-full bg-richblack-100 rounded"></div>

                                        <div className="h-5 w-4/5 bg-richblack-100 rounded mt-2"></div>

                                        <div className="h-10 w-full bg-richblack-100 rounded mt-4"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) :

                        (<div className="w-full flex flex-wrap justify-between items-center gap-y-4">
                            <ProductCard product={productData[0]} user={user} login={login}></ProductCard>
                            <ProductCard product={productData[1]} user={user} login={login}></ProductCard>
                            <ProductCard product={productData[2]} user={user} login={login}></ProductCard>
                            <ProductCard product={user?.accountType === "farmer" || productData.length < 10 ? productData[3] : productData[9]} user={user} login={login}></ProductCard>
                        </div>)
                    }

                </div>

            </div>

            <div className="w-[20%] p-2 pl-4 flex flex-col items-start justify-center gap-y-1 rounded-md border border-richblack-50 shadow-lg">

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
                font-serif text-richblack-5 grb1 simplebutton">Browse All Listing</button>
            </div>



        </div >
    )
}
export default ProductListing;
