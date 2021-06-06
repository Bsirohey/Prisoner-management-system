import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Spinner,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";
import { login } from "Provider/Auth";
import { getToken } from "Provider/Auth";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      checked: true,
      requestGoing: false,
      emailValid: "",
      passwordValid: "",
      errorText: getToken(),
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.goToHomePage = this.goToHomePage.bind(this);
  }
  goToHomePage() {
    window.location.href = "/";
  }

  handleClick(event) {
    event.preventDefault();
    if (
      RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
        this.state.email
      ) &&
      this.state.password.length !== 0
    ) {
      this.setState({
        passwordValid: "",
        emailValid: "",
      });
      login("sdsdsdsd");
      this.goToHomePage();
      return;
    }
    if (this.state.password.length === 0)
      this.setState({
        passwordValid: "has-danger",
      });
    else
      this.setState({
        passwordValid: "",
      });
    if (
      !RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.email)
    )
      this.setState({
        emailValid: "has-danger",
      });
    else
      this.setState({
        emailValid: "",
      });
  }
  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center py-3">
                <img
                  alt="..."
                  src={require("assets/img/brand/logo.png")}
                  height="200px"
                />
              </div>
              <div className="p-3" style={{ color: "#f5365c" }}>
                {this.state.errorText}
              </div>
              <Form role="form">
                <FormGroup className={"mb-3 " + this.state.emailValid}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className={this.state.passwordValid}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={(e) => {
                      this.setState({ checked: e.target.checked });
                    }}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  {this.state.requestGoing === true ? (
                    <Spinner
                      className="my-4"
                      animation="border"
                      variant="primary"
                    />
                  ) : (
                    <Button
                      className="my-4"
                      color="primary"
                      type="submit"
                      onClick={this.handleClick}
                    >
                      Sign in
                    </Button>
                  )}
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Login;
