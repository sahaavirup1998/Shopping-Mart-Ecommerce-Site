import React from "react";
import "../../styles/CommonSection.css";
import { Container } from "reactstrap";

const CommonSection = ({ title }) => {
  return (
    <div className="common_section">
      <Container>
        <h1 className="text-center">{title}</h1>
      </Container>
    </div>
  );
};

export default CommonSection;
