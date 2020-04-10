import React from 'react';
import PropTypes from 'prop-types';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

const ChatForm = props => {
  return (
    <Formik {...props}>
      {
        () => (
          <Form>
            <Field name={'name'}/>
            <button type={'submit'}>create chat</button>
          </Form>
        )
      }
    </Formik>
  );
};

ChatForm.propTypes = {
  initialValues: PropTypes.shape({
                                   name: PropTypes.string.isRequired,
                                 }),
  onSubmit: PropTypes.func.isRequired,

};

ChatForm.defaultProps = {
  initialValues: {
    name: '',
  },
  validationSchema: Yup.object({
                                 name: Yup.string().min(4).max(124).required(),
                               }),
};

export default ChatForm;