import styles from './LoadMoreBtn.module.css';

// Sonraki resim setini yüklemek için kullanıcıya buton sunuyorum
// Yalnızca gösterilecek daha fazla sayfa varsa render ediliyor (bunu App'te kontrol ediyorum)
const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.btn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
