import React from "react";
import "./Signup.css";
import { gsap } from "gsap";

const Signup = () => {
  const [firstname, setfirstname] = React.useState("");
  const [email, setemail] = React.useState("");
  function adddata(e: any) {
    console.log(firstname, email);
    e.preventDefault();
    const formData = {
      // Populate this object with your form data
      // Example: name: 'John Doe', email: 'john@example.com'
    };

    fetch(
      "https://opiniobackend.azurewebsites.net/api/databaseadd/{name}/{email}?code=xebLZGpZxerXnqWIKRJbwqOd8fjLdfLscFbTQ-Rr0_cHAzFuza6seg==",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the Azure Function
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error:", error);
      });
  }
  function joinhover() {
    let animate = gsap.fromTo(
      ".signup-btn",
      { borderRadius: "10px", skewX: 0 },
      { borderRadius: "0px", skewX: -10 }
    );

    animate.play();
  }
  function joinhoverout() {
    let animate = gsap.fromTo(
      ".signup-btn",
      { borderRadius: "0", skewX: -10 },
      { borderRadius: "10px", skewX: 0 }
    );

    animate.play();
  }
  return (
    <div className="signuppage">
      <div className="sigunp-modal">
        <form className="signup-form" action="" method="post">
          <p>
            Hello Opinio,
            <br /> My name is{" "}
            <input
              className="firstname"
              type="text"
              name=""
              onChange={(e) => setfirstname(e.target.value)}
              placeholder="First Name"
              id=""
            />
            and my email id is{" "}
            <input
              className="email"
              type="email"
              onChange={(e) => setemail(e.target.value)}
              name=""
              placeholder="Email"
              id=""
            />
            I would like to join the waiting list.
          </p>

          <input
            onMouseEnter={joinhover}
            onMouseLeave={joinhoverout}
            className="signup-btn"
            onClick={adddata}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
