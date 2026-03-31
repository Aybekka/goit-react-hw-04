import Modal from 'react-modal';
import styles from './ImageModal.module.css';

// react-modal'ın ekran okuyucular için doğru çalışması adına root elementi belirtiyorum
Modal.setAppElement('#root');

// App'ten seçili resmi ve kapatma fonksiyonunu prop olarak alıyorum
const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      // image null ise modal kapanıyor, varsa açılıyor
      isOpen={!!image}
      // ESC tuşuna veya overlay'e tıklandığında modalı kapatıyorum
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      contentLabel="Image preview"
    >
      {image && (
        <>
          {/* Modalda resmin yüksek kaliteli regular boyutunu gösteriyorum */}
          <img
            className={styles.img}
            src={image.urls.regular}
            alt={image.alt_description}
          />
          {/* Resmin yazarı, beğeni sayısı ve varsa açıklamasını gösteriyorum */}
          <div className={styles.info}>
            <p><strong>Author:</strong> {image.user.name}</p>
            <p><strong>Likes:</strong> {image.likes}</p>
            {image.description && <p><strong>Description:</strong> {image.description}</p>}
          </div>
        </>
      )}
    </Modal>
  );
};

export default ImageModal;
