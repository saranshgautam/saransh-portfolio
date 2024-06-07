import Link from "next/link";
import {FaGithub, FaLinkedin, FaEnvelopeOpen, FaWhatsapp} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/saranshgautam"},
    {icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/saransh-gautam-06b9b11a2"},
    {icon: <FaEnvelopeOpen/>, path: "mailto:saranshgautam24@gmail.com"},
    {icon: <FaWhatsapp/>, path: "https://wa.me/917073412759"}
]
const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} legacyBehavior>
                        <a className={iconStyles} target="_blank" rel="noopener noreferrer">
                            {item.icon}
                        </a>
                    </Link>
                )
            })}
        </div>
    )
}

export default Social;