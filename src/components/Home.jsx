import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { assets } from "./assets/assets";
import emailjs from "emailjs-com";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const titles = ["Software Developer", "Tech Enthusiast", "Web Designer"];
  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const typingSpeed = 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const typeTitle = () => {
      if (currentTitle.length < titles[titleIndex].length) {
        setCurrentTitle(
          (prev) => prev + titles[titleIndex][currentTitle.length]
        );
      } else {
        setTimeout(() => {
          setCurrentTitle("");
          setTitleIndex((titleIndex + 1) % titles.length);
        }, 1000);
      }
    };

    const typingInterval = setInterval(typeTitle, typingSpeed);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer);
    };
  }, [currentTitle, titleIndex]);
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    emailjs.init("ivaJM-_IgYJOyevvR"); // Replace with your EmailJS user ID

    emailjs
      .send("service_ibddi3s", "template_0n2j55m", formData)
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Message sent successfully!");
        event.target.reset(); // Clear input fields
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <div>
      {loading ? (
        <div className="text-center mt-5">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a
              className="navbar-brand mb-0 h1"
              href="#"
              style={{ marginLeft: "10px" }}
            >
              MX Portfolio
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#certificate">
                    Certificate
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container mt-5 pt-5">
            {/* Home Section */}
            <section
              id="home"
              className="text-center mb-5 d-flex align-items-center"
            >
              <div className="row">
                <div className="col-md-8 d-flex flex-column justify-content-center">
                  <h1>Welcome to My Portfolio</h1>
                  <h3>
                    I am <span className="typing-text">{currentTitle}</span>
                  </h3>
                  <p className="lead">
                    Hello! I’m Max, a web developer with experience in creating
                    dynamic and responsive websites.
                  </p>
                </div>
                <div className="col-md-3">
                  <img
                    src={assets.image}
                    alt="Profile"
                    style={{ marginTop: "-10px" }}
                    className="img-fluid rounded-circle"
                  />
                </div>
              </div>
            </section>

            {/* Certificate Section */}
            <section id="certificate" className="mb-5">
              <h2 className="text-center mb-4">Certificates</h2>
              <p className="text-center">
                Completed Web Development course on Udacity, specializing in
                front-end development and UI design.
              </p>
              <div className="d-flex justify-content-center flex-wrap">
                <a
                  href="https://www.udacity.com/certificate/e/eba32860-8bf2-11ef-8e94-1b7bbf581800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={assets.Data}
                    alt="Certificate 1"
                    className="img-fluid m-2"
                    style={{ maxWidth: "300px" }}
                  />
                </a>
                <a
                  href="https://www.udacity.com/certificate/e/c23d3224-8af6-11ef-94ea-8b4fcf964112"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={assets.App}
                    alt="Certificate 2"
                    className="img-fluid m-2"
                    style={{ maxWidth: "300px" }}
                  />
                </a>
                <a
                  href="https://www.udacity.com/certificate/e/b2468250-522d-11ef-be3b-dbb5543b7e82"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={assets.Web}
                    alt="Certificate 3"
                    className="img-fluid m-2"
                    style={{ maxWidth: "300px" }}
                  />
                </a>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-5">
              <h2 className="text-center mb-4">Projects</h2>
              <div className="row text-center">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      src={assets.All}
                      alt="Weather App Project"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Weather App</h5>
                      <p className="card-text">
                        A weather app that fetches real-time weather data using
                        an API and displays it with an intuitive UI.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      src={assets.Web}
                      alt="To-Do List Project"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">To-Do List App</h5>
                      <p className="card-text">
                        A dynamic to-do list application with task management
                        features, built with React and Bootstrap.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      src={assets.Web}
                      alt="Chatbot AI Project"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Chatbot AI</h5>
                      <p className="card-text">
                        A chatbot AI built in Python that interacts with users
                        in real-time, offering conversational responses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="mb-5">
              <h2 className="text-center mb-4">Skills</h2>
              <div className="d-flex flex-wrap justify-content-center">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Bootstrap",
                  "Python",
                  "Node.js",
                  "Next.js",
                ].map((skill, index) => (
                  <div key={index} className="m-2 p-3 bg-light border rounded">
                    <span className="d-block">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-5">
              <h2 className="text-center mb-4">Contact Me</h2>
              <form
                onSubmit={handleSubmit}
                className="mx-auto"
                style={{ maxWidth: "600px" }}
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
