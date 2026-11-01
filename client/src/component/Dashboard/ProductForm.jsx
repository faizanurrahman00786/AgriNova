import { useState, useEffect } from "react"
import { toast } from "sonner"
import { HiOutlineCurrencyRupee } from "react-icons/hi"

import DragAndDropInput from "../Dashboard/DragAndDropInput";
import { useNavigate } from "react-router-dom"
import { FaUserEdit } from "react-icons/fa";

export default function ProductForm(props) {

    const {user}= props;

    let obj = {
        productName: "",
        description: "",
        price: 0,
        stock: 0,
        category: ""
    }
    const [productData, setproductData] = useState(obj);
    const [upload, setupload] = useState([]);
    const [fetchData, setfetchData] = useState([]);

    const navigate = useNavigate();

   
    const onSubmit = async (e) => {
        e.preventDefault();

        if(!user?.personalInfo?.city){
            toast.warning("Please update profle");
            navigate("/user/dashboard/setting");
            return;
        }

        try {

            const formData = new FormData();
            formData.append("productName", productData.productName)
            formData.append("description", productData.description)
            formData.append("price", productData.price)
            formData.append("stock", productData.stock)
            formData.append("category", productData.category)
            formData.append("thumbnailImage", upload[0]);

           

            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/product/createproduct`,
                {
                    method: "POST",
                    body: formData,
                    credentials: "include"
                }
            );

            if (Response.ok) {
                toast.success("Product created successfully");
                const data = await Response.json();
                setproductData(data.data);
                navigate("/user/dashboard/my-products");

            } else {
                toast.error("Product not created.");
            }
        }
        catch (error) {
            console.error("Failed to create product", error);
        }

    }

    function changeHandler(event) {
        setproductData(
            (prev) => {
                return {
                    ...prev,
                    [event.target.name]: event.target.name==="price"|| event.target.name==="stock"? Number(event.target.value):event.target.value,
                }
            }
        );
    }

     async function fetchMSP() {
    
            try {
                const Response = await fetch(
                    `${process.env.REACT_APP_BASE_URL}/msp/getallmsp`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        credentials: "include"
                    }
                );
    
                if (Response.ok) {
                    const data = await Response.json();
                    setfetchData(data.data);
    
                } 
            }
            catch (error) {
                toast.error("Failed to fetch Products.");
                console.error("Failed to fetch Products", error);
            }
    
        }
    
        useEffect(function(){
            fetchMSP();
        },[]);

    return (
        <div>
            <form
                onSubmit={onSubmit}
                className="rounded-lg border border-richblack-100 bg-lightcream p-8 px-12 space-y-4 CardShadow">

               
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-800" htmlFor="productTitle">
                        Product Name <sup className="text-pink-200">*</sup>
                    </label>
                    <select
                        required
                        id="productTitle"
                        name="productName"
                        onChange={changeHandler}
                        placeholder="Enter Product Title"
                        className="bg-white border border-richblack-100 rounded w-full p-[10px] text-richblack-800
                    placeholder:text-richblack-100">

                        <option value={""}>---Select--- </option>
                        {fetchData?.map((crop)=>
                            <option value={crop?.cropName}>{crop?.cropName} </option>
                        )}

                    </select>
                   

                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-800" htmlFor="productShortDesc">
                        Product Description <sup className="text-pink-200">*</sup>
                    </label>
                    <textarea
                        id="productShortDesc"
                        placeholder="Enter Description"
                        onChange={changeHandler}
                        name="description"
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

                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-800" htmlFor="Category">
                        Product Category <sup className="text-pink-200">*</sup>
                    </label>
                    <select
                        name="category"
                        defaultValue=""
                        onChange={changeHandler}
                        id="Category"
                        className="bg-white border border-richblack-100 rounded w-full p-[10px] text-richblack-800
                    placeholder:text-richblack-100"
                    >
                        <option value="">
                            ---Choose Category---
                        </option>
                        <option value="All Products">
                            All Products
                        </option>
                        <option value="Seasonal Crops">
                            Seasonal Crops
                        </option>
                        <option value="Vegitables">
                            Vegitables
                        </option>
                        <option value="Fruits">
                            Fruits
                        </option>

                    </select>

                </div>

                <DragAndDropInput setupload={setupload} upload={upload}></DragAndDropInput>


                <div className="flex flex-col space-y-2">


                    {/* <label className="text-sm text-richblack-800" htmlFor="stock">
                        Stock <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                        name="stock"
                        id="stock"
                        onChange={changeHandler}
                        placeholder="Enter Stock"
                       className="bg-white border border-richblack-100 rounded w-full p-[10px] text-richblack-800
                    placeholder:text-richblack-100"/> */}


                    {/* Next Button */}
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