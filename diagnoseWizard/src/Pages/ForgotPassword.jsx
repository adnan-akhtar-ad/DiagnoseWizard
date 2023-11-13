import TypeWriter from "../Components/TypeWriter";

const ForgotPassword = () => {
    return (
        <section>
            <div className='mx-[auto] shadow-lg  px-[50px] my-[100px] rounded-lg w-[800px] '>
                <div className="mt-[50px] mb-[10px]">
                    <h1 className="text-[40px] font-bold ">Forgot Password?</h1>
                    <div className="inline-block mx-[auto]" >
                        <p className="text-[25px] font-bold text-[#18A0A9] text-start">  <TypeWriter array={["Reset", "Reclaim", "Relog"]} /> </p>
                        <p className="text-[16px] font-bold  text-start">
                            Your Journey Back In with our Forgot Password Assistance!</p>
                    </div>
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="email"
                        className="w-[400px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"


                    />
                </div>
                <button
                    className="mx-[auto] w-[150px] h-[40px] bg-[#18A0A9] text-[#FFFFFF] font-medium rounded-lg my-[10px]"
                    type="submit">get login link</button>
            </div>
        </section>
    );
}

export default ForgotPassword;