import styles from "./style/App.module.css";

import Layout from "./layout/layout";
import Books from "./components/Books";

function App() {
  return (
    <>
      <Layout>
        <main className={styles.main_container}>
          <Books />
        </main>
      </Layout>
    </>
  );
}

export default App;
