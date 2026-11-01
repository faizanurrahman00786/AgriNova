import "../../App.css";

function Button2(props){
    const name=props.name;
    const clsName= props.clsName;
    return(
        <div>
            <button className={` h-10 rounded-lg  p-2 px-4 w-full
            font-serif text-richblack-5 hbutton ${clsName} `}>{name}</button>
        </div>
    );
}
export default Button2;