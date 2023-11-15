import About from "./About";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
    const navigate = useNavigate();
    const navigateToDiagnoses = () => {
        navigate("/diagnoses");
    };
    return (
        <section className="flex font-Satoshi mt-[40px] mb-[100px] w-[100%]" id="Home" ref={props.HomeSection}>
            <div className="flex  ">
                <div className="w-[497px] h-[447px] bg-[#FFC567] rounded-xl shrink-0">
            

                    <img src="/assets/image 32.svg" alt="" className="mx-[auto] mb-[30px] shrink-0 h-[480px] w-[424px] mt-[-32px] z-30" />
                </div>
            </div>
            <div className="ml-[95px] text-start ">
                <p className="text-[20px] text-[#00A0AA] font-bold flex">Welcome to DiagnoseWizard</p>
                <h1 className="text-[70px] leading-[90px] text-[#000] font-bold flex text-start mt-[20px]">Your Journey to
                    Better Health
                    Starts Here</h1>
                <button
                onClick={navigateToDiagnoses}
                 className="ml-[0px] mt-[50px] bg-[#00A0AA] rounded-xl text-[20px] font-bold text-center p-[15px] text-[#FFF] " >Discover More</button>
            </div>
           
        </section>
    );
}

export default Home;