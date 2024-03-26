import React from "react";
import logo from "../{assets}/log.png";

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-fit px-4 md:px-8 gap-8 lg:px-32 py-8 md:py-16 w-full grid grid-cols-1 md:grid-cols-2 bg-white text-black">
      <div className="h-fit py-4 w-full flex flex-col gap-4 md:gap-8 lg:gap-12">
        <div className="flex gap-4 md:gap-8 items-center">
          <Image src={logo} alt='logo' className="w-20"/>
          <h2 style={{ fontSize: "1.5em", marginBottom: "0.5em" }}>
            PARTICLE INVESTMENT
          </h2>
        </div>
        <h2 style={{ fontSize: "1.25em", marginBottom: "1em" }}>
          Stay up to date on the latest features and releases by joining our
          newsletter.
        </h2>
        <div className="flex gap-4">
          <input
            type="text"
            className="text-lg sm:text-xl py-4 md:text-2xl w-[80%] px-4 border"
            placeholder="Enter Your Email......"
          />
          <button className="btn btn-primary" >Submit</button>
        </div>
        <h3 style={{ fontSize: "1em", marginTop: "1em" }}>
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates from our company.
        </h3>
      </div>

      <div className="h-fit py-4 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          className="flex flex-col gap-24"
          style={{ fontSize: "1em", marginTop: "1em" }}
        >
          <h2>Links</h2>
          <ul className="flex flex-col gap-8">
            <li  className="hover:scale-110 transition-all duration-200">
              <Link href={'/'}>Home</Link>
            </li>
              <li  className="hover:scale-110 transition-all duration-200">
              <Link href={'/about'}>About-Us</Link>
            
            </li>
              <li  className="hover:scale-110 transition-all duration-200">
              <Link href={'/products'}>Products</Link>
           
            </li>
              <li  className="hover:scale-110 transition-all duration-200">
              <Link href={'/services'}>Our-Services</Link>
            
            </li>
           
            
          </ul>
        </div>
        <div className="gap-24 flex flex-col" style={{ fontSize: "1em", marginTop: "1em" }}>
          <h2>Socials</h2>
          <ul className="flex gap-4">
            <li className="hover:scale-110 transition-all duration-200"><a href="#">
              <FaInstagram size={30}/>
            </a>
            </li>

             <li className="hover:scale-110 transition-all duration-200"><a href="#">
              <FaWhatsapp size={30}/>
            </a>
            </li>

             <li className="hover:scale-110 transition-all duration-200"><a href="#">
              <FaFacebook size={30}/>
            </a>
            </li>

             <li className="hover:scale-110 transition-all duration-200"><a href="#">
              < BsTwitterX size={30}/>
            </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
