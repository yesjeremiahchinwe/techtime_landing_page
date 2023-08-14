import twoImages from "./assets/two-images.png";
import volumeUp from "./assets/volume_up.png";
import students from "./assets/students.png";
import settings from "./assets/settings_input_antenna.png";
import purpleCircle from "./assets/purple-circle.png";
import manyDots from "./assets/many-dots.png";
import halfStar from "./assets/half-star.png";
import halfCircle from "./assets/half-circle.png";
import greenW from "./assets/green-doubleW.png";
import description from "./assets/description.png";
import autoplay from "./assets/autoplay.png";




const Features = () => {
  return (
    <section className='min-h-screen w-full mx-auto bg-[#F8F9FC] pt-12 px-8 relative'>
      <img src={halfCircle} alt="Half Circle Pattern" className="absolute -right-4 top-[520px] hidden xl:block overflow-x-hidden" />

      <img src={manyDots} alt="Many dots" className="absolute hidden xl:block xl:right-16 xl:top-[400px]" />

      <article className="relative xl:w-[85%] xl:mx-auto pt-8 grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-12 items-center">
        <img src={greenW} alt="Green Skew lines" className="absolute right-0 top-12 xl:-right-[7rem]" />

        <img src={purpleCircle} alt="Purple Circle" className="absolute xl:block xl:left-[80%] xl:top-[620px] hidden" />

        <div>
          <h2 className='font-[700] text-[56px] leading-[70px] text-center md:text-start relative'><img src={halfStar} alt="Half star" className="absolute -left-[3%] -top-10 xl:-left-8 md:-left-8" />High quality video, audio & live classes</h2>

          <p className='font-[500] leading-[28px] text-[#A1A1A1] py-8 text-center md:text-start'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
          <button className='bg-[#004DB3] font-[700] text-[16px] leading-[21.6px] text-[#ffffff] py-4 px-6 block mx-auto md:mx-0 hover:text-[#004DB3] hover:bg-[#ffffff] border-solid border-4 rounded-lg border-[#004DB3] shadow-xl'>View Courses</button>

          <div className="flex items-center gap-5 pt-8 justify-center md:justify-start">
            <div className="bg-[#ffffff] w-fit px-4 py-4 flex gap-4 items-center rounded-md shadow-xl">
              <div className="bg-[rgba(63,169,106,0.2)] p-4 flex items-center justify-center rounded-md w-[50px]">
                <img src={volumeUp} alt="Volume Up" />
              </div>
              <small className="text-[16px] font-[700] text-[#000F24] leading-[21.6px]">Audio Classess</small>
            </div>

            <div className="bg-[#ffffff] w-fit px-4 py-4 flex gap-4 items-center rounded-md shadow-xl">
              <div className="bg-[rgba(246,158,142,0.2)] p-4 flex items-center justify-center rounded-md w-[50px]">
                <img src={settings} alt="Setting Antenna" />
              </div>
              <small className="text-[16px] font-[700] text-[#000F24] leading-[21.6px]">Live Classess</small>
            </div>
          </div>

          <div className="flex items-center gap-5 pt-8 justify-center md:justify-start">
            <div className="bg-[#ffffff] w-fit px-4 py-4 flex gap-4 items-center rounded-md shadow-xl">
              <div className="bg-[rgba(146,105,205,0.2)] p-4 flex items-center justify-center rounded-md w-[50px]">
                <img src={autoplay} alt="Autoplay" />
              </div>
              <small className="text-[16px] font-[700] text-[#000F24] leading-[21.6px]">Recorded Classess</small>
            </div>

            <div className="bg-[#ffffff] w-fit px-4 py-4 flex gap-4 items-center rounded-md shadow-xl">
              <div className="bg-[rgba(89,120,207,0.2)] p-4 flex items-center justify-center rounded-md w-[50px]">
                <img src={description} alt="Note Book" />
              </div>
              <small className="text-[16px] font-[700] text-[#000F24] leading-[21.6px]">50+ Notes</small>
            </div>
          </div>
        </div>

        <div className="w-fit relative">
          <img src={twoImages} alt="Two students sitting in front of a computer" className="block pt-8 md:pt-0" />
          <img src={students} alt="Group of Students" className="absolute top-[30%] xl:left-0 -left-[20px] xl:top-[20%]" />
        </div>
      </article>
    </section>
  )
}

export default Features