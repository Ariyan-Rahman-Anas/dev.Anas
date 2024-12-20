import cover from "./../../assets/myCover.jpeg";
import arrow from "./../../assets/arrow.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import {
  SiRedux,
  SiNextdotjs,
  SiMongoose,
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiExpress
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import "./about.css";
import PageTitle from "../../Components/PageTitle";
import MySocials from "../../Components/MySocials";
import DownloadMyResume from "../../Components/DownloadMyResume";

const About = () => {

  const skills = [
    {
      icon: <FaHtml5 />,
      title: "HTML",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS",
    },
    {
      icon: <FaSass />,
      title: "Sass",
    },
    {
      icon: <FaBootstrap />,
      title: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind",
    },
    {
      icon: <IoLogoJavascript />,
      title: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      title: "TypeScript",
    },
    {
      icon: <FaReact />,
      title: "React",
    },
    {
      icon: <SiNextdotjs />,
      title: "Next",
    },
    {
      icon: <SiRedux />,
      title: "Redux",
    },
    {
      icon: <FaNode />,
      title: "Node",
    },
    {
      icon: <SiExpress />,
      title: "Express",
    },
    {
      icon: <BiLogoMongodb />,
      title: "MongoDB",
    },
    {
      icon: <SiMongoose />,
      title: "Mongoose",
    },
    {
      icon: <IoLogoFirebase />,
      title: "Firebase",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
    },
    {
      icon: <SiPostman />,
      title: "Postman",
    },
  ];


  return (
    <div>
      {/* top section starts from here */}
      <section
        id="media-and-top-info"
        className="grid mt-16 grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Ariyan Rahman Anas's cover img */}
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="left p-6 w-full col-span-2 md:col-span-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg "
        >
          <img src={cover} alt="" className="rounded-lg" />
        </div>

        {/* Ariyan Rahman Anas's basic info */}
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="right col-span-2 flex flex-col gap-5  "
        >
          <PageTitle title={"SELF-SUMMARY"}></PageTitle>
          <div className="down px-8 pb-5 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg">
            <img src={arrow} alt="" />
            <h1 className="text-4xl font-semibold mt-5">Ariyan Rahman Anas</h1>
            <p className="mt-3 text-gray-400">
              I am a Bangladesh-based Front-End Web Developer with a focus on
              Back-End Development. I have a diverse range of experience having
              worked across various fields and industries.
            </p>

            {/* social media and resume btn */}
            <div className="md:hidden mt-12 flex flex-col md:flex-row items-center justify-between gap-5 ">
              <MySocials
                fb={<FaFacebookF></FaFacebookF>}
                linkedin={<FaLinkedinIn></FaLinkedinIn>}
                gh={<LuGithub></LuGithub>}
              ></MySocials>

              <DownloadMyResume></DownloadMyResume>
            </div>
          </div>
        </div>
      </section>

      {/* personal details section is starts from here */}
      <section className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-500">
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="left text-xs 2xl:text-base px-2 py-5 md:p-5 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"
        >
          {/* personal information */}
          <div>
            <h1 className="text-3xl font-semibold mb-6  ">
              Personal Information
            </h1>
            <div className="flex flex-col md:flex-row items-start justify-between gap-2 rounded-lg p-4 bg-gradient-to-l from-teal-950 hover:bg-gradient-to-r hover:from-teal-950 to-gray-900 hover:to-gray-950 duration-500">
              <div className="left flex gap-1 ">
                <div className="title flex flex-col gap-2 ">
                  <p>First Name</p>
                  <p>Age</p>
                  <p>Phone</p>
                  <p>Skype</p>
                  <p>Address</p>
                </div>
                <div className="value flex flex-col gap-2 ">
                  <p className="font-semibold text-gray-100 ">
                    : Ariyan Rahman
                  </p>
                  <p className="font-semibold text-gray-100 ">: 23 years</p>
                  <a href="tel:+8801610195968" className="font-semibold text-gray-100 ">
                    : +88 01610-195968
                  </a>
                  <p className="font-semibold text-gray-100 ">: mr.anas</p>
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
                  <a href="mailto:mohammadariyanrahmananas@gmail.com" className="font-semibold text-gray-100 ">
                    : mohammadariyanrahmananas@gmail.com
                  </a>
                  <p className="font-semibold text-gray-100 ">
                    : Bengali, English, Urdu and Hindi
                  </p>
                  <p className="font-semibold text-gray-100 ">: Bangladeshi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ariyan Rahman Anas's basic info again here for medium to large devices */}
          <div className="social-icons-resume-download hidden mt-0 md:mt-12 mb-12 md:flex flex-col md:flex-row items-center justify-between gap-5 ">
            {/* <MySocials></MySocials> */}
            <MySocials
              fb={<FaFacebookF></FaFacebookF>}
              linkedin={<FaLinkedinIn></FaLinkedinIn>}
              gh={<LuGithub></LuGithub>}
            ></MySocials>

            <DownloadMyResume></DownloadMyResume>
          </div>
        </div>

        {/* educational information */}
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="right text-xs 2xl:text-base px-2 py-5 md:p-5 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"
        >
          <h1 className="text-3xl font-semibold mb-5 ">
            Educational Qualifications
          </h1>
          <div className="flex flex-col gap-5">
            <div className="diploma flex flex-col items-start justify-start gap-1 rounded-lg p-4 bg-gradient-to-l from-teal-950 to-gray-900 hover:bg-gradient-to-r hover:from-teal-950 hover:to-gray-950 duration-500">
              <div>
                <h1 className="text-gray-100 font-light text-xl border-b-[.09rem] mb-3 ">
                  Diploma in Engineering
                </h1>
              </div>
              <div>
                <div className="flex gap-x-5">
                  <div className="key flex flex-col gap-2 ">
                    <p>Department</p>
                    <p>Institute</p>
                    <p>Duration</p>
                    <p>Year of Pass</p>
                  </div>
                  <div className="value flex flex-col gap-2">
                    <p className="font-semibold text-gray-100">
                      : Computer Science and Technology
                    </p>
                    <p className="font-semibold text-gray-100">
                      : Chattogram Polytechnic Institute
                    </p>
                    <p className="font-semibold text-gray-100">
                      : 4 Years, 8 Semester
                    </p>
                    <p className="font-semibold text-gray-100">: 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dakhil flex-col flex items-start justify-start gap-1 rounded-lg p-4 bg-gradient-to-l from-teal-950 hover:bg-gradient-to-r hover:from-teal-950 to-gray-900 hover:to-gray-950 duration-500">
              <div>
                <h1 className="text-gray-100 font-light text-xl border-b-[.09rem] mb-3 ">
                  Secondary School Certificate (SSC)
                </h1>
              </div>
              <div>
                <div className="flex gap-x-2 ">
                  <div className="key flex flex-col gap-2 ">
                    <p>Institute</p>
                    <p>Duration</p>
                    <p>Year of Pass</p>
                  </div>
                  <div className="value flex flex-col gap-2 ">
                    <p className="font-semibold text-gray-100">
                      : Baitush Sharaf Ideal kamil (M.A) Madrasah
                    </p>
                    <p className="font-semibold text-gray-100">
                      : 2 Years-4 Semester
                    </p>
                    <span className="font-semibold text-gray-100">: 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* skills section is starts from here */}
      <section
        id="skills"
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        className="my-10 p-5 text-gray-500 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"
      >
        <h1 className="text-3xl font-semibold mb-6  ">My Skills</h1>
        <div className="all-skills grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {
            skills?.map((item, index) => <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
              className="aos-init aos-animate py-4 " >
              <h1>
               {item.icon}
              </h1>
              <p>{item.title} </p>
            </div> )
          }
        </div>
      </section>
    </div>
  );
};
export default About;