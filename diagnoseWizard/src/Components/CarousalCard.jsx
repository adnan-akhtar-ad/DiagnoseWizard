import { SwiperSlide } from 'swiper/react';
import CarousalCardStars from './CarousalCardStars';
const CarousalCard = (props) => {
    const starGenerator = (count) => {
        for (let i = 0; i < count; i++) {
            return (
                <CarousalCardStars />
            )
        }
    }
    return (
        // <SwiperSlide className='my-[15px]'> 
        <div className='my-[25px]  ' >
            <div className='text-start w-[490px]'>
                <div className='flex '>
                    <img src="assets/Ellipse 10.svg" alt="" />
                    <img src="assets/Vector(16).svg" alt="" className='translate-x-[-150%]' />

                </div>
                <div className='my-[15px]'>
                    {starGenerator(props.count)}
                </div>
                <h1 className='font-bold text-[32px] mb-[15px]'>
                    {props.comment}
                </h1>

                <p className='font-medium text-[20px]'>
                    {props.name}
                </p>


            </div>
        </div>
        // </SwiperSlide>
    );
}

export default CarousalCard;