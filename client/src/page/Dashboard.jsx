import { Outlet } from "react-router-dom";
import Sidebar from "../component/Dashboard/Sidebar";

function Dashboard(props) {

    const { setisLogin, user } = props;

    return (
       

        <div className='w-full flex flex-col items-center'>

            <div className="frontImage w-full mt-5"> </div>

            <div className="w-full flex justify-center items-start px-4 -mt-[20%]">
                <Sidebar setisLogin={setisLogin} user={user} setUser setcityName />
                <div className='w-5/6 overflow-hidden flex justify-center'>
                    <Outlet />
                </div>
            </div>

        </div>

    )
}
export default Dashboard;