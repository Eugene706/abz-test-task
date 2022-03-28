import { FC, useRef, ChangeEvent } from 'react';
import { useField } from 'formik';
import styles from './InputFile.module.scss';

interface IFormFieldProps {
  name: string;
  placeholder?: string;
  error?: string;
}

export const FileUploader: FC<IFormFieldProps> = ({ error, ...props }) => {
  const [field, , helpers] = useField(props);

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    helpers.setTouched(true, false);
    helpers.setValue(event.target.files?.[0]);
  };

  return (
    <div className={styles.input__container}>
      <input
        className={styles.input}
        accept="image/jpeg,image/jpg,jpeg,jpg"
        id="imageInput"
        type="file"
        {...props}
        onChange={handleChange}
        ref={hiddenFileInput}
      />
      <button
        className={`${styles.input__button} ${error ? styles.input__button_error : ''}`}
        type="button"
        onClick={handleClick}
      >
        Upload
      </button>
      <label
        className={`${styles.input__lable} ${error ? styles.input__lable_error : ''} ${
          field.value?.name ? styles.input__lable_filled : ''
        }`}
        htmlFor="imageInput"
      >
        {field.value?.name ? field.value?.name : ' Upload your photo'}
      </label>
      {error && <p className={styles.input__error}>{error}</p>}
    </div>
  );
};
