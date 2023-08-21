import studentNetwork from "./assets/student-network.png";

const Community = () => {
  return (
    <section className='w-full min-w-[300px] mx-auto mni-h-screen bg-[#004DB3] text-[#ffffff] px-4 md:px-8'>
        <article className='py-12 md:max-w-[70%] md:mx-auto'>
            <p className='text-center text-[16px] font-[500] leading-[21.6px] opacity-80 '>JOIN OUR COMMMUNITY</p>
            <h2 className='font-[700] text-2xl md:text-[56px] md:leading-[68.88px] text-center py-6'>Are you  ready to connect with the future talent of the tech world</h2>
            <p className='text-center text-[16px] font-[500] leading-[21.6px] opacity-80 pb-8'>Meet Up with Other Techstars And Grow Together</p>
            <img src={studentNetwork} alt="Student Network Community" />
            <button className="bg-[#ffffff] text-[#004DB3] py-2 px-4 md:py-4 md:px-8 rounded-md my-10 mx-auto block cursor-pointer border-4 border-solid border-[#ffffff] hover:bg-transparent hover:text-[#ffffff]">Join Our Community</button>
        </article>
    </section>
  )
}

export default Community