import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import image2 from "../../assets/partnership.png";
import image1 from "../../assets/shield.png";
import Button2 from "../Homepage/Button2";

 
function MyProduct() {

    const navigate = useNavigate()


    const [myProduct, setmyProduct] = useState([]);

    const getmyProduct = async () => {
        try {
            const Response = await fetch(
               `${process.env.REACT_APP_BASE_URL}/profile/getmyproducts`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include"
                }
            );

            if (!Response.ok) {
                toast.error("Failed to load Products");
            }
            const res = await Response.json();
            setmyProduct(res.data);

        } catch (error) {
            console.log("Could not fetch Products.");
        }
    };
    useEffect(function () {
        getmyProduct();
    }, [])

    return (
        <div className="w-full flex flex-col items-end justify-start gap-y-20">
            <div className="w-full mt-5">
                <p className="text-3xl text-caribbeangreen-700 font-serif font-semibold text-center">My Products List</p>
                <p className="text-richblack-600 font-semibold text-center">You can add Products, modify your lists & its price and stocks.
                </p>
            </div>

            <div className="w-10/12 flex flex-wrap justify-start  items-center bg-lightcream border border-richblack-100 p-6 mt-[14%] gap-2 gap-x-3 rounded-md shadow-xl">

               {myProduct?.map((product)=><div className="w-[24%] border border-richblack-50 rounded-lg pb-4 shadow-md card bg-lightcream">
                    <img src={product?.image} alt="/" className="w-full h-28 object-center rounded-t-lg" ></img>
                    <div className="mt-2 pl-4 pr-2 space-y-1">
                        <p className="text-purple font-serif text-lg">{product?.productName} </p>
                        <hr className="text-richblack-50 my-1"></hr>
                        <p className="text-richblack-800 font-semibold">Price: <span className="font-normal">Rs {product?.price}/Kg</span></p>
                        <p className="text-richblack-800 font-semibold mb-2">Stock: <span className="font-normal">{product?.stock} kg</span></p>
                        <button onClick={()=>navigate(`/update/${product?._id}/${product?.productName}`)} className="w-full"><Button2 name={"Update Price"} clsName={"grb1"}></Button2></button>
                        <button onClick={()=>navigate(`/update/${product?._id}/${product?.productName}`)} className="w-full"><Button2 name={"Add Stock"} clsName={"grb2"}></Button2></button>
                    </div>
                </div>)}


            </div>

            <div className="w-10/12 flex justify-between items-center my-4 gap-x-8">
                <div className="w-1/2 flex gap-x-2 border border-richblack-50 rounded-lg shadow-lg p-4 pl-8 bg-lightcream">
                    <img src={image1} alt="/" className="h-16"></img>
                    <div>
                        <p className="text-xl font-bold text-caribbeangreen-700">Safe & Secure</p>
                        <p>All transactions are strongly safe.</p>
                        <div><button className="h-10 rounded-lg px-4 mt-4
                      font-serif text-richblack-5 grb1 simplebutton">Learn More</button></div>
                    </div>

                </div>
                <div className="w-1/2 flex gap-x-2 border border-richblack-50 rounded-lg shadow-lg p-4 pl-8 bg-lightcream">
                    <img src={image2} alt="/" className="h-16"></img>
                    <div>
                        <p className="text-xl font-bold text-caribbeangreen-700">Join Our Community</p>
                        <p>Connect with our community group.</p>
                        <div><button className="h-10 rounded-lg px-4 mt-4
                      font-serif text-richblack-5 grb1 simplebutton">Learn More</button></div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default MyProduct;