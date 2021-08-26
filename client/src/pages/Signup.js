import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { AuthContext } from "../contexts/AuthContext"
import axios from "axios";

const Signup = () => {
  const history = useHistory()
  const [currentUser, setCurrentUser] = useContext(AuthContext);

    const googleSuccess = async (res) => {
      console.log("success");

      // optional chaining operator -> wont throw errors if no res.
      const result = res?.profileObj
      const token = res?.tokenId


      try {
        console.log(res)
        const data = await axios.post("/auth/google-auth", { result, token })
        // update our auth context
        setCurrentUser ({result: {...result, firstName: result.givenName, lastName: result.familyName}, token})
        history.push("/")
      } catch (error) {
        console.log(error)
      }
    }

    const googleFailure =(error) => {
      console.log("fail");
      console.log(error);
    }

    return (<div>
    <form>
      <input className="block border-2"/>
      <input className="block border-2"/>
      <button>Submit</button>
      <GoogleLogin
        clientId="1017480087497-36kl8brcc5hdoha361jauklkh4mjbvg3.apps.googleusercontent.com"
        onSuccess={googleSuccess}
        onFailure ={googleFailure}
        cookiePolicy ="single_host_origin"
        render = {(renderProps) => (
          <button className="bg-green-500 hover:bg-green-700 rounded text-white font-bold py-2 px-4 block" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign Up with Google</button>
        )
       }
       />
    </form>
    </div>);
  };
  
  export default Signup;
  