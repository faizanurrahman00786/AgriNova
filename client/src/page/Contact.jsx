import Footer from "../component/Homepage/Footer";
import ContactDetails from "../component/Contact us/ContactDetails";
import ContactForm from "../component/Contact us/ContactForm";
function Contact() {

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="flex w-10/12 max-w-maxContent flex-col  justify-between text-caribbeangreen-700 lg:flex-row my-24 gap-12">
                {/* Contact Details */}
                <div className="lg:w-[35%]">
                    <ContactDetails />
                </div>

                {/* Contact Form */}
                <div className="lg:w-[50%]">
                    <ContactForm />
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default Contact;