import Header from "components/Headers/Header";
import React, { Component } from "react";
import { Container, CardHeader, Card, Col, Row } from "reactstrap";

export class About extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col>
              <Card className="text-center">
                <CardHeader>About Page</CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
