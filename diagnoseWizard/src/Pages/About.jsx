import AboutImageCard from "../Components/AboutImageCard";
import { useState } from "react";

const About = (props) => {
 
    const [aboutImageProps, setaboutImageProps] = useState(
        [
            {
                "imgUrl": "/assets/image 41.svg",
                "docTitle": "Pediatrician"
            },
            {
                "imgUrl": "/assets/image 42.svg",
                "docTitle": "Cardiologist"
            },
            {
                "imgUrl": "/assets/image 43.svg",
                "docTitle": "Dermatologist"
            }
        ]);

    return (
        <section className="font-Satoshi w-[100%]  " id="About" ref={props.AboutSection}>
            <div className="my-[100px]">
                <h2 className="text-[46px] font-bold text-start">
                    Dedicated to provide best diagnosis.
                </h2>
                <p className="text-[20px] font-medium mt-[45px] mb-[60px] text-start w-[880px]">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p>
                <div className="flex">
                    {
                        aboutImageProps.map((detail, index) => {
                            return (<AboutImageCard imgUrl={detail.imgUrl} docTitle={detail.docTitle} key={index} />)
                        })
                    }

                </div>
            </div>
        </section>
    );
}

export default About;