import { FC, useEffect, useState } from 'react';
import { Form, FormikProps, Formik } from 'formik';
import { FormField, FileUploader, RadioInput, Button, –°ongratulations } from 'components';
import { getPositions, registerUser } from 'utils/api';
import { IForm, IPositions, IRegistrationResponse } from 'types/form';
import FormSchema from 'utils/form.schema';

import styles from './Registration.module.scss';
import { error } from 'console';

interface IRegistration {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Registration: FC<IRegistration> = ({ openModal, setOpenModal }) => {
  const [positions, setPositions] = useState<IPositions[] | undefined>();
  const [errorRegistrationRes, setErrorRegistrationRes] = useState<IRegistrationResponse>();

  useEffect(() => {
    getPositions().then((res) => setPositions(res));
  }, []);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <section className={styles.registration} id="registration">
      <h2 className={styles.registration__title}>Register to get a work</h2>
      <h3 className={styles.registration__sutitle}>Your personal data is stored according to the Privacy Policy</h3>

      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          position_id: '1',
          photo: undefined,
        }}
        validateOnMount
        validationSchema={FormSchema}
        onSubmit={(values) => {
          registerUser(values)
            .then(
              (res) => {
                setErrorRegistrationRes(res);
                setOpenModal(true);
              },
              (error) => setErrorRegistrationRes(error)
            )
            .finally(() => setOpenModal(true));
        }}
      >
        {(props: FormikProps<IForm>) => (
          <Form className={styles.registration__form}>
            <FormField
              error={!!(props.errors.name && props.touched.name)}
              name="name"
              type="text"
              label="Your name"
              placeholder="Enter your name"
              helperText={props.errors.name && props.touched.name ? props.errors.name : ' '}
            />
            <FormField
              error={!!(props.errors.email && props.touched.email)}
              name="email"
              type="text"
              label="Email"
              placeholder="Enter your email"
              helperText={props.errors.email && props.touched.email ? props.errors.email : ' '}
            />
            <FormField
              error={!!(props.errors.phone && props.touched.phone)}
              name="phone"
              type="string"
              label="Phone"
              placeholder="Enter your phone"
              helperText={props.errors.phone && props.touched.phone ? props.errors.phone : ' '}
            />
            <div className={styles.radio}>
              <h6 className={styles.radio__title}>Select your position</h6>
              <RadioInput name="position_id" positions={positions} />
            </div>
            <FileUploader
              name="photo"
              placeholder="Enter your phone"
              error={props.errors.photo && props.touched.photo ? props.errors.photo : ''}
            />
            <Button disabled={!props.isValid} text="Sign up" type="submit" />
          </Form>
        )}
      </Formik>
      {openModal && <–°ongratulations closeModal={closeModal} error={errorRegistrationRes} />}
    </section>
  );
};
