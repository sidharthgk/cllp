import { useNavigate } from "react-router-dom";
import useToggle from "../components/useToggle"; // Relative path to the file
import "../styles/styles.css"; // Import the CSS file

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize the navigation hook
  useToggle(); // Invoke the custom hook

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // Redirect to the dashboard
  };

  return (
    <div className="container" id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icons"><i className="bx bxl-google"></i></a>
            <a href="#" className="icons"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="icons"><i className="bx bxl-github"></i></a>
            <a href="#" className="icons"><i className="bx bxl-linkedin"></i></a>
          </div>
          <span>Register with E-mail</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Enter E-mail" />
          <input type="password" placeholder="Enter Password" />
          <button>Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form onSubmit={handleSignIn}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icons"><i className="bx bxl-google"></i></a>
            <a href="#" className="icons"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="icons"><i className="bx bxl-github"></i></a>
            <a href="#" className="icons"><i className="bx bxl-linkedin"></i></a>
          </div>
          <span>Login With Email & Password</span>
          <input type="email" placeholder="Enter E-mail" />
          <input type="password" placeholder="Enter Password" />
          <a href="#">Forget Password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Already have an account?</h1>
            <p>Sign in with your ID and password</p>
            <button className="hidden" id="login">Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome!</h1>
            <p>Register now to get started</p>
            <button className="hidden" id="register">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
