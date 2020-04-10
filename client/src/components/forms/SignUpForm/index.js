import React from 'react';
import PropTypes from 'prop-types';
import {Formik, Form, Field} from 'formik';

const SignUpForm = props => {

  return (
    <Formik {...props}>
      {
        ({setFieldValue, ...rest}) => (
          <Form encType="multipart/form-data">
            <Field type="text" name="login" placeholder="Login"/>
            <br/>
            <Field type="password" name="password" placeholder="Password"/>
            <br/>
            <input name={'profilePicture'} type="file" multiple={false}
                   onChange={(event) => {

                     setFieldValue('profilePicture',
                                   event.currentTarget.files[0]);
                   }}/>
            <br/>
            <button type={'submit'}>Sign Up</button>
          </Form>
        )
      }
    </Formik>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
                                   login: PropTypes.string.isRequired,
                                   password: PropTypes.string.isRequired,
                                   profilePicture: PropTypes.oneOfType([
                                                                         PropTypes.instanceOf(
                                                                           File),
                                                                         PropTypes.string,
                                                                       ]),
                                 }).isRequired,
};

SignUpForm.defaultProps = {
  initialValues: {
    login: '',
    password: '',
    profilePicture: '',
  },
};

export default SignUpForm;