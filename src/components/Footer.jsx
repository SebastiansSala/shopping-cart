import React from "react";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineMail,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full h-20 mt-14 border-black">
      <div className="container mx-auto flex flex-col items-center justify-center pb-10">
        <div className="flex gap-10 flex-wrap lg:flex-no-wrap justify-center">
          <section className="flex gap-2 text-3xl text-gray-700 order-3 lg:order-1">
            <AiOutlineTwitter />
            <AiFillFacebook />
            <BsDiscord />
            <AiFillInstagram />
            <AiFillYoutube />
          </section>
          <section className="flex flex-col gap-4 text-sm text-gray-500 order-2">
            <h3 className="text-sm lg:text-xl font-bold text-gray-700">KEYCHRON</h3>
            <p>About Us</p>
            <p>Gift Cards</p>
            <p>Get $10 Off</p>
            <p>Where to Buy</p>
            <p>Blog</p>
            <p>Contact Us</p>
            <p>Influencer Recruit</p>
          </section>
          <section className="flex flex-col gap-4 text-sm text-gray-500 order-1 lg:order3">
            <h3 className="text-sm lg:text-xl font-bold text-gray-700 ">HELP & SUPPORT</h3>
            <p>User Manual</p>
            <p>Firmwares</p>
            <p>Help Center</p>
            <p>Order Tracking</p>
            <p>Shopping Policy</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Refund Policy</p>
            <p>Terms of Service</p>
          </section>
          <section className="flex flex-col items-center gap-2 text-gray-500 order-1 lg:order-4">
            <h3 className="text-sm lg:text-xl font-bold text-gray-700">
              BE THE FIRST TO KNOW
            </h3>
            <p className="w-96 text-center">Get the latest product news, special offers and interesting behind-the-scenes stories from us</p>
            <AiOutlineMail className="absolute -ml-48 mt-24 lg:mt-[6.6rem] text-lg"/>
            <input placeholder="Enter your email" className="rounded border pl-7 w-56 p-2"/>
          </section>
        </div>
        <div className="flex flex-col mt-10">
          <div className="flex gap-4">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <p className="text-sm p-1 text-center lg:text-xl">
            2023 Keychron | Wireless Mechanical Keyboards for Mac, Windows and
            Android
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
