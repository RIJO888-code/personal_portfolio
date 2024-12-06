
import logo from "../assets/logo.png"; 
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-10 w-auto" />
      </div>
      
      <div className="flex gap-4 text-lg">
        <a
          href="https://www.linkedin.com/in/rijo-reji-5022a1309" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/RIJO888-code" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/RIJO_014"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
