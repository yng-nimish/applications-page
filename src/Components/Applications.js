import React from "react";

import { FiArrowRight } from "react-icons/fi";
import SnipetImage from "../Assets/snippet.svg";
import Footer from "./Footer";
import comingSoon from "../Assets/Group 62.svg";
import { CCard } from "@coreui/react";
import { CCardImage } from "@coreui/react";
import { CCardBody } from "@coreui/react";
import { CCardTitle } from "@coreui/react";
import { CCardText } from "@coreui/react";
import { CButton } from "@coreui/react";
import { CRow } from "@coreui/react";
import { CCol } from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";

const Applications = () => {
  return (
    <div className="technical-wrapper">
      <div className="technical-container">
        <div className="technical-1">
          <div className="home-text-section">
            <h7 className="primary-heading-welcome">
              {" "}
              APPLICATION DOWNLOADS <br /> <br />
            </h7>
            <h7 className="primary-heading-app">
              To download any application you must be the following:
              <br />
              <br />
            </h7>
            <h3>
              <ul>
                <li>A Member in good standing</li>
                <li>Owner of a Your Number Guaranteed Token</li>
              </ul>
            </h3>
          </div>
          <div>
            <br /> <br /> <br />
            <br /> <br /> <br />
            <br /> <br /> <br />
          </div>
        </div>
      </div>
      <div className="app-card-section">
        <div className="coming-soon-container">
          <div className="balloon">
            <img src={comingSoon} className="ballon-image" alt=" " />
          </div>
        </div>

        <CCard color="white" className="mb-3 justify-content-md-centre">
          <CRow className="g-0">
            <CCol md={4}>
              <CCardImage src={SnipetImage} />
            </CCol>
            <CCol md={8}>
              <CCardBody className="pre-rectangle">
                <CCardTitle>
                  <br />
                  <br />
                </CCardTitle>
                <CCardText>
                  The Snippet can be a Point, a Line, a Plane, or a MiniCube.
                </CCardText>
              </CCardBody>
            </CCol>
          </CRow>
        </CCard>
        <CCard color="white" className="mb-3">
          <CRow className="g-0">
            <CCol md={8}>
              <CCardBody className="pre-rectangle">
                <CCardTitle>Security</CCardTitle>
                <CCardText>
                  Create your own unique security codes. Partnerships with
                  Companies.
                </CCardText>
              </CCardBody>
            </CCol>
            <CCol className="mb-3 pl-3 my-auto mx-auto col-6" md={4}>
              <CButton color="primary" href="#">
                Download &nbsp;&nbsp;&nbsp; <FiArrowRight />
              </CButton>
            </CCol>
          </CRow>
        </CCard>
        <CCard color="white" className="mb-3">
          <CRow className="g-0">
            <CCol md={8}>
              <CCardBody className="pre-rectangle">
                <CCardTitle>Education</CCardTitle>
                <CCardText>
                  Learn : Counting, Addition, Subtraction, Multiplication,
                  Division at all levels.{" "}
                </CCardText>
              </CCardBody>
            </CCol>
          </CRow>
          <CRow>
            <CCol md={4}>
              <div className="d-grid gap-5 d-md-flex col-6 mx-auto btn text-nowrap">
                <CButton color="primary">Level 1</CButton>
                <CButton color="primary">Level 2</CButton>
                <CButton color="primary">Level 3</CButton>
                <CButton color="primary">Level 4</CButton>
                <CButton color="primary">Level 5</CButton>
                <CButton color="primary">Level 6</CButton>
                <br />
              </div>
            </CCol>
          </CRow>
          <br />
        </CCard>
        <CCard color="white" className="mb-3">
          <CRow className="g-0">
            <CCol md={8}>
              <CCardBody className="pre-rectangle">
                <CCardTitle>Cognitive Health</CCardTitle>
                <CCardText>Game to improve your memory.</CCardText>
              </CCardBody>
            </CCol>
          </CRow>
          <CRow>
            <CCol md={4}>
              <div className="d-grid gap-5 d-md-flex col-6 mx-auto btn text-nowrap">
                <CButton color="primary">Level 1</CButton>
                <CButton color="primary">Level 2</CButton>
                <CButton color="primary">Level 3</CButton>
                <CButton color="primary">Level 4</CButton>
                <CButton color="primary">Level 5</CButton>
                <CButton color="primary">Level 6</CButton>
                <br />
              </div>
            </CCol>
          </CRow>
          <br />
        </CCard>

        <CCard color="white" className="mb-3">
          <CRow className="g-0">
            <CCol md={8}>
              <CCardBody className="pre-rectangle">
                <CCardTitle>Research and Quality Control</CCardTitle>
                <CCardText>
                  Random Assignment to a Group. Group sizes from 1 to 10. Random
                  selection for quality control. Select from 1 to 1,000,000
                </CCardText>
              </CCardBody>
            </CCol>
            <CCol className="mb-3 pl-3 my-auto mx-auto col-6" md={4}>
              <CButton color="primary" href="#">
                Download &nbsp;&nbsp;&nbsp; <FiArrowRight />
              </CButton>
            </CCol>
          </CRow>
        </CCard>
        <CCard color="white" className="mb-3">
          <CRow className="g-0">
            <CCol md={8}>
              <CCardBody className="pre-rectangle">
                <CCardTitle>Gaming</CCardTitle>
                <CCardText>
                  This will be done in conjunction with Partners as we need to
                  ensure compliance with all applicable laws.
                </CCardText>
              </CCardBody>
            </CCol>
            <CCol className="mb-3 pl-3 my-auto mx-auto col-6" md={4}>
              <CButton color="primary" href="#">
                Download &nbsp;&nbsp;&nbsp; <FiArrowRight />
              </CButton>
            </CCol>
          </CRow>
        </CCard>
        <CCard color="white" className="mb-3">
          <CRow className="g-0">
            <CCol md={8}>
              <CCardBody className="pre-rectangle">
                <CCardTitle>Fun Games</CCardTitle>
                <CCardText>
                  Enjoyable numeric games to challenge your wit and speed
                </CCardText>
              </CCardBody>
            </CCol>
            <CCol className="mb-3 pl-3 my-auto mx-auto col-6" md={4}>
              <CButton color="primary" href="#">
                Download &nbsp;&nbsp;&nbsp; <FiArrowRight />
              </CButton>
            </CCol>
          </CRow>
        </CCard>
        <CCard color="white" className="mb-3">
          <CRow className="g-0">
            <CCol md={8}>
              <CCardBody className="pre-rectangle">
                <CCardTitle>Competitions</CCardTitle>
                <CCardText>
                  All the above games and Applications done with speed and
                  accuracy.
                </CCardText>
              </CCardBody>
            </CCol>
            <CCol className="mb-3 pl-3 my-auto mx-auto col-6" md={4}>
              <CButton color="primary" href="#">
                Download &nbsp;&nbsp;&nbsp; <FiArrowRight />
              </CButton>
            </CCol>
          </CRow>
        </CCard>
        <CCard color="white" className="mb-3">
          <CRow className="g-0">
            <CCol md={8}>
              <CCardBody className="pre-rectangle">
                <CCardTitle>Fun Partnerships with Companies:</CCardTitle>
                <CCardText>
                  We can create Custom Made Programs using our IP. We can create
                  loyalty programs, interactive games, unique engagements and
                  many fun ways to build relationships between your customers
                  and your organization.
                </CCardText>
              </CCardBody>
            </CCol>
            <CCol className="mb-3 pl-3 my-auto mx-auto col-6" md={4}>
              <CButton color="primary" href="#">
                Download &nbsp;&nbsp;&nbsp; <FiArrowRight />
              </CButton>
            </CCol>
          </CRow>
        </CCard>
      </div>{" "}
      <Footer />
    </div>
  );
};

export default Applications;
