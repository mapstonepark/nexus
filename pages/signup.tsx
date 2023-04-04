import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup
  .string()
  .required('Password is required')
  .min(5, 'Your password is too short.'),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'This is embarrassing but your passwords do not match. Wanna try again?')

});


export default function signup() {
  return (
    <>
       <h1>You are on the Signup Page</h1>
       <Formik
        initialValues={{
          userName: '',
          email: '',
          password: '',
          confirmPassword: '',
          
        }}
        validationSchema={SignupSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ errors, touched }) => (
        <Form>
          <label htmlFor="userName">Username</label>
          <Field id="userName" name="userName" placeholder="John" />
          {errors.userName && touched.userName ? (
             <div>{errors.userName}</div>
           ) : null}

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="Password" type='password' />

          <label htmlFor="password">Confirm Password</label>
          <Field id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" type='password' />
          {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}

          <button type="submit">Submit</button>
        </Form>
          )}
      </Formik>

    </>
 
  )
}
