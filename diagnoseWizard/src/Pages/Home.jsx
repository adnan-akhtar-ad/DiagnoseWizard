const Home = () => {
    return (
        <section className="flex font-Satoshi mt-[40px] mb-[100px] w-[100%]">
            <div className="flex  ">
                <div className="w-[497px] h-[447px] bg-[#FFC567] rounded-xl shrink-0">
                    {/* <div className="flex w-[180px] h-[60px] bg-[#FFFFFF]  rounded-xl z-40">
                        <div className="flex my-[auto] mx-[auto] ">
                            <img src="/assets/image 38.svg" alt="" className="w-[31px] h-[29px]" />
                            <p className="text-[12px] text-[#000000] w-[103px] h-[29px]">More than 10K
                                Patients treated!</p>
                        </div>
                    </div> */}

                    <img src="/assets/image 32.svg" alt="" className="mx-[auto] mb-[30px] shrink-0 h-[480px] w-[424px] mt-[-32px] z-30" />
                </div>
            </div>
            <div className="ml-[95px]  ">
                <p className="text-[20px] text-[#00A0AA] font-bold flex">Welcome to DiagnoseWizard</p>
                <h1 className="text-[70px] leading-[90px] text-[#000] font-bold flex text-start mt-[20px]">Your Journey to
                    Better Health
                    Starts Here</h1>
                <button className="ml-[0px] mt-[50px] bg-[#00A0AA] rounded-xl text-[20px] font-bold text-center p-[15px] text-[#FFF] " >Discover More</button>
            </div>
        </section>
    );
}

export default Home;