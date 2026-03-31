import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImages } from './services/unsplashAPI';

function App() {
  // Yüklenen tüm resimleri tutuyorum
  const [images, setImages] = useState([]);
  // Kullanıcının arama sorgusunu saklıyorum
  const [query, setQuery] = useState('');
  // Hangi sayfada olduğumu takip ediyorum
  const [page, setPage] = useState(1);
  // API'den gelen toplam sayfa sayısını tutuyorum
  const [totalPages, setTotalPages] = useState(0);
  // Yükleme durumunu kontrol etmek için kullanıyorum
  const [isLoading, setIsLoading] = useState(false);
  // Hata varsa mesajı burada saklıyorum
  const [error, setError] = useState(null);
  // Modalda gösterilecek seçili resmi tutuyorum
  const [selectedImage, setSelectedImage] = useState(null);

  // query veya page değiştiğinde resimleri yeniden çekiyorum
  useEffect(() => {
    // Henüz arama yapılmadıysa işlemi durduruyorum
    if (!query) return;

    const loadImages = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchImages(query, page);
        // Yeni arama ise listeyi sıfırlıyorum, "daha fazla yükle" ise mevcut listeye ekliyorum
        setImages((prev) => (page === 1 ? data.results : [...prev, ...data.results]));
        setTotalPages(data.total_pages);
      } catch {
        setError('Something went wrong. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  // Yeni bir arama geldiğinde sayfayı 1'e sıfırlıyorum ve listeyi temizliyorum
  const handleSearch = (newQuery) => {
    // Aynı sorgu tekrar gönderilirse işlem yapmıyorum
    if (newQuery === query) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  // "Daha Fazla Yükle" butonuna tıklandığında bir sonraki sayfaya geçiyorum
  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      {/* Bildirimler için toast container'ı sağ üste yerleştiriyorum */}
      <Toaster position="top-right" />

      {/* Arama formunu en üstte gösteriyorum */}
      <SearchBar onSubmit={handleSearch} />

      {/* Hata varsa galeri yerine hata mesajını gösteriyorum */}
      {error && <ErrorMessage message={error} />}

      {/* Resimler varsa galeriyi render ediyorum */}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={setSelectedImage} />
      )}

      {/* Yükleme süresince spinner gösteriyorum, galeri kaybolmasın diye altına koyuyorum */}
      {isLoading && <Loader />}

      {/* Gösterilecek daha fazla sayfa varsa butonu render ediyorum */}
      {images.length > 0 && !isLoading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      {/* Seçili resim varsa modal açılıyor, kapandığında null'a sıfırlıyorum */}
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}

export default App;
