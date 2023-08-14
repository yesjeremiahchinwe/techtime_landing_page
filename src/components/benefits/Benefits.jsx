import oneStudent from "./assets/one-student.png";
import localAtm from "./assets/local_atm.png";
import groups from "./assets/groups.png";
import schedule from "./assets/schedule.png";
import castForEducation from "./assets/cast_for_education.png";
import yellowW from "./assets/yelloW.png";
import greenTriangle from "./assets/green-triangle.png";
import bigCircle from "./assets/big-purple-circle.png";


const Benefits = () => {


    return (
        <section className='min-h-screen w-full min-w-[375px] bg-[#F8F9FC] md:px-8 xl:px-0 py-16 px-6 relative mx-auto'>
            <img src={yellowW} alt="Yellow Skew lines" className="absolute left-[70%]" />

            <img src={greenTriangle} alt="Green Triangle" className="hidden xl:block absolute left-8 top-[700px]" />

            <img src={bigCircle} alt="Green Triangle" className="hidden xl:block absolute right-8 top-[850px]" />

            <article className="xl:w-[85%] xl:mx-auto py-4 md:py-6 grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className='font-[600] text-[56px] leading-[70px] text-[#000F24]'>This is why we are best from others</h2>
                    <p className='font-[500] leading-[28px] text-[#A1A1A1] py-8'>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                    <img src={oneStudent} alt="A student in front of a computer" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#ffffff] px-6 py-8 rounded-md shadow-xl">
                        <div className="bg-[#4C7FBD] w-[50px] p-4 rounded-md">
                            <img src={castForEducation} alt="" />
                        </div>
                        <h3 className="font-[700] text-[16px] leading-[21.6px] text-[#000000] pt-4 pb-2">Experienced Mentors</h3>
                        <p className="font-[500] text-[12px] leading-[28px] text-[#A1A1A1]">High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                    </div>

                    <div className="bg-[#ffffff] px-6 py-8 rounded-md shadow-xl">
                        <div className="bg-[#AECD5E] w-[50px] p-4 rounded-md">
                            <img src={schedule} alt="" />
                        </div>
                        <h3 className="font-[700] text-[16px] leading-[21.6px] text-[#000000] pt-4 pb-2">One-On-One Meetings</h3>
                        <p className="font-[500] text-[12px] leading-[28px] text-[#A1A1A1]">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                    </div>

                    <div className="bg-[#ffffff] px-6 py-8 rounded-md shadow-xl">
                        <div className="bg-[#ED6BA6] w-[50px] p-4 rounded-md">
                            <img src={groups} alt="" />
                        </div>
                        <h3 className="font-[700] text-[16px] leading-[21.6px] text-[#000000] pt-4 pb-2">One-On-One Meetings</h3>
                        <p className="font-[500] text-[12px] leading-[28px] text-[#A1A1A1]">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                    </div>

                    <div className="bg-[#ffffff] px-6 py-8 rounded-md shadow-xl">
                        <div className="bg-[#EA6B45] w-[50px] p-4 rounded-md">
                            <img src={localAtm} alt="" />
                        </div>
                        <h3 className="font-[700] text-[16px] leading-[21.6px] text-[#000000] pt-4 pb-2">Affordable Prices</h3>
                        <p className="font-[500] text-[12px] leading-[28px] text-[#A1A1A1]">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Benefits