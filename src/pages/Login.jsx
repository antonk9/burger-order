import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { Formik, Form, Field, ErrorMessage  } from "formik";
import classNames from 'classnames';
import MyButton from "components/UI/button/MyButton";
import AuthService from "API/AuthService";

const Login = () => {
    const { state } = useLocation();
    const [formErrors, setFormErrors] = useState('')
    const navigate = useNavigate();

    console.log(state)

    const userSchema = object().shape({
        username: string().min(4).required('Username is a required field'),
        password: string().min(4).required('Password is a required field')
    });

    const loginSubmit = async (data) => {
        const response = await AuthService.login(data)
        if (response.message) {
            setFormErrors(response.message)
        }

        if (state.redirectPage) {
            navigate(state.redirectPage)
        }
    }

    return (
        <div className="page-login">
            <Formik 
            initialValues={{
                username: '',
                password: ''
            }}
            validationSchema={userSchema}
            onSubmit={loginSubmit}
            render={({ errors, touched}) => (
                <Form className="form-normal">
                    <p className="form-errors">{ formErrors }</p>
                    <h2>Sign in with your username</h2>
                    <div className="form-control">
                        <Field 
                            placeholder="Username" 
                            name="username" 
                            className={classNames(
                                'input-text',
                                { 'is-invalid': errors.username && touched.username })} />
                        <ErrorMessage name="username" component="div" className="message-invalid" />
                    </div>
                    <div className="form-control">
                        <Field 
                            placeholder="Password" 
                            name="password" 
                            className={classNames(
                                'input-text',
                                { 'is-invalid': errors.password && touched.password })}
                            type="password" />
                        <ErrorMessage name="password" component="div" className="message-invalid" />
                    </div>
                    <MyButton type="submit" theme="dark">
                        Log in
                    </MyButton>
                </Form>
            )}
            />
        </div>
    );
};

export default Login;