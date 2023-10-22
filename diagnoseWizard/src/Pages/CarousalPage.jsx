import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import CarousalCard from '../Components/CarousalCard';
import 'swiper/css';
import 'swiper/css/navigation';

import '../App.css';

// import required modules
import { Navigation } from 'swiper/modules';
const CarousalPage = () => {
    const [carousalDetails, setCarousalDetails] = useState
        ([
            {
                "count": 5,
                "comment": `"DiagnoseWizard is a lifesaver! It helped me understand my symptoms and get a diagnosis quickly. Thanks for the peace of mind!`,
                "name": "Himanshu"
            },
            {
                "count": 4,
                "comment": `"I was worried about my health, but diagnoseWizard provided a clear diagnosis and valuable information. I can't thank you enough!"`,
                "name": "Gyandeep"
            },
            {
                "count": 5,
                "comment": `"What a fantastic resource! The accurate diagnosis I received from diagnoseWizard saved me from unnecessary stress and doctor visits."`,
                "name": "Praveen"
            },
            {
                "count": 5,
                "comment": `"I'm impressed with the accuracy of the diagnoses on diagnoseWizard. It's like having a virtual doctor at my fingertips!."`,
                "name": "Mohit Raghav"
            },
            // {
            //     "count": 4,
            //     "comment": `"The information provided by diagnoseWizard is so helpful and easy to understand. I appreciate the clarity in diagnosis."`,
            //     "name": "David"
            // },

        ])
    return (

        <section className='my-[100px]'>
{/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper"> */}
                <div className='grid grid-cols-2 w-[1136px] justify-between'>
                    {
                        carousalDetails.map((details, index) => {
                            return (
                                <CarousalCard count={details.count} comment={details.comment} name={details.name} />
                            )
                        })
                    }
                </div>
        {/* </Swiper> */}
        </section>


    );
}

export default CarousalPage;