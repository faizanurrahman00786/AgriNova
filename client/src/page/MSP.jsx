import Footer from "../component/Homepage/Footer";
import require from "../assets/requirement.png";
import analysis from "../assets/transparency.png";
import { useState, useEffect } from "react";
import { toast } from "sonner";

function MSP() {

    const [fetchData, setfetchData] = useState([]);

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
                toast.success("Fetched latest MSP List");

            } else {
                toast.error("Error in fetch MSP List");
            }
        }
        catch (error) {
            toast.error("Failed to fetch MSP List.");
            console.error("Failed to fetch MSP List", error);
        }

    }

    useEffect(function(){
        fetchMSP();
    },[]);

    return (
        <div className="w-full flex flex-col items-center">
            <div className="frontImage w-full mt-5">
                <p className="text-3xl text-caribbeangreen-700 font-serif font-semibold text-center">MSP Price Listing</p>
                <p className="text-richblack-600 font-semibold text-center">Check the Minimum Support Prices (MSP) for various Crops as set by Government</p>
            </div>
            <div className="w-9/12 flex flex-col items-center justify-center bg-lightcream -mt-24 border border-richblack-100 p-6 rounded-md shadow-lg">
                <div className="w-full flex justify-evenly items-center border border-richblack-100 font-bold text-blue-400">
                    <p className="p-2 px-8 w-[24%]">Crops</p>
                    <div className="border border-richblack-25 h-10"></div>
                    <p className="p-2 px-8 w-[24%]">Season</p>
                    <div className="border border-richblack-25 h-10"></div>
                    <p className="p-2 px-8 w-[24%]">MSP (Rs./ Quintal)</p>
                    <div className="border border-richblack-25 h-10"></div>
                    <p className="p-2 px-8 w-[24%]">Effective From</p>
                </div>

                {fetchData?.map((data)=><div className="w-full flex justify-evenly items-center border border-t-0 border-richblack-100 font-mono">
                    <p className="p-2 px-8 w-[24%]">{data.cropName}</p>
                    <div className="border border-richblack-25 h-10"></div>
                    <p className="p-2 px-8 w-[24%]">{data.season}</p>
                    <div className="border border-richblack-25 h-10"></div>
                    <p className="p-2 px-8 w-[24%]">Rs. {data.price*100}</p>
                    <div className="border border-richblack-25 h-10"></div>
                    <p className="p-2 px-8 w-[24%]">{data.date.slice(0,10)} </p>
                </div>)}
               
            </div>

            <div className="w-9/12 flex justify-between items-center mt-8 gap-x-8">
                <div className="w-1/2 flex gap-x-2 border border-richblack-50 rounded-lg shadow-lg p-4 pl-8">
                    <img src={require} className="h-16"></img>
                    <div>
                        <p className="text-xl font-bold text-caribbeangreen-700">Govt. updates on MSP</p>
                        <p>Latest news & announcement</p>
                        <div><button className="h-10 rounded-lg px-4 mt-4
                      font-serif text-richblack-5 grb1 simplebutton">Learn More</button></div>
                    </div>

                </div>
                <div className="w-1/2 flex gap-x-2 border border-richblack-50 rounded-lg shadow-lg p-4 pl-8">
                    <img src={analysis} className="h-16"></img>
                    <div>
                        <p className="text-xl font-bold text-caribbeangreen-700">Find Crop Disease</p>
                        <p>Analyze crop disease using AI.</p>
                        <div><button className="h-10 rounded-lg px-4 mt-4
                      font-serif text-richblack-5 grb1 simplebutton">Learn More</button></div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default MSP;