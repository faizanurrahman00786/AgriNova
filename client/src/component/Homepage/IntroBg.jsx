import { useNavigate } from "react-router-dom";
import "../../App.css";
import leftperson from "../../assets/left_person.png"
import rightperson from "../../assets/right_person.png"
import Button1 from "../Homepage/Button1";


function IntroBg() {

    const navigate = useNavigate();

    return (
        <div className=" flex justify-center w-[100%] frontImage ">

            <div className="w-10/12  flex justify-around  ">
                <img src={leftperson} alt="" className="h-[100%] w-[21%]  " ></img>

                <div>
                    <p className="text-3xl text-caribbeangreen-700 text-center pt-5 font-serif font-bold">Connecting Farmers and Buyers<br></br>
                        ----- Directly -----</p>
                    <p className="text-lg text-caribbeangreen-700 text-center pt-3 font-bold">Buy and Sell Crops at the Fair prices</p>

                    <div className="flex justify-center items-center pt-14 gap-x-8 " >
                       <button onClick={()=>navigate("/category/Product List")}> <Button1 name={"Start Selling"} clsName={"grb1"}></Button1> </button>
                       <button onClick={()=>navigate("/category/Product List")}> <Button1 name={"Buy Now"} clsName={"grb2"}></Button1> </button>
                    </div>

                </div>

                <img src={rightperson} alt="" className="h-[100%] w-[21%]" ></img>
            </div>

        </div>
    )
}
export default IntroBg;
