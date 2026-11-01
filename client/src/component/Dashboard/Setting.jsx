import ChangeProfile from "./ChangeProfile"
import DeleteAccount from "./DeleteAccount"
import EditProfile from "./EditProfile"


export default function Settings(props) {

  const user = props.user;
  const setUser = props.setUser;
  const setisLogin= props.setisLogin;
  return (
    <>
  
      <div className='text-white w-[60%] flex flex-col items-center justify-start gap-y-2 py-2 mt-5'>
        <ChangeProfile user={user} setUser={setUser} />


        <EditProfile user={user} />


        <DeleteAccount setisLogin={setisLogin}/>
      </div>

    </>
  )
}