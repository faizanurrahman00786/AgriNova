import mspimg from "../../assets/msp intro_Image_.jpg";
import transp from "../../assets/transparency.png";
import calc from "../../assets/calculator.png";
import partner from "../../assets/partnership.png";
import { Link } from "react-router-dom";

function MSPIntro() {

    return (
        <div className="w-10/12 h-screen mt-24">

            <p className="text-3xl font-bold text-caribbeangreen-700 text-center font-serif">MSP Introduction: Securing Your Fair Price</p>

            <div className="h-full w-full flex justify-between items-start mt-8">

                <img src={mspimg} alt="/" className="h-[80%] w-[46%] border border-richblack-100 rounded-lg shadow-lg"></img>

                <div className="w-[50%] h-[50%] flex flex-col items-center justify-start gap-y-3">

                    <div className="w-full h-1/3 flex justify-center items-center gap-x-4 p-2 border border-richblack-50 rounded-lg shadow-md  mspcard1">
                        <img src={transp} alt="/" className="w-1/4 h-full p-2 px-6"></img>
                        <div className="w-4/5 h-full flex flex-col justify-center">
                            <p className="font-semibold text-lg">What is MSP?</p>
                            <p className="text-sm">The Minimum Support Price (MSP) is a guaranteed
                                price at which the government purchases crops from
                                farmers, ensuring a minimum profit margin and
                                reducing market risk.</p>
                        </div>
                    </div>

                    <div className="w-full h-1/3 flex justify-center items-center gap-x-4 p-2 border border-richblack-50 rounded-lg shadow-md  mspcard2">
                        <img src={partner} alt="/" className="w-1/4 h-full p-2 px-6"></img>
                        <div className="w-4/5 h-full flex flex-col justify-center">
                            <p className="font-semibold text-lg">Why it matters to farmers?</p>
                            <p className="text-sm">MSP provides income security, prevents distress
                                sales, and encourages farmers to produce essential
                                food grains, contributing to national food security.</p>
                        </div>
                    </div>

                    <div className="w-full h-1/3 flex justify-center items-center gap-x-4 p-2 border border-richblack-50 rounded-lg shadow-md  mspcard3">
                        <img src={calc} alt="/" className="w-1/4 h-full p-2 px-6"></img>
                        <div className="w-4/5 h-full flex flex-col justify-center">
                            <p className="font-semibold text-lg">How it's Calculated.</p>
                            <p className="text-sm">MSP is set based on production costs (C2) plus a
                                50% margin, with inputs from the CACP and
                                consideration of market factors.</p>
                        </div>
                    </div>

                    <Link to="/category/MSP List"><button className="h-10 rounded-lg px-4
                      font-serif text-richblack-5 grb2 simplebutton">Check MSP</button></Link>
                    

                </div>

            </div>
        </div>
    )
}
export default MSPIntro;