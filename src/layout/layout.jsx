import styles from "../style/layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header_container}>
        <h3 className={styles.header_text}>KaviR Book Shop</h3>
      </header>

      {children}

      <footer className={styles.footer_container}>
        <h3 className={styles.footer_text}>
          Made By <span className={styles.footer_text_love}>Love</span> For You
        </h3>
      </footer>
    </>
  );
};

export default Layout;
