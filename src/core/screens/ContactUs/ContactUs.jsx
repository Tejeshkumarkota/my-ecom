import React from "react";
import MasterLayout from "../../../shared/_components/MasterLayout";
import { toast, ToastContainer } from "react-toastify";

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onSubmit = () => {
    toast.success("Form submitted successfully!");
  }

  return (
    <MasterLayout>
      <div className="con-box">
        <div>
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you! Whether you have a question, feedback,
            or need assistance, our team is here to help.
          </p>
          <h2>Get in Touch</h2>
          <ul>
            <li>
              <strong>Email:</strong> support@yourcompany.com
            </li>
            <li>
              <strong>Phone:</strong> 1-800-123-4567
            </li>
            <li>
              <strong>Address:</strong> 123 Your Street, Your City, Your Country
            </li>
          </ul>
          <h2>Customer Support Hours</h2>
          <ul>
            <li>
              <strong>Monday - Friday:</strong> 9 AM - 5 PM
            </li>
            <li>
              <strong>Saturday:</strong> 9 AM - 1 PM
            </li>
            <li>
              <strong>Sunday:</strong> Closed
            </li>
          </ul>
          <p>
            Thank you for choosing My E-commerce. We look forward to assisting
            you!
          </p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter Name" required />
            <label htmlFor="email">Email ID</label>
            <input type="email" id="email" placeholder="Enter Email ID" required />
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="Enter Phone Number" required />
            <label htmlFor="comments">Comments</label>
            <textarea rows="5" id="comments" className="d-block" placeholder="Enter comments if any"></textarea>
            <div>
              <button onClick={onSubmit}> Submit </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer theme="colored" />
    </MasterLayout>
  );
}
