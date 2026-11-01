import IntroBg from "../component/Homepage/IntroBg";
import ProductIntro from "../component/Homepage/ProductIntro";
import MSPIntro from "../component/Homepage/MSPIntro";
import AIIntro from "../component/Homepage/AIIntro";
import Footer from "../component/Homepage/Footer";
import "../App.css";

function Home(props){

    const {user,login, cityName} = props;

    return(
        <div className="w-full flex flex-col items-center justify-center">
            <IntroBg/>
            <ProductIntro login={login} user={user} cityName={cityName}></ProductIntro>
            <MSPIntro></MSPIntro>
            <AIIntro></AIIntro>
            <Footer></Footer>
        </div>
    )
}
export default Home;