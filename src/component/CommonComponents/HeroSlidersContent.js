import React from "react";
import { Col } from "react-bootstrap";
import GlobalButton from "./GlobalButton";
import GlobalHeading from "./GlobalHeading";
import NewLineText from "./NewLineText";
const HeroSlidersContent = ({
  title,
  summary,
  splitWordsCount,
  button_data,
}) => {
  return (
    <Col className="left" lg={7} md={7} sm={12} xs={12}>
      <div className="content">
        <GlobalHeading
          splitWordsCount={splitWordsCount}
          headingText={title}
          classname={"slider_heading"}
        />
        <NewLineText text={summary} />
        <div className="text-left btn-default">
          <GlobalButton
            url={button_data.url || `/contact-us`}
            content={button_data.text_value || `Contact Us`}
          />
        </div>
      </div>
    </Col>
  );
};
export default HeroSlidersContent;
