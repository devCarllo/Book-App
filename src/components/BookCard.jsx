import { useState } from "react";
import styles from "../style/BookCard.module.css";
import { IoHeart } from "react-icons/io5";

const BookCard = ({ data, handleList }) => {
  const { image, title, pages, author, language } = data;

  const [like, setLike] = useState(false);

  const likeHandler = () => {
    handleList(data, like);

    setLike((like) => !like);
  };

  return (
    <>
      <div className={styles.book_card_container}>
        <div className={styles.book_card_choice}>
          <span className={styles.book_card_page}>{pages} pages</span>
          <button className={styles.book_card_button} onClick={likeHandler}>
            <IoHeart color={like ? "#e53170" : "#a7a9be"} fontSize="1.1rem" />
          </button>
        </div>
        <div className={styles.book_card_image_container}>
          <img src={image} alt="Picture" className={styles.book_card_image} />
        </div>

        <span className={styles.book_card_title}>{title}</span>
        <span className={styles.book_card_author}>{author}</span>
        <span className={styles.book_card_lang}>Language: {language}</span>
      </div>
    </>
  );
};

export default BookCard;
