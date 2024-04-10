import { books } from "../constants/mockData.js";
import BookCard from "./BookCard.jsx";
import styles from "../style/Books.module.css";
import { useState } from "react";
import LikedCard from "./LikedCard.jsx";

const Books = () => {
  const [favBooks, setFavBooks] = useState([]);

  const handleList = (books, status) => {
    if (status) {
      const liked = favBooks.filter((item) => item.id !== books.id);
      setFavBooks(liked);
    } else {
      setFavBooks((liked) => [...liked, books]);
    }
  };

  return (
    <>
      <div className={styles.fav_container}>
        <h4 className={styles.fav_text_title}>Favorite</h4>
        <div className={styles.fav_book_container}>
          {favBooks.length > 0 ? (
            favBooks.map((item) => <LikedCard key={item.id} data={item} />)
          ) : (
            <span className={styles.fav_book_text}>No Book Added</span>
          )}
        </div>
      </div>

      <div className={styles.books_container}>
        {books.map((item) => (
          <BookCard key={item.id} data={item} handleList={handleList} />
        ))}
      </div>
    </>
  );
};

export default Books;
