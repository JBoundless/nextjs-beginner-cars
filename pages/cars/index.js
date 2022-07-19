import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function CarsList(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Cars list</h1>
      </main>
    </div>
  );
}
