import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  FormGroup,
  Input,
  Form,
  Card,
  Label,
  FormText,
  CardTitle,
  Button,
  CardFooter,
} from "reactstrap";

import FileBase64 from "react-file-base64";

import Header from "components/Headers/Header.js";

export class Character extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Card className="bg-white">
            <CardTitle>
              <h1 className="text-center pt-3">Add a new prisoner</h1>
              <h5 className="text-center pt-3">Fill out the following form</h5>
            </CardTitle>
            <Form className="p-4">
              <Row>
                <Col md="6" className="py-2">
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input required placeholder="Name" id="name" type="text" />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <Label for="image">Image</Label>
                    <br />
                    <FileBase64 multiple={false} />
                    <FormText color="muted">
                      Please select an image file for the prisoner to be added.
                    </FormText>
                  </FormGroup>
                </Col>
                <Col xs="12" className="py-2">
                  <FormGroup>
                    <Label for="Assets">Assets</Label>
                    <Input
                      required
                      placeholder="Assets"
                      id="Assets"
                      type="text"
                    />
                  </FormGroup>
                </Col>

                <Col md="6" className="py-2">
                  <FormGroup>
                    <Label for="f-name">F-Name</Label>
                    <Input
                      required
                      placeholder="F-Name"
                      id="f-name"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col md="6" className="py-2">
                  <FormGroup>
                    <Label for="DOB">DOB</Label>
                    <Input required placeholder="DOB" id="DOB" type="date" />
                  </FormGroup>
                </Col>
                <Col md="6" className="py-2">
                  <FormGroup>
                    <Label for="Profession">Profession</Label>
                    <Input
                      required
                      placeholder="Profession"
                      id="Profession"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col md="6" className="py-2">
                  <FormGroup>
                    <Label for="Address">Address</Label>
                    <Input
                      required
                      placeholder="Address"
                      id="Address"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col xs="12" className="py-2">
                  <FormGroup>
                    <Label for="Crime">Crime</Label>
                    <Input
                      required
                      placeholder="Crime"
                      id="Crime"
                      type="text"
                    />
                  </FormGroup>
                </Col>

                <Col md="6" className="py-2">
                  <FormGroup>
                    <Label for="admission">Date of admission</Label>
                    <Input
                      required
                      placeholder="Date of admission"
                      id="admission"
                      type="date"
                    />
                  </FormGroup>
                </Col>
                <Col md="6" className="py-2">
                  <FormGroup>
                    <Label for="release">Date of release</Label>
                    <Input
                      required
                      placeholder="Date of release"
                      id="release"
                      type="date"
                    />
                  </FormGroup>
                </Col>
                <Col md="6" className="py-2">
                  <h3>Execution:</h3>
                  <div className="custom-control custom-radio mb-3">
                    <input
                      className="custom-control-input"
                      id="customRadio5"
                      name="custom-radio-2"
                      type="radio"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio5"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-3">
                    <input
                      className="custom-control-input"
                      defaultChecked
                      id="customRadio6"
                      name="custom-radio-2"
                      type="radio"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio6"
                    >
                      No
                    </label>
                  </div>
                </Col>
                <Col md="6" className="py-2">
                  <FormGroup>
                    <Label for="execution">Execution date</Label>
                    <Input
                      required
                      placeholder="execution"
                      id="execution"
                      type="date"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <CardFooter className="text-center">
                <Button color="default" type="submit">
                  Submit
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Character;
