import styles from './InputField.module.scss';

const InputField = ({ ...props }) => {
  return <input className={styles.input} {...props} />;
};

export default InputField;
