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
            <FaHeadphonesAlt />
            {settings.phone1}
          </a>
        </li>
        <li>
          <a href={`mailto:${settings.email}`}>
            <FaRegEnvelopeOpen />
            <span className="d-none d-md-inline">{settings.email}</span>
          </a>
        </li>
      </ul>

      <ul className="social-bar">
        <li className="d-none d-md-inline">
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
        </li>
        <li className="d-none d-md-inline">
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
        </li>
        <li className="d-none d-md-inline">
          <a href="https://linkedin.com">
            <FaLinkedin />
          </a>
        </li>
        <li className="d-none d-md-inline">
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li className="d-none d-md-inline">
          <a href="https://youtube.com">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
