import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { GrGallery } from "react-icons/gr";
import { FaCartPlus } from "react-icons/fa6";
import { FaClipboardUser } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/"><IoIosHome />Home</Link>
        <Link to="/ExperiencePage"><MdOutlineWork />Experience</Link>
        <Link to="/TopicPage"><GrArticle />Topics</Link>
        <Link to="/GalleryPage"><GrGallery />Gallery</Link>
        {/*<Link to="/OrderPage"><FaCartPlus />Order</Link>
        <Link to="/StaffPage"><FaClipboardUser />Staff</Link>
        <Link to="/ContactPage"><HiOutlineMail />Contact</Link>*/}
    </nav>
  );
}

export default Navigation;
