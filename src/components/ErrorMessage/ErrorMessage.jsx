import styles from './ErrorMessage.module.css';

// HTTP isteği başarısız olduğunda galeri yerine bu bileşeni gösteriyorum
// message prop'unu App'ten alıyorum
const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
