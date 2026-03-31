import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';

// API isteği sürerken kullanıcıya yükleniyor geri bildirimi veriyorum
const Loader = () => {
  return (
    <div className={styles.wrapper}>
      {/* react-loader-spinner kütüphanesinden üç noktalı animasyon kullanıyorum */}
      <ThreeDots height="80" width="80" color="#2196f3" visible={true} />
    </div>
  );
};

export default Loader;
