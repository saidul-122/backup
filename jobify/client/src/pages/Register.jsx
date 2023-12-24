import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FromRow, Logo } from "../components";
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Registre</h4>
        <FromRow type="text" name="First Name" defaultValue=" " />
        <FromRow
          type="text"
          name="Last Name"
          labelText="last name"
          defaultValue=""
        />

        <FromRow type="text" name="Location" defaultValue=" " />
        <FromRow type="email" name="Email" defaultValue=" " />
        <FromRow type="password" name="Password" defaultValue="" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
          
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
