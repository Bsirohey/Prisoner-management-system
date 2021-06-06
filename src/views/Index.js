import React from "react";

import { Container, Card, Col, Row } from "reactstrap";

import Header from "components/Headers/Header.js";
class Index extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Card>
            <Row>
              <Col>
                <img
                  alt="..."
                  className="welcome-img"
                  src="https://arynews.tv/wp-content/uploads/2019/11/Punjab-police-750x369.jpg?mrf-size=m"
                ></img>
              </Col>
            </Row>
          </Card>
        </Container>
      </>
    );
  }
}

export default Index;
