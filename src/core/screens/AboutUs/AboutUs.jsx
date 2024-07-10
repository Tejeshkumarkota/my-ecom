import React from "react";
import MasterLayout from "../../../shared/_components/MasterLayout";

export default function AboutUs() {
  return (
    <MasterLayout>
      <div>
        <h1>About Us</h1>
        <p>
          Welcome to My E-commerce! Founded in 2024, My E-commerce is dedicated
          to bringing you high-quality products at competitive prices. Our
          mission is to make shopping easier and more enjoyable.
        </p>
        <h2>Our Offerings</h2>
        <ul>
          <li>
            <strong>Fashion & Accessories:</strong> Trendy clothing, stylish
            footwear, and chic accessories.
          </li>
          <li>
            <strong>Home & Kitchen:</strong> Essentials like cookware, home
            decor, and smart gadgets.
          </li>
          <li>
            <strong>Electronics & Gadgets:</strong> The latest smartphones,
            innovative tech, and must-have gadgets.
          </li>
        </ul>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Quality Assurance:</strong> Only the best products.
          </li>
          <li>
            <strong>Customer Satisfaction:</strong> Top-notch service.
          </li>
          <li>
            <strong>Fast Shipping:</strong> Quick and secure delivery.
          </li>
          <li>
            <strong>Easy Returns:</strong> Hassle-free process.
          </li>
        </ul>
        <h2>Our Commitment</h2>
        <p>
          We prioritize sustainability and ethical practices, using eco-friendly
          packaging and responsible sourcing.
        </p>
      </div>
    </MasterLayout>
  );
}
