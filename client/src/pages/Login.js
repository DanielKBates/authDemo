import { useContext, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { jwtLogin } from "../utils/api";

import axios from "axios";

const Login = () => {
  const history = useHistory();
  const initialState = { email: "", password: "" };
  const [currentUser, setCurrentUser] = useContext(AuthContext);
  const [formData, setFormData] = useState(initialState);

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      // post form data to server
      const response = await jwtLogin(formData)
      // update our AuthContext
      setCurrentUser({
        result: response.data.result,
        token: response.data.token
      })
      // redirect to home
      history.push("/")
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const googleSuccess = async (res) => {
    // optional chaining operator -> wont throw an error if res object is undefined, result will just have a value of undefined
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      const data = await axios.post("/auth/google-auth", { result, token });
      setCurrentUser({
        result: {
          ...result,
          firstName: result.givenName,
          lastName: result.familyName,
        },
        token: token,
      });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  const googleFailure = (err) => {
    console.log(err);
    console.log("Google Sign in was unsuccessful");
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
      <button onClick={handleSubmit} className="p-2 border-2 rounded border-red-500">Login</button>
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

export default Login;
