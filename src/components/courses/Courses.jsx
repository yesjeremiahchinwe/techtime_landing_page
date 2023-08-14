import firstCourse from "./assets/first-course.png";
import seconfCourse from "./assets/second-course.png";
import thirdCourse from "./assets/third-course.png";
import fourthCourse from "./assets/fourth-course.png";
import fivethCourse from "./assets/fiveth-course.png";
import sixthCourse from "./assets/six-course.png";
import adam from "./assets/adam.png"
import caretta from "./assets/caretta.png"
import jeffery from "./assets/jeffery.png"
import jessica from "./assets/jessica.png"
import leonard from "./assets/leonard.png"
import samuel from "./assets/samuel.png"
import grade from "./assets/grade.png";
import star from "./assets/star.png";
import menuBook from "./assets/menu_book.png";
import schedule from "./assets/schedule.png";



const Courses = () => {
    const courses = [
        {
            id: 1,
            img: firstCourse,
            type: "Design",
            rate: 4.7,
            rators: 32.7,
            gradeIcon: grade,
            name: "Introduction to user research in UX Design",
            clockIcon: schedule,
            hours: 23,
            mins: 50,
            bookIcon: menuBook,
            lessons: 15,
            instructorImage: leonard,
            instructor: "Leonard Victor",
            price: 15.00
        },
        {
            id: 2,
            img: seconfCourse,
            type: "Marketing",
            rate: 4.7,
            rators: 8.7,
            gradeIcon: grade,
            name: "Introduction to  new marketing audience",
            clockIcon: schedule,
            hours: 22,
            mins: 30,
            bookIcon: menuBook,
            lessons: 22,
            instructorImage: jeffery,
            instructor: "Jeffrey Williams",
            price: 32.00
        },
        {
            id: 3,
            img: thirdCourse,
            type: "Development",
            rate: 4.7,
            rators: 12.7,
            gradeIcon: grade,
            name: "Introduction to HTML, CSS & Bootstrap",
            clockIcon: schedule,
            hours: 45,
            mins: 50,
            bookIcon: menuBook,
            lessons: 55,
            instructorImage: caretta,
            instructor: "Claretta Moon",
            price: 55.00
        },
        {
            id: 4,
            img: fourthCourse,
            type: "Development",
            rate: 4.7,
            rators: 32.7,
            gradeIcon: grade,
            name: "Introduction to Javascript, Git & GitHub",
            clockIcon: schedule,
            hours: 30,
            mins: 50,
            bookIcon: menuBook,
            lessons: 22,
            instructorImage: jessica,
            instructor: "Jessica Duke",
            price: 45.00
        },
        {
            id: 5,
            img: fivethCourse,
            type: "Marketing",
            rate: 4.7,
            rators: 4.7,
            gradeIcon: grade,
            name: "Introduction to outroom  marketing analysis",
            clockIcon: schedule,
            hours: 33,
            mins: 50,
            bookIcon: menuBook,
            lessons: 26,
            instructorImage: samuel,
            instructor: "Samuel Jacobs",
            price: 25.00
        },
        {
            id: 6,
            img: sixthCourse,
            type: "Marketing",
            rate: 4.7,
            rators: 15.7,
            gradeIcon: grade,
            name: "Introduction to live marketing analysis",
            clockIcon: schedule,
            hours: 10,
            mins: 50,
            bookIcon: menuBook,
            lessons: 32,
            instructorImage: adam,
            instructor: "Adams Smith",
            price: 25.00
        },
    ]

    const allCourses = courses.map(course => (
        <div key={course.id} className="p-4 bg-[#ffffff] max-w-[439px] rounded-2xl hover:scale-[1.025] cursor-pointer">
            <img src={course.img} alt="A student sitting in front of a computer" />

            <div className="flex justify-between py-4 items-center">
                <p className="bg-[rgba(30,93,206,0.2)] w-fit text-[#004DB3] py-[4px] px-[20px] rounded-2xl font-[700] text-center">{course.type}</p>

                <small className="leading-[16.2px] text-[12px] font-[700] text-[#A1A1A1] flex items-center">{course.rate}k<img src={course.gradeIcon} alt="A star for grades" className="-mt-1 pr-2 pl-1" /><span>{course.rators}k+</span></small>
            </div>

            <h2 className="font-[700] text-[24px] leading-[29.52px] text-[#000F24]">{course.name}</h2>

            <div className="flex justify-between items-center py-6">
                <small className="flex items-center gap-[0.35rem]">
                    <img src={course.clockIcon} alt="Clock" />
                    <span className="leading-[16.2px] text-[12px] font-[700] text-[#A1A1A1] ">{course.hours}hrs {course.mins}mins</span>
                </small>

                <small className="flex items-center gap-[0.35rem]">
                    <img src={course.bookIcon} alt="Book" />
                    <span className="leading-[16.2px] text-[12px] font-[700] text-[#A1A1A1]">{course.lessons} Lessons</span>
                </small>
            </div>

            <div className="flex justify-between items-center pt-2 pb-4">
                <small className="flex items-center gap-2">
                    <img src={course.instructorImage} alt="Adams Smith" />
                    <span className="text-[#000000] font-[700] text-[16px] leading-[21.6px]">{course.instructor}</span>
                </small>

                <small className="font-[700] text-[20px] text-[#004DB3] leading-[24.6px]">${course.price}</small>
            </div>
        </div>
    ))


    return (
        <section className='min-h-screen w-full min-w-[375px] bg-[#F8F9FC] px-6 md:px-8 xl:px-0 relative'>
            <img src={star} alt="A star" className="hidden xl:block absolute top-[150px] left-[200px]" />
            <article className='xl:w-[95%] w-fit mx-auto md:py-6 flex flex-col justify-center items-center'>
                <h2 className='text-center font-[600] text-[56px] leading-[68.88px] text-[#000F24]'>Browse Our Popular Courses</h2>
                <p className='font-[500] leading-[28px] text-center text-[#A1A1A1] md:max-w-[50%] mx-auto py-4'>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>

                <ul className='w-full mx-auto py-6 pb-16 flex justify-center items-center list-none m-0 gap-x-14 gap-y-4 flex-wrap'>
                    <li>
                        <a href="#" className='inline-block font-[700] text-[16px] leading-[21.6px] text-[#004DB3] bg-[#ffffff] p-4 rounded-md m-0'>All Categories</a>
                    </li>
                    <li>
                        <a href="#" className='inline-block text-[#A1A1A1] p-4 text-[16px] font-[700] leading-[21.6px] rounded-md hover:bg-[#ffffff] hover:text-[#004DB3]'>Design</a>
                    </li>
                    <li>
                        <a href="#" className='inline-block text-[#A1A1A1] p-4 text-[16px] font-[700] leading-[21.6px] rounded-md hover:bg-[#ffffff] hover:text-[#004DB3]'>Development</a>
                    </li>
                    <li>
                        <a href="#" className='inline-block text-[#A1A1A1] p-4 text-[16px] font-[700] leading-[21.6px] rounded-md hover:bg-[#ffffff] hover:text-[#004DB3]'>Marketing</a>
                    </li>
                </ul>

                <section className="grid grid-cols-1 md:grid-cols-2 md:items-center md:justify-center xl:grid-cols-3 items-center gap-6">
                    {allCourses}
                </section>

                <button className="py-4 px-8 bg-[#004DB3] text-[#ffffff] text-[16px] font-[700] leading-[21.6px] rounded-md block mx-auto my-10 hover:text-[#004DB3] hover:bg-[#ffffff] border-solid border-4 border-[#004DB3]">Explore All Courses</button>
            </article>
        </section>
    )
}

export default Courses
