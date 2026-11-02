import image2 from "../../assets/partnership.png";
import image1 from "../../assets/shield.png";

function OrderHistory(props) {

    const user = props.user;

    return (
        <div className="w-full flex flex-col items-center justify-start gap-y-20">
            <div className="w-full mt-5">
                {user?.accountType==="buyer"&& <p className="text-3xl text-caribbeangreen-700 font-serif font-semibold text-center">My Purchase Records</p> }
                {user?.accountType==="farmer"&& <p className="text-3xl text-caribbeangreen-700 font-serif font-semibold text-center">My Sell Records</p> }
                {user?.accountType==="admin"&&<p className="text-3xl text-caribbeangreen-700 font-serif font-semibold text-center">All Payments Records</p>}
                <p className="text-richblack-600 font-semibold text-center">Check your latest records & verify details. If any
                    issue, please contact us immediately.
                </p>
            </div>

            <div className="w-9/12 flex flex-col items-center justify-center bg-lightcream border border-richblack-100 p-6 rounded-md shadow-xl">

                {user?.accountType==="buyer"&& <div className="w-full flex justify-evenly items-center border border-richblack-100 font-bold text-blue-400">
                    <p className="p-2 px-8 w-[24%]">Order ID</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">Order Date</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">Seller</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">Amount</p>
                </div> }

                {user?.accountType==="farmer"&& <div className="w-full flex justify-evenly items-center border border-richblack-100 font-bold text-blue-400">
                    <p className="p-2 px-8 w-[24%]">Order ID</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">Order Date</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">Buyer</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">Amount</p>
                </div> }

              {user?.accountType==="admin"&& <div className="w-full flex justify-evenly items-center border border-richblack-100 font-bold text-blue-400">
                    <p className="p-2 px-8 w-[16%]">Order ID</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[16%]">Order Date</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[16%]">Buyer</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[17%]">Seller</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[15%]">Amount</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[16%]">Paid</p>
                </div>}
                

               {(user?.accountType==="farmer"||user?.accountType==="buyer")&&  <div className="w-full flex justify-evenly items-center border border-t-0 border-richblack-100 font-serif">
                    <p className="p-2 px-8 w-[24%]">OD123456</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">01-10-2026</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">PrimeCrop Trader</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">Rs. 4500</p>
                </div>}
                {(user?.accountType==="farmer"||user?.accountType==="buyer")&&  <div className="w-full flex justify-evenly items-center border border-t-0 border-richblack-100 font-serif">
                    <p className="p-2 px-8 w-[24%]">OD123456</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">01-10-2026</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">PrimeCrop Trader</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">Rs. 4500</p>
                </div>}
                {(user?.accountType==="farmer"||user?.accountType==="buyer")&&  <div className="w-full flex justify-evenly items-center border border-t-0 border-richblack-100 font-serif">
                    <p className="p-2 px-8 w-[24%]">OD123456</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">01-10-2026</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">PrimeCrop Trader</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">Rs. 4500</p>
                </div>}
                {(user?.accountType==="farmer"||user?.accountType==="buyer")&&  <div className="w-full flex justify-evenly items-center border border-t-0 border-richblack-100 font-serif">
                    <p className="p-2 px-8 w-[24%]">OD123456</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">01-10-2026</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">PrimeCrop Trader</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-8 w-[24%]">Rs. 4500</p>
                </div>}

                {user?.accountType==="admin"&&  <div className="w-full flex justify-evenly items-center border border-t-0 border-richblack-100 font-serif">
                    <p className="p-2 w-[16%]">OD123456</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-4 w-[16%]">01-10-2026</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-4 w-[16%]">PrimeCrop Trader</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2  w-[17%]">GreenLeaf Organic
                        <p className="text-sm font-sans">A/C 12345678999999</p>
                    </p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-4 w-[15%]">Rs. 4500</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <div className="w-[16%] px-4"><button  className="h-10 w-full rounded-lg px-4
                      font-serif text-richblack-5 grb1 simplebutton">Pay</button></div>
                </div> }
                 {user?.accountType==="admin"&&  <div className="w-full flex justify-evenly items-center border border-t-0 border-richblack-100 font-serif">
                    <p className="p-2 w-[16%]">OD123456</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-4 w-[16%]">01-10-2026</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-4 w-[16%]">New AgriMart ltd.</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2  w-[17%]">GreenLeaf Organic
                        <p className="text-sm font-sans">A/C 12345678999999</p>
                    </p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-4 w-[15%]">Rs. 4500</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <div className="w-[16%] px-4"><button  className="h-10 w-full rounded-lg px-4
                      font-serif text-richblack-5 grb1 simplebutton">Pay</button></div>
                </div> }
                 {user?.accountType==="admin"&&  <div className="w-full flex justify-evenly items-center border border-t-0 border-richblack-100 font-serif">
                    <p className="p-2 w-[16%]">OD123456</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-4 w-[16%]">01-10-2026</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-4 w-[16%]">PrimeCrop Trader</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2  w-[17%]">GreenLeaf Organic
                        <p className="text-sm font-sans">A/C 12345678999999</p>
                    </p>
                    <div className="border border-richblack-25 h-full"></div>
                    <p className="p-2 px-4 w-[15%]">Rs. 4500</p>
                    <div className="border border-richblack-25 h-full"></div>
                    <div className="w-[16%] px-4"><button  className="h-10 w-full rounded-lg px-4
                      font-serif text-richblack-5 grb1 simplebutton">Pay</button></div>
                </div> }



            </div>
            <div className="w-9/12 flex justify-between items-center mt-8 gap-x-8">
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
export default OrderHistory;