import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth, db } from "../../firebase";

export default function SignUpForm() {
  const handleSubmit = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password).then(
      async () => {
        await updateProfile(auth.currentUser, {
          displayName: values.username,
        });
        setDoc(doc(db, "users", auth.currentUser.uid), {
          username: values.username,
          email: values.email,
          phoneNumber: values.phoneNumber,
          address: values.address,
        });
      }
    );
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        email: "",
        password: "",
        username: "",
        phoneNumber: "",
        address: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required("is required"),
        password: Yup.string()
          .required("is required")
          .max(20, "should be less than 20 characters")
          .min(7, "to short"),
        username: Yup.string().required("is required"),
        address: Yup.string().required("is required"),
        phoneNumber: Yup.string().required("is required"),
      })}
    >
      {({ errors, touched, isValid }) => (
        <Form className=" flex flex-col">
          <Field
            name="email"
            className="border border-white text-black m-1 p-1 bg-gray-50/70"
            placeholder="Email"
          />
          <ErrorMessage name="email" component="div" className="error" />
          <Field
            name="password"
            className="border border-white text-black m-1 p-1 bg-gray-50/70"
            placeholder="Password"
            type="password"
          />
          <ErrorMessage name="password" component="div" className="error" />
          <Field
            name="username"
            className="border border-white text-black m-1 p-1 bg-gray-50/70"
            placeholder="Username"
          />
          <ErrorMessage name="username" component="div" className="error" />
          <Field
            name="phoneNumber"
            className="border border-white text-black m-1 p-1 bg-gray-50/70"
            placeholder="Mobile phone"
          />
          <ErrorMessage name="phoneNumber" component="div" className="error" />
          <Field
            name="address"
            className="border border-white text-black m-1 p-1 bg-gray-50/70"
            placeholder="enter your address"
          />
          <ErrorMessage name="address" component="div" className="error" />
          <button
            disabled={!isValid}
            className={
              isValid
                ? "button border border-white py-1 px-2 text-white m-1"
                : ""
            }
            type="submit"
          >
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
}
