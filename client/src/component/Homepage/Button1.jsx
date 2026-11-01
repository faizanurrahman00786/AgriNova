import "../../App.css";

function Button1(props){
    const name=props.name;
    const clsName= props.clsName;
    return(
        <div>
            <button className={` h-10 rounded-lg  p-2 px-4
            font-serif text-richblack-25 gbutton ${clsName} `}>{name}</button>
        </div>
    );
}
export default Button1;