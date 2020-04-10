import React from 'react';
import PropTypes from 'prop-types';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

const MessageForm = props => {
  return (
    <Formik {...props}>
      {
        () => (
          <Form>
            <Field name={'message'} type={'text'}/>
            <button type={'submit'}>Send</button>
          </Form>
        )
      }
    </Formik>
  );
};

MessageForm.propTypes = {
  initialValues: PropTypes.shape({
                                   message: PropTypes.string.isRequired,
                                 }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

MessageForm.defaultProps = {
  initialValues: {
    message: '',
  },
  validationSchema: Yup.object({
                                 message: Yup.string().required(),
                               }),
};

export default MessageForm;