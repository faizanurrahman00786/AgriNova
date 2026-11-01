import AboutIntro from "../component/About us/AboutIntro";
import Footer from "../component/Homepage/Footer";

function About(){

    return(
        <div className="w-full flex flex-col items-center justify-center">
            <AboutIntro></AboutIntro>
            <Footer></Footer>
        </div>
    )
}
export default About;