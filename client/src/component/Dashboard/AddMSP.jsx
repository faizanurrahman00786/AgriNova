import { useState } from "react"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { FaUserEdit } from "react-icons/fa";

export default function AddMSP() {

    let obj = {
        cropName: "",
        season: "",
        price: 0,
    }
    const [productData, setproductData] = useState(obj);


    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {

            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/msp/createmsp`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body:JSON.stringify(productData),
                    credentials: "include"
                }
            );

            if (Response.ok) {
                toast.success("MSP created successfully");
                const data = await Response.json();
                setproductData(data.data);
                navigate("/category/MSP List");

            } else {
                toast.error("MSP not created.");
            }
        }
        catch (error) {
            toast.error("Failed to create MSP");
            console.error("Failed to create MSP", error);
        }

    }

    function changeHandler(event) {
        setproductData(
            (prev) => {
                return {
                    ...prev,
                    [event.target.name]: event.target.name === "price" ? Number(event.target.value) : event.target.value,
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
                    <label className="text-sm text-richblack-800" htmlFor="productTitle">
                        Crop Name <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                        required
                        id="productTitle"
                        name="cropName"
                        onChange={changeHandler}
                        placeholder="Enter Product Title"
                        className="bg-white border border-richblack-100 rounded w-full p-[10px] text-richblack-800
                    placeholder:text-richblack-100"
                    />

                </div>


                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-800" htmlFor="Price">
                        Price <sup className="text-pink-200">*</sup>
                    </label>
                    <div className="relative">
                        <input
                            required
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
                    <label className="text-sm text-richblack-800" htmlFor="Category">
                        Season <sup className="text-pink-200">*</sup>
                    </label>
                    <select
                        name="season"
                        defaultValue=""
                        onChange={changeHandler}
                        id="Category"
                        className="bg-white border border-richblack-100 rounded w-full p-[10px] text-richblack-800
                    placeholder:text-richblack-100"
                    >
                        <option value="">
                            ---Choose Season---
                        </option>
                        <option value="Rabi">
                            Rabi
                        </option>
                        <option value="Kharif">
                            Kharif
                        </option>
                        <option value="Zaid">
                            Zaid
                        </option>

                    </select>

                </div>

                <div className="flex flex-col space-y-2">

                    <div className="flex justify-end gap-x-2">
                        <button type="submit" className=" flex gap-x-2 items-center m-2 p-2 px-4 font-bold text-richblack-5 
                                               text-sm h-10 rounded-lg simplebutton grb1">
                            <FaUserEdit></FaUserEdit>
                            Save</button>

                    </div>
                </div>
            </form>
        </div>
    )
}