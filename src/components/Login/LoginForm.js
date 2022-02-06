import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";
import { auth } from "../../firebase";

export default function LoginForm() {
  const handleSubmit = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required("is required"),
        password: Yup.string()
          .required("is required")
          .max(20, "should be less than 20 characters")
          .min(7, "to short"),
      })}
    >
      {({ isValid }) => (
        <Form className=" flex flex-col">
          <Field
            name="email"
            placeholder="Email"
            className="border border-white text-black m-1 p-1 bg-gray-50/70"
          />
          <ErrorMessage name="email" component="div" className="error" />
          <Field
            name="password"
            placeholder="Password"
            className="border border-white text-black m-1 p-1 bg-gray-50/70"
            type="password"
          />
          <ErrorMessage name="password" component="div" className="error" />

          <button
            disabled={!isValid}
            className={
              isValid
                ? "button border border-white py-1 px-2 text-white m-1"
                : ""
            }
            type="submit"
          >
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
}
