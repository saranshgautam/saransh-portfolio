"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGit, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "AI based SaaS platform",
    title: "project 1",
    description:
      "A SaaS based application that harness the power of third party APIs to deliver advanced AI capabilities.",
    stack: [{ name: "NextJS" }, { name: "MongoDB" }, { name: "Stripe" }, {name: "Clerk"}],
    image: "/assets/work/thumb1.png",
    live: "https://imaginify-three-psi.vercel.app/",
    github: "https://github.com/saranshgautam/imaginify",
    explaination: "Architected a scalable AI-based SaaS platform, leveraging third-party APIs to deliver advanced AI capabilities utilizing NextJS - frontend, MongoDB - database, Stripe - payment integration, and Clerk - user authentication. This robust system enables user to perform AI based operation on images like generative fill, background remove, object remove etc. The live version of this can be found at https://imaginify-three-psi.vercel.app/"
  },
  {
    num: "02",
    category: "Banking application",
    title: "project 2",
    description:
      "A comprehensive banking application project that models transaction processes with a user-friendly interface.",
    stack: [{ name: "ReactJS" }, { name: "Springboot" }, { name: "MySQL" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/saranshgautam/banking-application",
    explaination: "Developed a full-stack banking application utilizing ReactJS for the frontend, Spring Boot for the backend, and MySQL for the database. The application offers comprehensive user functionalities, including applying for bank accounts and net banking, performing money transactions, withdrawals, deposits, and viewing transaction history. Admin capabilities include approving user applications, monitoring all user transactions, withdrawals, deposits, and managing user accounts and balances. This robust system ensures secure and efficient banking operations for both users and administrators."
  },
  {
    num: "03",
    category: "Employee management app",
    title: "project 3",
    description:
      "An employee management dashboard that empowers admins with a seamless interface for efficiently managing employee records.",
    stack: [{ name: "ReactJS" }, { name: "Springboot" }, { name: "MySQL" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/saranshgautam/employee-management",
    explaination: "Developed an employee management dashboard using ReactJS, Spring Boot, and MySQL. This application allows admins to efficiently add, remove, and edit employee information, including phone numbers, emails, and department assignments. The system provides a user-friendly interface for managing employee records and ensures accurate and secure data handling. This tool streamlines administrative tasks, enhancing organizational efficiency and data integrity."
  },
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 , transition: {delay: 2.5, duration: 0.5, ease: 'easeIn'}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>

              {/* description */}
              <p className="text-white/60">{project.description}</p>

              {/* techstack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length-1 && ','}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/60"></div>
                {/* buttons */}
                <div className="flex gap-4">
                    {/* live project button */}
                    {/* <Link href={project.github}> */}
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger onClick={toggleModal} className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Project Description</p>
                                </TooltipContent>
                                {isOpen && (
                                  <div className="fixed inset-0 flex items-center justify-center z-50">
                                      <div className="fixed inset-0 bg-primary opacity-75"></div>
                                      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                                          <div className="bg-[#232329] px-4 py-5 sm:px-6 flex justify-between items-center">
                                              <h3 className="text-lg leading-6 font-medium text-white">Project Description</h3>
                                              <button
                                                  className="text-white focus:outline-none"
                                                  onClick={toggleModal}
                                              >
                                                  &times;
                                              </button>
                                          </div>
                                          <div className="px-4 py-5 sm:p-6 bg-primary">
                                              <p className="text-white/60">{project.explaination}</p>
                                          </div>
                                          <div className="bg-primary px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                              <button
                                                  type="button"
                                                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-accent text-primary hover:bg-accent-hover font-medium focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                                                  onClick={toggleModal}
                                              >
                                                  Close
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                                )}
                            </Tooltip>
                        </TooltipProvider>
                    {/* </Link> */}

                    {/* github project button */}
                    <Link href={project.github} legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                    <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Github repository</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                    </a>
                    </Link>
                </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
            >
                {projects.map((project, index) => {
                    return (
                        <SwiperSlide key={index} className="w-full">
                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">

                                {/* overlay */}
                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                                {/* image */}
                                <div className="relative w-full h-full bg-accent">
                                    <Image 
                                        src={project.image}
                                        fill
                                        className="object-cover"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                {/* slider buttons */}
                <WorkSliderBtns 
                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_28px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[28px] w-[36px] flex justify-center items-center transition-all"
            
                />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
