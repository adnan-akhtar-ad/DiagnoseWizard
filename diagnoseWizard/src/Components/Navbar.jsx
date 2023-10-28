import { Link } from 'react-router-dom';

const Navbar = () => {
    const jwt = sessionStorage.getItem("jwt");
    const handleLogout = () => {
        console.log(jwt);
        sessionStorage.clear("jwt");

    }
    return (
        <nav className="flex bg-[#FFF] flex-row justify-around px-[28px] py-[20px] font-Satoshi ">
            <div className="flex mr-[80px]">
                <a href="#" className="flex mr-[80px]">
                    <img src="/assets/healthcare 1.svg" alt="" />
                    <div className="font-bold text-[20px]">DiagnoseWizard</div>
                </a>
                <ul className="flex text-[16px]">
                    <li className="mr-[25px]"><a href="#">Home</a></li>
                    <li className="mr-[25px]"><a href="#">About</a></li>
                    <li className="mr-[25px]"><a href="#">Diagnoses</a></li>
                    <li className="mr-[25px]"><a href="#">Doctors</a></li>
                    <li className="mr-[25px]"><a href="#">Contact Us</a></li>
                    {(!jwt) && <li className="mr-[25px]"><a href="/login">Login</a></li>}
                    {(!jwt) && <li className="mr-[25px]"><a href="/signup">Sign Up</a></li>}

                    {(jwt) && <button className="mr-[25px] shadow-lg rounded-lg translate-y-[-5px]  bg-[#18A0A9] text-[#FFFFFF] font-medium p-[5px]" onClick={handleLogout}><a href="/login">Logout</a></button>}

                </ul>

            </div>
        </nav>
    );
}

export default Navbar;