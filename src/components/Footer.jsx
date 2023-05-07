import React from "react";
import { AiOutlineTwitter, AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BsDiscord } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="w-full h-20 mt-52 border-t border-black">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex gap-10">
          <section className="flex flex-col">
            <div className="flex gap-2">
              <AiOutlineTwitter/>
              <AiFillFacebook />
              <BsDiscord/>
              <AiFillInstagram/>
              <AiFillYoutube/>
            </div>
            <div className="flex gap-2">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </section>
          <section>
            <h3>KEYCHRON</h3>
            <p>About Us</p>
            <p>Gift Cards</p>
            <p>Get $10 Off</p>
            <p>Where to Buy</p>
            <p>Blog</p>
            <p>Contact Us</p>
            <p>Influencer Recruit</p>
          </section>
          <section>
            <h3>HELP & SUPPORT</h3>
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
          <section></section>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <p>
            2023 Keychron | Wireless Mechanical Keyboards for Mac, Windows and
            Android
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
