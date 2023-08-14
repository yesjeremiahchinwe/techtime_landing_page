import bryceJason from "./assets/bryce-jason.png";
import bellaMoses from "./assets/bella-moses.png";
import samuelFortune from "./assets/samuel-fortune.png";
import Carousel from "@itseasy21/react-elastic-carousel";


const Testimonials = () => {

    const testimonial = [
        {
            description: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
            image: samuelFortune,
            name: "Samuel Fortune",
            occupation: "Product Designer",
            id: 1
        },
        {
            description: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
            image: bellaMoses,
            name: "Bella Moon",
            occupation: "Product Designer",
            id: 2
        },
        {
            description: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
            image: samuelFortune,
            name: "Samuel Fortune",
            occupation: "Product Designer",
            id: 3
        },
        {
            description: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
            image: bryceJason,
            name: "Bryce Jason",
            occupation: "Product Designer",
            id: 4
        }
    ]

    const sildes = testimonial.map(data => (
        <li key={data.id} className="bg-[#ffffff] p-[24px] rounded-[24px] mt-0 mx-[12px] list-none select-none cursor-grab">
            <p className="text-[#A1A1A1] font-[500] text-[14px] leading-[26px]">{data.description}</p>
            <div className="flex gap-4 items-center pt-4">
                <img src={data.image} alt={data.name} />
                <div>
                    <h4 className="font-[700] text-[14px] leading-[18.9px] text-[#000000]">{data.name}</h4>
                    <small className="font-[400] text-[12px] leading-[16.2px] text-[#A1A1A1]">{data.occupation}</small>
                </div>
            </div>
        </li>
    )
    )

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 2 }
    ];

    
    return (
        <section className='min-h-screen w-full mx-auto bg-[#F8F9FC] pt-0 xl:pt-2 px-8'>
            <article className='xl:w-[85%] xl:mx-auto py-8 flex flex-col justify-center items-center'>
                <h2 className='font-[600] text-[56px] leading-[68.88px] text-[#000F24] text-center'>What our clients are saying</h2>
                <p className='font-[500px] leading-[28px] text-center text-[#A1A1A1] md:max-w-[50%] pb-8 pt-4'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image</p>

                <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={5000} focusOnSelect={true} showArrows={false}>
                    {sildes}
                </Carousel>
            </article>
        </section>
    )
}

export default Testimonials
