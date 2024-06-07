"use client";

import {FaHtml5, FaCss3, FaJs, FaJava, FaPython, FaReact, FaDatabase, FaJenkins, FaGit} from "react-icons/fa"
import {SiSplunk, SiSpringboot, SiDjango} from "react-icons/si"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import {ScrollArea} from "@/components/ui/scroll-area"
import { motion } from "framer-motion";
import React from "react";


// about data


const about = {
    title: 'About me',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut aliquip ex ea.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Saransh Gautam"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91) 70734 12759"
        },
        {
            fieldName: "Experience",
            fieldValue: "16+ months"
        },
        {
            fieldName: "Email",
            fieldValue: "saranshgautam24@gmail.com"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian"
        },
            {
            fieldName: "Languages",
            fieldValue: "English, Hindi"
        },
    ]
}

// experience data

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut aliquip ex ea.',
    items: [
        {
            company: "Wells Fargo",
            position: "Program Associate (AVP)",
            duration: "Aug 2023 - Present"
        },
        {
            company: "Wells Fargo",
            position: "Data Analyst Intern",
            duration: "Summer 2022"
        },
        {
            company: "Bold Finance",
            position: "SDE Intern",
            duration: "Jan 2022 - Apr 2022",
        }
    ]
}

// education data

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut aliquip ex ea.',
    items: [
        {
            institution: "NIT Kurukshetra",
            degree: "B.Tech (IT)",
            duration: "2019-2023",
            grade: "CG: 9.25"
        },
        {
            institution: "JNV Bundi",
            degree: "Intermediate",
            duration: "2018-2019",
            grade: "Percent: 92.8"
        },
        {
            institution: "JNV Jaipur",
            degree: "Matriculate",
            duration: "2016-2017",
            grade: "CG: 10"
        },        
    ]
}

// skills data

const skills = {
    title: "My skills",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut aliquip ex ea.",
    skillList: [
        {
            icon: <FaJava/>,
            name: "Java",
        },
        {
            icon: <SiSpringboot/>,
            name: "springboot",
        },
        {
            icon: <FaPython/>,
            name: "python",
        },
        {
            icon: <SiDjango/>,
            name: "django",
        },        
        {
            icon: <FaDatabase/>,
            name: "database",
        },
        {
            icon: <FaJenkins/>,
            name: "jenkins",
        },
        {
            icon: <FaGit/>,
            name: "git",
        },
        {
            icon: <SiSplunk/>,
            name: "splunk",
        },
        {
            icon: <FaHtml5/>,
            name: "html 5",
        },
        {
            icon: <FaCss3/>,
            name: "css 3",
        },
        {
            icon: <FaJs/>,
            name: "javascript",
        },
        {
            icon: <FaReact/>,
            name: "react.js",
        },
    ]
}


const Resume = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.5,
                    duration: 0.5,
                    ease: "easeIn"
                }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        > 
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}

                    <div className="min-h-[70vh] w-full">

                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="max-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>                        
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="max-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                        {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> */}
                                                        <p className="text-white/60"> | {item.grade}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {skills.skillList.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                    {skill.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                        {about.info.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index}
                                                    className="flex items-center justify-center xl:justify-start gap-4"
                                                >
                                                    <span className="text-white/60">{item.fieldName}</span>
                                                    <span className="text-xl">{item.fieldValue}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                    </div>


                </Tabs>
            </div>
        </motion.div>
    ) 
}

export default Resume;