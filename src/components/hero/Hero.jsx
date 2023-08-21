import yellowCircle from "./assets/yellow-circle.png"
import greenCircle from "./assets/green-circle.png"
import arrow_outward from "./assets/arrow_outward.png"
import groupOfStudents from "./assets/group-of-students.png"
import arrow from "./assets/arrow.png"
import doubleW from "./assets/double-w.png"
import frame103 from "./assets/frame-103.png";
import companyIcons from "./assets/group-of-companies.png";


const Hero = () => {
    
    return (
        <>
            <section className='bg-[#004DB3] min-h-screen w-full flex flex-col items-center justify-center px-8 mx-auto relative min-w-[300px]'>
                <img src={doubleW} alt="Skew line" className="hidden xl:block w-[63.26px] h-[19.15px] top-[453.25px] -left-8 xl:left-0 absolute" />
                <article className="relative lg:w-full xl:mx-auto pt-8 md:pt-16">
                    <img
                        src={yellowCircle}
                        alt="Green Circle"
                        className="w-[16px] hidden xl:block h-[16.72px] top-[7.5%] left-[10%] absolute"
                    />
                    <img
                        src={greenCircle}
                        alt="Yellow Circle"
                        className="left-[50%] hidden xl:block top-[10%] h-[9.42px] w-[9.01px] border-none absolute"
                    />
                   
                   <img src={arrow} alt="Arrow" className="top-[60%] absolute xl:left-[45%] rotate-[62.55] hidden xl:block" />
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 lg:w-[90%] mx-auto gap-x-12">
                        <div className="text-start md:max-w-full mx-auto">

                            <h1 className="text-[32px] md:text-[64px] leading-[35px] md:leading-[64px] font-[700] text-[#ffffff] text-center md:text-start">Grow your skills to advance your career path </h1>
                            <p className="text-[#E7E7E7] leading-[26px] font-[500] py-4 md:max-w-[75%] max-w-[90%] mx-auto md:mx-0 text-center md:text-start">Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World</p>

                            <div className="flex gap-4 justify-center md:justify-start">
                                <button className="text-sm p-2 md:p-4 flex gap-[8px] items-center border-solid border-[1px] border-[#ffffff] rounded-[4px] text-[#ffffff] font-[700] hover:scale-[1.025]">Get Started Now <img src={arrow_outward} alt="Arrow Pointing Outward" /></button>
                                <button className="bg-[#ffffff] text-sm text-[#004DB3] p-2 md:p-4 border-solid border-[1px] border-[#ffffff] rounded-[4px] font-[700] hover:bg-transparent hover:text-[#ffffff] hover:border-solid hover:border-[1px] hover:border-[#ffffff] hover:rounded-[4px]">Enroll Now</button>
                            </div>

                            <div className="py-4 flex flex-col items-center md:items-start gap-2 sm:flex-row mx-auto w-full justify-center md:justify-start">
                               <img src={groupOfStudents} alt="Group of students" />

                                <div className="">
                                    <h3 className="font-[700] text-[#ffffff] leading-[29.52px] text-[24px]">255k+</h3>
                                    <small className="font-[500] text-[#E7E7E7] text-[16px]">Previews</small>
                                </div>
                            </div>
                        </div>

                        <img src={frame103} className="" alt="A lady carrying books in her left hand and the right hand on her jaw" />
                    </div>
                </article>
            </section>

            <div className="bg-[#CCDBF0] w-full flex items-center justify-center mx-auto p-8 min-w-[300px]">
                <img src={companyIcons} alt="Group of Company Icons" />
            </div>
        </>
    )
}

export default Hero