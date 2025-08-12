import React from "react";
import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
const About = () => {
    return (
        <div className="w-[80%] mx-auto mt-25">
            <h3 className="text-red-500 text text-xl font-bold pb-9">
                About Developer
            </h3>
            <p className="text-lg  pb-20">
                Hello there! I'm
                <span className="text-red-500">Amir Izadi</span>, the passionate
                developer behind this website. With a keen eye for detail and a
                love for crafting seamless digital experiences, I set out to
                create a unique and user-friendly online shopping platform.
            </p>
            <h3 className="text-red-500 text text-xl font-bold pb-9">
                Frameworks and Technologies Used
            </h3>
            <p className="text-lg  pb-14">
                In the development of this website, I've harnessed the power of
                the following frameworks and technologies to create a modern,
                single-page application (SPA):
            </p>
            <div className="text-8xl flex items-center justify-evenly text-gray-500 pb-14">
                <a href="https://react.dev/">
                    <FaReact className=" hover:text-cyan-400 transition-all delay-100 duration-250" />
                </a>
                <a href="https://reactrouter.com/">
                    <SiReactrouter className="transition-all delay-100 duration-250 hover:text-red-500" />
                </a>
                <a href="https://tailwindcss.com/">
                    <BiLogoTailwindCss className=" hover:text-cyan-400 transition-all delay-100 duration-250" />
                </a>
            </div>
            <h3 className="text-red-500 text text-xl font-bold pb-9">
                Let's Connect
            </h3>
            <p className="text-lg  pb-14">
                Explore the website, discover the offerings, and if you have any
                questions or suggestions, I'm here to listen. Your journey
                through this online shopping experience is as important to me as
                it is to you. Happy exploring!
            </p>
            <div className="text-8xl flex items-center justify-evenly text-gray-500 pb-14">
                <a href="https://github.com/amirshy">
                    <FaGithub className=" hover:text-pink-600 transition-all delay-100 duration-250" />
                </a>
            </div>
        </div>
    );
};

export default About;
