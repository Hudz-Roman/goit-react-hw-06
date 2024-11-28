//? Libraries
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//? CSS
import s from './ContactForm.module.css';

const ContactForm = ({ handleAddContact }) => {
  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Should be 3 or more symbols')
      .max(50, 'Should be less than 50 symbols')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Should be 3 or more symbols')
      .max(50, 'Should be less than 50 symbols')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    handleAddContact(values);
    resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={orderSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleSubmit }) => (
          <Form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label}>
              <span>Name</span>
              <Field
                name='name'
                placeholder='Type your name'
                type='text'
                value={values.name}
              />
              <ErrorMessage name='name' component='span' className={s.error} />
            </label>
            <label className={s.label}>
              <span>Number</span>
              <Field
                name='number'
                placeholder='Type your number'
                type='text'
                value={values.number}
              />
              <ErrorMessage
                name='number'
                component='span'
                className={s.error}
              />
            </label>
            <button type='submit' className={s.btn}>
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
