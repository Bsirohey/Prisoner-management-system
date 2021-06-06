import React, { Component } from "react";
import {
  CardHeader,
  Card,
  Col,
  Row,
  Button,
  Table,
  Input,
  FormGroup,
  Label,
  Modal,
  CardBody,
  Form,
} from "reactstrap";

export class ActiveCases extends Component {
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
      <Row>
        <Col>
          <Card className="text-center">
            <CardHeader>
              <h2 className="float-left mt-2">Active cases:</h2>
              <Button
                color="primary"
                className="float-right"
                type="button"
                onClick={() => this.toggleModal("formModal")}
              >
                Add
              </Button>

              <Modal
                className="modal-dialog-centered"
                size="sm"
                isOpen={this.state.formModal}
                toggle={() => this.toggleModal("formModal")}
              >
                <div className="modal-body p-0">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-transparent ">
                      <div className="text-center">Add a new case</div>
                    </CardHeader>
                    <CardBody className="">
                      <div className="text-muted text-center mt-2 mb-3">
                        <small>Fill in the following details</small>
                      </div>
                      <Form role="form">
                        <FormGroup>
                          <Label for="Date">Date</Label>
                          <Input
                            type="date"
                            name="Date"
                            id="Date"
                            placeholder="Date"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="Case">Case</Label>
                          <Input
                            type="text"
                            name="Case"
                            id="Case"
                            placeholder="Case"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="intime">Check in time</Label>
                          <Input
                            type="time"
                            name="intime"
                            id="intime"
                            placeholder="intime"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="ontime">Check out time</Label>
                          <Input
                            type="time"
                            name="ontime"
                            id="ontime"
                            placeholder="ontime"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="Location">Location</Label>
                          <Input
                            type="text"
                            name="Location"
                            id="Location"
                            placeholder="Location"
                          />
                        </FormGroup>

                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                          >
                            Add
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </div>
              </Modal>
            </CardHeader>
            <Table responsive>
              <thead>
                <tr>
                  <th scope="col"># ↑↓</th>
                  <th scope="col">Case Type ↑↓</th>
                  <th scope="col">Court Date ↑↓</th>
                  <th scope="col">Check in time ↑↓</th>
                  <th scope="col">Check out time ↑↓</th>
                  <th scope="col">Location ↑↓</th>
                  <th scope="col">
                    <Button
                      color="danger"
                      className="float-right p-1"
                      type="button"
                    >
                      Delete
                    </Button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <th scope="row">Murder</th>
                  <th scope="row">11/12/2020</th>
                  <th scope="row">5:00 PM</th>
                  <th scope="row">6:00 PM</th>
                  <th scope="row">Lahore</th>
                  <th scope="row">
                    <div className="custom-control custom-checkbox mb-3 float-right">
                      <input
                        className="custom-control-input"
                        id="customCheck1"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label mx-1"
                        htmlFor="customCheck1"
                      ></label>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <th scope="row">Murder</th>
                  <th scope="row">11/12/2020</th>
                  <th scope="row">5:00 PM</th>
                  <th scope="row">6:00 PM</th>
                  <th scope="row">Lahore</th>
                  <th scope="row">
                    <div className="custom-control custom-checkbox mb-3 float-right">
                      <input
                        className="custom-control-input"
                        id="customCheck1"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label mx-1"
                        htmlFor="customCheck1"
                      ></label>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <th scope="row">Murder</th>
                  <th scope="row">11/12/2020</th>
                  <th scope="row">5:00 PM</th>
                  <th scope="row">6:00 PM</th>
                  <th scope="row">Lahore</th>
                  <th scope="row">
                    <div className="custom-control custom-checkbox mb-3 float-right">
                      <input
                        className="custom-control-input"
                        id="customCheck1"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label mx-1"
                        htmlFor="customCheck1"
                      ></label>
                    </div>
                  </th>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ActiveCases;
