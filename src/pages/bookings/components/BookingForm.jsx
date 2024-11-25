// src/components/BookingsForm.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import { sv } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';



const cleaningTypes = ['Diamant', 'Silver', 'Flytt'];

const BookingsForm = ({ cleaners, onSubmit }) => {
  const initialValues = {
    date: null,
    cleaningType: '',
    cleaner: '',
  };

  const validationSchema = Yup.object({
   /*  date: Yup.date().required('Datum och tid är obligatoriskt'), */
    cleaningType: Yup.string().required('Välj en typ av städning'),
    cleaner: Yup.string().required('Välj en städare'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className="booking-form">
          <h2>Boka Städning</h2>
          <div className="">
            <label htmlFor="datePicker">Datum och Tid
            <DatePicker
              selected={values.date}
              onChange={(date) => setFieldValue('date', date)}
              showTimeSelect
              dateFormat="Pp"
              timeCaption="Tid"
              locale={sv} 
              inline
              id="datePicker"
              name="date"
              data-testid="2"
              placeholder="Valj datum och tid"
            />
            </label>
            <ErrorMessage name="date">
              {(msg) => <div className="error" role="alert">{msg}</div>}
            </ErrorMessage>
          </div>

          <div className="form-group">
            <label>Typ av Städning</label>
            {cleaningTypes.map((type) => (
              <label key={type}>
                <Field type="radio" name="cleaningType" value={type} />
                {type}
              </label>
            ))}
            <ErrorMessage name="cleaningType">
              {(msg) => <div className="error" role="alert">{msg}</div>}
            </ErrorMessage>
          </div>

          <div className="form-group">
            <label htmlFor="cleaner">Välj Städare</label>
            <Field as="select" name="cleaner" id="cleaner">
              <option value="">-- Välj Städare --</option>
              {cleaners.map((cleaner) => (
                <option key={cleaner} value={cleaner}>
                  {cleaner}
                </option>
              ))}
            </Field>
            <ErrorMessage name="cleaner">
              {(msg) => <div className="error" role="alert">{msg}</div>}
            </ErrorMessage>
          </div>

          <button type="submit">Boka</button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingsForm;
