

const Navbar = () => {
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
                    <li className="mr-[25px]"><a href="#">HealthCheckup</a></li>
                    <li className="mr-[25px]"><a href="#">Doctors</a></li>
                    <li className="mr-[25px]"><a href="#">Departments</a></li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;