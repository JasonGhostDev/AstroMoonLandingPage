import React from "react";
import { Row, Col, Button } from "react-bootstrap";
// about-bg.png
const about = () => {
  return (
    <Row className="d-flex align-items-center justify-content-center p-3 p-md-5 app_secondery bg_about">
      <Col xl={5} className="my-5 pr-md-3 py-5">
        <div className="text-white">
          <h1 className=" font-weight-bold mb-5">About The AstroMoon</h1>
          <h5 className="font-weight-normal mb-4">
          AstroMoon is a limited, deflationary, static yield farming, automatic liquidity generating token on Binance Smart Chain
          </h5>
          
          <Button
            variant="light"
            className="btn_white mr-5 px-5 font-weight-bold"
          >
            WHITEPAPER
          </Button>
        </div>
      </Col>
      <Col xl={5} className=" mb-3 my-md-5 pl-xl-3">
        <div className="mx-auto ml-xl-auto" style={{ width: "90%" }}>
          <iframe
            width="100%"
            height="350px"
            src="https://www.youtube.com/embed/qC5DbPsap-0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Col>
    </Row>
  );
};

export default about;
