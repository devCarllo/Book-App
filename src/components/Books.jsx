import { useState } from "react";

import { books as bookData } from "../constants/mockData.js";
import BookCard from "./BookCard.jsx";
import LikedCard from "./LikedCard.jsx";
import Search from "./Search.jsx";

import styles from "../style/Books.module.css";

const Books = () => {
  const [books, setBooks] = useState(bookData);
  const [favBooks, setFavBooks] = useState([]);
  const [search, setSearch] = useState();

  const handleList = (books, status) => {
    if (status) {
      const liked = favBooks.filter((item) => item.id !== books.id);
      setFavBooks(liked);
    } else {
      setFavBooks((liked) => [...liked, books]);
    }
  };

  const searchHandler = () => {
    if (search) {
      const searchedBooks = bookData.filter((item) =>
        item.title.toLowerCase().includes(search)
      );
      setBooks(searchedBooks);
    } else {
      setBooks(bookData);
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

      <Search
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />

      <div className={styles.books_container}>
        {books.map((item) => (
          <BookCard key={item.id} data={item} handleList={handleList} />
        ))}
      </div>
    </>
  );
};

export default Books;
