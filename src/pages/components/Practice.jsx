import React from 'react';
import { useFormik } from 'formik';
const Practice = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: ""
    }
    const onSubmit = values => {
        console.log(values);
    }
    const validate = values => {
        const error = {};

        if(!values.firstName){
            error.name = 'Required'
        }
        if(!values.lastName){
            error.name = 'Required'
        }
        if(!values.email){
            error.name = 'Required'
        }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
            error.email = 'Invalid Email format'
        }
        return error;
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    })
    console.log(formik.values)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Practice;