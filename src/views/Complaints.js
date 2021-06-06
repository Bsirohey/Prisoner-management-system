import Header from "components/Headers/Header";
import React, { Component } from "react";
import {
  Container,
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

export class Complaints extends Component {
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
                              <Label for="Status">Status</Label>
                              <Input
                                type="text"
                                name="Status"
                                id="Status"
                                placeholder="Status"
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
                      <th scope="col">Name ↑↓</th>
                      <th scope="col">Complaint ↑↓</th>
                      <th scope="col">Status ↑↓</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <th scope="row">Adeel Ahmad</th>
                      <th scope="row">
                        The prisoner in cell 20 is making a lot of noise and not
                        eating
                      </th>
                      <th scope="row">Reslved</th>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <th scope="row">Adeel Ahmad</th>
                      <th scope="row">
                        The prisoner in cell 20 is making a lot of noise and not
                        eating
                      </th>
                      <th scope="row">Uresolved</th>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <th scope="row">Adeel Ahmad</th>
                      <th scope="row">
                        The prisoner in cell 20 is making a lot of noise and not
                        eating
                      </th>
                      <th scope="row">Unresolved</th>
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

export default Complaints;
