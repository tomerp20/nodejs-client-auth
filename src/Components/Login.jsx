import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);
  const logIn = () => {
    const signInProcess = signIn(username, password);
    if(signInProcess) {
      navigate("/");
    }
  };

  return (
    <Container>
      <h1 className="d-6 text-white font-weight-normal">Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white font-weight-light">
            Username or <Link to="/Signup">Signup</Link>
          </Form.Label>
          <div className="inputData">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
          </div>

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-white font-weight-light">
            Password
          </Form.Label>
          <div className="inputData">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className="text-muted"
            type="checkbox"
            label="Check me out"
          />
        </Form.Group>
        <div className="d-flex flex-row-reverse test">
          <Button variant="primary" type="button" onClick={() => logIn()}>
            Sign in
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
