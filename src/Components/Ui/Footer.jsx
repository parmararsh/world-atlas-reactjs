import React from 'react'
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import axios from 'axios';

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_content">
          <div className="footer_icon">
            <MdPlace />
          </div>
          <div className="footer_text">
            <h2>Find Us</h2>
            <p>Ranpur,Gujrat</p>
          </div>
        </div>

        <div className="footer_content">
          <div className="footer_icon">
            <IoCallSharp />
          </div>
          <div className="footer_text">
            <h2>Call Us</h2>
            <p>6352640800</p>
          </div>
        </div>

        <div className="footer_content">
          <div className="footer_icon">
            <TbMailPlus />
          </div>
          <div className="footer_text">
            <h2>Mail Us</h2>
            <p>arshparmar26@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
