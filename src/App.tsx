import "./App.css";
import { Elastic, Power0, gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

function App() {
  function logohover() {
    let animate = gsap.fromTo(".logo", { skewX: 0 }, { skewX: -10 });

    animate.play();
  }
  function logohoverout() {
    let animate = gsap.fromTo(".logo", { skewX: -10 }, { skewX: 0 });

    animate.play();
  }
  function joinhover() {
    let animate = gsap.fromTo(
      ".cta-signup",
      { borderRadius: "10px", skewX: 0 },
      { borderRadius: "0px", skewX: -10 }
    );

    animate.play();
  }
  function joinhoverout() {
    let animate = gsap.fromTo(
      ".cta-signup",
      { borderRadius: "0", skewX: -10 },
      { borderRadius: "10px", skewX: 0 }
    );

    animate.play();
  }
  useEffect(() => {
    var tl = gsap.timeline({ ease: Elastic });
    tl.fromTo(
      ".landing",

      {
        width: "80vw",
        height: "80vh",
        top: "10%",
        borderRadius: "50px",
      },
      {
        width: "100vw",
        height: "100vh",
        top: "0",
        borderRadius: "0",
        scrollTrigger: {
          trigger: ".landing",
          start: "top 10%",
          end: "bottom center",
          scrub: 1,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#message1",

      {
        opacity: "1",
      },
      {
        opacity: "0",

        scrollTrigger: {
          trigger: ".landing",
          start: "71% 10%",
          end: "middle center",
          scrub: 1,
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      "#message2",

      {
        opacity: "0",
      },
      {
        opacity: "1",
        scrollTrigger: {
          trigger: ".landing",
          start: "72% 10%",
          end: "center center",
          scrub: 1,
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      "#logo",

      {
        color: "#212121",
      },
      {
        color: "#1136A5",
        scrollTrigger: {
          trigger: ".landing",
          start: "10% 10%",
          end: "end end",
          scrub: 2,
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      "#Scroll",

      {
        opacity: "1",
      },
      {
        opacity: "0",
        scrollTrigger: {
          trigger: ".landing",
          start: "10% 10%",
          end: "end end",
          scrub: 1,
        },
      }
    );
  }, []);
  useEffect(() => {
    var tl = gsap.timeline({ ease: Elastic });
    tl.fromTo(
      ".video",

      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".landing",
          start: "99% 0",
          end: "bottom center",
          scrub: 1,
        },
      }
    );
  }, []);
  useEffect(() => {
    var tl = gsap.timeline({ ease: Elastic });
    tl.fromTo(
      ".video-border",

      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".landing",
          start: "99% 0",
          end: "bottom center",
          scrub: 1,
        },
      }
    );
  }, []);
  useEffect(() => {
    var tl = gsap.timeline({ ease: Power0 });
    tl.fromTo(
      ".cta-signup",

      {
        y: 0,
      },
      {
        y: 50,
        scrollTrigger: {
          trigger: ".landing",
          start: "90% 0",
          end: "bottom center",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="App">
        <h1
          id="logo"
          className="logo"
          onMouseEnter={logohover}
          onMouseLeave={logohoverout}
        >
          Opinio
        </h1>
        <div className="landing">
          <h2 id="message1">
            Gather valuable feedback and improve your product with Opinio,
            trusted by thousands of product teams worldwide.
          </h2>
          <h2 id="message2">Join Now</h2>
          <div className="video-border">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/9XOPvS6a6yE?autoplay=0&mute=0&loop=0&color=white&controls=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;  web-share"
            ></iframe>
          </div>
          <div
            className="cta-signup"
            onMouseEnter={joinhover}
            onMouseLeave={joinhoverout}
          >
            <Link to={"/signup"} className="join">
              <p className="join">Join</p>
            </Link>
          </div>
        </div>
        <p id="Scroll">Let's Scroll ↓</p>
      </div>
    </>
  );
}

export default App;
