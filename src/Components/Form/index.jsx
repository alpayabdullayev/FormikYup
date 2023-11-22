import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import useLocalStorage from "../../Hooks/UseLocalStorage";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./index.scss";
import { useState } from "react";

function FormFormikyup() {
  const [local, setLocal] = useLocalStorage("signUp");
//   const [value, setValue] = useState("")
 

  const SignUpSchema = object().shape({
    username: string()
      .min(3, "min 3 xarakter olmalıdır")
      .max(15, "max 15 xarakter olmalidir")
      .required("zəhmət olmasa doldurun")
      .matches(
        /^[A-Z][a-z]*$/,
        "Zəhmət Olmasa Ilk Hərf Böyük və ya düzgün daxil edin"
      ),
    lastname: string()
      .min(3, "min 3 xarakter olmalıdır")
      .max(15, "max 20 xarakter olmalidir")
      .matches(
        /^[A-Z][a-z]*$/,
        "zəhmət olmasa Ilk Hərf Böyük və ya düzgün daxil edin"
      )
      .required("bos olmasin"),
    email: string()
      .email("zəhmət olmasa duzgun daxil edin")
      .required("zəhmət olmasa doldurun")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
        "zəhmət olmasa duzgun daxil edin"
      ),
    password: string()
      .min(6, "min 6 xarakter olmali")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
        "zəhmət olmasa duzgun daxil edin"
      )
      .required("Password Məcburidir"),
  });

  const handleFormSubmit = async (values, { resetForm }) => {
    setLocal(values);
    const MySwal = withReactContent(Swal);
    await MySwal.fire({
      title: "Qeydiyyat Uğurla Başa Çatdı!",
      text: "You clicked the button!",
      icon: "success"
    });
    console.log(values);
    console.log(Object.values(values));  
    resetForm();
  };

//   const fieldEmpty = Object.values(values).some(x => x === "");
//   console.log(Object.values(values));
// console.log(values);




  return (
    <>
      <div className="formikYupContainer">
        <div className="formik">
          <h1 className="title">SIGN UP</h1>
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={SignUpSchema}
            onSubmit={handleFormSubmit}
            
          >

            {
                
                ({values})=>(
    
                    <Form  >
                
                    <div className="fieldContainer">
                      <label htmlFor="username" className="labelField">
                        First Name
                      </label>
                      {
                        console.log(values)
                      }
                      <Field
                        className="field"
                        placeholder="Enter First Name..."
                        type="text"
                        name="username"
                      />
                      <br />
                      <span className="errorMesage">
                        <ErrorMessage name="username" />
                      </span>
                    </div>
      
                    <div className="fieldContainer">
                      <label htmlFor="lastname" className="labelField">
                        Last Name
                      </label>
                      <Field
                        className="field"
                        placeholder="Enter Last Name..."
                        type="text"
                        name="lastname"
                      />
                      <br />
                      <span className="errorMesage">
                        <ErrorMessage name="lastname" />
                      </span>
                    </div>
      
                    <div className="fieldContainer">
                      <label htmlFor="username" className="labelField">
                        Email Adress
                      </label>
                      <Field
                        className="field"
                        placeholder="Enter Email Adress..."
                        type="text"
                        name="email"
                      />
                      <br />
                      <span className="errorMesage">
                        <ErrorMessage name="email" />
                      </span>
                    </div>
      
                    <div className="fieldContainer">
                      <label htmlFor="username" className="labelField">
                        Password
                      </label>
                      <Field
                        className="field"
                        placeholder="Enter Password..."
                        type="password"
                        name="password"
                      />
                      <br />
                      <span className="errorMesage">
                        <ErrorMessage name="password" />
                      </span>
                    </div>
      
                    <button type="submit" disabled={Object.values(values).some(x => x === "")}  className="BtnSubmit">
                      Sign Up
                    </button>
                    
                  </Form>

  
                )
                
            }
          </Formik>
        </div>
      </div>
    </>
  );
}

export default FormFormikyup;
