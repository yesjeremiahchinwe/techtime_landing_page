import { useState } from "react";
import discord from "./assets/discord.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import techtime from "./assets/techtime.png";
import twitter from "./assets/twitter.png";
import youtube from "./assets/youtube.png";


const Footer = () => {
  const [input, setInput] = useState("")


  return (
    <footer className='bg-[#000F24] w-full min-w-[300px] min-h-[400px] mx-auto pt-12 px-8 pb-20'>
      <article className="md:py-16 md:w-[90%] md:mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:items-start md:justify-center gap-x-8 gap-y-4 md:gap-y-8">
        <div className="pb-4 md:pb-0">
          <a href="#"><img src={techtime} alt="Company logo" className="w-[75px] md:w-[125px]" /></a>
          <p className="font-[400] leading-[21.6px] text-[#A1A1A1] py-2 md:py-6 md:max-w-[80%]">Reach out to us on any of our social media networks</p>

          <div className="flex gap-4 items-center">
            <a href="#"><img src={facebook} alt="Twiiter logo" /></a>
            <a href="#"><img src={twitter} alt="Facebook logo" /></a>
            <a href="#"><img src={youtube} alt="Youtube logo" /></a>
            <a href="#"><img src={instagram} alt="Instagram logo" /></a>
            <a href="#"><img src={discord} alt="Discord logo" /></a>
          </div>
        </div>

        <div className="pb-4 md:pb-0">
          <h3 className="font-[600] text-[19px] md:text-[32px] leading-[39.36px] text-[#ffffff] pb-2 md:pb-6">Useful Links</h3>
          <ul className="m-0">
            <li className="list-none hover:text-[#ffffff] font-[400] md:text-[24px] leading-[32.4px] text-[#A1A1A1] pb-0 md:pb-4"><a href="#">Home</a></li>
            <li className="list-none hover:text-[#ffffff] font-[400] md:text-[24px] leading-[32.4px] text-[#A1A1A1] pb-0 md:pb-4"><a href="#">About Us</a></li>
            <li className="list-none hover:text-[#ffffff] font-[400] md:text-[24px] leading-[32.4px] text-[#A1A1A1] pb-0 md:pb-4"><a href="#">Our Courses</a></li>
            <li className="list-none hover:text-[#ffffff] font-[400] md:text-[24px] leading-[32.4px] text-[#A1A1A1] pb-0 md:pb-4"><a href="#">Testimonials</a></li>
            <li className="list-none hover:text-[#ffffff] font-[400] md:text-[24px] leading-[32.4px] text-[#A1A1A1] pb-0 md:pb-4"><a href="#">Our Community</a></li>
          </ul>
        </div>

        <div className="pb-4 md:pb-0">
          <h3 className="font-[600] text-[19px] md:text-[32px] leading-[39.36px] text-[#ffffff] pb-2 md:pb-6">Community</h3>
          <ul className="m-0">
            <li className="list-none hover:text-[#ffffff] font-[400] md:text-[24px] leading-[32.4px] text-[#A1A1A1] pb-0 md:pb-4"><a href="#">Help Center</a></li>
            <li className="list-none hover:text-[#ffffff] font-[400] md:text-[24px] leading-[32.4px] text-[#A1A1A1] pb-0 md:pb-4"><a href="#">Partners</a></li>
            <li className="list-none hover:text-[#ffffff] font-[400] md:text-[24px] leading-[32.4px] text-[#A1A1A1] pb-0 md:pb-4"><a href="#">Suggestion</a></li>
            <li className="list-none hover:text-[#ffffff] font-[400] md:text-[24px] leading-[32.4px] text-[#A1A1A1] pb-0 md:pb-4"><a href="#">Blog</a></li>
            <li className="list-none hover:text-[#ffffff] font-[400] md:text-[24px] leading-[32.4px] text-[#A1A1A1] pb-0 md:pb-4"><a href="#">Newsletter</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-[600] text-[19px] md:text-[32px] leading-[39.36px] text-[#ffffff] pb-2 md:pb-6">Subscribe Us</h3>

          <div className="grid grid-cols-1 gap-4 items-center justify-center">
            <label htmlFor="email" className="absolute -left-[10000px]">Email</label>
            <input
              type="email"
              id="email"
              placeholder="johndeo@gmail.com"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-[#2A2A2B] p-4 rounded-md text-[#ffffff] max-w-[263px] outline-none border-[1px] border-solid border-[#004DB3]  text-[14px] font-[500px] placeholder:text-[14px] placeholder:leading-[18.9px] placeholder:font-[500px] placeholder:text-[#A1A1A1]"
            />
            <button type="submit" className="bg-[#054FB3] text-[#ffffff] font-[500] leading-[18.9px] py-4 px-[20px] rounded-lg hover:bg-opacity-30 max-w-fit">Send Message</button>
          </div>
        </div>
      </article>
    </footer>
  )
}

export default Footer