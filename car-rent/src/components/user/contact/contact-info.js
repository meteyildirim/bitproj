import React from "react";
import "./contact-info.scss";
import {
  MdEmail,
  MdLocationOn,
  MdOutlineHeadphones,
  MdOutlinePhonelinkRing,
} from "react-icons/md";
import { settings } from "../../../helpers/settings";
const ContactInfo = () => {
  return (
    <ul>
      <li>
        <a href={`tel:${settings.phone1}`}>
          <MdOutlineHeadphones />
          {settings.phone1}
        </a>
      </li>
      <li>
        <a href={`tel:${settings.phone1}`}>
          <MdOutlinePhonelinkRing />
          {settings.phone2}
        </a>
      </li>
      <li>
        <a href={settings.mapUrl} target="_blank">
          <MdLocationOn />
          {settings.address}
        </a>
      </li>
      <li>
        <a href={`mailto:{settings.phone1}`}>
          <MdEmail />
          {settings.email}
        </a>
      </li>
    </ul>
  );
};

export default ContactInfo;
