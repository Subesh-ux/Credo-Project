
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import formfields from "../Components/json/formfields.json";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
    const [fields, setFields] = useState(formfields);
    const navigate = useNavigate()

    return (
        <div className="min-vh-100 bg-light">

            {/* Login Section */}
            <div className="container py-5">

                <div className="text-center mb-5">
                    <h1 className="fw-bold text-danger">
                        Welcome to Vettri Hospitals
                    </h1>

                    <p className="text-secondary">
                        Please login to continue
                    </p>
                </div>

                <div className="row justify-content-center g-4">

                    {/* Administrator Login */}
                    <div className="col-12 col-md-6 col-lg-5">

                        <div className="card border-0 shadow-lg h-100">

                            <div className="card-header bg-danger text-warning text-center py-3">

                                <i className="bi bi-shield-lock-fill fs-2"></i>

                                <h4 className="fw-bold mb-0 mt-2">
                                    Administrator Login
                                </h4>

                            </div>

                            <div className="card-body p-4">

                                <Formik
                                    initialValues={{
                                        username: "",
                                        password: ""
                                    }}

                                    validationSchema={Yup.object({
                                        username: Yup.string()
                                            .required("Please Enter Your UserName"),

                                        password: Yup.string()
                                            .required("Please Enter a Valid Password")
                                    })}

                                     onSubmit={(values) => {
                                        fetch('POST https://dummyjson.com/auth/login', {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                username: values.username,
                                                password: values.password
                                            })
                                        })

                                        .then(response =>{
                                            if (response.ok){
                                                return response.json
                                            }
                                            else
                                                alert("Invalid Username or Password")
                                                return null
                                        })

                                        .then(data=>{
                                            if(data && data.token){
                                                navigate("/Home")
                                            }
                                        })
                                    }}
                                >

                                    <Form>

                                        {
                                            fields.map((value, index) => {

                                                return (
                                                    <div
                                                        key={index}
                                                        className="mb-3"
                                                    >

                                                        <label
                                                            htmlFor={value.fieldName}
                                                            className="form-label fw-semibold"
                                                        >
                                                            {value.fieldLabel}
                                                        </label>

                                                        <Field
                                                            type={value.fieldType}
                                                            name={value.fieldName}
                                                            id={value.fieldName}
                                                            className="form-control"
                                                            placeholder={`Enter ${value.fieldLabel}`}
                                                        />

                                                        <ErrorMessage
                                                            name={value.fieldName}
                                                            component="div"
                                                            className="text-danger small mt-1"
                                                        />

                                                    </div>
                                                );
                                            })
                                        }

                                        <button
                                            type="submit"
                                            className="btn btn-danger w-100 rounded-pill fw-bold py-2 mt-2"
                                        >
                                            <i className="bi bi-box-arrow-in-right me-2"></i>
                                            Login
                                        </button>

                                    </Form>

                                </Formik>

                            </div>

                        </div>

                    </div>


                    {/* User Login */}
                    <div className="col-12 col-md-6 col-lg-5">

                        <div className="card border-0 shadow-lg h-100">

                            <div className="card-header bg-warning text-danger text-center py-3">

                                <i className="bi bi-person-circle fs-2"></i>

                                <h4 className="fw-bold mb-0 mt-2">
                                    User Login
                                </h4>

                            </div>

                            <div className="card-body p-4">

                                <Formik
                                    initialValues={{
                                        username: "",
                                        password: ""
                                    }}

                                    validationSchema={Yup.object({
                                        username: Yup.string()
                                            .required("Please Enter Your UserName"),

                                        password: Yup.string()
                                            .required("Please Enter a Valid Password")
                                    })}

                                    onSubmit={(values) => {
                                        fetch('https://fakestoreapi.com/auth/login', {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                username: values.username,
                                                password: values.password
                                            })
                                        })

                                        .then(response =>{
                                            if (response.ok){
                                                return response.json
                                            }
                                            else
                                                alert("Invalid Username or Password")
                                                return null
                                        })

                                        .then(data=>{
                                            if(data && data.token){
                                                navigate("/Home")
                                            }
                                        })
                                    }}
                                >

                                    <Form>

                                        {
                                            fields.map((value, index) => {

                                                return (
                                                    <div
                                                        key={index}
                                                        className="mb-3"
                                                    >

                                                        <label
                                                            htmlFor={value.fieldName}
                                                            className="form-label fw-semibold"
                                                        >
                                                            {value.fieldLabel}
                                                        </label>

                                                        <Field
                                                            type={value.fieldType}
                                                            name={value.fieldName}
                                                            id={value.fieldName}
                                                            className="form-control"
                                                            placeholder={`Enter ${value.fieldLabel}`}
                                                        />

                                                        <ErrorMessage
                                                            name={value.fieldName}
                                                            component="div"
                                                            className="text-danger small mt-1"
                                                        />

                                                    </div>
                                                );
                                            })
                                        }

                                        <button
                                            type="submit"
                                            className="btn btn-danger w-100 rounded-pill fw-bold py-2 mt-2"
                                        >
                                            <i className="bi bi-box-arrow-in-right me-2"></i>
                                            Login
                                        </button>

                                    </Form>

                                </Formik>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}