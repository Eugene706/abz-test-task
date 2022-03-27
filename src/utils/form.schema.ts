import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { IForm } from 'types/form';

const supportedFormats = ['image/jpeg', 'image/jpg'];

const emailRegExp =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const phoneRegExp = /^[\+]{0,1}380([0-9]{9})$/;

const defineFileSize = (value: File): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    try {
      const url = URL.createObjectURL(value);
      const img = new Image();

      img.onload = function () {
        resolve(img.height > 70 && img.width > 70);
      };

      img.src = url;
    } catch (error) {
      console.log(error);
      resolve(false);
    }
  });
};

const format = (value: File) => {
  return supportedFormats.includes(value?.type);
};

const FormSchema: SchemaOf<IForm> = yup.object().shape({
  name: yup.string().min(2, 'Name is too short').max(100, 'Name is too long').required('Required').defined(),
  email: yup
    .string()
    .min(2, 'Email is too short')
    .max(60, 'Email is too long')
    .matches(emailRegExp, 'Email is not valid')
    .required('Required')
    .defined(),
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid and must be Ukrainian').required('Required').defined(),
  position_id: yup.string().required('Required'),
  photo: yup
    .mixed()
    .required('Required')
    .test('fileSize', 'The file is too large', (value) => value?.size <= 5242880)
    .test('fileFormat', 'Supported file formats: JPG, JPEG', format)
    .defined()
    .test('fileResolution', 'The file is too small', async (value) => await defineFileSize(value)),
});

export default FormSchema;
