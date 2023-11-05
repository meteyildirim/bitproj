import React from "react";
import SectionHeader from "../../common/section-header/section-header";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../../../assets/img/car/best-offer.png";
import OferItem from "./ofer-item";
import {
  FaCarAlt,
  FaBriefcase,
  FaCarSide,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { RiCarWashingFill } from "react-icons/ri";

import { MdOutlineSupportAgent } from "react-icons/md";

import "./best-offers.scss";
// className="img-fluid" ekran daraldiginda mg nin kendisini ayarlamasii saglar
const BestOffers = () => {
  const title = "Featured Luxury Cars";
  const desc =
    "Pariatur totam possimus recusandae sint voluptates facilis corporis quas, nihil repellat delectus at beatae ab qui impedit, repellendus fugit corrupti temporibus. Neque officia debitis quis magnam delectus?";

  const icon = <FaCarAlt />;
  return (
    <div className="best-offers">
      <SectionHeader title1="Get our" title2="best offers" />

      <div className="offers">
        <Container>
          <Row>
            <Col lg={4}>
              <OferItem title={title} icon={icon} desc={desc} />
            </Col>
            <Col lg={4}>
              <img src={img} alt="best-offer" className="img-fluid" />
            </Col>
            <Col lg={4}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BestOffers;
