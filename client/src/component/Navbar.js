import { useState } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import "../App.css";
import { toast } from "sonner";



function Navbar(props) {

    const navigate = useNavigate();
    const setisLogin = props.setisLogin;
    const login = props.login;
    const setUser = props.setUser;
    const setModal = props.setModal;
    const cityName = props.cityName;
    const setcityName = props.setcityName;
    const setcityModal = props.setcityModal;

    const [divOn, setdivOn] = useState(false);

    const data = ["Product List", "MSP List", "Crop Disease Detection"];
    const cityData = ["Patna", "Banglore"];

    function loginHandler() {
        setModal(true);
    }

    async function logoutHandler() {

        const Response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/auth/logout`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            }
        );

        if (Response.ok) {

            sessionStorage.removeItem("city");
            setisLogin(false);
            setUser({});
            setcityName("");
            setcityModal(true);
            navigate("/");
            toast.success("Logout successfully")
        }
    }

    function navigateHandler() {
        if (login)
            navigate("user/dashboard/My-profile");
        else
            setModal(true);
    }

    function changeHandler(event) {

        if (event.target.value) {
            setcityName(event.target.value);
            sessionStorage.setItem("city", event.target.value);
        }
        else
            setcityModal(true);


    }

    return (

        <div className="flex items-center justify-around fixed w-[100%] h-16 rounded-b-xl bgcolor CardShadow">

            <Link to="/" className="h-[100%] ">
                <img src={logo} alt="/" width={190} className="h-[100%] "></img>
            </Link>

            <div className="text-blue-300 font-semibold flex gap-x-6 ">
                <NavLink to="/">Home</NavLink>

                <div className="relative flex items-center gap-x-1 group cursor-pointer"><button onClick={() => setdivOn(!divOn)}>Category</button>
                    <IoIosArrowDropdownCircle></IoIosArrowDropdownCircle>
                    {divOn && <div>
                        <div className="absolute mx-auto w-[50%] h-[100%] top-9 left-6 rotate-45 border-[1px]  bg-darkcream"></div>
                        <div className="absolute mx-auto w-[200%] top-8 -left-6 rounded-md shadow-xl border-pink-800 border-t-blue-300 border-t-2
                         pl-4 pt-4 pb-2 gap-y-2 backdrop-blur-[7px]  text-sm text-blue-600 flex flex-col">
                            {data?.map(function (obj) {
                                return <NavLink className="hover:text-purple" to={`/category/${obj}`} onClick={() => setdivOn(false)}>{obj}</NavLink>
                            })}
                        </div>
                    </div>}

                </div>

                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </div>

            <div className="flex justify-between items-center gap-x-5">

                <div className="flex items-center gap-x-3">
                    {login ? (<button className="h-9 px-3 rounded-2xl bg-purple border border-richblack-300
                 text-richblack-5 hover:bg-blue-400 font-semibold" onClick={logoutHandler}>Logout</button>) :
                        (<button onClick={loginHandler} className="h-9 px-3 rounded-2xl bg-purple border border-caribbeangreen-300
                 text-richblack-5  hover:bg-blue-400 hover:shadow-2xl font-semibold loginbtn">Login</button>)}

                    <button onClick={navigateHandler} title="Dashboard" className="text-richblack-800"><FaRegUser className="hover:bg-blue-400 text-richblack-900 border hover:text-white w-7 h-7  p-1 rounded-2xl"></FaRegUser></button>
                </div>

                <select name="city"
                    required
                    value={cityName}
                    onChange={changeHandler}
                    className="p-1 rounded-md text-richblack-500 border font-serif CardShadow bg-white">
                    <option value={""}>Select City</option>
                    {cityData.map((city, index) => <option key={index} value={city}>{city}</option>)}
                </select>
            </div>
        </div>
    )
}
export default Navbar;
