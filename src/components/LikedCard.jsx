import styles from "../style/LikedCard.module.css";

const LikedCard = ({ data: { image, title } }) => {
  return (
    <>
      <div className={styles.card_container}>
        <img src={image} alt="Image" className={styles.card_image} />
        <span className={styles.card_title}>{title}</span>
      </div>
    </>
  );
};

export default LikedCard;
