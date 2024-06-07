import { motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"],
    },
};


// Calculating reverse index for staggered delay

const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}
const Stairs = () => {
    return (
        <>
            {/* Render 6 motion divs, each representing a step of the stairs */}
            {/* Each div will have same animation defined by stairAnimation */}
            {/* Delay for each div is calculated dynamically based on it's reversed index, */}
            {/* This will create a staggered effect with decreasing delay for each subsequent step */}
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div 
                    key={index} 
                    variants={stairAnimation} 
                    exit="exit"
                    initial="initial"
                    animate="animate" 
                    transition={{
                        delay: reverseIndex(index) * 0.1,
                        duration: 0.5,
                        ease: 'easeInOut',
                    }}
                    className="h-full w-full bg-white relative"
                    />
                );
            })}
        </>
    )
}

export default Stairs;