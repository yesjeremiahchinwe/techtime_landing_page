import yellowCircle from "./assets/yellow-circle.png"
import greenCircle from "./assets/green-circle.png"
import arrow_outward from "./assets/arrow_outward.png"
import firstStudent from "./assets/first-student.png";
import secondStudent from "./assets/second-student.png";
import thirdStudent from "./assets/third-student.png";
import fourthStudent from "./assets/fourth-student.png";
import fivethStudent from "./assets/fiveth-student.png";
import arrow from "./assets/arrow.png"
import doubleW from "./assets/double-w.png"
import frame103 from "./assets/frame-103.png";
import companyIcons from "./assets/group-of-companies.png";


const Hero = () => {
    
    return (
        <>
            <section className='bg-[#004DB3] min-h-screen w-full min-w-[375px] flex flex-col items-center justify-center px-6 xl:px-0 relative'>
                <img src={doubleW} alt="Skew line" className="w-[63.26px] h-[19.15px] top-[453.25px] -left-8 xl:left-0 absolute" />
                <article className="relative xl:w-[85%] mx-auto pt-8 md:pt-20">
                    <img
                        src={yellowCircle}
                        alt="Green Circle"
                        className="w-[16px] hidden xl:block h-[16.72px] top-[116.02px] left-[22px] absolute"
                    />
                    <img
                        src={greenCircle}
                        alt="Yellow Circle"
                        className="left-[469px] hidden xl:block top-[131.69px] h-[9.42px] w-[9.01px] border-none absolute"
                    />
                   
                   <img src={arrow} alt="Arrow" className="top-[450.86px] absolute xl:left-[580px] rotate-[62.55] hidden xl:block" />
                    <div className="grid items-center grid-cols-1 xl:grid-cols-2 gap-12">
                        <div className="text-start md:max-w-[80%] mx-auto">

                            <h1 className="text-[64px] leading-[82px] font-[700] text-[#ffffff] text-center md:text-start">Grow your skills to advance your career path </h1>
                            <p className="text-[#E7E7E7] leading-[26px] font-[500] py-8 md:max-w-[75%] max-w-[90%] mx-auto md:mx-0 text-center md:text-start">Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World</p>

                            <div className="flex gap-4 justify-center md:justify-start">
                                <button className="p-2 md:p-4 flex gap-[8px] items-center border-solid border-[1px] border-[#ffffff] rounded-[4px] text-[#ffffff] font-[700] hover:scale-[1.025]">Get Started Now <img src={arrow_outward} alt="Arrow Pointing Outward" /></button>
                                <button className="bg-[#ffffff] text-[#004DB3] p-2 md:p-4 border-solid border-[1px] border-[#ffffff] rounded-[4px] font-[700] hover:bg-transparent hover:text-[#ffffff] hover:border-solid hover:border-[1px] hover:border-[#ffffff] hover:rounded-[4px]">Enroll Now</button>
                            </div>

                            <div className="py-8 flex items-center justify-center md:justify-start">
                                <div className="flex items-center">
                                    <img src={firstStudent} alt="First Student" />
                                    <img
                                        src={secondStudent}
                                        alt="Second Student"
                                        className="-translate-x-6"
                                    />
                                    <img
                                        src={thirdStudent}
                                        alt="Third Student"
                                        className="-translate-x-12"
                                    />
                                    <img
                                        src={fourthStudent}
                                        alt="Fourth Student"
                                        className="-translate-x-[4.5rem]"
                                    />
                                    <img
                                        src={fivethStudent}
                                        alt="Fiveth Student"
                                        className="-translate-x-[6rem]"
                                    />
                                </div>

                                <div className="-ml-20 inline-block">
                                    <h3 className="font-[700] text-[#ffffff] leading-[29.52px] text-[24px]">255k+</h3>
                                    <small className="font-[500] text-[#E7E7E7] text-[16px]">Previews</small>
                                </div>
                            </div>
                        </div>

                        <img src={frame103} className="" alt="A lady carrying books in her left hand and the right hand on her jaw" />
                    </div>
                </article>
            </section>

            <div className="bg-[#CCDBF0] w-full min-w-[375px] flex items-center justify-center mx-auto p-8">
                <img src={companyIcons} alt="Group of Company Icons" />
            </div>
        </>
    )
}

export default Hero