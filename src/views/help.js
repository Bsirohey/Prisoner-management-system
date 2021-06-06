import Header from "components/Headers/Header";
import React, { Component } from "react";
import { Container, CardHeader, Card, Col, Row } from "reactstrap";

export class Help extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col>
              <Card className="text-center">
                <CardHeader>Help page</CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Help;
