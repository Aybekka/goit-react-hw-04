import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

// App'ten onSubmit prop'unu alıyorum, arama sorgusunu yukarı iletmek için kullanacağım
const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Input değerini alıp baştaki/sondaki boşlukları temizliyorum
    const query = e.target.elements.query.value.trim();

    // Kullanıcı boş form gönderirse uyarı bildirimi gösteriyorum
    if (!query) {
      toast.error('Please enter a search term!');
      return;
    }

    // Geçerli sorguyu üst bileşene iletiyorum
    onSubmit(query);

    // Formu temizliyorum ki kullanıcı yeni arama yapabilsin
    e.target.reset();
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          name="query"
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={styles.btn} type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
