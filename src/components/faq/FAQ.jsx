import addIcon from "./assets/add.png";
import minusIcon from "./assets/remove.png";
import patterBg from "./assets/pattern-bg.png";
import wwIcon from "./assets/ww-icon.png";
import bigPurpleCircle from "./assets/bigPurpleCircle.png";
import { useState } from "react";


const FAQ = () => {
    const [isFirst, setIsFirst] = useState(false)
    const [isSecond, setIsSecond] = useState(false)
    const [isThird, setIsThird] = useState(false)
    const [isFourth, setIsFourth] = useState(false)
    const [isFiveth, setIsFiveth] = useState(false)
    const [isSixth, setIsSixth] = useState(false)



    return (
        <section className='min-h-screen w-full min-w-[300px] mx-auto bg-[#ffffff] pt-14 px-6 md:px-8 relative'>
            <img src={bigPurpleCircle} alt="Purple Circle" className="hidden xl:block absolute md:left-[85%] left-[92%] top-[10%]" />
            <img src={patterBg} alt="Background Pattern" className="absolute hidden md:block md:top-0 md:right-0" />
            <img src={wwIcon} alt="Double w" className="hidden md:block absolute top-[32%] left-0" />
            <article className='w-full py-8 md:max-w-[80%] mx-auto'>
                <h2 className='font-[600] text-2xl md:text-[56px] leading-[68.88px] text-[#000F24] text-center'>Frequently Asked Questions</h2>
                <p className='text-[#A1A1A1] font-[500] leading-[28px] text-center md:py-2 md:max-w-[75%] mx-auto'>
                    High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image
                </p>

                <div className="max-w-[900px] mx-auto py-2 wrapper">
                    <div className="border-b-[1px] border-solid border-[#EAEAEA] pt-12 pb-6 flex flex-col justify-center">
                        <h3 className={`label flex justify-between gap-8 items-center font-[900] text-[16px] md:text-[24px] leading-[32.4px] py-2 cursor-pointer text-[#000F24] ${isFirst ? "text-[#004DB3]" : ""}`} onClick={() => setIsFirst(!isFirst)}>Is there a free trial available? <img src={isFirst ? minusIcon : addIcon} alt="Plus Sign" /></h3>

                        {isFirst && <p className="font-[500px] leading-[26px] text-[#A1A1A1] pt-2">High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World Definition. </p>}
                    </div>

                    <div className="border-b-[1px] border-solid border-[#EAEAEA] py-6 flex flex-col justify-center">
                        <h3 className={`flex justify-between gap-8 items-center font-[900] text-[16px] md:text-[24px] leading-[32.4px] py-2 cursor-pointer text-[#000F24] ${isSecond ? "text-[#004DB3]" : ""}`} onClick={() => setIsSecond(!isSecond)}>Can I change my plan later? <img src={isSecond ? minusIcon : addIcon} alt="Plus Sign" /></h3>

                        {isSecond && <p className="font-[500px] leading-[26px] text-[#A1A1A1] pt-2">High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World Definition. </p>}
                    </div>

                    <div className="border-b-[1px] border-solid border-[#EAEAEA] py-6 flex flex-col justify-center">
                        <h3 className={`flex justify-between gap-8 items-center font-[900] text-[16px] md:text-[24px] leading-[32.4px] py-2 cursor-pointer text-[#000F24] ${isThird ? "text-[#004DB3]" : ""}`} onClick={() => setIsThird(!isThird)}>Are the courses lifetime? <img src={isThird ? minusIcon : addIcon} alt="Plus Sign" /></h3>

                        {isThird && <p className="font-[500px] leading-[26px] text-[#A1A1A1] pt-2">High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World Definition. </p>}
                    </div>

                    <div className="border-b-[1px] border-solid border-[#EAEAEA] py-6 flex flex-col justify-center">
                        <h3 className={`flex justify-between gap-8 items-center font-[900] text-[16px] md:text-[24px] leading-[32.4px] py-2 cursor-pointer text-[#000F24] ${isFourth ? "text-[#004DB3]" : ""}`} onClick={() => setIsFourth(!isFourth)}>Do I get certified after taking courses? <img src={isFourth ? minusIcon : addIcon} alt="Plus Sign" /></h3>

                        {isFourth && <p className="font-[500px] leading-[26px] text-[#A1A1A1] pt-2">High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World Definition. </p>}
                    </div>

                    <div className="border-b-[1px] border-solid border-[#EAEAEA] py-6 flex flex-col justify-center">
                        <h3 className={`flex justify-between gap-8 items-center font-[900] text-[16px] md:text-[24px] leading-[32.4px] py-2 cursor-pointer text-[#000F24] ${isFiveth ? "text-[#004DB3]" : ""}`} onClick={() => setIsFiveth(!isFiveth)}>How do I reach out to mentors? <img src={isFiveth ? minusIcon : addIcon} alt="Plus Sign" /></h3>

                        {isFiveth && <p className="font-[500px] leading-[26px] text-[#A1A1A1] pt-2">High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World Definition. </p>}
                    </div>

                    <div className="border-b-[1px] border-solid border-[#EAEAEA] py-6 flex flex-col justify-center">
                        <h3 className={`flex justify-between gap-8 items-center font-[900] text-[16px] md:text-[24px] leading-[32.4px] py-2 cursor-pointer text-[#000F24] ${isSixth ? "text-[#004DB3]" : ""}`} onClick={() => setIsSixth(!isSixth)}>Do we get job ready after taking courses? <img src={isSixth ? minusIcon : addIcon} alt="Plus Sign" /></h3>

                        {isSixth && <p className="font-[500px] leading-[26px] text-[#A1A1A1] pt-2">High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World Definition. </p>}
                    </div>
                </div>
            </article>
        </section>
    )
}

export default FAQ