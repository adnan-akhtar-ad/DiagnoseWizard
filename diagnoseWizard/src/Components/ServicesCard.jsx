const ServicesCard = (props) => {
    return (
        <div className="flex rounded-lg bg-[#FFFFFF]">
           <div className="mt-[40px] ml-[40px]">
           <img src={props.imgUrl} alt="" className="mr-[44px] justify-start float-left translate-y-[13px] " />
            <div className="flex flex-col float-right w-[326px]">
                <h2 className="font-bold text-[32px] text-start">
                    {props.serviceHeading}
                </h2>
                <p className="font-medium text-[18px]  text-start">
                    {props.serviceDescription}
                </p>
            </div>
           </div>
        </div>
    );
}

export default ServicesCard;