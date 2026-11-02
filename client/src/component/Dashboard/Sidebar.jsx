import React from 'react'
import sidebarLinks from '../../data/dashboard-links'
import { NavLink, useNavigate } from 'react-router-dom'
import { VscSettingsGear, VscSignOut } from "react-icons/vsc"


function Sidebar(props) {

    const navigate = useNavigate();
    const setisLogin = props.setisLogin;
    const user = props.user;
    const setUser = props.setUser;


    function logoutHandler() {

        sessionStorage.removeItem("city");
        setUser({});
        setisLogin(false);
        navigate("/");

    }


    return (

        <div className='flex w-1/6 flex-col justify-start border border-richblack-100
             h-[70vh] bg-lightcream pt-10 pl-5 pr-20 text-caribbeangreen-800 rounded-md font-serif CardShadow fixed left-2'>

            <div className='flex flex-col gap-y-2'>
                {
                    sidebarLinks.map(function (link) {
                        return (
                            link.type === user?.accountType && (<NavLink to={link.path} className='flex items-center justify-start gap-x-2 sidebar rounded-md py-1 pl-2 hover:text-purple'>
                                <link.icon />
                                <p>{link.name}</p>
                            </NavLink>)
                        )
                    })
                }
            </div>

            <div className='mt-6 mb-6 h-[1px] w-full bg-richblack-200'></div>

            <div className='flex flex-col gap-y-2'>

                <NavLink to="user/dashboard/setting" className='flex items-center gap-x-2 py-1 pl-2 sidebar rounded-md hover:text-purple'>
                    <VscSettingsGear />
                    <p >Setting</p>
                </NavLink>

                <button
                    onClick={logoutHandler}
                    className=' font-semibold pl-2'>
                    <div className='flex items-center gap-x-2'>
                        <VscSignOut />
                        Logout
                    </div>

                </button>

            </div>

        </div>


    )
}

export default Sidebar
