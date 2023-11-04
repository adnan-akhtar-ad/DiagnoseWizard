import { useState } from "react";
import WhyChooseUsPoint from "../Components/WhyChooseUsPoint";
import TypeWriter from "../Components/TypeWriter";
import {useNavigate } from "react-router-dom";

const WhyChooseUs = (props) => {
    const navigate = useNavigate();

    const navigateToHospitals = () => {
        navigate("/hospitals");
   
    };
    const [points, setPoints] = useState
        ([
            {
                "point": "Safety First Quality Must"
            },
            {
                "point": "Patient-Centric Approach"
            },
            {
                "point": "Focused Leadership"
            },
            {
                "point": "Cutting-Edge Technology"
            },

            {
                "point": "Transparent Pricing"
            },
            {
                "point": "Coordinated Care"
            },
        ])
    const [array, setArray] = useState(["Wellness", "Compassion", "Quality", " Strength", "Fitness", "Resilience", " Energy",]);
    return (
        <section className="my-[100px]" id="WhyChooseUs" ref={props.WhyChooseUsSection}>
            <div>
                <div className="flex justify-between w-[1073px] px-[75px] ">
                    <div className="inline-block translate-y-[-128px]">
                        <img src="assets/image 36.svg" alt="" className="z-30 translate-y-[128px] ml-[82px] relative" />

                        <div className="bg-[#FFC567] w-[385px] h-[128px] rounded-xl "> </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-[40px] mb-[30px]">
                            Why Choose Us?
                        </h3>
                        {
                            points.map((detail, index) => {
                                return (
                                    <WhyChooseUsPoint 
                                    key={index}
                                    point={detail.point} />
                                )

                            })

                        }
                    </div>
                </div>
                <div className="w-[1120px] text-start px-[75px]">
                    <h3 className="font-bold text-[40px] text-start mb-[30px]">
                        <TypeWriter array={array} />
                    </h3>
                    <p className="font-medium text-[20px] text-start mb-[45px]">
                        They live in Bookmarks grove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it.
                    </p>
                    <button className="bg-[#00A0AA] font-bold text-[20px] text-[#FFFFFF] p-[15px] rounded-xl" onClick={navigateToHospitals}>
                        Take An Appointment
                    </button>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;