
import { useState } from "react"
import { toast } from "sonner"

import { useNavigate, useParams } from "react-router-dom"
import { FaUserEdit } from "react-icons/fa";

export default function UpdateForm() {

    let obj = {
        price: 0,
        stock: 0,
    }

    const [productData, setproductData] = useState(obj);

    const params = useParams();
    const productId = params.productId;
    

    const navigate = useNavigate();


    const onSubmit = async (e) => {
        e.preventDefault();

        try {

            console.log({ ...productData, productId: productId })

            let Response;
            if (productData.price !== 0) {
                Response = await fetch(
                    `${process.env.REACT_APP_BASE_URL}/product/updateprice`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ ...productData, productId: productId }),
                        credentials: "include"
                    }
                );
            }

            if (productData.stock !== 0) {
                Response = await fetch(
                    `${process.env.REACT_APP_BASE_URL}/product/addstock`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ ...productData, productId: productId }),
                        credentials: "include"
                    }
                );
            }

            if (Response.ok) {
                const data = await Response.json();
                setproductData(data.data);
                toast.success("Updated successfully");
                navigate("/user/dashboard/my-products");

            } else {
                toast.error("Not updated.");
            }
        }
        catch (error) {
            console.error("Failed to update product", error);
        }

    }

    function changeHandler(event) {
        setproductData(
            (prev) => {
                return {
                    ...prev,
                    [event.target.name]: Number(event.target.value),
                }
            }
        );
    }

    return (
        <div>
            <form
                onSubmit={onSubmit}
                className="rounded-lg border border-richblack-100 bg-lightcream p-8 px-12 space-y-4 CardShadow">

                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-800" htmlFor="Price">
                        Price <sup className="text-pink-200">*</sup>
                    </label>
                    <div className="relative">
                        <input

                            id="Price"
                            name="price"
                            onChange={changeHandler}
                            placeholder="Enter Price"
                            type="text"
                            className="bg-white border border-richblack-100 rounded w-full p-[10px] text-richblack-800
                    placeholder:text-richblack-100"
                        />
                        {/* <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" /> */}
                    </div>

                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-800" htmlFor="stock">
                        Stock <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                        name="stock"
                        id="stock"
                        type="number"
                        step={10}
                        onChange={changeHandler}
                        placeholder="Enter Stock"
                        className="bg-white border border-richblack-100 rounded w-full p-[10px] text-richblack-800
                    placeholder:text-richblack-100"/>

                </div>


                <div className="flex justify-end gap-x-2">
                    <button type="submit" className=" flex gap-x-2 items-center m-2 p-2 px-4 font-bold text-richblack-5 
                                               text-sm h-10 rounded-lg simplebutton grb1">
                        <FaUserEdit></FaUserEdit>
                        Save</button>

                </div>

            </form >
        </div >
    )
}