import AIbg from "../../assets/ai_intro_Image_.jpg";
import AIimg1 from "../../assets/cropscan.avif";
import AIimg2 from "../../assets/aiprocessing.jpg";
import AIimg3 from "../../assets/plantanalysis.jpg";
import Button2 from "./Button2";
import { useNavigate } from "react-router-dom";


function AIIntro() {

    const navigate= useNavigate();

    return (
        <div className="w-10/12 h-screen mt-10 flex flex-col items-center">

            <img src={AIbg} className="w-full h-1/3 rounded-lg border border-richblack-50 aiimg"></img>

            <div className="w-full h-[40%] flex items-start justify-between mt-12">

                <div className="w-[31%] h-full flex flex-col items-center justify-start p-8 rounded-lg border-richblack-100 border shadow-lg hover:scale-95 hover:shadow-none transition-all duration-300">
                    <img src={AIimg1} className="w-full h-[75%] rounded-lg mb-2"></img>
                    <p className="font-semibold text-lg">Image Capture</p>
                    <p className="text-sm">Capture images of leaf, fruits or crops using mobile camera.</p>
                </div>

                <div className="w-[31%] h-full flex flex-col items-center justify-start p-8 rounded-lg border-richblack-100 border shadow-lg hover:scale-95 hover:shadow-none transition-all duration-300">
                    <img src={AIimg2} className="w-full h-[75%] rounded-lg mb-2"></img>
                    <p className="font-semibold text-lg">AI Processing</p>
                    <p className="text-sm">Process image and identifying disease using Neural Network.</p>
                </div>

                <div className="w-[31%] h-full flex flex-col items-center justify-start p-8 rounded-lg border-richblack-100 border shadow-lg hover:scale-95 hover:shadow-none transition-all duration-300">
                    <img src={AIimg3} className="w-full h-[75%] rounded-lg mb-2"></img>
                    <p className="font-semibold text-lg">Disease Analysis</p>
                    <p className="text-sm">List out Symptoms, disease, confidence score and suggestion to crops.</p>
                </div>
            </div>

            <button onClick={()=>navigate("/category/Crop Disease Detection")} className="flex justify-center items-center mt-8"><Button2 name={"Check Your Crops"} clsName={"grb1"}></Button2></button>
        </div>
    )
}
export default AIIntro;