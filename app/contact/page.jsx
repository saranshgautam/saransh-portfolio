"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select"
import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaMapMarkerAlt} from "react-icons/fa"
import { Description } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "(+91) 70734 12759",
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "saranshgautam24@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt/>,
        title: "Address",
        description: "Kondapur, Hyderabad 500084",
    },
]

const Contact = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const togglePopup = () => {
        console.log("function called")
        setIsPopupOpen(!isPopupOpen);
    };
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 , transition: {delay: 2.5, duration: 0.5, ease: 'easeIn'}}}
            className="py-6"
        >

            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#0b0c10] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's collaborate </h3>
                            <p className="text-white/60">
                                and bring your vision to life! Connect with me through the form below to discuss how we can work together on your next project.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Firstname"/>
                                <Input type="lastname" placeholder="Lastname"/>
                                <Input type="email" placeholder="Email"/>
                                <Input type="phone" placeholder="Phone number"/>
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">API Development</SelectItem>
                                        <SelectItem value="mst">Database Design</SelectItem>
                                        <SelectItem value="lst">Backend Testing</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* Textarea */}
                            <div className="w-full gap-6 grid">
                                <Textarea className="h-[200px]" placeholder="Type your message here."/>
                                <Input type="file" multiple/>
                            </div>

                            {/* Button */}
                            <Button size="md" className="max-w-40" onClick={togglePopup} type="button">Send message</Button>
                        </form>
                        {isPopupOpen && (
                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <div className="fixed inset-0 bg-primary opacity-75"></div>
                                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                                    <div className="bg-[#232329] px-4 py-5 sm:px-6 flex justify-between items-center">
                                        <h3 className="text-lg leading-6 font-medium text-white">Notice</h3>
                                        <button
                                            className="text-white focus:outline-none"
                                            onClick={togglePopup}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                    <div className="px-4 py-5 sm:p-6 bg-primary">
                                        <p className="text-white/60">
                                        Oops! This feature is currently encountering some difficulties. Rest assured, I'm actively addressing them. In the meantime, feel free to reach out to me via the mobile number or email listed here.
                                        </p>
                                    </div>
                                    <div className="bg-primary px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-accent text-primary hover:bg-accent-hover font-medium focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={togglePopup}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* info */}
                    <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#0b0c10] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;