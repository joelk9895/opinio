import { useEffect } from "react";
import "./Signup.css";
import TweenMax from "gsap";

const Signup = () => {
  useEffect(() => {
    TweenMax.fromTo(
      ".oops",

      {
        opacity: 0.5,
        y: 1,
        scale: 0.87,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
      }
    );
  }, []);
  return (
    <div className="signuppage">
      <p className="oops">
        Oops, We are still working on this page <span>🚧</span>
      </p>
    </div>
  );
};

export default Signup;
