import { Link } from 'react-router-dom';
import {useNavigate } from "react-router-dom";

const Navbar = (props) => {
    const navigate = useNavigate();

    const navigateTo = (address) => {
         navigate(address);
     };

    const jwt = sessionStorage.getItem("jwt");
    const iv=sessionStorage.getItem("iv");
    const encryptedData=sessionStorage.getItem("encryptedData");
    const handleLogout = () => {
    
        sessionStorage.clear("jwt");
        sessionStorage.clear("iv");
        sessionStorage.clear("encryptedData");
        navigateTo('/login');

    }
    const scrollDown = (ref) => {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: 'smooth',
        });
      };
    return (
        <nav className="flex bg-[#FFF] flex-row justify-around px-[28px] py-[20px] font-Satoshi ">
            <div className="flex mr-[80px]">
                <a href="#" className="flex mr-[80px]">
                    <img src="/assets/healthcare 1.svg" alt="" />
                    <div className="font-bold text-[20px]">DiagnoseWizard</div>
                </a>
                <ul className="flex text-[16px]">
                    <li className="mr-[25px]"><Link to="/" >Home</Link></li>
                    <li className="mr-[25px]"><Link to="/" onClick={() => scrollDown(props.AboutSection)}>About</Link></li>
                    <li className="mr-[25px]"><Link to="/" onClick={() => scrollDown(props.ServicesPageSection)}>Diagnoses</Link></li>
                    <li className="mr-[25px]"><Link to="/hospitals" >Hospitals</Link></li>
                    <li className="mr-[25px]"><Link to="/" onClick={() => scrollDown(props.ConnectWithUsSection)}>Contact Us</Link></li>
                    {(!jwt) && <li className="mr-[25px]"><Link to="/login">Login</Link></li>}
                    {(!jwt) && <li className="mr-[25px]"><Link to="/signup">Sign Up</Link></li>}
                    {(jwt) && <li className="mr-[25px]"><Link to="/changePass">Change Password</Link></li>}

                    {(jwt) && <button className="mr-[25px] shadow-lg rounded-lg translate-y-[-5px]  bg-[#18A0A9] text-[#FFFFFF] font-medium p-[5px]" onClick={handleLogout}><a href="/login">Logout</a></button>}

                </ul>

            </div>
        </nav>
    );
}

export default Navbar;