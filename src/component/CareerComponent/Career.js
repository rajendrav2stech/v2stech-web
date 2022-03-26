import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContentBreack from "../CommonComponents/ContentBreack";
import DateFild from "../CommonComponents/DateFild";
import { careerApi } from "../CommonComponents/functions/careerApi";
import { careerNoteApi } from "../CommonComponents/functions/careerNoteApi";
import GlobalButton from "../CommonComponents/GlobalButton";
import Loader from "../CommonComponents/Loader";
import useApi from "../hooks/useApi";

function Career() {
  const [careerIformation] = useApi(careerApi);
  const [careerNoteIformation] = useApi(careerNoteApi);

  const [loadings, setLoadings] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadings(false);
    }, 2000);
  }, []);

  return (
    <div className="Career">
      {careerNoteIformation.length > 0 &&
        careerNoteIformation.map((note, n) => {
          return (
            <div className="cards_note" key={n}>
              <Container>
                <Row>
                  <Col lg={12} md={12} sm={12}>
                    <h3>
                      <strong>{note.title}</strong>{" "}
                    </h3>
                    <ContentBreack content={note.notes} />
                  </Col>
                </Row>
              </Container>
            </div>
          );
        })}
      {careerIformation.length > 0 &&
        careerIformation.map((items, i) => {
          return (
            <div className="cards" key={i}>
              <Container>
                <Row>
                  <Col lg={3} md={3} sm={12}>
                    <h3>
                      <strong>Designation :</strong> {items.designation}{" "}
                    </h3>
                    <p>
                      <strong>Experience :</strong> {items.experience}{" "}
                    </p>
                    <p>
                      <strong>Position :</strong> {items.joining}
                    </p>
                    <p>
                      <strong>No. of positions :</strong> 1
                    </p>
                    <p>
                      <strong>Industry :</strong> {items.industry}
                    </p>
                    <p>
                      <strong>Role Category :</strong> {items.role_category}
                    </p>
                    <p>
                      <strong>Location :</strong> {items.location}
                    </p>
                    <p>
                      <strong>Posted On :</strong>{" "}
                      <DateFild dateField={items.posted_on} />
                    </p>
                  </Col>
                  <Col lg={5} md={5} sm={12}>
                    <h3>
                      <strong>Job Description</strong>{" "}
                    </h3>
                    <ul className="job_description">
                      {items.job_description
                        ? items.job_description.map((jobs, j) => {
                            return <li key={j}>{jobs.point}</li>;
                          })
                        : null}
                    </ul>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <h3>
                      <strong>Essential Skills (behavioral/technical)</strong>{" "}
                    </h3>
                    <ul className="job_description_details">
                      {items.career_essential_skill
                        ? items.career_essential_skill.map((jobss, jj) => {
                            return <li key={jj}>{jobss.point}</li>;
                          })
                        : null}
                    </ul>

                    <div className="job_description">
                      {items.career_education_details
                        ? items.career_education_details.map((job, k) => {
                            return (
                              <div key={k}>
                                <h3>
                                  <strong>Education Details</strong>{" "}
                                </h3>
                                <p>
                                  <strong>Graduation :</strong> {job.graduation}
                                </p>
                                <p>
                                  <strong>Post Graduation :</strong>{" "}
                                  {job.post_graduation}
                                </p>
                                <p>
                                  <strong>Mail CV to :</strong>{" "}
                                  <a href={"mailto:" + job.mail_cv_to}>
                                    {job.mail_cv_to}
                                  </a>
                                </p>
                                <div className="btn-default">
                                  <GlobalButton
                                    url={
                                      (job.button_value_url &&
                                        job.button_value_url.url) ||
                                      `https://forms.gle/ZEjjv4ftp67ZesR16`
                                    }
                                    content={
                                      (job.button_value_url &&
                                        job.button_value_url.text_value) ||
                                      `FILL FORM & APPLY HERE`
                                    }
                                  />
                                </div>
                                {/* <a
                                  href="https://forms.gle/ZEjjv4ftp67ZesR16"
                                  target="_blank"
                                  className="btn btn-primary"
                                >
                                  FILL FORM &amp; APPLY HERE{" "}
                                </a> */}
                              </div>
                            );
                          })
                        : null}
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          );
        })}
      {loadings && <Loader />}
    </div>
  );
}

export default Career;
