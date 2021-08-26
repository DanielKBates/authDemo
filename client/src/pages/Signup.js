import { useState, useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { jwtSignup } from "../utils/api";


import axios from "axios";
const initialState = { firstName: "", lastName: "", email: "", password: "" };


const Signup = () => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useContext(AuthContext);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await jwtSignup(formData);
      setCurrentUser({
        result: response.data.result,
        token: response.data.token,
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };


  const googleSuccess = async (res) => {
    console.log("success");

    // optional chaining operator -> wont throw errors if no res.
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      console.log(res);
      const data = await axios.post("/auth/google-auth", { result, token });
      // update our auth context
      setCurrentUser({
        result: {
          ...result,
          firstName: result.givenName,
          lastName: result.familyName,
        },
        token,
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log("fail");
    console.log(error);
  };

  return (
    <form className="flex-col space-y-2 pl-5">
      <input
        value={formData.email}
        className="border-2 block"
        name="email"
        onChange={handleChange}
        placeholder="email"
      />
      <input
        value={formData.password}
        className="border-2 block"
        name="password"
        onChange={handleChange}
        placeholder="password"
        type="password"
      />
       <input
        value={formData.firstName}
        className="border-2 block"
        name="firstName"
        onChange={handleChange}
        placeholder="firstName"
        type="firstName"
      />
       <input
        value={formData.lastName}
        className="border-2 block"
        name="lastName"
        onChange={handleChange}
        placeholder="lastName"
        type="lastName"
      />
      <button
        onClick={handleSubmit}
        className="p-2 border-2 rounded border-red-500"
      >
        Register
      </button>
      <GoogleLogin
        clientId="1017480087497-36kl8brcc5hdoha361jauklkh4mjbvg3.apps.googleusercontent.com"
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
        render={(renderProps) => (
          <button
            className="bg-green-500 hover:bg-green-700 rounded text-white font-bold py-2 px-4 block"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Sign Up with Google
          </button>
        )}
      />
    </form>
  );
};

export default Signup;
