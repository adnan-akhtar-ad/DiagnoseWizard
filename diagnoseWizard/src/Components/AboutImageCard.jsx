const AboutImageCard = (props) => {
    return (
        <div className="mr-[118px]">
            <img src={props.imgUrl} alt="" className="z-[-1]" />
            <div className="w-[192px] h-[94px] bg-[#00A0AA] text-[#FFFFFF] px-[25px] py-[15px]  mt-[-47px] z-40 ml-[20px] relative rounded-lg">
                <p className="font-bold text-[16px] text-start">For your health</p>
                <p className="font-bold text-[24px] text-start">{props.docTitle}</p>

            </div>
        </div>
    );
}

export default AboutImageCard;