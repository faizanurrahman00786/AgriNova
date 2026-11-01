import cart from "../../assets/vegetables.png";
import wheatplant from "../../assets/wheat-plant.png";
import buyer from "../../assets/buyers.png";
import bestprice from "../../assets/best-price.png";
import secure from "../../assets/shield.png";
import track from "../../assets/tracking.png";
import ProductListing from "./ProductListing";


function ProductIntro(props) {

    const {user, login, cityName} = props;


    return (
        <div className="w-10/12 flex flex-col items-center justify-center mt-5">

            <div className="textslide w-full text-purple font-semibold text-sm mb-3">All products are listed as per MSP price set by Government and each crop's price is continously validating through our MSP Protection System. For further information, please visit our MSP List.</div>

            <div className="h-[75px] w-[100%] flex items-center justify-around border rounded-lg border-richblack-25 shadow-md p-1 px-12 gap-x-12 bg-lightcream">

                <div className="w-[33%] flex justify-start items-center h-full gap-x-4">
                    <img src={wheatplant} className="h-full"></img>
                    <div>
                        <p className="font-semibold text-base">For Farmers</p>
                        <p className="text-sm">Sell your crops directly</p>
                    </div>
                </div>

                <div className="border border-richblack-25 h-full "></div>

                <div className="w-[33%] flex justify-start items-center h-[100%] gap-x-4">
                     <img src={buyer} className="h-full"></img>
                    <div>
                        <p className="font-semibold text-base">For Buyers</p>
                        <p className="text-sm">Purchase from local farmers</p>
                    </div>
                </div>

                <div className="border border-richblack-25 h-full"></div>

                <div className="w-[33%] flex justify-start items-center h-[100%] gap-x-4">
                    <img src={cart} className="h-full"></img>
                    <div>
                        <p className="font-semibold text-base">Quality Assured</p>
                        <p className="text-sm">Local farm products & crops</p>
                    </div>
                </div>

            </div>

            <ProductListing login={login} user={user} cityName={cityName}></ProductListing>

            <div className="h-[75px] w-[100%] flex items-center justify-around border rounded-lg border-richblack-25 shadow-md p-1 px-12 gap-x-12 mt-4 bg-lightcream">

                <div className="w-[33%] flex justify-start items-center h-full gap-x-4">
                    <img src={bestprice} className="h-full"></img>
                    <div>
                        <p className="font-semibold text-base">MSP Price Guarantee </p>
                        <p className="text-sm">Fair price for farmers and buyers</p>
                    </div>
                </div>

                <div className="border border-richblack-25 h-full "></div>

                <div className="w-[33%] flex justify-start items-center h-[100%] gap-x-4">
                     <img src={secure} className="h-full"></img>
                    <div>
                        <p className="font-semibold text-base">Secure & Easy</p>
                        <p className="text-sm">Safe and Reliable website</p>
                    </div>
                </div>

                <div className="border border-richblack-25 h-full"></div>

                <div className="w-[33%] flex justify-start items-center h-[100%] gap-x-4">
                    <img src={track} className="h-full"></img>
                    <div>
                        <p className="font-semibold text-base">Fast & Secure</p>
                        <p className="text-sm">Safe and quick transactions</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default ProductIntro;