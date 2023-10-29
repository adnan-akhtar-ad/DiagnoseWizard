import Home from "./Home";
import About from "./About";
import ServicesPage from "./ServicesPage";
import WhyChooseUs from "./WhyChooseUs";
import CarousalPage from "./CarousalPage";
import ConnectWithUs from "./ConnectWithUs";
import Footer from "./Footer";


const Hero = (props) => {

    return (
        <section>
            <Home HomeSection={props.HomeSection} />
            <About AboutSection={props.AboutSection} />
            <ServicesPage ServicesPageSection={props.ServicesPageSection} />
            <WhyChooseUs WhyChooseUsSection={props.WhyChooseUsSection} />
            <CarousalPage CarousalPageSection={props.CarousalPageSection} />
            <ConnectWithUs ConnectWithUsSection={props.ConnectWithUsSection} />
            <Footer FooterSection={props.FooterSection} />
        </section>
    );
}

export default Hero;