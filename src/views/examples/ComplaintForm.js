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

export class ComplaintForm extends Component {
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
              <h2 className="float-left mt-2">Complaints:</h2>
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
                          <Label for="Name">Name</Label>
                          <Input
                            type="text"
                            name="Name"
                            id="Name"
                            placeholder="Name"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleText">Complaint</Label>
                          <Input
                            type="textarea"
                            name="text"
                            id="exampleText"
                            placeholder="Write complain here..."
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="Date">Date</Label>
                          <Input
                            type="date"
                            name="Date"
                            id="Date"
                            placeholder="Date"
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
                  <th scope="col">Complaint ↑↓</th>
                  <th scope="col">Status ↑↓</th>
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
                  <th scope="row">
                    The prisoner in cell 20 is making a lot of noise and not
                    eating
                  </th>
                  <th scope="row">Reslved</th>
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
                  <th scope="row">
                    The prisoner in cell 20 is making a lot of noise and not
                    eating
                  </th>
                  <th scope="row">Uresolved</th>
                  <th scope="row">
                    <div className="custom-control custom-checkbox mb-3 float-right">
                      <input
                        className="custom-control-input"
                        id="customCheck2"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label mx-1"
                        htmlFor="customCheck2"
                      ></label>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <th scope="row">
                    The prisoner in cell 20 is making a lot of noise and not
                    eating
                  </th>
                  <th scope="row">Unresolved</th>
                  <th scope="row">
                    <div className="custom-control custom-checkbox mb-3 float-right">
                      <input
                        className="custom-control-input"
                        id="customCheck3"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label mx-1"
                        htmlFor="customCheck3"
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

export default ComplaintForm;
