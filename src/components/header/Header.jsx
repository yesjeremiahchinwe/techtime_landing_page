import techtime from "./assets/techtime.png"
import menuClose from "./assets/icon-menu-close.svg"
import menu from "./assets/menu.png"
import { useState } from "react"



const Header = () => {
    const [open, setOpen] = useState(false)


    return (
        <header className="bg-[#004DB3] text-[#ffffff] w-full min-w-[375px] py-[1.25rem] px-6 md:py-12 xl:px-24 sticky top-0 left-0 z-10 h-[85px] overflow-hidden flex items-center justify-between mx-auto">
                <a href="#">
                    <img src={techtime} alt="Tech Time the title of the website" />
                </a>

                <nav>

                    {/* -------- Mobile Menu ---------------- */}
                    <ul className={`min-h-screen fixed top-0 p-8 transition-all duration-200 ease-linear flex-col bg-[#e8e8e8] items-start text-[#004DB3] z-10 w-[70%] ${open ? "right-0" : "-right-[100%]"}  list-none text-[16px] md:hidden`}>

                        <img src={menuClose} alt="menu icon close" className="cursor-pointer block ml-auto mb-8" onClick={() => setOpen(!open)} />

                        <li className="py-4 hover:opacity-50 w-fit">
                            <a href="#">Home</a>
                        </li>
                        <li className="py-4 hover:opacity-50 w-fit">
                            <a href="#">About Us</a>
                        </li>
                        <li className="py-4 hover:opacity-50 w-fit">
                            <a href="#">Courses</a>
                        </li>
                        <li className="py-4 hover:opacity-50 w-fit">
                            <a href="#">Testimonial</a>
                        </li>
                        <li className="py-4 hover:opacity-50 w-fit">
                            <a href="#">Community</a>
                        </li>
                        <li className="py-4">
                            <button className="font-[700] text-[16px] bg-[#ffffff] text-[#004DB3] py-4 px-6 rounded-lg hover:bg-[#004DB3] hover:text-[#ffffff]">Enroll Now</button>
                        </li>
                    </ul>

                    {/* -------------- Desktop Menu -------------------- */}
                    <ul className="hidden md:flex md:items-center md:gap-[20px] xl:gap-[40px]">
                        <li className="py-4 hover:opacity-70 w-fit">
                            <a href="#">Home</a>
                        </li>
                        <li className="py-4 hover:opacity-70 w-fit">
                            <a href="#">About Us</a>
                        </li>
                        <li className="py-4 hover:opacity-70 w-fit">
                            <a href="#">Courses</a>
                        </li>
                        <li className="py-4 hover:opacity-70 w-fit">
                            <a href="#">Testimonial</a>
                        </li>
                        <li className="py-4 hover:opacity-70 w-fit">
                            <a href="#">Community</a>
                        </li>
                        <li className="py-4">
                            <button className="font-[700] text-[16px] bg-[#ffffff] text-[#004DB3] py-2 px-6 rounded-md border-4 border-solid border-[#ffffff] outline-none hover:bg-transparent hover:text-[#ffffff]">Enroll Now</button>
                        </li>
                    </ul>


                    {/* -------- Darken background when Menu is Open-------- */}
                    <div className={`${open ? "fixed w-full h-full bg-[#000000cc] left-0 top-0 transition-all duration-200 delay-75" : ""}`}></div>

                </nav>

                {/* ----------- Menu Icon ------------------ */}
                <img src={menu} alt="Menu Icon" className="w-[40px] cursor-pointer md:hidden"
                    onClick={() => setOpen(!open)} />
        </header>
    )
}

export default Header