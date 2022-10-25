import "./Login.css";
import Input from "./components/input/Input";
import Button from "./components/button/Button";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="login">
      <h1 className="facebook">facebook</h1>
      <div className="login_container">
        <center>
          <Form>
            <h3>Log in facebook</h3>
            <h4>Fast and easy</h4>
            <center>
              <Input className="names" type={"name"} placeholder={"Name"} />
            </center>
            <center>
              <Input
                className="names"
                type={"surname"}
                placeholder={"Surname"}
              />
            </center>
            <center>
              <Input type={"email"} placeholder={"Phone number or email"} />
            </center>
            <center>
              <Input type={"email"} placeholder={"New password"} />
            </center>
            <center>
              <button type="submit" className="login_login">
                Log in
              </button>
            </center>
          
          </Form>
        </center>
      </div>
    </div>
  );
}

export default App;
