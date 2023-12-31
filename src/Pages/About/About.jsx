import cover from "./../../assets/myCover.jpeg";
import arrow from "./../../assets/arrow.png";
import { GiPolarStar } from "react-icons/gi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuGithub, LuFileDown } from "react-icons/lu";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import "./about.css";
import myResume from "./../../assets/Ariyan-Rahman-Anas-Resume.pdf"

const About = () => {
  return (
    <div>
      <section className="grid mt-16 grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="left p-6 w-full  col-span-2 md:col-span-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg "
        >
          <img src={cover} alt="" className="rounded-lg" />
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="right col-span-2 flex flex-col gap-5  "
        >
          <div className="up flex items-center justify-center gap-1 text-3xl lg:text-6xl font-semibold ">
            <GiPolarStar className="text-teal-500 text-3xl lg:text-5xl "></GiPolarStar>
            <h1>SELF-SUMMARY</h1>
            <GiPolarStar className="text-teal-500 text-3xl lg:text-5xl "></GiPolarStar>
          </div>
          <div className="down px-8 pb-5 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg">
            <img src={arrow} alt="" />
            <h1 className="text-4xl font-semibold mt-5">Ariyan Rahman Anas</h1>
            <p className="mt-3 text-gray500">
              I am a Bangladesh-based Front-End Web Developer with a focus on
              Back-End Development. I have a diverse range of experience having
              worked across various fields and industries.
            </p>
          </div>
        </div>
      </section>

      <section className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-500">
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="left text-xs  p-5 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"
        >
          <h1 className="text-3xl font-semibold mb-6  ">
            Personal Information
          </h1>
          <div className="flex flex-col md:flex-row items-start justify-between gap- rounded-lg p-4 bg-gradient-to-l from-teal-950 hover:bg-gradient-to-r hover:from-teal-950 to-gray-900 hover:to-gray-950 duration-500">
            <div className="left flex gap-1 ">
              <div className="title flex flex-col gap-2 ">
                <p>First Name</p>
                <p>Age</p>
                <p>Phone</p>
                <p>Skype</p>
                <p>Address</p>
              </div>
              <div className="value flex flex-col gap-2 ">
                <p className="font-semibold text-gray-100 ">: Ariyan Rahman</p>
                <p className="font-semibold text-gray-100 ">: 23 years</p>
                <p className="font-semibold text-gray-100 ">
                  : +88 01610-195968
                </p>
                <p className="font-semibold text-gray-100 ">: mr.anas</p>{" "}
                <p className="font-semibold text-gray-100 ">
                  : Chattogram, Bangladesh
                </p>
              </div>
            </div>
            <div className="right flex gap-1">
              <div className="title flex flex-col gap-2 ">
                <p>Last Name</p>
                <p>Freelance</p>
                <p>Email</p>
                <p>Languages</p>
                <p>Nationality</p>
              </div>
              <div className="value flex flex-col gap-2 ">
                <p className="font-semibold text-gray-100 ">: Anas</p>
                <p className="font-semibold text-gray-100 ">: Available</p>
                <p className="font-semibold text-gray-100 ">
                  : mohammadariyanrahmananas@gmail.com
                </p>
                <p className="font-semibold text-gray-100 ">
                  : Bengali, English, Urdu and Hindi
                </p>
                <p className="font-semibold text-gray-100 ">: Bangladeshi</p>
              </div>
            </div>
          </div>
          <div className="social-icons-resume-download mt-12 flex flex-col md:flex-row items-center justify-between ">
            <div
              className=" social-icons flex items-center justify-center gap-10 text-xl p-4 text-gray-100 rounded-lg  bg-gradient-to-l from-teal-950 to-gray-900 hover:to-gray-950 duration-500"
              style={{
                boxShadow: "1px 1px 3px #042f2e,-1px -1px 3px #042f2e ",
              }}
            >
              <a
                href="https://www.facebook.com/ariyanrahmananas69/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="p-3 rounded-full bg-gradient-to-r from-teal-900 to-gray-950 hover:to-teal-600 hover:transform hover:scale-110 duration-500  ">
                  <FaFacebookF></FaFacebookF>
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/ariyanrahmananas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="p-3 rounded-full bg-gradient-to-r from-teal-900 to-gray-950 hover:to-teal-600 hover:transform hover:scale-110 duration-500">
                  <FaLinkedinIn></FaLinkedinIn>
                </p>
              </a>
              <a
                href="https://github.com/Ariyan-Rahman-Anas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="p-3 rounded-full bg-gradient-to-r from-teal-900 to-gray-950 hover:to-teal-600 hover:transform hover:scale-110 duration-500">
                  <LuGithub></LuGithub>
                </p>
              </a>
            </div>

            <div
              className="resume-download flex items-center justify-start gap-10 text-xl p-4 text-gray-100 rounded-lg  bg-gradient-to-l from-teal-950 to-gray-900 hover:to-gray-950 duration-500"
              style={{
                boxShadow: "1px 1px 3px #042f2e,-1px -1px 3px #042f2e ",
              }}
            >
              <a
                href={myResume}
                download
                className="flex text-base items-center justify-between gap-2 py-2 px-4  bg-gradient-to-r from-teal-950 to-gray-950 hover:to-teal-600  rounded-md   hover:transform hover:scale-105 duration-500 "
              >
                Download My Resume
                <LuFileDown></LuFileDown>
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="right p-5 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"
        >
          <h1 className="text-3xl font-semibold mb-5 ">
            Educational Qualifications
          </h1>
          <div className="flex flex-col gap-5">
            <div className="diploma flex flex-col items-start justify-start gap-1 rounded-lg p-4 bg-gradient-to-l from-teal-950 to-gray-900 hover:bg-gradient-to-r hover:from-teal-950 hover:to-gray-950 duration-500">
              <div>
                <h1 className="text-gray-100 font-light text-xl ">
                  Diploma in Engineering
                </h1>
              </div>
              <div>
                <p>
                  Department :{" "}
                  <span className="font-semibold text-gray-100">
                    Computer Science and Technology
                  </span>
                </p>
                <p>
                  Institute :{" "}
                  <span className="font-semibold text-gray-100">
                    Chattogram Polytechnic Institute
                  </span>
                </p>
                <p>
                  Duration :{" "}
                  <span className="font-semibold text-gray-100">
                    4 Years-8 Semester
                  </span>
                </p>
                <p>
                  Year of Pass :{" "}
                  <span className="font-semibold text-gray-100">2023</span>
                </p>
              </div>
            </div>
            <div className="dakhil flex-col flex items-start justify-start gap-1 rounded-lg p-4 bg-gradient-to-l from-teal-950 hover:bg-gradient-to-r hover:from-teal-950 to-gray-900 hover:to-gray-950 duration-500">
              <div>
                <h1 className="text-gray-100 font-light text-xl ">
                  Dakhil (S.S.C.)
                </h1>
              </div>
              <div>
                <p>
                  Institute :{" "}
                  <span className="font-semibold text-gray-100">
                    Baitush Sharaf Ideal kamil (M.A) Madrasah
                  </span>
                </p>
                <p>
                  Duration :{" "}
                  <span className="font-semibold text-gray-100">
                    2 Years-4 Semester
                  </span>
                </p>
                <p>
                  Year of Pass :{" "}
                  <span className="font-semibold text-gray-100">2019</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-anchor-placement="center-bottom"
        className="my-10 p-5 text-gray-500 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"
      >
        <h1 className="text-3xl font-semibold mb-6  ">My Skills</h1>
        <div className="all-skills grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <FaHtml5></FaHtml5>
            </h1>
            <p>HTML-5</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <FaCss3Alt></FaCss3Alt>
            </h1>
            <p>CSS-3</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <FaSass></FaSass>
            </h1>
            <p>SASS</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <FaBootstrap></FaBootstrap>
            </h1>
            <p>Bootstrap</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <SiTailwindcss></SiTailwindcss>
            </h1>
            <p>Tailwind</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <IoLogoJavascript></IoLogoJavascript>
            </h1>
            <p>JavaScript</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <FaReact></FaReact>
            </h1>
            <p>React.JS</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <IoLogoFirebase></IoLogoFirebase>
            </h1>
            <p>Firebase</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <FaNode></FaNode>
            </h1>
            <p>Node.JS</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <SiExpress></SiExpress>
            </h1>
            <p>Express.JS</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <BiLogoMongodb></BiLogoMongodb>
            </h1>
            <p>MongoDB</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
          >
            <h1>
              <FaGithub></FaGithub>
            </h1>
            <p>GitHub</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
