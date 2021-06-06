import React, { Component } from "react";

import {
  Button,
  Card,
  CardHeader,
  FormGroup,
  InputGroup,
  Input,
  Table,
  Container,
  Row,
  Col,
  Label,
  Form,
  CardBody,
  Modal,
} from "reactstrap";

import Header from "components/Headers/Header.js";
import ComplaintForm from "./examples/ComplaintForm";
import VisitorForm from "./examples/VisitorForm";
import TaskForm from "./examples/TaskForm";
import ActiveCases from "./examples/ActiveCases";

const prisoners_list = [
  "AAYAN",
  "ADEEL",
  "BILAL",
  "DANISH",
  "FAHAD",
  "HAIDER",
  "IMRAN",
  "JAVED",
  "KAMRAN",
  "LARAIB",
  "MAAZ",
  "NABEEL",
  "OWAIS",
  "RASHID",
  "SAAD",
  "UMAIR",
  "WALEED",
  "YASIR",
  "ZAHID",
];

export class Prisoners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      defaultModal: false,
      complaints: false,
      visitor: false,
      tasks: false,
      activeCasses: false,
    };
  }

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Card className=" p-2 bg-default limited-height">
            <Row>
              <Col className="col-12 col-md-6">
                <FormGroup>
                  <InputGroup className="mb-1 bg-default">
                    <Input
                      disabled
                      className="bg-default"
                      placeholder="Search"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col className="col-12 col-md-6">
                <div className="text-center p-3 text-secondary">
                  Total Prisoners: 145
                </div>
              </Col>
            </Row>
            <Table className="align-items-center table-dark" responsive>
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Name ↑↓</th>
                  <th scope="col">Date of admission ↑↓</th>
                  <th scope="col">Date of release ↑↓</th>
                  <th scope="col">Cell Loctaion ↑↓</th>
                  <th className="text-center" scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {prisoners_list.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{item}</th>
                    <th scope="row">01-01-2015</th>
                    <th scope="row">15-11-2019</th>
                    <th scope="row">A-15</th>
                    <td className="text-center">
                      <Button
                        size="sm"
                        onClick={() => {
                          this.setState({
                            showDetails: true,
                          });
                        }}
                      >
                        Get Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
          {!this.state.showDetails ? (
            <Row>
              <Col>
                <Card className="text-center">
                  <CardHeader>
                    Please select a Prisoner to see details.
                  </CardHeader>
                </Card>
              </Col>
            </Row>
          ) : (
            <>
              <Row className="my-3 mb-4">
                <Col className="col-12 col-sm-6 col-lg-4 col-xl-3">
                  <img
                    className="person-img m-2 mt-4"
                    src="https://assets.telegraphindia.com/telegraph/a0e4ca0a-d26e-4a70-a486-fbd5ec4b3386.jpg"
                    alt="Person"
                  ></img>
                </Col>
                <Col className="col-12 col-sm-6 col-lg-8 col-xl-9 pt-3 ">
                  <h1>
                    <b>Name:</b> Adeel Ahmad
                  </h1>
                  <h1>
                    <b>F-Name:</b> Ahmad Nawaz
                  </h1>
                  <h1>
                    <b>Profession:</b> Labour
                  </h1>
                  <h1>
                    <b>DOB:</b> 21/03/1992
                  </h1>
                  <h1>
                    <b>Home Address:</b> I/S Kot Murad Khan, Lahore
                  </h1>
                  <Button
                    className="my-2 mr-4 ml-0  float-left"
                    color="default"
                    type="button"
                  >
                    Edit
                  </Button>

                  <Button className="m-2" color="danger" type="button">
                    Delete
                  </Button>
                </Col>
              </Row>
              <div className="divider"></div>
              <Row className="my-3">
                <Col className="col-12 col-sm-6  pt-3 ">
                  <h1>
                    <b>Crime:</b> Murder
                  </h1>
                  <h1>
                    <b>Date of arrest:</b> 17/06/2019
                  </h1>
                  <h1>
                    <b>Date of release:</b> 21/07/2033
                  </h1>

                  <h1>
                    <b>Jail Location:</b> Kot Lakhpat Jail, Lahore
                  </h1>
                </Col>
                <Col className="col-12 col-sm-6  pt-3 ">
                  <h1>
                    <b>Correctional programs:</b> Mood swings, Anger Management
                  </h1>
                  <h1>
                    <b>Execution status:</b> No
                  </h1>
                  <h1>
                    <b>Execution date:</b> Null
                  </h1>
                </Col>
              </Row>
              <div className="divider"></div>
              <Row className="my-3">
                <Col className="col-12">
                  <h1>
                    <b>Assets:</b> 100 Rupees, 1 Belt, A Rolex Watch, A Pen
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    className="m-2"
                    color="primary"
                    type="button"
                    onClick={() =>
                      this.setState({
                        complaints: true,
                        visitor: false,
                        tasks: false,
                        activeCasses: false,
                      })
                    }
                  >
                    Complaint
                  </Button>
                  <Button
                    className="m-2"
                    color="primary"
                    type="button"
                    onClick={() =>
                      this.setState({
                        complaints: false,
                        visitor: true,
                        tasks: false,
                        activeCasses: false,
                      })
                    }
                  >
                    Visitor
                  </Button>
                  <Button
                    className="m-2"
                    color="primary"
                    type="button"
                    onClick={() => this.toggleModal("formModal")}
                  >
                    Transfer
                  </Button>
                  <Button
                    className="m-2"
                    color="primary"
                    type="button"
                    onClick={() =>
                      this.setState({
                        complaints: false,
                        visitor: false,
                        tasks: true,
                        activeCasses: false,
                      })
                    }
                  >
                    Tasks
                  </Button>
                  <Button
                    className="m-2"
                    color="primary"
                    type="button"
                    onClick={() =>
                      this.setState({
                        complaints: false,
                        visitor: false,
                        tasks: false,
                        activeCasses: true,
                      })
                    }
                  >
                    Active Cases
                  </Button>
                </Col>
              </Row>
              {this.state.complaints && <ComplaintForm></ComplaintForm>}
              {this.state.visitor && <VisitorForm></VisitorForm>}
              {this.state.tasks && <TaskForm></TaskForm>}
              {this.state.activeCasses && <ActiveCases></ActiveCases>}
            </>
          )}
          <Modal
            className="modal-dialog-centered"
            size="sm"
            isOpen={this.state.formModal}
            toggle={() => this.toggleModal("formModal")}
          >
            <div className="modal-body p-0">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-transparent ">
                  <div className="text-center">Add a new transfer</div>
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
                      <Label for="To">To</Label>
                      <Input type="text" name="To" id="To" placeholder="To" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="From">From</Label>
                      <Input
                        type="text"
                        name="From"
                        id="From"
                        placeholder="To"
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
                      <Button className="my-4" color="primary" type="button">
                        Add
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Modal>
        </Container>
      </>
    );
  }
}

export default Prisoners;
