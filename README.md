# Görsel Arama Uygulaması

Unsplash API kullanarak görsel arama yapabileceğiniz, sayfalandırma ve modal önizleme özelliklerine sahip bir React uygulaması.

---

## Özellikler

- Anahtar kelimeyle görsel arama
- Sayfalandırmalı "Daha Fazla Yükle" desteği
- Resme tıklayınca büyük boyutlu modal önizleme
- ESC tuşu veya arka plana tıklayarak modalı kapatma
- Boş arama girişinde kullanıcı bildirimi
- Yükleme animasyonu ve hata mesajı

---

## Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|---|---|
| React 19 | Arayüz kütüphanesi |
| Vite | Geliştirme ortamı |
| Axios | HTTP istekleri |
| React Hot Toast | Bildirimler |
| React Modal | Modal pencere |
| React Loader Spinner | Yükleme animasyonu |
| Unsplash API | Görsel servisi |

---

## Kurulum

**1. Repoyu klonla:**
```bash
git clone https://github.com/kullaniciadın/goit-react-hw-04.git
cd goit-react-hw-04
```

**2. Bağımlılıkları yükle:**
```bash
npm install
```

**3. `.env` dosyası oluştur ve Unsplash API anahtarını ekle:**
```
VITE_UNSPLASH_ACCESS_KEY=senin_api_anahtarin
```

> Unsplash API anahtarı almak için [unsplash.com/developers](https://unsplash.com/developers) adresine gidip ücretsiz hesap oluşturabilirsin.

**4. Geliştirme sunucusunu başlat:**
```bash
npm run dev
```

---

## Proje Yapısı

```
src/
├── components/
│   ├── SearchBar/        # Arama formu
│   ├── ImageGallery/     # Resim listesi
│   ├── ImageCard/        # Tek resim kartı
│   ├── ImageModal/       # Modal önizleme
│   ├── Loader/           # Yükleme animasyonu
│   ├── ErrorMessage/     # Hata mesajı
│   └── LoadMoreBtn/      # Daha fazla yükle butonu
├── services/
│   └── unsplashAPI.js    # API istekleri
└── App.jsx               # Ana bileşen
```

---

## Notlar

- Ücretsiz Unsplash hesabı saatte **50 istek** ile sınırlıdır.
- `.env` dosyası `.gitignore`'a eklenmiştir, API anahtarın güvende.
