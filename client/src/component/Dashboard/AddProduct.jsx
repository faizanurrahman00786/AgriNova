import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function AddProduct(props) {

    const {user} = props;

    return (

        <div className="flex w-full justify-end items-start gap-x-6 py-2 my-5">

            <div className="w-1/2 flex flex-col items-center justify-start">
                {user?.accountType==="farmer"? <h1 className=" text-3xl text-caribbeangreen-700 font-serif font-semibold">
                    Add Crops/Product
                </h1> :
                <h1 className=" text-3xl text-caribbeangreen-700 font-serif font-semibold">
                    Add/Update MSP
                </h1>}
 
                <div className="w-5/6 mt-2" >
                    
                    <Outlet></Outlet>

                </div>
            </div>
           
            <div className="max-w-[350px] rounded-md border border-richblack-100 bg-caribbeangreen-800 mt-5 p-8 xl:block CardShadow">
                <p className="mb-8 text-lg text-richblack-5">⚡ Product Upload Tips</p>
                <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
                    <li>Keep the Product/Crops Price according to MSP .</li>
                    <li>Standard size for the thumbnail is 1024x576.</li>
                    <li>
                        Add stocks and price.
                    </li>
                    <li>
                        Information from the additional section shows up on the
                        product details page.
                    </li>
                    <li>
                        For all kind of Rice (including Basmati Rice) is consider as Rice.
                    </li>
                    <li>Always visit <Link to="/category/MSP List" className="text-yellow-25 font-semibold">MSP Page</Link> before adding any Crops. </li>
                    
                </ul>
            </div>
        </div>

    )
}