import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
    "Marketplace",
    "Sell Crops",
    "AI Crop Disease Analyzer",
    "MSP Update",
    "Docs",
    "Admin Panel",
    "Videos",
    "Workspaces",
];
const Plans = ["Paid memberships", "For Users", "Business solutions"];
const Community = ["Forums", "Developers", "Events"];

const FooterLink = [
  {
    title: "Information & Learn",
    links: [
      { title: "How its work", link: "/about" },
      { title: "FAQs", link: "/FAQs" },
      { title: "Blog & Updates", link: "/blog" },
      { title: "Crop Carrer Guide", link: "/guide" },
      { title: "Agriculture", link: "/agriculture" },
      { title: "Farming Videos", link: "/videos" },
      { title: "Language Selector", link: "/language selector" },
      { title: "Developer Tools", link: "/developer-tools" },
    ],
  },
  {
    title: "Languages",
    links: [
      { title: "All Languages", link: "/all language" },
      { title: "English", link: "/english" },
      { title: "Hindi", link: "/hindi" },
      { title: "Urdu", link: "/urdu" },
      { title: "Bangla", link: "/bangla" },
      { title: "Tamil", link: "/tamil" },
      { title: "Telgu", link: "/telgu" },
      { title: "Kannad", link: "/kannad" },
      { title: "Malayalam", link: "/malayalam" },
      { title: "Marathi", link: "/marathi" },
    ],
  },
  {
    title: "Legal & Policies",
    links: [
        {title: "Privacy Policy", link: "/Privacy Policy"},
        {title: "Refund & Dispute policy", link: "/Refund & Dispute policy"},
        {title: "Terms and Conditions", link: "/Terms and Conditions"},
        {title: "Complience & Licensing", link: "/Complience & Licensing"},
        {title: "-", link: "/hi"},
        {title: "Feedback", link: "/feedback"},
        {title: "Support", link: "/support"}
    ]
  }
];

const Footer = () => {
    return (
        <div className="w-10/12" >
            <div className="flex lg:flex-row gap-8 items-center justify-between mt-12  text-richblack-400 leading-6 mx-auto relative py-14">
                <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
                   
                    <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
                        <div className="w-[30%] flex flex-col items-center gap-3 lg:w-[30%] mb-7 lg:pl-0">
                            <img src={logo} alt="" height={100} width={120} className="object-contain" />
                            <h1 className="text-caribbeangreen-700 font-bold text-[16px]">
                                Company
                            </h1>
                            <div className="flex flex-col gap-2">
                                {["About", "Careers", "Affiliates"].map((ele, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="text-[14px] cursor-pointer hover:text-richblack-800 transition-all duration-200"
                                        >
                                            <Link to={ele.toLowerCase()}>{ele}</Link>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex gap-3 text-lg text-blue-400">
                                <FaFacebook />
                                <FaGoogle />
                                <FaTwitter />
                                <FaYoutube />
                            </div>
                            <div></div>
                        </div>

                        <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                            <h1 className="text-caribbeangreen-700 font-bold text-[16px]">
                                Core Platform
                            </h1>

                            <div className="flex flex-col gap-2 mt-2">
                                {Resources.map((ele, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="text-[14px] cursor-pointer hover:text-richblack-800 transition-all duration-200"
                                        >
                                            <Link to={ele.split(" ").join("-").toLowerCase()}>
                                                {ele}
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>

                            <h1 className="text-caribbeangreen-700 font-bold text-[16px] mt-7">
                                Support
                            </h1>
                            <div className="text-[14px] cursor-pointer hover:text-richblack-800 transition-all duration-200 mt-2">
                                <Link to={"/contact"}>Help Center</Link>
                            </div>
                            <div className="text-[14px] cursor-pointer hover:text-richblack-800 transition-all duration-200 mt-2">
                                <Link to={"/contact"}>Report an Issue</Link>
                            </div>
                        </div>

                        <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                            <h1 className="text-caribbeangreen-700 font-bold text-[16px]">
                                Plans
                            </h1>

                            <div className="flex flex-col gap-2 mt-2">
                                {Plans.map((ele, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="text-[14px] cursor-pointer hover:text-richblack-800 transition-all duration-200"
                                        >
                                            <Link to={ele.split(" ").join("-").toLowerCase()}>
                                                {ele}
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                            <h1 className="text-caribbeangreen-700 font-bold text-[16px] mt-7">
                                Community
                            </h1>

                            <div className="flex flex-col gap-2 mt-2">
                                {Community.map((ele, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="text-[14px] cursor-pointer hover:text-richblack-800 transition-all duration-200"
                                        >
                                            <Link to={ele.split(" ").join("-").toLowerCase()}>
                                                {ele}
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
                        {FooterLink.map((ele, i) => {
                            return (
                                <div key={i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                                    <h1 className="text-caribbeangreen-700 font-bold text-[16px]">
                                        {ele.title}
                                    </h1>
                                    <div className="flex flex-col gap-2 mt-2">
                                        {ele.links.map((link, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="text-[14px] cursor-pointer hover:text-richblack-800 transition-all duration-200"
                                                >
                                                    <Link to={link.link}>{link.title}</Link>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
                
                <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
                    <div className="flex flex-row">
                        {BottomFooter.map((ele, i) => {
                            return (
                                <div
                                    key={i}
                                    className={` ${BottomFooter.length - 1 === i
                                            ? ""
                                            : "border-r border-richblack-700 cursor-pointer hover:text-richblack-800 transition-all duration-200"
                                        } px-3 `}
                                >
                                    <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                                        {ele}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Footer;