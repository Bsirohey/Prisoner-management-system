import Header from "components/Headers/Header";
import React, { Component } from "react";
import { Container, CardHeader, Card, Col, Row, Table } from "reactstrap";

export class Notifications extends Component {
  state = {
    defaultModal: false,
  };
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  render() {
    return (
      <div>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col>
              <Card className="text-center">
                <CardHeader>
                  <h2 className="float-left mt-2">Notifications:</h2>
                  <div className="custom-control custom-checkbox mb-3 float-right">
                    <input
                      className="custom-control-input"
                      id="customCheck4"
                      defaultChecked
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label mx-1"
                      htmlFor="customCheck4"
                    >
                      Court Dates
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3 float-right">
                    <input
                      className="custom-control-input"
                      id="customCheck3"
                      defaultChecked
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label mx-1"
                      htmlFor="customCheck3"
                    >
                      Transfers
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox mb-3 float-right">
                    <input
                      className="custom-control-input"
                      id="customCheck2"
                      defaultChecked
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label mx-1"
                      htmlFor="customCheck2"
                    >
                      Complaints
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3 float-right">
                    <input
                      className="custom-control-input"
                      id="customCheck1"
                      defaultChecked
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label mx-1"
                      htmlFor="customCheck1"
                    >
                      Primary
                    </label>
                  </div>
                </CardHeader>
                <Table responsive>
                  <thead>
                    <tr>
                      <th scope="col"># ↑↓</th>
                      <th scope="col">Information ↑↓</th>
                      <th scope="col">Status ↑↓</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <th scope="row">
                        Trasfer for prisoner adeel ahmad was accepted by the
                        officer
                      </th>
                      <th scope="row">Resolved</th>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <th scope="row">
                        Trasfer for prisoner adeel ahmad was accepted by the
                        officer
                      </th>
                      <th scope="row">Resolved</th>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Notifications;
