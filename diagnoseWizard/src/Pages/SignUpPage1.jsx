import { useState } from "react";

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handlePasswordConfirmChange = (e) => {
        setPasswordConfirm(e.target.value);
    };
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/signup`, {
                method: 'POST',
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "name":name,
                    "email": email,
                    "password": password,
                    "passwordConfirm":passwordConfirm
                }),
            })

            if (response.ok) {
                sessionStorage.setItem("jwt", response.token);

            }
            if (!response.ok) {
                console.log("The status code :", response.status)
                console.log("signup failed");
                if (response.status === 401) {
                    console.log("passwords doenst match")
                }
                const errorData = await response.json();
                throw new Error(errorData.error);


            }

            window.location.reload();
        } catch (err) {
            console.error(`Error logging the user`, err.message);

        }
        setName("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
    }
    return (
        <section className="flex justify-between my-[100px] py-[100px]">
            <div>
                <img src="assets/health-flatline-3a65b.svg" className="h-[500px] " alt="" />
            </div>

            <div className=" w-[475px] shadow-lg px-[35px] py-[20px] rounded-lg">
                <h1 className='text-[40px] font-bold mb-[30px]'>Join DiagnoseWizard</h1>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                    className="w-[400px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]" />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-[400px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]" />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-[400px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]" />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    onChange={handlePasswordConfirmChange}
                    className="w-[400px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]" />
                <button
                    className="w-[400px] h-[50px] bg-[#18A0A9] text-[#FFFFFF] font-medium rounded-xl my-[10px] "
                    onClick={handleSignUp}
                >Sign Up</button>
                <div className='mt-[10px]'>Already have an account? <a href="#" className='text-[#3b82f6] hover:underline'>Login</a></div>
            </div>

        </section>
    );
}

export default SignUpPage;