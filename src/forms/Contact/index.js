import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import PropTypes from 'proptypes';
import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button';
import Input from '../../components/Input';

const StyledTitle = styled.p`
  margin-bottom: 30px;
  max-width: 85%;
`;

const StyledButtonsWrapper = styled.div``;

const ContactForm = ({ closeModalHandler }) => {
  const ContactFormSchema = Yup.object().shape({
    name: Yup.string().trim().required('Este campo es requerido'),
    phoneNumber: Yup.string().trim().required('Este campo es requerido'),
    email: Yup.string()
      .email('Revisa que el E-Mail ingresado sea válido')
      .trim()
      .required('Este campo es requerido'),
  });

  const handleSubmit = (values, actions) => {
    const { name } = values;

    actions.setSubmitting(true);

    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log(values);
      // eslint-disable-next-line no-alert
      window.alert(`Hola ${name}, tu mensaje ha sido enviado 😃`);
      closeModalHandler();
    }, 1500);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phoneNumber: '',
        email: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        isSubmitting,
        touched,
        values,
      }) => (
        <Form>
          <StyledTitle>
            Completa los siguientes campos para contactar al propietario de la
            publicación.
          </StyledTitle>

          <Input
            autoFocus
            disabled={isSubmitting}
            error={errors.name && touched.name && errors.name}
            label="Nombre"
            margin="0 0 30px 0"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            success={!errors.name && touched.name}
            type="text"
            value={values.name}
          />

          <Input
            disabled={isSubmitting}
            error={
              errors.phoneNumber && touched.phoneNumber && errors.phoneNumber
            }
            label="Número de teléfono"
            margin="0 0 30px 0"
            name="phoneNumber"
            onBlur={handleBlur}
            onChange={handleChange}
            success={!errors.phoneNumber && touched.phoneNumber}
            type="text"
            value={values.phoneNumber}
          />

          <Input
            disabled={isSubmitting}
            error={errors.email && touched.email && errors.email}
            label="E-Mail"
            margin="0 0 30px 0"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            success={!errors.email && touched.email}
            type="text"
            value={values.email}
          />

          <StyledButtonsWrapper>
            <Button
              color="#e14100"
              disabled={isSubmitting}
              fullWidth
              type="submit"
            >
              Enviar
            </Button>
          </StyledButtonsWrapper>
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
};

export default ContactForm;
