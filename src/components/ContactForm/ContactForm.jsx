import { IMaskInput } from 'react-imask';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 symb long')
    .max(50, 'The name must be no more than 50 characters long.')
    .required('This is a required field'),
  number: Yup.string().required('This is a required field'),
});

export const ContactForm = ({ onAdd }) => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        const newId = nanoid();
        onAdd({ id: newId, ...values });
        console.log({ id: newId, ...values });
        actions.resetForm();
      }}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.inputForm}>
          <label htmlFor={nameFieldId}>Name:</label>
          <Field className={css.nameInput} type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.errorMessage} name="name" component="span" />
        </div>
        <div className={css.inputForm}>
          <label htmlFor={numberFieldId}>Number:</label>
          <Field name="number">
            {({ field }) => (
              <IMaskInput
                {...field}
                className={css.numberInput}
                mask="000-00-00"
                definitions={{
                  '#': /[0-9]/,
                }}
                type="text"
                id={numberFieldId}
              />
            )}
          </Field>
          <ErrorMessage className={css.errorMessage} name="number" component="span" />
        </div>
        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
