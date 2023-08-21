import techtime from "./assets/techtime.png"
import menuClose from "./assets/icon-menu-close.svg"
import menu from "./assets/menu.png"
import { useState, useEffect, useRef } from "react"



const Header = () => {
    const [open, setOpen] = useState(false)
    const menuRef = useRef()

    useEffect(() => {
        const handle = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handle)
        return () => {
            document.removeEventListener("mousedown", handle)
        }
    })


    return (
        <header className="bg-[#004DB3] text-[#ffffff] w-full px-4 py-4 xl:p-[1.5rem] sticky top-0 left-0 z-10 min-w-[300px]">
            <div className="flex items-center justify-between h-[20px] md:h-[50px] lg:w-[90%] mx-auto md:px-4">
                <a href="#" className="w-16 md:w-28">
                    <img src={techtime} alt="Tech Time the title of the website" />
                </a>

                <nav>

                    {/* -------- Mobile Menu ---------------- */}
                    <ul className={`min-h-screen fixed top-0 p-8 transition-all duration-200 ease-in flex-col bg-[#e8e8e8] items-start text-[#004DB3] z-10 w-[70%] ${open ? "right-0" : "-right-[100%]"}  list-none text-[16px] md:hidden`} ref={menuRef}>

                        <img src={menuClose} alt="menu icon close" className="w-[20px] cursor-pointer block ml-auto mb-8" onClick={() => setOpen(!open)} />

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
                            <button className="font-[700] text-[16px] bg-[#ffffff] text-[#004DB3] py-2 px-6 rounded-md border-2 border-solid border-[#ffffff] outline-none hover:bg-transparent hover:text-[#ffffff]">Enroll Now</button>
                        </li>
                    </ul>


                    {/* -------- Darken background when Menu is Open-------- */}
                    <div className={`${open ? "fixed w-full h-full bg-[#00000080] left-0 top-0 transition-all duration-200 delay-75" : ""}`}></div>

                </nav>

                {/* ----------- Menu Icon ------------------ */}
                <img src={menu} alt="Menu Icon" className="w-[25px] cursor-pointer md:hidden"
                    onClick={() => setOpen(!open)} />
            </div>
        </header>
    )
}

export default Header