import logo from "../assets/AALogo.png"

import {FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"


const NavBar = () => {
  return (
    <nav className = "mb-20 flex items-center justify-between py-6">

        <div className="flex flex-shrink-0 items-center">
               <img className="mx-2 w-28" src={logo} alt="logo"></img> 
        </div>

        <div className="flex justify-center items-center m-8 text-2xl gap-4">
            <a href="https://www.linkedin.com/in/awais-ahmad-995a76296/"><FaLinkedin/></a>
            <a href="https://github.com/awais-ahmad01"><FaGithub/></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en"><FaInstagram/></a>
        </div>

    </nav>
  )
}

export default NavBar
