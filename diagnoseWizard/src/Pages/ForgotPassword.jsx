import { useState } from "react";
import TypeWriter from "../Components/TypeWriter";
import { ToastContainer,toast } from 'react-toastify';
import {useNavigate } from "react-router-dom";
const ForgotPassword = () => {

    const navigate = useNavigate();
    const navigateToChangePassword = () => {
         navigate("/changePass");
     };
    const [userEmail,setUserEmail]=useState('');
    const [otp,setOtp]=useState('');
    const [userOtp,setUserOtp]=useState('');
    const [visibility,setVisibility]=useState('');
    const handleUserEmailChange=(e)=>{
        setUserEmail(e.target.value);
    }
    const handleUserOtpChange=(e)=>{
        setUserOtp(e.target.value);
    }
    const handleGetOtp=async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/forgotPassword`, {
                method: 'POST',
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({  
                    "email": userEmail,
                    }),
            })
            const data = await response.json();
            if (data.status==='success') {
                toast.success("OTP sent successfully!!");
                setOtp(data.data.otp);
                sessionStorage.setItem("encryptedData", data.data.user_id.encryptedData);
            }
            if (!response.ok) {
                console.log("The status code :", response.status)
                
                const errorData = await response.json();
                throw new Error(errorData.error);


            }

          
        } catch (err) {
            console.error(`Error signing in the user`, err.message);

        }
       
    }
    const handleVerifyOtp=()=>{
          if(otp==userOtp){
            navigateToChangePassword();
          }else{
            toast.error("Otps didnt match,Try again!!");
          }
    }
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
                        value={userEmail}
                        onChange={handleUserEmailChange}

                    />
                </div>
                <button
                    className="mx-[auto] w-[150px] h-[40px] bg-[#18A0A9] text-[#FFFFFF] font-medium rounded-lg my-[10px]"
                    type="submit"
                    onClick={handleGetOtp}
                    >Get OTP</button>
                <div>
                    <input
                        type="text"
                        placeholder="otp"
                        className="w-[400px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"
                        onChange={handleUserOtpChange}
                        value={userOtp}

                    />
                </div>
                <button
                    className="mx-[auto] w-[150px] h-[40px] bg-[#18A0A9] text-[#FFFFFF] font-medium rounded-lg my-[10px]"
                    type="submit"
                    onClick={handleVerifyOtp}
                    >Verify OTP</button>
                
                
            </div>
        </section>
    );
}

export default ForgotPassword;