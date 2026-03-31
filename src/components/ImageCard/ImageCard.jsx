import styles from './ImageCard.module.css';

// Tek bir resim kartını render eden bileşenim
// image: Unsplash'ten gelen resim nesnesi, onClick: modalı açmak için üst bileşenden gelen fonksiyon
const ImageCard = ({ image, onClick }) => {
  return (
    // Karta tıklandığında tüm resim nesnesini üste iletiyorum, modal içeriği için lazım olacak
    <div className={styles.card} onClick={() => onClick(image)}>
      <img
        className={styles.img}
        // Galeride küçük boyutu kullanıyorum, büyük boyutu modal için saklıyorum
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
