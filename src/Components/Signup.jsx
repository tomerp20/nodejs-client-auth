import { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import { AuthContext } from './../Context/AuthContext';


function Signup(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signUp, signIn } = useContext(AuthContext);
  const  registerUser = async(e) => {
    e.preventDefault();
    //valite the user input


    //post request to to sign up api
    const request = await signUp(username, email, password);
    if(request) {
      const signInProcess = await signIn(username, password);
      if(signInProcess) {
        navigate("/");
      }

    }
    //Feedback, or interaction with the user.
    //if the user is registered, Perforn a sign in
    //Redirect the homepage
  
  }


  // checkIfEmailAleryExist = async (email) => {
  //   //check if email already exist
  // }


  return (
    <Container>
      <h1 className="d-6 text-white font-weight-normal">Sign-Up</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white font-weight-light">
            Username
          </Form.Label>
          <div className="inputData">
            <Form.Control type="text" placeholder="Enter username" onChange={(event)=> setUsername(event.target.value)} value={username}/>
          </div>

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white font-weight-light">
            Email address
          </Form.Label>
          <div className="inputData">
            <Form.Control type="email" placeholder="Enter email" onChange={(event)=> setEmail(event.target.value)} value={email}/>
          </div>
          <Form.Text className="text-muted ">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label className="text-white font-weight-light">
            Password
          </Form.Label>
          <div className="inputData">
            <Form.Control
              type="password"
              placeholder="Enter new password"
              autoComplete="on"
              value={password}
              onChange={(event)=> setPassword(event.target.value)}
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
        <div className="d-flex flex-row-reverse">
          <Button
            variant="primary"
            type="submit"
            className=""
            onClick={registerUser}
          >
            SignUp
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Signup;
