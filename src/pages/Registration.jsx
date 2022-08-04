import React from 'react';
import MyButton from "components/UI/button/MyButton";
import { object, string } from "yup";
import { Formik, Form, Field, ErrorMessage  } from "formik";
import classNames from 'classnames';
import AuthService from 'API/AuthService';
import { useNavigate } from 'react-router-dom';


const userSchema = object().shape({
    firstname: string().min(3).required('First name is a required field'),
    lastname: string().required('Last name is a required field'),
    email: string().email('Email is invalid').required('Email is a required field'),
    username: string().min(4).required('Username is a required field'),
    password: string().min(4).required('Password is a required field')
});

const Registration = () => {
    const navigate = useNavigate();


    const registrationSubmit = async (data) => {
        const response = await AuthService.registration(data)
        if (response.data.status) {
            navigate('/login')
        }
    }
   
    return (
        <div className="page-registration">
            <Formik 
            initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                username: '',
                password: ''
            }}
            validationSchema={userSchema}
            onSubmit={registrationSubmit}
            render={({ errors, touched}) => (
                <Form className="form-normal">
                    <h2>Sign up with your email</h2>
                    <p>Already have an account? <a href="#">Sign in</a></p>
                    <div className="form-control">
                        <Field 
                            placeholder="First name" 
                            className={classNames(
                                'input-text',
                                { 'is-invalid': errors.firstname && touched.firstname })} 
                            name="firstname" />
                        <ErrorMessage name="firstname" component="div" className="message-invalid" />
                    </div>
                    <div className="form-control">
                        <Field 
                            placeholder="Last name" 
                            className={classNames(
                                'input-text',
                                { 'is-invalid': errors.lastname && touched.lastname })}  
                            name="lastname"  />
                        <ErrorMessage name="lastname" component="div" className="message-invalid" />
                    </div>
                    <div className="form-control">
                        <Field 
                            placeholder="Email address" 
                            name="email" 
                            className={classNames(
                                'input-text',
                                { 'is-invalid': errors.email && touched.email })} />
                        <ErrorMessage name="email" component="div" className="message-invalid" />
                    </div>
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
                        Create account
                    </MyButton>
                </Form>
            )}
            />
        </div>
    );
};

export default Registration;