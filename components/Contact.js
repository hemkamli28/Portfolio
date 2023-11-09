"use client";
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useFormik } from "formik";
import * as Yup from 'yup';
import styles from '@/styles/Contact.module.css';

const Contact = () => {
  const [formKey, setFormKey] = useState(0); // Add a key state for the form

  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .required("Message is required")
      .min(5, "Message should be at least 5 characters")
      .max(1000, "Message should not exceed 1000 characters"),
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    key: formKey, // Pass the form key
    initialValues: {
      email: "",
      message: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      const { email, message } = values;
      const response = await fetch("/api/contact", {
        method: 'POST',
        body: JSON.stringify({
          email,
          message,
        }),
      });
      const json = await response.json();
      if (json.success) {
        toast.success("Message Submitted!");
        resetForm(); // Reset the form values
        setFormKey((prevKey) => prevKey + 1); // Change the form key to trigger a re-render
      } else {
        toast.error("Failed to Send!");
      }
    },
  });

  return (
    <>
      <section className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Contact</h2>
        <form className={styles.messageForm} onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              className={`${styles.email} form-control`}
              placeholder="Email"
              name="email"
              value={values.email}
            />
            {errors.email && touched.email ? (
              <p className={styles.error} >{errors.email}</p>
            ) : null}
          </div>
          <div className="mb-3">
            <textarea
              rows={5}
              cols={50}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              className={`${styles.messageInput} form-control`}
              name="message"
              placeholder="Message"
              value={values.message}
            />
            {errors.message && touched.message ? (
              <p className={styles.error} >{errors.message}</p>
            ) : null}
          </div>
          <div className={styles.submitBtn}>
            <button
              type="submit"
              className={`mt-4 btn ${styles.btn}`}
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
