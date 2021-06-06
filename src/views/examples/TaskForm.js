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

export class TaskForm extends Component {
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
              <h2 className="float-left mt-2">Tasks:</h2>
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
                      <div className="text-center">Add a new complaint</div>
                    </CardHeader>
                    <CardBody className="">
                      <div className="text-muted text-center mt-2 mb-3">
                        <small>Fill in the following details</small>
                      </div>
                      <Form role="form">
                        <FormGroup>
                          <Label for="Task">Task</Label>
                          <Input
                            type="text"
                            name="Task"
                            id="Task"
                            placeholder="Task"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="Quality">Quality</Label>
                          <Input
                            type="text"
                            name="Quality"
                            id="Quality"
                            placeholder="Quality"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="Status">Status</Label>
                          <Input
                            type="text"
                            name="Status"
                            id="Status"
                            placeholder="Status"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleText">Issues</Label>
                          <Input
                            type="textarea"
                            name="text"
                            id="exampleText"
                            placeholder="Write isuues here..."
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
                  <th scope="col">Task ↑↓</th>
                  <th scope="col">Quality ↑↓</th>
                  <th scope="col">Status ↑↓</th>
                  <th scope="col">Issues ↑↓</th>
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
                  <th scope="row">Task 1</th>
                  <th scope="row">Good</th>
                  <th scope="row">Ongoing</th>
                  <th scope="row">Subject usually is late.</th>
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

export default TaskForm;
