import react, { useState } from "react";
import Button2 from "../Homepage/Button2";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {

    const {user, product,login} = props;

    const navigate = useNavigate();

    return (
        <div className="w-[24%] border border-richblack-50 rounded-lg pb-4 shadow-md card bg-lightcream">
            <img src={product?.image} className="w-full h-40 object-center rounded-t-lg" ></img>
            <div className="mt-2 pl-4 pr-2">
                <p className="text-purple font-serif text-lg">{product?.productName} </p>
                <hr className="text-richblack-50 my-1"></hr>
                <p className="text-richblack-800 font-semibold">Price: <span className="font-normal">Rs {product?.price}/Kg</span></p>
                {login && user.accountType==="farmer"?<p className="text-richblack-800 font-semibold mb-2">Stock: <span className="font-normal">{product?.stock} Kg </span></p>:
                <p className="text-richblack-800 font-semibold mb-2">Seller: <span className="font-normal">{product?.seller?.firstName+" "+product?.seller?.lastName} </span></p>}
                <button onClick={()=>navigate(`/product-details/${product?.productName}/${product?._id}`)} className="w-full"><Button2 name={"View Details"} clsName={"grb3"}></Button2></button>
            </div>
        </div>
    )
}

export default ProductCard;