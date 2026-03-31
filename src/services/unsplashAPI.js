import axios from 'axios';

// Unsplash API erişim anahtarımı .env dosyasından alıyorum
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

// Arama sorgusuna ve sayfa numarasına göre Unsplash'ten resim çeken fonksiyonum
// Her sayfada 12 resim getiriyorum
export const fetchImages = async (query, page) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  // API'den gelen veriyi döndürüyorum (results ve total_pages içeriyor)
  return response.data;
};
