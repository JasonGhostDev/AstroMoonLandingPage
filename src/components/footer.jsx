import React from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import Twitter from "../assets/twitter.svg";
import Medium from "../assets/medium.svg";
import Discord from "../assets/discord.svg";
import Telegram from "../assets/telegram.svg";
import Youtube from "../assets/youtube.svg";
import Logo from "../assets/footer_logo.png";

const footer = () => {
  return (
    <>
      <Row className="p-3 p-md-5 justify-content-center">
        <Col xl="3" className="mb-5 mr-xl-5 feature_card">
          
        </Col>
        <Col xl="4" className="ml-xl-5">
          <div className="d-flex justify-content-center">
            <div className="pr-4 d-flex flex-column h-auto">
              <div>
                <h5 className="mb-3">
                  <a className="text-white font-weight-light" href="/">
                    WHITEPAPER
                  </a>
                </h5>
                <h5 className="mb-3">
                  <a className="text-white font-weight-light" href="/">
                    VIDEO
                  </a>
                </h5>
                <h5 className="mb-3">
                  <a className="text-white font-weight-light" href="/">
                    ARTICLES
                  </a>
                </h5>
              </div>
              <div className="d-flex mt-auto">
                <a href="/">
                  <img src={Twitter}  alt="" className="mr-2" />
                </a>
                <a href="/">
                  <img src={Telegram}  alt="" className="mr-2" />
                </a>
                <a href="/">
                  <img src={Discord}  alt="" className="mr-2" />
                </a>
                <a href="/">
                  <img src={Youtube}  alt="" className="mr-2" />
                </a>
                <a href="/">
                  <img src={Medium}  alt="" className="mr-2" />
                </a>
              </div>
            </div>
            <div className="pl-4 border-left">
              <h5 className="mb-3">
                <a className="text-white font-weight-light" href="/">
                  ESCROW SERVICE
                </a>
              </h5>
              <h5 className="mb-3">
                <a className="text-white font-weight-light" href="/">
                  ARBITRATION CENTER
                </a>
              </h5>
              <h5 className="mb-3">
                <a className="text-white font-weight-light" href="/">
                  FARM
                </a>
              </h5>
              <h5 className="mb-3">
                <a className="text-white font-weight-light" href="/">
                  BUY TOKENS
                </a>
              </h5>
            </div>
          </div>
        </Col>
        <Col xl="2" className="text-center mt-5">
          <Image src={Logo}  alt="" fluid />
        </Col>
      </Row>
      <Row>
        <Col xl="12" className="text-white pt-5 text-center">
          <p>Copyright © 2021 designed by Sunil | AJ All rights reserved.</p>
        </Col>
      </Row>
    </>
  );
};

export default footer;
