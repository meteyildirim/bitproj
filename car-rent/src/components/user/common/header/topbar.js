import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaHeadphonesAlt,
  FaRegEnvelopeOpen,
} from "react-icons/fa";
import { settings } from "../../../../helpers/settings";
const Topbar = () => {
  return (
    <div className="topbar">
      <ul className="contact-bar">
        <li>
          <a href={`tel:${settings.phone1}`}>
            {" "}
            <FaHeadphonesAlt />
            {settings.phone1}
          </a>
        </li>
        <li>
          <a href={`mailto:${settings.email}`}>
            {" "}
            <FaRegEnvelopeOpen />
            {settings.email}
          </a>
        </li>
      </ul>

      <ul className="social-bar">
        <li>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://youtube.com">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
