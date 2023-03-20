import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <section className="contact section-padding" id="contact">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Contact Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipisicing elit. Non, quo.
                </p>
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="row m-0">
              <div className="col-md-12 p-0 pt-4 pb-4">
                <form onSubmit={handleSubmit} className="bg-light p-4 m-auto">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          name="firstName"
                          className="form-control"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          name="lastName"
                          className="form-control"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <input
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <textarea
                          name="message"
                          className="form-control"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <button
                      id="submit-button"
                      className="btn btn-warning btn-lg btn-block mt-3"
                      type="submit"
                    >
                      Send Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
