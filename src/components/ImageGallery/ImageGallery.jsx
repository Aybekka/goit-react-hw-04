import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

// App'ten resim dizisini ve tıklama işleyicisini prop olarak alıyorum
const ImageGallery = ({ images, onImageClick }) => {
  return (
    // Her resmi bir liste öğesi içinde render ediyorum
    <ul className={styles.gallery}>
      {images.map((image) => (
        // id'yi key olarak kullanıyorum çünkü Unsplash her resme benzersiz id veriyor
        <li key={image.id} className={styles.item}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
