import React from "react";
import { sidedata, socialdata } from "../models";
import { ArrowDownToLine } from "lucide-react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img src={sidedata.profile} id="pf" alt="profile" />
      <p id="name">
        {sidedata.name} <span id="honor">{sidedata.honor}</span>
      </p>
      <p>{sidedata.desc}</p>
      <button className="cv">
        <a href={sidedata.cv} download>
          <ArrowDownToLine size={18} /> Download CV
        </a>
      </button>
      <div className="sideless">
        <p>
          <CiLocationOn size={18} /> {sidedata.address}
        </p>
        <p>
          <a href={`tel:${sidedata.phone}`}>
            <IoCallOutline size={18} />
            {sidedata.phone}
          </a>
        </p>
        <p>
          <a href={`mailto:${sidedata.mail}`}>
            <CiMail size={18} />
            {sidedata.mail}
          </a>
        </p>
      </div>
      <div className="sideless">
        <p style={{ fontWeight: 600, fontSize: 18 }}>Socials</p>
        <ul>
          {socialdata.map((navicon, index) => (
            <li key={index}>
              <a href={navicon.link}>{navicon.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
