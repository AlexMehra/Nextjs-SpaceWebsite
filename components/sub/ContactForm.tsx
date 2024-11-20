"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(true); // Manage form visibility
  const [isSubmitting, setIsSubmitting] = useState(false); // Handle form submission state
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null); // Track form submission status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    const serviceID = "service_p1dk9xn"; // replace with your EmailJS service ID
    const templateID = "template_h6t2jpq"; // replace with your EmailJS template ID
    const publicKey = "tllBJ9ggJRtaiojt9"; // replace with your EmailJS public key

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmissionStatus("success");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setSubmissionStatus("error");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const closeForm = () => {
    setIsFormVisible(false); // Hide the form when the close button is clicked
  };

  return (
    <>
      {/* Show the form only if isFormVisible is true */}
      {isFormVisible && (
        <form
          onSubmit={handleSubmit}
          id="contact-form"
          className="shadow-md rounded-lg p-8 max-w-lg w-full bg-white-100 mx-auto relative"
        >
          {/* Close button for mobile devices */}
          <button
            type="button"
            onClick={closeForm}
            aria-label="Close contact form"
            className="absolute top-4 right-4 text-white bg-gray-700 p-2 rounded-full sm:hidden"
          >
            X
          </button>

          <motion.div
            variants={slideInFromTop}
            className="text-3xl font-medium text-center text-gray-200 mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Contact Us
            </span>
          </motion.div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 px-4 py-2 bg-slate-800 w-full border rounded-lg focus:outline-none focus:ring-2 text-white focus:ring-blue-400 box-border"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 px-4 py-2 bg-slate-800 w-full border rounded-lg focus:outline-none text-white focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-400 font-semibold">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 px-4 py-2 bg-slate-800 w-full border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-400 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 px-4 py-2 w-full bg-slate-800 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {/* Success/Error Message */}
          {submissionStatus && (
            <div
              className={`mt-4 text-center ${submissionStatus === "success" ? "text-green-500" : "text-red-500"}`}
            >
              {submissionStatus === "success" ? "Message sent successfully!" : "Failed to send message, please try again."}
            </div>
          )}
        </form>
      )}
    </>
  );
};

export default ContactForm;
