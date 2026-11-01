import Aboutimage from "../../assets/about_us_intro_Image_.jpg";
import leftperson from "../../assets/left_person.png";
import wheatplant from "../../assets/wheat-plant.png";

function AboutIntro() {

    return (
        <div className="w-10/12 h-screen flex flex-col justify-between border border-richblack-50 rounded-lg p-4 mt-24 shadow-lg">
            <div className="flex items-center">
                <img src={wheatplant} className="h-[75px]"/>
                <p className="text-caribbeangreen-700 text-3xl font-serif font-semibold p-4"> AgriNova: A Secure Marketplace</p>
            </div>
            {/* <p className="text-caribbeangreen-700 text-3xl font-serif font-semibold p-4"> About Us: Cultivating Connections</p> */}

            <div className="w-full h-1/3 flex justify-center items-center border border-richblack-50 rounded-lg shadow-lg">

                <div className="flex justify-between items-start w-1/2 h-full p-4 gap-x-8 border border-richblack-5">
                    <img src={leftperson} className="w-1/4 h-2/3 rounded-full border border-richblack-50 px-1 shadow-xl" ></img>
                    <p className="w-2/3 px-4"><span className="text-lg font-bold">AgriNova is web application
                         designed to connect local farmers directly with buyers, </span>
                        
                        while ensuring fair crop pricing through MSP (Minimum Support Price) protection.
                         The platform enables transparent crop trading.
                         <span className="font-semibold"> AI-powered crop disease detection, </span>secure authentication, 
                            and administrative monitoring.</p>
                </div>

                <img src={Aboutimage} className="w-1/2 h-full rounded-r-lg"></img>

            </div>

            <div className="w-full mt-8 flex justify-between items-start p-4 ">
                <div className="w-[45%]">
                    <p className="text-xl text-caribbeangreen-700 font-bold my-2">Our Mission & Vision</p>
                    <p>To simplify and revolutionize the global agricultural supply

                        . Integrity & Transparency: Honest practices from farm

                        chain, ensuring that farmers are recognized and fairly rewarded

                        to sale by providing msp.

                        for their hard work, and that consumers and businesses have
                        access to the freshest produce.<br></br>
                        We envision a future where direct farm-to-table and farm-to-
                        business connections are the standard.</p>
                </div>
                <div className="h-full border border-richblack-25"></div>
                <div className="w-[45%]">
                    <p className="text-xl text-caribbeangreen-700 font-bold my-2">Our Core Value</p>
                    <p>Integrity & Transparency: Honest practices from farm
                        chain, ensuring that farmers are recognized and fairly rewarded
                        to sale.<br></br>
                        Empowerment: Tools and access for farmers to thrive.<br></br>
                        Community: Building lasting relationships based on trust.<br></br>
                        Innovation: Using smart technology to bridge the gap.</p>
                </div>
            </div>
        </div>
    )
}
export default AboutIntro;